import styled from "@emotion/styled";

export const LandingStyles = styled("div")(({ theme }) => ({
  ".landing-main-container": {
    height: "88vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.background.whiteTertiary,
  },
  ".first-row-content": {
    width: "30vw",
    textAlign: "center",
    marginBottom: "8px",
    height: "95px",
    ".MuiTypography-h4": {
      fontWeight: "bold",
      color: theme.font.blackSecondary,
      fontSize: "35px",
      fontFamily: "Open Sans",
      fontStyle: "normal",
    },
  },
  ".second-row-content": {
    width: "60vw",
    textAlign: "center",
    marginBottom: "4rem",
    height: "61px",

    ".MuiTypography-body2": {
      fontWeight: "normal",
      color: theme.font.blackSecondary,
      fontSize: "22px",
      fontFamily: "Open Sans",
      fontStyle: "normal",
      textAlign: "center",
    },
  },
  ".third-row-content": {
    textAlign: "center",
    marginBottom: "16px",
    ".MuiButton-root": {
      backgroundColor: theme.background.primary,
      borderRadius: "4px",
      fontWeight: "normal",
      fontSize: "13px",
      color: theme.font.white,
      textTransform: "lowercase",
      height: 27,
      width: 76,
    },
  },
  ".fourth-row-content": {
    ".MuiTypography-body2": {
      color: theme.font.darkBlue,
      fontSize: "12 px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",

      ".MuiLink-root": {
        color: theme.font.darkBlue,
        textTransform: "lowercase",
        backgroundColor: theme.background.transparent,
        marginLeft: "4px",
      },
    },
  },
  ".MuiLink-underlineNone": {
    cursor: "pointer",
  },
}));
