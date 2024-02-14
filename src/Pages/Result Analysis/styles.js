import styled from "@emotion/styled";

export const ResultAnalysisStyles = styled("div")(({ theme }) => ({
  ".result-table-container": {
    filter: ` drop-shadow(0px 3px 3px rgba(${0},${0},${0},${0.28}))`,
    backgroundColor: theme.background.whitePrimary,
    borderRadius: "20px",
    padding: "2%",
    height: "calc(100vh - 86px)",
    
  },
  ".button-container": {
    marginBottom: "16px",
    ".MuiButton-root": {
      height: 35,
      fontSize: "12px",
      fontWeight: "normal",
      textTransform: "none",
      border: `1px solid ${theme.background.primary}`,
      borderRadius:'10px',
    },
  },
}));

export const TestQuestionStyles = styled("div")(({ theme }) => ({
  ".questions-main-container": {
    backgroundColor: theme.background.whitePrimary,
    padding: "16px 0px",
    filter: `drop-shadow(0px 3px 3px rgba(${0},${0},${0},${0.43}))`,
    borderRadius: "10px",
    height: `calc(100vh - 86px)`,
    overflow: "auto",
    paddingRight: "10px",
  },
  ".spacing-test-container": {
    padding: "1% 1% 0% 1%",


  },
  ".spacing-detail-container": {
    padding: "0% 0% 0% 1%",
  },
  ".student-data-row": {
    display: "flex",
    justifyContent: "center",
    
    
  
  },
  ".student-title-text": {
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: "8px",
    ".MuiTypography-body2": {
      fontWeight: "bold",
      fontSize: "14px",
      color:"#1b3154",
    },
  },
  ".student-val-text": {
    textAlign: "center",
    display: "flex",
    paddingLeft: "8px",
    justifyContent: "flex-start",
    
    ".MuiTypography-body2": {
      fontWeight: "normal",
      fontSize: "14px",
      color:"#1b3154",
    },
  },
  ".questions_main": {
    margin: "1% 4%",
    padding: "5px",
    ".MuiTypography-h6": {
      color: theme.font.primary,
      fontSize: "1rem",
    },
    ".question_opt1": {
      color: "green",
    },
    ".question_opt3": {
      color: "red",
    },
  },
  ".question_title": {
    margin: "3px 0px",
    color: theme.font.primary,
    fontSize: "20px",
  },
  ".question_opt1,.question_opt2,.question_opt3,.question_opt4": {
    margin: "5px 0px",
    paddingBottom:"2px",
  },
  ".student_name": {
    margin: "8px 30px",
  },
  ".back-btn-container": {
    ".MuiButton-root": {
      color: theme.font.primary,
      position: "absolute",
      right: 10,
      bottom: 0,
      textTransform: "none",

    },
  },
}));
