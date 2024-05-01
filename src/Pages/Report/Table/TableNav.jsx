import axios from "axios";
import { useEffect,useState } from "react";


function TableNav() {
  const email=localStorage.getItem("userMail");
  const [row,setRows]=useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://vebbox.in/Nursing/controllers/api/admin/get/A_ViewStdCount.php",
          {
            adminId:email,
          }
        );
        setRows(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    console.log(row.Standard);
    fetchData();
  }, []);

  return (
    <div style={{display:'flex',justifyContent:'center'}}>
      <div
        className="nav-header"
        style={{
          display: "flex",
          width:"100%",
          paddingLeft:"30px"
        }}
      >
        <div className="col1" style={{ flex: "1.2" }}>
          <h3>Report</h3>
        </div>
        <div
          className="col2"
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flex: "1",
            textAlign: "right",
            
          }}
        >
          
          <h6>Standard : {row.Standard}</h6>
          <h6>Premium : {row.Premium}</h6>
        </div>
      </div>
    </div>
  );
}

export default TableNav;
