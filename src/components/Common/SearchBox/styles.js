import { styled } from "@mui/material";

export const SearchBoxContainer = styled("div")(({ theme, width, height }) => ({
  ".searchBox-paper": {
    backgroundColor: theme.background.whitePrimary,
    display: "flex",
    alignItems: "center",
    width: width ? width : 220,
    height: height ? height : 38,
    boxShadow: "none",
    filter: `drop-shadow(2px 3px 1px rgba(${168},${168},${168},${0.48}))`,
    ".MuiInputBase-input": {
      fontSize: ".9rem",
    },
  },
  ".iconbtn":{
    backgroundColor:"#F0A04B",
    height:"38px",
    borderRadius:"0px",
  },
  ".iconbtn:hover":{
    backgroundColor:"#F0A04B",
    height:"38px",
    borderRadius:"0px",
  }
}));
