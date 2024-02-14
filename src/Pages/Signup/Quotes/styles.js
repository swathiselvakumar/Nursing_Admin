import styled from "@emotion/styled";

export const QuotesStyles = styled("div")(({ theme }) => ({
  ".main-grid": {
    backgroundColor: theme.background.primary,
    height: "100vh",
    borderTopLeftRadius: "30px",
    borderBottomLeftRadius: "30px",
    position: "relative",
  },
  ".bootstrap-img": {
    display: "flex",
    justifyContent: "end",
    color: "violet",
    paddingTop: "2%",
    opacity: 0.5,
  },
  ".js-img": {
    display: "flex",
    justifyContent: "center",
    opacity: 0.5,
  },
  ".python-img": {
    paddingLeft: "10%",
    paddingTop: "3%",
  },
  ".mysql-img": {
    display: "flex",
    justifyContent: "end",
    paddingRight: "30px",
    paddingBottom: "50px",
    opacity: 0.5,
  },
  ".css-img": {
    paddingLeft: "5%",
    opacity: 0.5,
  },
  ".html-img": {
    display: "flex",
    justifyContent: "end",
    opacity: 0.5,
  },
  ".javas-img": {
    display: "flex",
    justifyContent: "center",
    paddingLeft: "50%",
    opacity: 0.5,
  },
  ".react-img": {
    paddingLeft: "10%",
    paddingTop: "2%",
  },
  ".typo": {
    display: "flex",
    justifyContent: "center",
    width: "70%",
    ".MuiTypography-body2": {
      color: theme.font.lightgreen,
      textAlign: "center",
      fontSize: "10px",
      fontWeight: "bold",
    },
  },
  ".text-field": {
    top: "32%",
    position: "absolute",
    left: "23%",
  },
  ".center-text1": {
    displat: "flex",
    justifyContent: "center",
    color: theme.font.white,
    fontSize: "29px",
    fontWeight: "bold",
  },
  ".center-text2": {
    color: theme.font.white,
    fontWeight: "bold",
    fontSize: "53px",
  },
  ".center-text3": {
    color: theme.font.white,
    fontSize: "29px",
    fontWeight: "bold",
  },
  ".center-text4": {
    color: theme.font.lightgreen,
    fontWeight: "bold",
    fontSize: "49px",
  },
  ".footer": {
    color: theme.font.white,
    textAlign: "right",
    paddingTop: "2%",
    paddingLeft: "20%",
    position: "fixed",
  },
}));
