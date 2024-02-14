import { useState } from "react";
import {
  FormButton,
  FormTitle,
  PackageFormButton,
  PackageLanguagesButton,
} from "./FormComponents";
import { Grid, Stack, Typography, useTheme } from "@mui/material";
// images
import cLogo from "../../../assets/images/cLogo.png";
import cppLogo from "../../../assets/images/cppLogo.png";
import javaLogo from "../../../assets/images/javaLogo.png";
import pythonLogo from "../../../assets/images/pyhtonLogo.png";
import { useNavigate } from "react-router-dom";

export function SignupThirdForm({
  formChoose,
  handleForm,
  formData,
  submitEvent,
}) {
  const navigate = useNavigate();
  const theme = useTheme();
  const [showLanguage, setShowLanguage] = useState("");

  const languageViewHandler = (val) => {
    setShowLanguage(val);
  };

  return (
    <>
      <Typography
        variant="h4"
        component="div"
        className="package-title"
        align="center"
      >
        Choose Package
      </Typography>
      <Typography
        variant="body2"
        component="div"
        className="package-subtitle"
        align="center"
      >
        Available language - C , C++ , Python , Java
      </Typography>
      <Stack>
        <PackageFormButton
          buttonTitle="One language package - Rs 500 per member/year"
          size="medium"
          variant="container"
          fullWidth={true}
          submit={() => languageViewHandler("One")}
        />
      </Stack>
      {showLanguage === "One" ? (
        <Stack direction="row" display="flex" justifyContent="space-between">
          <PackageLanguagesButton imgSrc={cLogo} />
          <PackageLanguagesButton imgSrc={cppLogo} />
          <PackageLanguagesButton imgSrc={javaLogo} />
          <PackageLanguagesButton imgSrc={pythonLogo} />
        </Stack>
      ) : null}
      <Stack>
        <PackageFormButton
          buttonTitle="Two language package - Rs 800 per member/year"
          size="medium"
          variant="container"
          fullWidth={true}
          submit={() => languageViewHandler("Two")}
        />
      </Stack>
      {showLanguage === "Two" ? (
        <Stack direction="row" display="flex" justifyContent="space-between">
          <PackageLanguagesButton imgSrc={cLogo} />
          <PackageLanguagesButton imgSrc={cppLogo} />
          <PackageLanguagesButton imgSrc={javaLogo} />
          <PackageLanguagesButton imgSrc={pythonLogo} />
        </Stack>
      ) : null}
      <Stack>
        <PackageFormButton
          buttonTitle="Three language package - Rs 900 per member/year"
          size="medium"
          variant="container"
          fullWidth={true}
          submit={() => languageViewHandler("Three")}
        />
      </Stack>
      {showLanguage === "Three" ? (
        <Stack direction="row" display="flex" justifyContent="space-between">
          <PackageLanguagesButton imgSrc={cLogo} />
          <PackageLanguagesButton imgSrc={cppLogo} />
          <PackageLanguagesButton imgSrc={javaLogo} />
          <PackageLanguagesButton imgSrc={pythonLogo} />
        </Stack>
      ) : null}
      <Stack>
        <PackageFormButton
          buttonTitle="All language package - Rs 1000 per member/year"
          size="medium"
          variant="container"
          fullWidth={true}
          submit={() => languageViewHandler("Four")}
        />
      </Stack>
      {showLanguage === "Four" ? (
        <Stack direction="row" display="flex" justifyContent="space-between">
          <PackageLanguagesButton imgSrc={cLogo} />
          <PackageLanguagesButton imgSrc={cppLogo} />
          <PackageLanguagesButton imgSrc={javaLogo} />
          <PackageLanguagesButton imgSrc={pythonLogo} />
        </Stack>
      ) : null}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Grid
          container
          item
          md={12}
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
        >
          <FormButton
            buttonTitle="previous"
            variant="contained"
            size="medium"
            fontWeight="normal"
            submit={() => handleForm("formTwo")}
            disableElevation={true}
            buttonColor={theme.background.primary}
          />
          <FormButton
            buttonTitle="Submit"
            variant="contained"
            size="medium"
            fontWeight="normal"
            submit={() => {
              navigate("/dashboard");
            }}
            disableElevation={true}
            buttonColor={theme.background.primary}
          />
        </Grid>
      </div>
    </>
  );
}
