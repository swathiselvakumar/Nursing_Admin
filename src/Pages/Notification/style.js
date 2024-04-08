import styled from "styled-components";

export const NotificationStyle = styled("div")(() => ({
  ".wrap": {
    display: "flex",
    justifyContent: "center",
    marginLeft:"60px",
    marginRight:"60px"
  },
  // ".profile": {
  //   display: "flex",
  //   flexDirection: "column",

  //   marginRight: "100px",
  //   textAlign: "center",
  // },
  ".inside-wrapper": {
    marginTop: "10px",
    borderRadius: "10px",
    display: "flex",
    backgroundColor: "#f6f6f6",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginBottom: "10px",

    // width: "1000px",
  },

  ".profile-card": {
    padding: "80px 30px 75px 30px",
    display: "flex",
    // flexWrap: "wrap",
    justifyContent: "center",
    
  },
  ".profile-card img": {
    marginTop: "-20px",
  },
  ".submit-btn": {
    backgroundColor: "#1B4242",
    padding: "10px 100px 10px 100px",
    border: "none",
    marginTop: "20px",
    color: "white",
  },
  ".Old-Password": {
    border: "none",
    width: "245px",
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
  ".email": {
    fontWeight: "550",
  },
  ".char-err": {},
}));
