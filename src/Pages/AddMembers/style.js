import styled from "styled-components";

export const AlertBoxStyle = styled("div")(() => ({
  body:{
backgroundColor:"white",
  },
  ".alt-box": {
    // width: "35vw",
    borderRadius: "5px",
    padding: "18px", 
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
    backgroundColor:"white",
    height:"50vh"
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
  '.textB':{
    width: "32vw",
    padding: "10px",
    marginBottom: "20px",
    border:"none",
    outline:"none",
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
    borderRadius:"5px"
  },
  ".radioBtn":{
    display:"flex",
    justifyContent:"space-around"
  },
  '.dialogbox':{
    height:"200px",width:"600px",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"
  },
  '.firstbox':{
    width:"300px",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",borderRadius:"5px"
  },
  '.pro':{
    display:"flex",justifyContent:"space-between",alignItems:"center"
  },
  '.procontent':{
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",height:"30px",padding:"5px",fontSize:"14px",borderRadius:"5px",width:"80px",textAlign:"center",alignSelf:"flex-start",margin:"20px"
  },
  '.MuiDialogTitle-root':{
    backgroundColor:"red",
    width:"900px"
  }
}));
