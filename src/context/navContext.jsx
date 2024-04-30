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
 const [plan, setPlan] = useState();
 const [price, setPrice] = useState(1999);
  //  const [durationname, setDurationname] = useState();
   const [durationtime, setDurationtime] = useState();
  //  const [quetionpaperhistory, setQuestionpaperhistory] = useState([
  //    {
  //      paperId: "",
  //      questionId: "",
  //    },
  //  ]);


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
        setMcq,
        plan,
        setPlan,
        price,
        setPrice,
        durationtime,
        setDurationtime,
        // quetionpaperhistory,
        // setQuestionpaperhistory
      }}
    >
      {children}
    </navContext.Provider>
  );
}

export default NavContextProvider;
