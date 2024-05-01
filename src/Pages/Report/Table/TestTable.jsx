import React, { useEffect } from "react";
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


export default function TestTable() {

  const [rows, setRows] = React.useState([]);
  const email=localStorage.getItem("userMail");

  useEffect(() => {
    table();
  }, []);

  const table = async () => {
    try {
      const response = await axios.post(
        "https://vebbox.in/Nursing/controllers/api/admin/get/A_ViewStudentreport.php",
         {
           adminId:email,
         }
      );

      const newData = response.data.map((item) => ({
        // name: ,
        calories: item.plan_category,
        id: item.id,
        name: item.username,
        calories: item.email,
        fat: item.plan_join_date,
        score:item.score,
      }));
      //  "id": 26,
      // "username": "moni",
      // "plan_category": "",
      // "email": "pathi@gmail.com",
      // "plan_join_date": "0000-00-00"

      setRows(newData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
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
          <div
            // className="menu-wrapper"
            style={{
              justifyContent: "flex-end",
              alignItems: "center",
              backgroundColor: "#e1eede",
              borderRadius: "5px",
              display: "flex",
            }}
          >
            <FilterListIcon />
            &nbsp;
            <DropDown />
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
    </>
  );
}
