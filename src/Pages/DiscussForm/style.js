import styled from "@emotion/styled";

export const DisFormStyle = styled("div")(() => ({
  ".wrapper": {
    padding: "10px",
  },
  ".title": {
    fontFamily: "arial",
    textAlign: "center",
    marginBottom: "40px",
  },
  ".sub-title": {
    fontFamily: "arial",
    flexWrap: "wrap",
    display: "flex",
    justifyContent: "space-between",
  },
  ".update-btn button": {
    display: "flex",
    fontFamily: "arial",
    padding: "5px 30px",
    border: "none",
    borderRadius: "10px",
    backgroundColor: "#f0a04b",
    color: "white",
  },
  ".sub-card-wrapper": {
    justifyContent: "center",
    display: "flex",
    flexWrap: "wrap",
  },
  ".sub-card": {
    width: "270px",
    padding: "20px",
    fontSize: "14px",
    fontFamily: "arial",
    fontWeight: "550",
  },
  ".sub-card span": {
    padding: "2px 20px",
    backgroundColor: "white",
  },
  ".img-wraped": {
    display: "flex",
    // backgroundColor: "red",
    padding: "10px",
    justifyContent: "center",
  },
  ".card-desc": {
    fontFamily: "arial",
    fontSize: "14px",
    fontWeight: "550",
    display: "flex",
    justifyContent: "center",
  },
  ".card-desc p": {
    padding: "50px",
    width: "70%",
  },
  ".card-btn": {
    display: "flex",
    flexWrap: "wrap",
    // justifyContent: "center",
  },
  ".card-btn p": {
    fontFamily: "arial",
    fontSize: "14px",
    fontWeight: "500",
    color: "gray",
    padding: "10px",
  },
  ".card-btn button": {
    backgroundColor: "#183a1d",
    color: "white",
    fontFamily: "arial",
    borderRadius: "10px",
    border: "none",
    padding: "0px 25px",
    // fontSize: "10px",
    height: "40px",
    // marginLeft: "50px",
    fontWeight: "550",
  },
}));
