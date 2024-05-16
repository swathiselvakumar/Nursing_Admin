import styled from "@emotion/styled";

export const DashboardStyles = styled("div")(({ theme, sidebarState }) => ({
  ".container": {
    // backgroundColor:'white',
    // padding: "20px",
    margin: "20px",
    display: "flex",
    borderRadius: "5px",
    // alignContent:'center',
    // textAlign:'center',
    // alignItems:'center',
    // justifyContent:'center'
  },
  // ".MuiTypography-root": {
  //   fontFamily: "Roboto, sans-serif",
  // },
  // ".mainContainer": {
  //   display: "flex",
  //   justifyContent: "space-evenly",
  //   fontFamily: "Roboto, sans-serif",
  // },

  // ".centerText": {
  //   textAlign: "center",
  //   color: "#183a1d",
  // },
  // ".MuiButton-root": {
  //   marginTop: "10px",
  //   backgroundColor: "#183a1d",
  //   borderColor: "#183a1d",
  //   color: "#fff",
  //   width: "100px",
  //   fontWeight: 600,
  //   textTransform: "capitalize",
  // },
  // ".MuiButton-root:hover": {
  //   backgroundColor: "#183a1d",
  // },
  // ".cardItem": {
  //   padding: "20px",
  //   backgroundColor: "white",
  //   display: "flex",
  //   flexDirection: "column",
  //   alignItems: "center",
  //   borderRadius: "10px",
  // },
  ".innerContent": {
    // position: "absolute",
    // padding: "10px",
    // backgroundColor: "#f0a04b",
    // width: "150px",
    // color: "white",
    // borderRadius: "7px",
    // marginTop: "-30px",
    // boxShadow:
    //   "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
    // textAlign: "center",
    display: "flex",
    flexDirection: "row",
    // textAlign:'center',
    // justifyContent:'center'
    // alignItems:'center'
  },
  ".item": {
    // padding: "10px",
    backgroundColor: "#E7F6F2",
    display: "flex",
    // flexDirection: "row",
    // alignItems: "center",
    borderRadius: "10px",
    marginTop: "50px",
    // textAlign: "center",
    color: "#333",
    width: "170px",
    paddingLeft: "20px",
    // paddingLeft:'45px'
    // justifyContent:'center',

    // padding:'20px'
    // justifyContent:'center'
    // textAlign:'center'
  },
  ".text": {
    // marginTop: "50px",
    // textAlign:'center',
    // justifyContent:'center',
    // alignItems:'center',
    // alignContent:'center'
    color: "#1B4242",
    fontFamily: "Roboto",
    marginTop: "40px",
    // paddingLeft: "20px",

    // fontWeight:'00'
  },
  ".vertical-line": {
    borderRight: "2px solid white", // Adjust thickness and color as needed
    height: "50px",
    paddingLeft: "20px",
  } /* Adjust height as needed */,
}));
