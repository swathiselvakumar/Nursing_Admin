import React, { useEffect,useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import FilterListIcon from "@mui/icons-material/FilterList";
import DropDown from "./DropDown";
import axios from "axios";
import Pagination from "@mui/material/Pagination";

export default function TestTable() {

  const [rows, setRows] = React.useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loaded, setLoaded] = useState(false);
  const email=localStorage.getItem("userMail");

  useEffect(() => {
    table(currentPage);
  }, [currentPage, loaded]);
  
  const handleChange1 = (event, value) => {
    setCurrentPage(value);
  };
  // let sno=1;
  let itemsPerPage;
  totalPages ==1?itemsPerPage=50:itemsPerPage=10;
  const table = async (page) => {
    try {
      const response = await axios.post(
        `https://vebbox.in/Nursing/controllers/api/admin/get/A_ViewStudentreport.php?page=${page}`,
         {
           adminId:email,
         }
      );
      const itemsPerPageFirstPage = 50;
      const itemsPerPageOtherPages = 10;
      
      // Determine the starting serial number based on the current page
      let sno;
      if (currentPage === 1) {
          sno = 1;
      } else {
          sno = itemsPerPageFirstPage + (currentPage - 2) * itemsPerPageOtherPages + 1;
      }

      const newData = response.data.map((item) => ({
       
        calories: item.plan_category,
        id: sno++,
        name: item.username,
        calories: item.email,
        fat: item.plan_join_date,
        score:item.score,
        
      }));
     

      setRows(newData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const pagination = async () => {
    try {
      const response = await axios.post(
        `http://localhost/_Nursing_final/controllers/api/admin/get/A_StudentReportPagination.php`, {
          adminId: email
        }
      );

      setLoaded(true);

      // const { totalPages } = response.data;
      setTotalPages(response.data || []);
      console.log(totalPages);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    pagination();
  }, []);


  const Tbhead={
    fontWeight:"bold"
  }
  return (
    <>
      <div
        style={{
          padding: "10px",
          backgroundColor: "#f1f1f1",
          borderRadius: "10px",
        }}
      >
        <div
          className="table-head"
          style={{
            display: "flex",
            justifyContent: "flex-start",
            paddingBottom: "10px",
          }}
        >
          <div className="d1" style={{ flex: "1" }}>
            <h5>Students Reports</h5>
          </div>
          
        </div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow 
              style={{ backgroundColor: "#E1EEDE" }}
              >
                <TableCell style={Tbhead}>Sno</TableCell>
                <TableCell style={Tbhead} align="left">
                  Sname
                </TableCell>
                <TableCell style={Tbhead} align="left">
                  Email Id
                </TableCell>
                <TableCell style={Tbhead} align="left">
                  Date
                </TableCell>
                {/* <TableCell  style={Tbhead} align="left">Test Name</TableCell> */}
                <TableCell style={Tbhead} align="left">
                  Score
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="left">{row.name}</TableCell>

                  <TableCell align="left">{row.calories}</TableCell>
                  <TableCell align="left">{row.fat}</TableCell>
                  <TableCell align="left">{row.score}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        
      </div>
      <div style={{display:"flex",justifyContent:"flex-end",marginTop:"10px"}}>
        {loaded && (
                <Pagination
                  count={totalPages.pages}
                  page={currentPage}
                  onChange={handleChange1}
                  shape="rounded"
                  style={{backgroundColor: "#e1eede",}}
                />
              )}
        </div>
    </>
  );
}
