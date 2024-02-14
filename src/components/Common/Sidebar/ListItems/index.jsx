import React, { useContext } from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { SubListData, SubListData1 } from "./ListData";
import { useLocation, useNavigate } from "react-router-dom";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import SubListItems from "../SubListItems";
import { navContext } from "../../../../context/navContext";

const iconStyles = {
  color: "#FFF",
};

export default function MenuListItem({
  open,
  keyValue,
  path,
  title,
  iconName,
  sx,
}) {
  const location = useLocation();
  const locatePath = location.pathname;
  const theme = useTheme();

  const [collapseOpen, setCollapseOpen] = React.useState(false);

  const handleClick = () => {
    setCollapseOpen(!collapseOpen);
  };

  const navigate = useNavigate();

  const { updateNavText } = useContext(navContext);

  return (
    <List sx={sx} key={keyValue}>
      <ListItem disablePadding sx={{ display: "block" }}>
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: open ? "initial" : "center",
            px: 2.5,
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
          // selected={path === locatePath && true}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 2 : "auto",
              justifyContent: "center",
            }}
          >
            {iconName}
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
                {title}
              </Typography>
            }
            sx={{ opacity: open ? 1 : 0 }}
          />
          {title === "Students" ? (
            <>
              {collapseOpen ? (
                <ExpandLess
                  onClick={handleClick}
                  sx={{ display: open ? "block" : "none" }}
                />
              ) : (
                <ExpandMore
                  onClick={handleClick}
                  sx={{ display: open ? "block" : "none" }}
                />
              )}
            </>
          ) : null}
          {/* {title === "Student"  ? (
            <>
              {collapseOpen ? (
                <ExpandLess
                  onClick={()=>handleClick()}
                  // sx={{ display: open ? "block" : "none" }}
                />
              ) : (
                <ExpandMore
                onClick={()=>handleClick()}
                  // sx={{ display: open ? "block" : "none" }}
                />
              )}
            </>
          ) : null} */}
          {title === "Questions" ? (
            <>
              {collapseOpen ? (
                <ExpandLess
                  onClick={handleClick}
                  sx={{ display: open ? "block" : "none" }}
                />
              ) : (
                <ExpandMore
                  onClick={handleClick}
                  sx={{ display: open ? "block" : "none" }}
                />
              )}
            </>
          ) : null}
        </ListItemButton>

        {title === "Questions" ? (
          <>
            {SubListData1.map((data, index) => {
              return (
                <SubListItems
                  sx={{ display: open ? "block" : "none" }}
                  collapseOpen={collapseOpen}
                  iconStyles={iconStyles}
                  title={data.title}
                  path={data.path}
                  key={index}
                />
              );
            })}
          </>
        ) : null}
        {title === "Students" ? (
          <>
            {SubListData.map((data, index) => {
              return (
                <SubListItems
                  sx={{ display: open ? "block" : "none" }}
                  collapseOpen={collapseOpen}
                  iconStyles={iconStyles}
                  title={data.title}
                  path={data.path}
                  key={index}
                />
              );
            })}
          </>
        ) : null}
      </ListItem>
    </List>
  );
}
