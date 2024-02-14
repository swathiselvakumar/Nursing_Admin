import styled from "@emotion/styled";

export const CustomAppHeader = styled("div")(({ theme }) => ({
  backgroundColor: theme.background.whiteTertiary,
  padding: "0px",
  position: "sticky",
  top: "0px",
  zIndex: "1",
  marginBottom:"2px",
  ".MuiAppBar-root": {
    backgroundColor: theme.background.whiteTertiary,
    boxShadow: "none",

    // boxShadow: `rgba(${0}, ${0}, ${0}, ${0.16}) 0px 1px 4px`,
  },
  ".MuiToolbar-root": {
    padding: "0px 12px",
  },
  ".MuiTypography-h6": {
    mr: 2,
    display: { xs: "flex", md: "flex" },
    fontFamily: "open sans",
    fontWeight: 700,
    fontSize: "20px",
    color: "#183A1D",
    textDecoration: "none",
  },
  ".app-container": {
    backgroundColor: "#183A1D",
    position: "sticky",
    // top:"20px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ".MuiMenuItem-root": {
    ".MuiTypography-body2": {
      color: "white",
      fontWeight: 700,
    },
  },
  ".MuiAppBar-root": {
    backgroundColor:"#183A1D",
    boxShadow: "none",
    // borderBottomLeftRadius: "15px",
    // borderBottomRightRadius: "15px",
  },
  ".title": {
    color: theme.font.white,
    flexGrow: 1,
    fontWeight: 700,
  },
  ".MuiButton-root": {
    fontWeight: "normal",
    fontSize: "15px",
    textTransform: "lowercase",
  },
  ".signup-btn": {
    backgroundColor: "#183A1D",
    borderRadius: "15px",
    color: "#183A1D",
    width: 87,
    height: 30,
    "&:hover": {
      backgroundColor: "#183A1D",
      color: theme.font.lighBlue,
    },
  },
  ".login-btn": {
    backgroundColor: theme.background.transparent,
    borderRadius: "15px",
    color: theme.font.white,
    textTransform: "capitalize",
  },
  ".MuiSvgIcon-root":{
    color:"white"
  }
}));

// export const TopBarStyles = styled("div")(({ theme }) => ({
//   ".MuiAppBar-root": {
//     backgroundColor:"#183A1D",
//     boxShadow: "none",
//     borderBottomLeftRadius: "15px",
//     borderBottomRightRadius: "15px",
//   },
//   ".title": {
//     color: theme.font.white,
//     flexGrow: 1,
//     fontWeight: 700,
//   },
//   ".MuiButton-root": {
//     fontWeight: "normal",
//     fontSize: "15px",
//     textTransform: "lowercase",
//   },
//   ".signup-btn": {
//     backgroundColor: theme.background.whitePrimary,
//     borderRadius: "15px",
//     color: theme.font.lighBlue,
//     width: 87,
//     height: 30,
//     "&:hover": {
//       backgroundColor: theme.background.whitePrimary,
//       color: theme.font.lighBlue,
//     },
//   },
//   ".login-btn": {
//     backgroundColor: theme.background.transparent,
//     borderRadius: "15px",
//     color: theme.font.white,
//     textTransform: "capitalize",
//   },
// }));
