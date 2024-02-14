import { Typography, Button, Grid, Link } from "@mui/material";
import Topbar from "../../components/Common/AppHeader/Topbar";
import { useNavigate } from "react-router-dom";
import { LandingStyles } from "./styles";
import { PATH } from "../../constants/routeConstants";

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <LandingStyles>
      <Topbar />
      <Grid container className="landing-main-container">
        <Grid item className="first-row-content">
          <Typography variant="h4" component="h4">
            Build your skills not your resume
          </Typography>
        </Grid>
        <Grid item className="second-row-content">
          <Typography variant="body2" component="p">
            We help companies develop the strongest tech teams around. We help
            candidates sharpen their tech skills and pursue job opportunities.
          </Typography>
        </Grid>
        <Grid item className="third-row-content">
          <Button
            variant="contained"
            onClick={() => navigate(PATH.SIGNUP)}
            disableElevation
          >
            sign up
          </Button>
        </Grid>
        <Grid item className="fourth-row-content">
          <Typography variant="body2" component="div">
            Already Have an account ?
            <Link underline="none" onClick={() => navigate(PATH.LOGIN)}>
              login
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </LandingStyles>
  );
}
