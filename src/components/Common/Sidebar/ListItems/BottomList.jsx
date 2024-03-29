import { useContext } from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

import { navContext } from "../../../../context/navContext";
import { BottomListData } from "./ListData";

export default function BottomMenuListItem({ open }) {
  const location = useLocation();
  const locatePath = location.pathname;
  const theme = useTheme();

  const navigate = useNavigate();

  const { updateNavText } = useContext(navContext);

  return (
    <List sx={{ mt: "auto" }}>
      {BottomListData.map((data, index) => (
        <ListItem disablePadding sx={{ display: "block" }} key={index}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
              backgroundColor:
                data.path === locatePath ? theme.background.lightwhite : null,
              color: data.path === locatePath ? theme.font.primary : null,
              "&:hover": {
                backgroundColor:
                  data.path === locatePath ? theme.background.lightwhite : null,
                color: data.path === locatePath ? theme.font.primary : null,
              },
            }}
            onClick={() => {
              navigate(data.path);
              updateNavText(data.title);
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 2 : "auto",
                justifyContent: "center",
              }}
            >
              <data.icon
                sx={{
                  color:
                    data.path === locatePath
                      ? theme.font.primary
                      : theme.font.white,
                }}
              />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography
                  component="div"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontWeight: "normal",
                    fontSize: 16,
                  }}
                >
                  {data.title}
                </Typography>
              }
              sx={{ opacity: open ? 1 : 0 }}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}
