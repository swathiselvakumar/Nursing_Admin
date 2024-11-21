import styled from "@emotion/styled";
export const PremiumPlansStyle=styled("div")(()=>({
    ".premium":{
        backgroundColor:"#E1EEDD",
        padding:"20px",
        margin:"20px",
        borderRadius:"5px",
      },
      ".mainContainer": {
        display:"flex",
        justifyContent:"space-evenly",
        backgroundColor:"#f6f6f6",
        borderRadius:"5px",
        padding:"20px"
      },
     
      ".centerText": {
        textAlign: "center",
        color: "#183a1d",
      },
     ".MuiButton-root":{
        backgroundColor: "#183a1d",
        borderColor: "#183a1d",
        color: "#fff",
        textTransform:"capitalize",
        fontWeight:"bold",
        fontFamily: "Roboto, sans-serif",
        width:"100px"
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
        backgroundColor: "#e4a45a",
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
        justifyContent:"flex-end"
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
        height:"180px",
        width:"250px",
        marginTop:"50px",
    },
    ".MuiTypography-root":{
      fontFamily: "Roboto, sans-serif"
    }
}))