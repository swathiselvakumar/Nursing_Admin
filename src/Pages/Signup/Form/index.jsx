import { Grid, Stack, Typography } from "@mui/material";
import { Link } from "@mui/material";
import {
  EmailBox,
  FormButton,
  PasswordTextBox,
  TextBox,
} from "./FormComponents";
import { PATH } from "../../../constants/routeConstants";
// icons
import PersonIcon from "@mui/icons-material/Person";
import MailIcon from "@mui/icons-material/Mail";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import { useNavigate } from "react-router-dom";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";

export function SignupFirstForm({
  formChoose,
  handleForm,
  formData,
  submitEvent,
}) {
  const navigate = useNavigate();
  return (
    <>
      <Stack>
        <TextBox
          labelTitle="Full Name"
          variant="outlined"
          placeholder="Enter your full name here"
          fullWidth={true}
          focused={false}
          IconName={<PersonIcon className="icons" />}
        />
      </Stack>
      <Stack>
        <EmailBox
          labelTitle="Email"
          variant="outlined"
          placeholder="Enter your email address here"
          fullWidth={true}
          focused={false}
          IconName={<MailIcon className="icons" />}
        />
      </Stack>
      <Stack
        direction="row"
        display="flex"
        alignItems="center"
        spacing={1}
        sx={{ mt: 1 }}
      >
        <PasswordTextBox
          labelTitle="Password"
          fullWidth={true}
          placeholder="Password"
          IconName={<HttpsOutlinedIcon className="icons" />}
        />
        <PasswordTextBox
          labelTitle="Confirm Password"
          fullWidth={true}
          placeholder="Confirm Password"
          IconName={<HttpsOutlinedIcon className="icons" />}
        />
      </Stack>
      <Grid item className="fourth-content">
        <Typography variant="body2" component="div">
          Already have an account ?
          <Link underline="none" onClick={() => navigate(PATH.LOGIN)}>
            login
          </Link>
        </Typography>
      </Grid>
      <FormButton
        buttonTitle="next"
        variant="contained"
        size="medium"
        submit={() => {
          handleForm("formTwo");
        }}
        disableElevation={true}
        endIcon={<ArrowCircleRightOutlinedIcon />}
      />
    </>
  );
}
