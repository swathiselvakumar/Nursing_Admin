import styled from "@emotion/styled";
export const DropDownWrapper = styled("div")(() => ({
  ".MuiButtonGroup-root": {
    backgroundColor: "#e1eede",
    // height:"200px"

    color: "black",
    width: "100px",
    height: "30px",
    // fontSize: "20px",
  },
  ".btn-1":{
    display: "flex", justifyContent: "space-around"
  },
  ".lg-btn":{
    padding: "15px 200px 15px 200px",
    fontWeight: "600",
    border: "none",
    color: "white",
    fontSize: "18px",
    backgroundColor: "#f0a04b",
  },
  ".lg-btn-2":{
    padding: "15px 200px 15px 200px",
    fontWeight: "600",
    border: "none",
    color: "black",
    fontSize: "18px",
    backgroundColor: "white",
  },
  ".btn-wrapper":{
    padding: "20px",
    backgroundColor:'red'
  }
}));
