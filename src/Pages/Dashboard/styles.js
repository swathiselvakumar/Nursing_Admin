import styled from "@emotion/styled";

export const DashboardStyles = styled("div")(({ theme, sidebarState }) => ({
  ".premium":{
    backgroundColor:"#E1EEDD",
    padding:"20px",
    margin:"20px",
    borderRadius:"5px",
  },
  ".mainContainer": {
    display:"flex",
    justifyContent:"space-evenly"
  },
 
  ".centerText": {
    textAlign: "center",
    color: "#183a1d",
  },
 ".MuiButton-root":{
    marginTop: "10px",
    backgroundColor: "#183a1d",
    borderColor: "#183a1d",
    color: "#fff",
    width: "100px",
 },
 ".MuiButton-root:hover":{
  backgroundColor: "#183a1d",
 },
  ".cardItem": {
    padding:"20px",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius:"10px",
  },
  ".innerContent": {
    position:"absolute",
    padding: "10px",
    backgroundColor: "#f0a04b",
    width: "150px",
    color:"white",
    borderRadius:"7px",
    marginTop:"-30px",
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
    textAlign:"center"
},
  ".item":{
    padding:"10px",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius:"10px",
    marginTop:"50px",
    textAlign: "center",
    color: "#333",
}
}));
