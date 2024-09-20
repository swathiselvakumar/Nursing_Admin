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
 const [price, setPrice] = useState();
 const [email,setemail]=useState("");
 const [index, setindex] = useState();
 const [mcqname,setMcqname]=useState();
 const [Endpoint,setEndpoint]=useState("https://nursingupdate.in/Nursing/controllers/api/");
 const [category, setcategory] = useState("");
 const [mcqid, setMcqid] = useState('');
 const [file, setFile] = useState(null);


   const [durationname, setDurationname] = useState();
   const [durationtime, setDurationtime] = useState();
  


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
        email,
        setemail,
        index,
        setindex,
        mcqname,
        setMcqname,
        Endpoint,
        setEndpoint,
        category,
        setcategory,
        mcqid,
        setMcqid,
        file,
        setFile,
        durationname, setDurationname
      }}
    >
      {children}
    </navContext.Provider>
  );
}

export default NavContextProvider;
