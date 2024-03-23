import { createTheme } from "@mui/material";
import { lightColors } from "./colors";
import { MuiCssBaseline } from "./font";

export const theme = createTheme({
  palette: lightColors,
  components: {
    MuiCssBaseline,
  },
  typography: {
    fontFamily: "fontRegular,latoFontRegular,cadiz",
  },
});
