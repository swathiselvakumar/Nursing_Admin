import styled from "@emotion/styled";
export const HybridStyle=styled("div")(()=>({
    ".title":{
        textAlign:"center",
        paddingTop:"10px", 
    },
    ".bodystyle":{
        backgroundColor:"#E1EEDD",
        height:"100vh"
    },
    ".MuiButton-root":{
        backgroundColor:"#F0A04B",
        color:"white",
        width:"150px"
    },
    ".search":{
        width:"300px"
    },
    ".MainCol":{
        display:"flex",
        justifyContent:"flex-end"
    },
    ".MuiTypography-root":{
        fontFamily: "Roboto, sans-serif"
    }

}))