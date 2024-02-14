import { Button, Grid } from "@mui/material";
import { ProfileButtonWrapper } from "./styles";

export default function ProfileButton({
  buttonOneText,
  buttonTwoText,
  buttonColor,
  handleViewMoreOpen,
}) {
  return (
    <ProfileButtonWrapper>
      <Grid
        container
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        className="view-btn-container"
      >
        <div>
          <Button
            variant="contained"
            sx={{
              fontSize: "13px",
              backgroundColor: buttonColor ? buttonColor : "#46618E",
              textTransform: "capitalize",
              fontWeight: "normal",
              "&:hover": {
                backgroundColor: buttonColor ? buttonColor : "#46618E",
              },
            }}
            onClick={handleViewMoreOpen}
            disableElevation
          >
            {buttonOneText}
          </Button>
        </div>
        <div>
          <Button
            color="error"
            variant="outlined"
            sx={{
              fontSize: "13px",
              fontWeight: "normal",
              textTransform: "capitalize",
            }}
            fullWidth
            disableElevation
          >
            {buttonTwoText}
          </Button>
        </div>
      </Grid>
    </ProfileButtonWrapper>
  );
}
