import styled from "@emotion/styled";

export const UploadQuestionStyles = styled("div")(({ theme }) => ({
  ".upload-root-container": {
    padding: "8px",
    paddingLeft: "2%",
    paddingBottom: 0,
  },
  ".questions-count-root-container": {
    padding: "8px",
    paddingRight: "2%",
    paddingBottom: 0,
  },
  ".upload-main-container": {
    backgroundColor: theme.background.whitePrimary,
    filter: ` drop-shadow(0px 3px 3px rgba(${0},${0},${0},${0.28}))`,
    padding: "16px",
    borderRadius: "10px",
    marginBottom: "10px",
    height: `calc(100vh - 86px)`,
    ".MuiButton-root": {
      background: theme.background.whitePrimary,
      boxShadow: "none",
      color: theme.font.primary,
      border: `2px solid #46618e`,
      fontWeight: 700,
      textTransform: "none",
    },
  },
  ".questions-count-main-container": {
    backgroundColor: theme.background.whitePrimary,
    filter: ` drop-shadow(0px 3px 3px rgba(${0},${0},${0},${0.16}))`,
    borderRadius: "10px",
    marginBottom: "10px",
    height: `calc(100vh - 86px)`,
    overflow: "auto",
    ".quetions-status-container": {
      marginRight:"10px",
      padding: "20px 0px",
      ".active-status": {
        display: "flex",
        alignItems: "center",
        ".MuiBox-root": {
          height: 25,
          width: 25,
          backgroundColor: theme.background.green,
        marginRight: "4px",
          opacity: 0.7,
        },
      },
      ".edit-status": {
        display: "flex",
        alignItems: "center",
        ".MuiBox-root": {
          height: 25,
          width: 25,
          backgroundColor: theme.background.yellow,
          marginRight: "4px",
          opacity: 0.7,
        },
      },
      ".remove-status": {
        display: "flex",
        alignItems: "center",
        ".MuiBox-root": {
          height: 25,
          width: 25,
          backgroundColor: theme.background.red,
          marginRight: "4px",
          opacity: 0.7,
        },
      },
      ".status-text": {
        fontSize: "13px",
        fontWeight: "bold",
        textTransform: "capitalize",
        color: theme.font.primary,
      },
    },
    ".MuiDivider-root": {
      backgroundColor: theme.border.secondary,
      width: "100%",
      borderWidth: 1,
    },
  },
  ".count-main-container": {
    padding: "16px 48px",
    height: "63vh",
  },
  ".test-submit-container": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    
    ".MuiButton-root": {
      backgroundColor: theme.background.primary,
      padding: "1% 5%",
      
    },
  },
}));

export const InstructionsStyles = styled("div")(({ theme }) => ({
  ".instructions-main-container": {
    backgroundColor: theme.background.transparent,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "1%",
  },
  ".instructions-form-container": {
    filter: ` drop-shadow(0px 3px 3px rgba(${0},${0},${0},${0.28}))`,
    backgroundColor: theme.background.whitePrimary,
    color:"gray",
    borderRadius: "15px",
    height: "calc(100vh - 86px)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems:"center",
    padding: "2%",
    ".MuiButton-root": {
      backgroundColor: theme.background.primary,
      width: 80,
      height: 28,
      borderRadius: "10px",
      filter: `drop-shadow(8px 8px 11px #fafcff)`,
      marginTop: "13px",
    },
  },
  ".form-content-container": {
    ".MuiTypography-h6": {
      color: theme.font.primary,
      fontSize: "16px",
      display: "flex",
      justifyContent: "left",
      alignItems: "center",
      fontWeight: "bold",
    },
    ".MuiOutlinedInput-root": {
      backgroundColor: theme.textbox.primary,
      margin: "12px 0px",
      height: "35px",
      width: "100%",
      border: "none",
      outline: "none",
      filter: `drop-shadow(8px 8px 11px #fafcff)`,
      borderRadius: "10px",
    },
    ".MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
  },
  ".duration-separator": {
    fontWeight: "bold",
    fontSize: "1.2rem",
    color: theme.font.primary,
  },
  ".question-msg": {
    fontSize: ".6rem",
    color: theme.font.primary,
    fontWeight: "bold",
  },
}));

export const UploadQuestionLandingStyles = styled("div")(({ theme }) => ({
  padding: ".5% 1% 0% 1%",
  ".landing-main-container": {
    backgroundColor: theme.background.whitePrimary,
    height: "calc(100vh - 82px)",
    filter: ` drop-shadow(0px 3px 3px rgba(${0},${0},${0},${0.28}))`,

    borderRadius: "10px",
    padding: "4%",
  },
  ".upload-button-container": {
    backgroundColor: theme.background.whitePrimary,
    padding: "2%",
    textAlign: "center",
    ".MuiButton-root": {
      backgroundColor: theme.background.tertiary,
      width: 166,
      height: 65,
      textTransform: "capitalize",
      borderRadius: "11px",
      fontSize: "14px",
      fontWeight: "normal",
      color: theme.font.white,
      margin: "0px 30px",
      filter: `drop-shadow(8px 8px 11px #fafcff)`,
    },
  },
  ".description-container": {
    padding: "0% 5%",
    height: "calc(100vh - 260px)",
    overflow: "auto",
    marginTop: "2%",
    ".MuiTypography-h6": {
      textAlign: "left",
      fontSize: 20,
      fontWeight: "bold",
      color: theme.font.primary,
    },
  },
  ".descriptions": {
    paddingLeft: "0%",
    ".MuiTypography-body2": {
      margin: "16px 0px",
      textAlign: "justify",
      fontSize: 14,
      fontWeight: 500,
      color: theme.font.greyPrimary,
    },
  },
}));

export const PopoverStyles = styled("div")(({ theme }) => ({
  ".MuiPaper-root": {
    backgroundColor: theme.background.whitePrimary,
    marginLeft: "16px",
  },
}));
