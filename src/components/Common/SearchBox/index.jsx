import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import { SearchBoxContainer } from "./styles";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBox({ width }) {
  return (
    <SearchBoxContainer width={width}>
      <Paper component="form" className="searchBox-paper">
        
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search"
          inputProps={{ "aria-label": "search google maps" }}
        />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search" className="iconbtn">
          <SearchIcon style={{color:"white"}}/>
        </IconButton>
      </Paper>
    </SearchBoxContainer>
  );
}
