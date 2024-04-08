import { ThemeProvider } from "@mui/material/styles";
import RouterConfig from "./router/RouterConfig";
import { BrowserRouter as ParentRouter } from "react-router-dom";
import { appTheme } from "./theme/appTheme";
import "@fontsource-variable/open-sans";
import NavContextProvider from "./context/navContext";
// import '@fontsource/roboto'
// import './index.css'

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <ParentRouter path="/">
        <NavContextProvider>
          <RouterConfig />
        </NavContextProvider>
      </ParentRouter>
    </ThemeProvider>
  );
}

export default App;
