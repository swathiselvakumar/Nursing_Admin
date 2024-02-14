import { styled, useTheme } from "@mui/material/styles";
import {
  List,
  Typography,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,  
  Divider,
} from "@mui/material";
import { Box } from "@mui/system";
import { Outlet, useLocation } from "react-router-dom";
import MuiDrawer from "@mui/material/Drawer";
import { SidebarStyleWrapper } from "./style";
import { TopListData } from "./ListItems/ListData";
import MenuListItem from "./ListItems";

// icons
import AndroidOutlinedIcon from "@mui/icons-material/AndroidOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import AppHeader from "../AppHeader";
import { useContext } from "react";
import { navContext } from "../../../context/navContext";
import BottomMenuListItem from "./ListItems/BottomList";
 
const drawerWidth = 220;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function SideNavigationbar() {
  const location = useLocation();
  const locatePath = location.pathname;
  const theme = useTheme();

  const { open, setOpen, DrawerHandler } = useContext(navContext);

  return (
    <SidebarStyleWrapper>
      <Box sx={{ display: "flex" }}>
        <Drawer variant="permanent" open={open} className="drawer">
          <DrawerHeader>
            <List>
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                    pr: 1,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                   
                  </ListItemIcon>
                  <ListItemText
                    primary={<Typography>Company Name</Typography>}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </List>
            {open ? (
              <IconButton onClick={DrawerHandler}>
                {theme.direction === "rtl" ? (
                  <MenuOutlinedIcon />
                ) : (
                  <MenuOutlinedIcon
                    sx={{
                      color: theme.font.white,
                      fontWeight: `${400} !important`,
                    }}
                  />
                )}
              </IconButton>
            ) : (
              <IconButton onClick={DrawerHandler}>
                {theme.direction === "rtl" ? (
                  <MenuOutlinedIcon />
                ) : (
                  <MenuOutlinedIcon
                    sx={{
                      color: theme.font.white,
                      fontWeight: `${400} !important`,
                    }}
                  />
                )}
              </IconButton>
            )}
          </DrawerHeader>
          <Divider />
          {TopListData.map((data, index) => {
            return (
              <MenuListItem
                key={index}
                open={open}
                keyValue={index}
                title={data.title}
                path={data.path}
                iconName={
                  <data.icon
                    sx={{
                      color:
                        data.path === locatePath
                          ? theme.font.primary
                          : theme.font.white,
                    }}
                    fontSize="medium"
                  />
                }
                setOpen={setOpen}
              />
            );
          })}
          <Divider />
          <BottomMenuListItem open={open} setOpen={setOpen} />
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1 }}>
          <AppHeader />
          <Outlet />
        </Box>
      </Box>
    </SidebarStyleWrapper>
  );
}
