import styled from "styled-components";

export const TableStdStyle = styled("div")(() => ({
  
  ".head": {
    fontSize: "16px",
    // fontWeight: "800",
    color: "black",
    backgroundColor:"#e7f6f2"
   
  },
  ".tablebox":{
    // padding:"40px"
  },
  ".MuiTableCell-root":{
    border:"none",
    padding:"6px",
    fontFamily: "Roboto, sans-serif"
  },
  ".MuiTable-root":{
    borderSpacing:"0px 5px",
    borderCollapse: "separate",
    border:"none",
    fontFamily: "Roboto, sans-serif",
    fontWeight: 500,
    fontStyle: "normal"
    // width:""
   },
  ".MuiTableRow-root":{
  borderSpacing:"0px 5px",
  borderCollapse: "separate",
  
  backgroundColor:"white",
 
  // boxShadow: `rgba(0, 0, 0, 0.24) 0px 3px 8px`,
 },
  ".MuiPagination-root":{
      position:"relative",
      left:"60%",
      padding:"5px",
      backgroundColor:"#e7f6f2",
      width:"380px",
      borderRadius:"10px"
    },
  
}));
