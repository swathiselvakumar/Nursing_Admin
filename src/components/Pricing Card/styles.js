import styled from "@emotion/styled";

export const PricingCardStyles = styled("div")(({ theme }) => ({
  backgroundColor: theme.background.whiteTertiary,
  borderRadius: "8px",
  padding: "16px",
  textAlign: "center",
  boxShadow: "0px 0px 2px black",
  "&:hover": {
    filter: `drop-shadow(0px 0px 3px rgba(${1},${1},${172},${0.9}))`,
  },
  ".top-title": {
    backgroundColor: theme.background.primary,
    padding: "8px 20px",
    marginTop: "-15%",
    marginBottom: "20px",
    borderRadius: "8px",
    color: theme.font.white,
    filter: `drop-shadow(0px 4px 3px #baceee)`,
    ".MuiTypography-h5": {
      fontSize: "1.1rem",
    },
  },
  ".main-title": {
    color: theme.font.primary,
    marginBottom: "10px",
    width: "15vw",
    ".MuiTypography-h6": {
      fontSize: "1.2rem",
      fontWeight: "bold",
      lineHeight: "25px",
    },
  },
  ".price-detail": {
    color: theme.font.primary,
    marginBottom: "3%",
    ".MuiTypography-h6": {
      fontSize: "1.2rem",
      fontWeight: "bold",
      lineHeight: "25px",
    },
    ".small-text": {
      fontSize: ".8rem",
    },
  },
  ".course-detail": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-center",
    color: theme.font.primary,
    textAlign: "left",
    fontWeight: 600,
    ".MuiFormControlLabel-root": {
      fontWeight: "bold",
    },
  },
  ".account-detail": {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px 0px",
    height: "50px",
    marginBottom: "10%",
    ".MuiTypography-h6": {
      color: theme.font.primary,
      fontSize: "1rem",
      fontWeight: "bold",
      marginRight: "10px",
    },
    ".text-field": {
      width: "30%",
      borderRadius: "10px",
    },
  },
  ".check_box": {
    color: "#5BE758",
  },
  ".MuiOutlinedInput-root": {
    width: "100%",
    outline: "none",
    border: "none",
    height: 32,
  },
  ".action-detail": {
    ".MuiButton-root": {
      backgroundColor: theme.background.primary,
      boxShadow: "none",
      color: theme.font.white,
      border: `1px solid ${theme.font.primary}`,
       padding: "5px 20px",
     margin:"10px",
      
    },
  },
  ".MuiCheckbox-root": {
    paddingRight: "4px",
  },
  ".MuiSvgIcon-root": {
    width: "1.2em",
    height: "1.2em",
  },
}));
