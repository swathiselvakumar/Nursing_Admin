import styled from "@emotion/styled";

export const FormStyles = styled("div")(({ theme }) => ({
  backgroundColor: theme.background.whitePrimary,
  height: "100vh",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  ".form-container": {
    width: "400px",
    height: "80vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  ".MuiLink-underlineNone": {
    cursor: "pointer",
  },
  ".fourth-content": {
    ".MuiTypography-body2": {
      fontSize: "12 px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "start",
      marginTop: "20px",

      ".MuiLink-root": {
        color: theme.font.darkBlue,
        textTransform: "lowercase",
        backgroundColor: theme.background.transparent,
        marginLeft: "4px",
      },
    },
  },
  ".package-title": {
    color: theme.font.primary,
    fontWeight: "bold",
    fontSize: "16px",
    marginBottom: "3%",
  },
  ".package-subtitle": {
    color: theme.font.primary,
    fontSize: "14px",
    marginBottom: "1%",
    fontWeight: "bold",
  },
}));

export const FormHeaderStyles = styled("div")(
  ({ theme, fontSize, headerMarginBottom }) => ({
    textAlign: "center",
    height: "20vh",
    marginBottom: headerMarginBottom ? headerMarginBottom : "0px",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    ".MuiTypography-h4": {
      color: theme.font.primary,
      fontWeight: "bold",
      fontSize: fontSize ? fontSize : "21px",
      marginBottom: "4px",
    },
    ".MuiTypography-body2": {
      color: theme.font.lightGrey,
      fontSize: "12px",
      marginBottom: "8px",
    },
  })
);

export const TextBoxStyles = styled("div")(({ theme, textboxHeight }) => ({
  margin: "8px 0px",
  ".MuiTypography-body2": {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    fontSize: "16px",
    gap: "5px",
    margin: "2px 0px 8px 0px",
    color: theme.font.primary,
    fontWeight: 600,
    textTransform: "capitalize",
    ".icons": {
      height: "21px",
      width: "23px",
    },
  },
  ".MuiTextField-root": {
    "&:hover": {
      filter: `drop-shadow(2px 2px 3px #d3e0f6)`,
    },
  },
  ".MuiFormControl-root": {
    "&:hover": {
      filter: `drop-shadow(2px 2px 3px #d3e0f6)`,
    },
  },
  ".MuiOutlinedInput-root": {
    fontSize: ".9rem",
    fontWeight: 500,
    backgroundColor: theme.background.whitePrimary,
    height: textboxHeight ? textboxHeight : "37px",
    border: "1px solid #BACEEE",
    outline: "none",
    borderRadius: "8px",
    filter: `drop-shadow(3px 3px 4px #d3e0f6)`,
  },
  ".MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  ".svg-icons": {
    height: 23,
    width: 23,
    color: theme.font.primary,
  },
  ".pwd-icons": {
    color: theme.font.lightGrey,
  },
  ".css-163wblo-MuiAutocomplete-root .MuiOutlinedInput-root": {
    padding: 0,
    paddingLeft: "8px",
  },
}));

export const FormButtonStyles = styled("div")(
  ({ theme, buttonColor, fontWeight }) => ({
    ".MuiButton-root": {
      margin: "10px 0px",
      backgroundColor: buttonColor ? buttonColor : theme.background.tertiary,
      fontWeight: fontWeight ? fontWeight : "bold",
      height: "32px",
      textTransform: "capitalize",
      "&:hover": {
        backgroundColor: buttonColor ? buttonColor : theme.background.tertiary,
      },
    },
  })
);

export const PackageButtonStyles = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  ".MuiButton-root": {
    backgroundColor: theme.background.whitePrimary,
    borderRadius: "8px",
    filter: `drop-shadow(0px 3px 2px rgba(${0},${0},${0},${0.12}))`,
    color: theme.font.primary,
    height: "40px",
    textTransform: "none",
    margin: "9px 0px",
    fontSize: "15px",
    "&:hover": {
      backgroundColor: theme.background.whitePrimary,
      filter: `drop-shadow(0px 3px 2px rgba(${0},${0},${0},${0.12}))`,
    },
    "&:focus": {
      filter: `drop-shadow(0px 2px 2px #6fc0ff)`,
    },
  },
}));

export const PackageLanguageButtonStyles = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  ".MuiIconButton-root": {
    backgroundColor: theme.background.whitePrimary,
    width: 84,
    height: 52,
    padding: "8px",
    // filter: `drop-shadow(0px 3px 2px rgba(${0},${0},${0},${0.12}))`,
    borderRadius: "8px",
    "&:hover": {
      backgroundColor: theme.background.whitePrimary,
      filter: `drop-shadow(0px 3px 2px rgba(${0},${0},${0},${0.12}))`,
    },
    "&:focus": {
      filter: `drop-shadow(0px 2px 2px rgba(${0},${144},${255},${0.88}))`,
    },
  },
}));
