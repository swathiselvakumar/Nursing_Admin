import {
  Autocomplete,
  Avatar,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { MuiTelInput } from "mui-tel-input";
import {
  FormButtonStyles,
  FormHeaderStyles,
  PackageButtonStyles,
  PackageLanguageButtonStyles,
  TextBoxStyles,
} from "./styles";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import React, { useState } from "react";

export function FormTitle({
  formTitle,
  formSubTitle,
  fontSize,
  headerMarginBottom,
}) {
  return (
    <FormHeaderStyles
      fontSize={fontSize}
      headerMarginBottom={headerMarginBottom}
    >
      <Grid item>
        <Typography variant="h4" component="h4">
          {formTitle}
        </Typography>
        <Typography variant="body2" component="h6">
          {formSubTitle}
        </Typography>
      </Grid>
    </FormHeaderStyles>
  );
}

export function TextBox({
  labelTitle,
  variant,
  placeholder,
  fullWidth,
  focused,
  required,
  IconName,
  textboxHeight,
  type,
}) {
  return (
    <TextBoxStyles textboxHeight={textboxHeight}>
      <Typography variant="body2" gutterBottom component="div">
        {IconName}
        {labelTitle}
      </Typography>
      <TextField
        type={type ? type : "text"}
        variant={variant}
        placeholder={placeholder}
        fullWidth={fullWidth}
        focused={focused}
        required={required}
      />
    </TextBoxStyles>
  );
}

export function EmailBox({
  labelTitle,
  variant,
  placeholder,
  fullWidth,
  focused,
  required,
  IconName,
}) {
  return (
    <TextBoxStyles>
      <Typography variant="body2" gutterBottom component="div">
        {IconName}
        {labelTitle}
      </Typography>
      <TextField
        type="email"
        variant={variant}
        placeholder={placeholder}
        fullWidth={fullWidth}
        focused={focused}
        required={required}
      />
    </TextBoxStyles>
  );
}

export function PasswordTextBox({
  labelTitle,
  fullWidth,
  placeholder,
  sx,
  IconName,
  passwordSx,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <TextBoxStyles>
      <FormControl variant="outlined" sx={sx}>
        <Typography variant="body2" gutterBottom component="div">
          {IconName}
          {labelTitle}
        </Typography>
        <OutlinedInput
          sx={passwordSx}
          fullWidth={fullWidth}
          placeholder={placeholder}
          className="pwd-box"
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? (
                  <VisibilityOff className="pwd-icons" />
                ) : (
                  <Visibility className="pwd-icons" />
                )}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </TextBoxStyles>
  );
}

export function ForgetPassword({ title, colSize }) {
  return (
    <Grid item md={colSize} mt={2}>
      <Typography
        align="right"
        variant="span"
        component="div"
        color="text.secondary"
      >
        {title}
      </Typography>
    </Grid>
  );
}

export function FormButton({
  buttonTitle,
  variant,
  size,
  colSize,
  submit,
  sx,
  fullWidth,
  disableElevation,
  buttonColor,
  startIcon,
  endIcon,
  fontWeight,
}) {
  return (
    <Grid
      item
      md={colSize}
      mt={2}
      display="flex"
      flexDirection="row"
      justifyContent="center"
    >
      <FormButtonStyles buttonColor={buttonColor} fontWeight={fontWeight}>
        <Button
          startIcon={startIcon ? startIcon : null}
          endIcon={endIcon ? endIcon : null}
          variant={variant}
          size={size}
          onClick={submit}
          fullWidth={fullWidth}
          sx={sx}
          disableElevation={disableElevation}
        >
          {buttonTitle}
        </Button>
      </FormButtonStyles>
    </Grid>
  );
}

export function NumberBox({
  labelTitle,
  colSize,
  fullWidth,
  placeholder,
  IconName,
}) {
  const [value, setValue] = React.useState("");

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <TextBoxStyles>
      <Grid item md={colSize ? colSize : 12}>
        <Typography variant="body2" gutterBottom component="div">
          {IconName}
          {labelTitle}
        </Typography>
        <MuiTelInput
          value={value}
          onChange={handleChange}
          fullWidth={fullWidth}
          placeholder={placeholder}
          disableDropdown
          forceCallingCode
          defaultCountry="IN"
        />
      </Grid>
    </TextBoxStyles>
  );
}

export function PackageFormButton({
  buttonTitle,
  variant,
  size,
  submit,
  sx,
  fullWidth,
}) {
  return (
    <PackageButtonStyles>
      <Button
        variant={variant ? variant : null}
        size={size}
        onClick={submit}
        fullWidth={fullWidth}
        sx={sx}
        disableElevation
      >
        {buttonTitle}
      </Button>
    </PackageButtonStyles>
  );
}

export function PackageLanguagesButton({ imgSrc }) {
  return (
    <PackageLanguageButtonStyles>
      <IconButton>
        <Avatar alt="logo" src={imgSrc} />
      </IconButton>
    </PackageLanguageButtonStyles>
  );
}

export function AutoCompleteTextbox({
  IconName,
  labelTitle,
  fullWidth,
  placeholder,
  options,
}) {
  return (
    <TextBoxStyles>
      <Typography variant="body2" gutterBottom component="div">
        {IconName}
        {labelTitle}
      </Typography>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={options}
        sx={{ p: 0 }}
        renderInput={(params) => (
          <TextField
            {...params}
            fullWidth={fullWidth}
            placeholder={placeholder}
            sx={{ p: 0 }}
          />
        )}
      />
    </TextBoxStyles>
  );
}
