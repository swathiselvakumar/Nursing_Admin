import { useState } from "react";
import { createContext } from "react";

export const navContext = createContext({
  updateNavText: () => {},
  navTitleText: "",
  DrawerHandler: () => {},
  open: true,
});

function NavContextProvider({ children }) {
  const [navTitleText, setTitle] = useState("Dashboard");
  const [open, setOpen] = useState(true);

  const updateNavText = (data) => {
    setTitle(data);
  };

  const DrawerHandler = () => {
    setOpen(!open);
  };

  return (
    <navContext.Provider
      value={{ navTitleText, updateNavText, open, setOpen, DrawerHandler }}
    >
      {children}
    </navContext.Provider>
  );
}

export default NavContextProvider;
