import styled from "@emotion/styled";

export const UploadQuestionFormStyles = styled("div")(({ theme }) => ({
  backgroundColor: theme.background.transparent,
  padding: "2px 0px",
  ".question-container": {
    margin: "10px 0px",
    ".MuiTypography-h5": {
      color: theme.font.black,
      fontSize: "15px",
      fontWeight: "normal",
      margin: "4px 0px",
    },
    ".MuiOutlinedInput-root": {
      backgroundColor: theme.textbox.greyPrimary,
      margin: "8px 0px 0px 0px",
      border: "none",
      outline: "none",
      filter: `drop-shadow(8px 8px 11px #fafcff)`,
      borderRadius: "15px",
    },
    ".MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
  },

  ".answer-container": {
    margin: "20px 0px",
    ".answer-textbox-container": {},
    ".MuiTypography-h5": {
      color: theme.font.black,
      fontSize: "15px",
      fontWeight: "normal",
      margin: "4px 0px",
    },
    ".MuiOutlinedInput-root": {
      backgroundColor: theme.textbox.greyPrimary,
      margin: "8px 0px 0px 0px",
      height: "54px",
      border: "none",
      outline: "none",
      filter: `drop-shadow(8px 8px 11px #fafcff)`,
      borderRadius: "15px",
      width: "90%",
    },
    ".MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
  },

  ".add-answer-container": {
    margin: "20px 0px",
    ".MuiTypography-h5": {
      color: theme.font.black,
      fontSize: "1.2rem",
    },
    ".MuiButton-root": {
      color: theme.font.greyPrimary,
      display: "flex",
      alignItems: "center",
    },
  },

  ".instruction-container": {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    margin: "20px 0px",
    ".MuiTypography-h5": {
      color: theme.font.black,
      fontSize: "15px",
      fontWeight: "normal",
      margin: "4px 0px",
    },
    ".MuiOutlinedInput-root": {
      backgroundColor: theme.textbox.greyPrimary,
      margin: "8px 0px 0px 0px",
      height: "54px",
      border: "none",
      outline: "none",
      filter: `drop-shadow(8px 8px 11px #fafcff)`,
      width: "100%",
      borderRadius: "5px",
    },
    ".MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
    ".MuiButton-root": {
      display: "flex",
      alignItems: "center",
      color: theme.font.primary,
      backgroundColor: theme.background.whitePrimary,
      fontSize: ".8rem",
      fontWeight: 700,
      marginRight: "8px",
      textTransform: "capitalize",
    },
  },
  ".save-remove-btn": {
    display: "flex",
    justifyContent: "end",
    flexDirection: "end",
    right: "10px",
    position: "absolute",
    alignItems: "end",
    bottom: "10px",
    ".MuiButton-root": {
      marginRight: "8px",
    },
  },
}));
