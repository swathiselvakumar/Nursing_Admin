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
  const [name, setName] = useState();
  const [year, setYear] = useState();
  const [month, setMonth] = useState();
  const [input, setInput] = useState();
  const [stage, setStage] = useState();
  const [mcq, setMcq] = useState();





  const updateNavText = (data) => {
    setTitle(data);
  };

  const DrawerHandler = () => {
    setOpen(!open);
  };

  return (
    <navContext.Provider
      value={{
        navTitleText,
        updateNavText,
        open,
        setOpen,
        DrawerHandler,
        name,
        setName,
        year,
        setYear,
        month,
        setMonth,
        input,
        setInput,
        stage,
        setStage,
        mcq,
        setMcq
      }}
    >
      {children}
    </navContext.Provider>
  );
}

export default NavContextProvider;
