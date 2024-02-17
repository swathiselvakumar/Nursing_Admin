import TableViewOrg from "./TableView";
import { useState } from "react";
import TestTable from "./TestTable";
function TableButton() {
  const[student,setstudent]=useState("");
  const[test,settest]=useState("")
  return (
    <div>
      <div className="btn-wrapper" style={{padding:'20px'}}>
        <div
          className="btn-1"
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <button
            style={{
              padding: "15px 230px 15px 230px",
              fontWeight: "600",
              border: "none",
              color: "white",
              fontSize: "18px",
              backgroundColor: "#f0a04b",
            }}
            onClick={()=>setstudent("student")}
          >
            Student
          </button>
          <button
            style={{
              padding: "15px 230px 15px 230px",
              fontWeight: "600",
              border: "none",
              color: "black",
              fontSize: "18px",
              backgroundColor: "white",
            }}
            onClick={()=>settest("test")}
          >
            Test
          </button>
        </div>
      </div>
      {
        student==="student"?<TableViewOrg/>:null
      }
      {
        test==="test"?<TestTable/>:null
      }
    </div>
  );
}

export default TableButton;
