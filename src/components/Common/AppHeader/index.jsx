import React from "react";
import AppBar from "@mui/material/AppBar";
import {
  Toolbar,
  Tooltip,
  IconButton,
  Typography,
  Grid,
  Avatar,
  useTheme,
  Menu,
  MenuItem,
  Stack,
} from "@mui/material";
import { CustomAppHeader } from "./styles";
import profilePic from "../../../assets/images/profile.jpg";
import SearchBox from "../SearchBox";

// icons
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import BreadcrumbsComp from "../BreadCrumbs";
import { useContext } from "react";
import { navContext } from "../../../context/navContext";

const menuItems = ["Dark Mode", "Light Mode"];

export default function AppHeader() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const theme = useTheme();

  const { navTitleText } = useContext(navContext);

  const iconStyles = {
    color: theme.icon.primary,
  };

  return (
    <CustomAppHeader>
      <AppBar position="sticky">
        <Toolbar>
          <Grid container className="app-container">
            <Grid item></Grid>

            <Grid item >
              <Stack direction="row" display="flex" alignItems="center">
                {/* <SearchBox width={265} /> */}
                <Tooltip title="Profile">
                  <IconButton color="inherit">
                    <Avatar
                      alt="profile"
                      src={profilePic}
                      sx={{ width: 30, height: 30 }}
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {menuItems.map((item) => (
                    <MenuItem key={item} onClick={handleCloseUserMenu}>
                      <Typography
                        textAlign="center"
                        variant="body2"
                        component="h6"
                      >
                        {item}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Stack>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </CustomAppHeader>
  );
}
