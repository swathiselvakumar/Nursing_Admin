import TableViewOrg from "./TableView";
import { useState } from "react";
import TestTable from "./TestTable";
function TableButton({name,name2}) {
  const[student,setstudent]=useState("student");
  const[Active,setActive]=useState("active")
  const handleClick=()=>{
    setstudent("student");
    setActive("active")
  }
  const TesthandleClick=()=>{
    setstudent("test");
    setActive("isactive")
  }
  return (
    <div>
      <div className="btn-wrapper" style={{padding:'20px'}} >
        <div
          className="btn-1"
          style={{ display: "flex", justifyContent: "space-around",flexWrap:'wrap' }}
        >
          <div className="wrap-1">
          <button
            style={{
              padding: "15px 230px 15px 230px",
              fontWeight: "600",
              border: "none",
              color: "white",
              fontSize: "18px",
              backgroundColor: "#f0a04b",
              margin:'10px'
            }}
            sx={{
              backgroundColor:
              Active === "active"
                ? "orange"
                : "white",
            color:
              Active === "active"
                ? "white"
                : "black",
            }}
            onClick={handleClick}
          >
            {name}
          </button>
          </div>
          <div className="wrap-2">
          <button
            style={{
              padding: "15px 230px 15px 230px",
              fontWeight: "600",
              border: "none",
              color: "black",
              fontSize: "18px",
              backgroundColor: "white",
              margin:'10px'
            }}
            sx={{
              backgroundColor:
              Active === "isactive"
                ? "orange"
                : "White",
            color:
              Active ===  "isactive"
                ? "white"
                : "black",
            }}
            onClick={TesthandleClick}
          >
            {name2}
          </button>
          </div>
        </div>
      </div>
     
      
    </div>
  );
}

export default TableButton;
