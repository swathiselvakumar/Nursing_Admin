import { Grid } from "@mui/material";

import { SignupStyles } from "./styles";
import { SignupFirstForm } from "./Form";
import FormQuotes from "./Quotes";
import { useState } from "react";
import { SignupSecondForm } from "./Form/SignupFormTwo";
import { SignupThirdForm } from "./Form/SignupFormThree";
import { FormTitle } from "./Form/FormComponents";
import { FormStyles } from "./Form/styles";
export default function SignupPage() {
  const [formChoose, setFormChoose] = useState({
    formOne: true,
    formTwo: false,
    formThree: false,
  });
  const [formData, setFormData] = useState({
    username: "",
    mail: "",
    password: "",
    confirmPassword: "",
    collegeName: "",
    adminDesignation: "",
    phoneNumber: "",
    collegeAddress: "",
    package: {},
  });

  const handleForm = (key) => {
    let tempFormChoose = { ...formChoose };
    let activeForm = Object.keys(tempFormChoose).filter(
      (d) => tempFormChoose[d]
    );
    tempFormChoose[activeForm] = false;
    tempFormChoose[key] = true;
    setFormChoose(tempFormChoose);
  };
  const handleFormChange = (e) => {
    const { name, value } = e.target;
  };

  return (
    <SignupStyles>
      <Grid container>
        <Grid item xs={6}>
          <FormStyles>
            <FormTitle formTitle="College Admin" formSubTitle="Registration" />
            <div className="form-container">
              {formChoose.formOne && (
                <SignupFirstForm
                  formChoose={formChoose}
                  handleForm={handleForm}
                  formData={formData}
                />
              )}
              {formChoose.formTwo && (
                <SignupSecondForm
                  formChoose={formChoose}
                  handleForm={handleForm}
                  formData={formData}
                />
              )}
              {formChoose.formThree && (
                <SignupThirdForm
                  formChoose={formChoose}
                  handleForm={handleForm}
                  formData={formData}
                />
              )}
            </div>
          </FormStyles>
        </Grid>
        <Grid item xs={6}>
          <FormQuotes />
        </Grid>
      </Grid>
    </SignupStyles>
  );
}
