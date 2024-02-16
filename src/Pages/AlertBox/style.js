import styled from "styled-components";

export const AlertBoxStyle = styled("div")(() => ({
  ".alt-box": {
    width: "28vw",
    border: "1px solid black",
    borderRadius: "5px",
    padding: "20px",
    fontFamily: "arial",
    fontWeight: "550",
  },
  ".form": {
    width: "100px",
    padding: "0px",
  },
  ".box-wrapper-one": {
    display: "flex",
  
  },
 
  input: {
    width: "340px",
    padding: "10px",
    marginBottom: "20px",
  },
  button: {
    width: "340px",
    padding: "10px 20px",
    backgroundColor: "#f0a04b",
    border: "none",
    borderRadius: "5px",
    marginTop: "10px",
    color:'white',
    fontWeight:'550'
  },
}));
