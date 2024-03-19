import styled from "styled-components";

export const AlertBoxStyle = styled("div")(() => ({
  ".alt-box": {
    width: "35vw",
    borderRadius: "5px",
    padding: "16px", 
     fontFamily: "Roboto, sans-serif",
     backgroundColor:"#e7f6f2",
     boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
     display:"flex",
     flexDirection:"column",
     justifyContent:"center",
  },
  ".TotalBox":{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    height:"65vh"
  },
  ".form": {
    width: "120px",
    padding: "0px",
   
  },
  ".box-wrapper-one": {
    display: "flex",
    justifyContent:"space-between",
   border:"none"
  
  },
  ".MuiSelect-filled":{
    bottomBorder:"none",
    outline:"none",
    backgroundColor:"white",
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
    borderRadius:"5px"
  },
  input: {
    width: "400px",
    padding: "10px",
    marginBottom: "20px",
    border:"none",
    outline:"none",
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
    borderRadius:"5px"
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#f0a04b",
    border: "none",
    borderRadius: "5px",
    marginTop: "20px",
    color:'white',
    fontWeight:'550',
    marginBottom:"10px"
  },
}));