import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ListItems({ sx, listData }) {
  const navigate = useNavigate();
  return (
    <List sx={sx}>
      {listData.map((data) => (
        <ListItem
          key={data.title}
          disablePadding
          sx={{ display: "block" }}
          onClick={() => navigate(data.path)}
        >
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <data.icon />
            </ListItemIcon>
            <ListItemText primary={data.title} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}
