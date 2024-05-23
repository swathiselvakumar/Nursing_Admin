import styled from "@emotion/styled";
export const PremiumStyle=styled("div")(()=>({
  ".premium":{
    backgroundColor:"#E1EEDD",
    padding:"20px",
    margin:"20px",
    borderRadius:"5px",
  },
  ".mainContainer": {
    display:"flex",
    justifyContent:"space-evenly",
    backgroundColor:"white",
    borderRadius:"5px",
    height:"70vh"
  },
 
  ".centerText": {
    textAlign: "center",
    color: "#183a1d",
  },
 ".MuiButton-root":{
    backgroundColor: "#183a1d",
    borderColor: "#183a1d",
    color: "#fff",
    fontFamily: "Roboto, sans-serif"
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
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
},

".MainCol":{
    display:"flex",
    justifyContent:"space-around",
    
    // width:"40vw"
    
},
".update":{
    backgroundColor:"#F0A04B"
},
".Div":{
    backgroundColor:"white",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    display:"flex",
    justifyContent:"center",
    flexDirection: "column",
    alignItems:"center",
    borderRadius:"10px",
    padding:"20px",
    marginTop:"20px"
},
".tablebox":{
  backgroundColor:"white",
  height:"400px"
},
".MuiPagination-root":{
  position:"relative",
  padding:"5px",
  // backgroundColor:"#e7f6f2",
  // width:"auto",
  borderRadius:"10px",
  display:"flex",
  justifyContent:"flex-end"
},
".MuiTypography-root":{
  fontFamily: "Roboto, sans-serif"
}
}))

export const AlertStyle=styled("div")(()=>({
  ".MuiButton-root":{
    backgroundColor:"white",
    color:"black",
    fontFamily: "Roboto, sans-serif"
 },
}))