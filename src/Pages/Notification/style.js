import styled from "styled-components";

export const NotificationStyle = styled("div")(() => ({
  ".wrap": {
    display: "flex",
    justifyContent: "center",
    marginLeft:"60px",
    marginRight:"60px"
  },
  ".form1":{
    marginTop:"30px"
  },
  ".inside-wrapper": {
    marginTop: "10px",
    borderRadius: "10px",
    display: "flex",
    backgroundColor: "#f6f6f6",
    paddingLeft:"40px",
    marginBottom: "10px",
    width: "70vw",
    height:"80vh",
    flexDirection:"column"
  },

  ".profile-card": {
    padding: "80px 30px 75px 30px",
    display: "flex",
    // flexWrap: "wrap",
    // justifyContent: "center",
    
  },
  ".profile-card img": {
    marginTop: "-20px",
  },
  ".submit-btn": {
    backgroundColor: "#e4a45a",
    padding: "10px 20px 10px 20px",
    border: "none",
    marginTop: "20px",
    color: "white",
    borderRadius:"5px",

  },
  ".Old-Password": {
    border: "none",
    width: "345px",
    borderRadius: "5px",
    boxShadow: "0px 0px   3px  rgba(0, 0, 0, 0.1)",
    padding: "5px",
    outline:"none"
  },
  ".pass-lab": {
    fontWeight: "500",
    color: "#183a1d",
    marginBottom: "5px",
    outline:"none"
  },
  ".notify": {
    fontWeight: "500",
    width:"200px",
    border:"none",
    boxShadow: "0px 0px   3px  rgba(0, 0, 0, 0.1)",
    backgroundColor:"white",
    borderRadius:"5px",
    height:"40px"
  },
  ".btnbox": {
    width:"340px",
    // backgroundColor:"green",
    display:"flex",
    justifyContent:"center"
  },
  ".details":{
    display:"flex",
    justifyContent:"space-between",
    width:"60vw",
    backgroundColor:"white",
    padding:"10px",
    height:"44px",
    borderRadius:"5px",
    margin:"20px"
  }
}));
