import styled from "@emotion/styled";

export const LoginStyles = styled("div")(({ theme }) => ({
  ".form-container": {
    backgroundColor: theme.background.whitePrimary,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  ".fourth-row-content": {
    ".MuiTypography-body2": {
      color: theme.font.greySecondary,
      fontSize: "16px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      ".MuiButton-root": {
        backgroundColor: theme.background.transparent,
        color: theme.font.darkBlue,
      },
      ".MuiLink-root": {
        color: theme.font.darkBlue,
        textTransform: "lowercase",
        backgroundColor: theme.background.transparent,
        marginLeft: "4px",
      },
    },
  },
}));
