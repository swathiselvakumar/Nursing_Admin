import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import { TopBarStyles } from "./styles";
// import { TopBarStyles } from "./styles";
import { CustomAppHeader } from "./styles";
import { PATH } from "../../../constants/routeConstants";

export default function Topbar() {
  const navigate = useNavigate();
  return (
    <CustomAppHeader>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" className="title">
            Base2Geeks
          </Typography>
          <Button onClick={() => navigate(PATH.SIGNUP)} className="signup-btn">
            Sign up
          </Button>
          <Button onClick={() => navigate(PATH.LOGIN)} className="login-btn">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </CustomAppHeader>
  );
}
