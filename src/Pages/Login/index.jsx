import { Grid, Link, Stack, Typography } from "@mui/material";
import { FormStyles } from "../Signup/Form/styles";
import {
  ForgetPassword,
  FormButton,
  FormTitle,
  PasswordTextBox,
  TextBox,
} from "../Signup/Form/FormComponents";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material";
import { LoginStyles } from "./styles";
import { PATH } from "../../constants/routeConstants";
import FormQuotes from "../Signup/Quotes";

import PersonIcon from "@mui/icons-material/Person";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";

export default function LoginPage() {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <LoginStyles>
      <Grid container>
        <Grid item md={6}>
          <FormStyles>
            <div className="form-container">
              <FormTitle
                formTitle="College Admin"
                formSubTitle="Signin"
                headerMarginBottom="5rem"
              />
              <Stack>
                <TextBox
                  labelTitle="Username"
                  variant="outlined"
                  placeholder="Enter your username here"
                  fullWidth={true}
                  focused={false}
                  IconName={<PersonIcon className="icons" />}
                />
              </Stack>
              <Stack>
                <PasswordTextBox
                  labelTitle="Password"
                  fullWidth={true}
                  placeholder="Enter your password here"
                  IconName={<HttpsOutlinedIcon className="icons" />}
                  passwordSx={{ width: 400 }}
                />
              </Stack>
              <ForgetPassword title="Forget Password?" />
              <FormButton
                colSize={12}
                buttonTitle="sign in"
                variant="contained"
                size="medium"
                submit={() => navigate(PATH.DASHBOARD)}
                fullWidth={true}
                buttonColor={theme.font.primary}
              />
              <Grid item className="fourth-row-content">
                <Typography variant="body2" component="div">
                  Don&apos;t have an account ?{" "}
                  <Link underline="none" onClick={() => navigate(PATH.SIGNUP)}>
                    Sign up
                  </Link>
                </Typography>
              </Grid>
            </div>
          </FormStyles>
        </Grid>
        <Grid item xs={6}>
          <FormQuotes
            firstRow="I am always ready to"
            secondRow="learn although"
            thirdRow="i do not always like"
            fourthRow="being taught"
            authorName="Winston Churchill"
          />
        </Grid>
      </Grid>
    </LoginStyles>
  );
}
