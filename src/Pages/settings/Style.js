import styled from "styled-components";

export const SettingStyle = styled("div")(() => ({
  ".wrap": {
    display: "flex",
    justifyContent: "center",
  },
  ".profile": {
    fontFamily: "arial",
    display: "flex",
    flexDirection: "column",

    marginRight: "100px",
    textAlign: "center",
  },
  ".inside-wrapper": {
    marginTop: "10px",
    borderRadius: "10px",
    display: "flex",
    backgroundColor: "#e1eedd",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginBottom: "10px",

    // width: "1000px",
  },

  ".profile-card": {
    padding: "80px 230px 75px 230px",
    // width: "1000px",

    display: "flex",
    flexWrap: "wrap",
    // justifyContent: "space-between",
    // alignItems: "center",

    // width: "800px",
  },
  ".profile-card img": {
    marginTop: "-20px",
  },
  ".submit-btn": {
    backgroundColor: "#183a1d",
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
  },
  ".pass-lab": {
    fontWeight: "500",
    color: "#183a1d",
    marginBottom: "5px",
  },
  ".email": {
    fontWeight: "550",
  },
  ".char-err": {},
}));
