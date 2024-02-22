import styled from "@emotion/styled";
import "@fontsource/roboto"
export const DropDownWrapper = styled("div")(() => ({
 
  ".MuiButtonGroup-root .MuiButtonGroup-grouped:not(:last-of-type)": {
    color:"black",
    width: "70px",
    height: "30px",
    borderColor:"black",
    borderLeft:"1px solid black",
    borderRight:"none",
    borderRadius:"0px",
    textTransform:"capitalize"
   
  },
 
  ".MuiSvgIcon-root":{
    color:"black"
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

export const TableStyle=styled("div")(()=>({
 ".menu-wrapper":{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              padding: "5px",
              backgroundColor: "#e1eede",
              borderRadius: "10px",
 },
 ".table-head":{
  display: "flex",
  justifyContent: "flex-start",
 },
 ".MuiTable-root":{
  borderSpacing:"0px 4px",
  borderCollapse: "separate",
  border:"none",
  // width:""
 },
 ".TableDataCell":{
  // padding: "1px",
    fontSize: ".8rem",
    color: "black",
    fontWeight: 500,
    letterSpacing: ".5px",
    textTransform: "capitalize",
 },
 ".MuiTableRow-root":{
  borderSpacing:"0px 5px",
  borderCollapse: "separate",
  // marginTop:"5px",
  // boxShadow: `rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px`,
  backgroundColor:"white",
  // boxShadow: `rgba(0, 0, 0, 0.24) 0px 3px 8px`,
 }
}))
