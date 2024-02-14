import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { navContext } from "../../../../context/navContext";

export default function SubListItems({
  sx,
  collapseOpen,
  path,
  iconName,
  title,
  key,
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const locatePath = location.pathname;
  const theme = useTheme();

  const { updateNavText } = useContext(navContext);

  return (
    <Collapse in={collapseOpen} timeout="auto" unmountOnExit sx={sx}>
      <List component="div" disablePadding>
        <ListItemButton
          sx={{
            pl: 4,
            backgroundColor:
              path === locatePath ? theme.background.lightwhite : null,
            color: path === locatePath ? theme.font.primary : null,
            "&:hover": {
              backgroundColor:
                path === locatePath ? theme.background.lightwhite : null,
              color: path === locatePath ? theme.font.primary : null,
            },
          }}
          onClick={() => {
            navigate(path);
            updateNavText(title);
          }}
          key={key}
        >
          {iconName && (
            <ListItemIcon sx={{ minWidth: "40px" }}>{iconName}</ListItemIcon>
          )}
          <ListItemText
            primary={
              <Typography variant="body2" sx={{ fontSize: 14 }}>
                {title}
              </Typography>
            }
          />
        </ListItemButton>
      </List>
    </Collapse>
  );
}
