import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableStyle } from "./style";
import axios from "axios";
import { useContext } from "react";
import { navContext } from "../../../context/navContext";

export default function TableViewOrg() {
  const [rows, setRows] = useState([]);
  const email=localStorage.getItem("userMail");
  const {Endpoint}=useContext(navContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          `${Endpoint}admin/get/A_ViewStudentreportDashboard.php`,
          {
            adminId:email,
          }
        );
        setRows(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const col = ["Sno", "Sname", "Email id", "Joining Date", "Category"];

  const tbCell = {
    fontWeight: "bold",
    fontSize: "17px",
    textAlign: "left",
    backgroundColor: "#E7f6f2",
    fontFamily: "Roboto, sans-serif",
  };

  const tbCellans = {
    fontSize: "14px",
  };

  return (
    <div className="tableWrapper">
      <TableStyle>
        <div
          style={{
            padding: "20px",
            backgroundColor: "#f6f6f6",
            borderRadius: "10px",
            overflowX: "auto",
          }}
        >
          <div className="table-head">
            <div className="d1" style={{ flex: "1" }}>
              <h5>Students Report</h5>
            </div>
            <div></div>
          </div>
          <TableContainer>
            <Table
              sx={{  fontFamily: "sans-serif" }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  {col.map((d, index) => (
                    <TableCell key={index} style={tbCell}>
                      {d}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      style={tbCellans}
                      className="TableDataCell"
                    >
                      {index+1}
                    </TableCell>
                    <TableCell
                      align="left"
                      style={tbCellans}
                      className="TableDataCell"
                    >
                      {row.username}
                    </TableCell>
                    <TableCell
                      align="left"
                      style={tbCellans}
                      className="TableDataCell"
                    >
                      {row.email}
                    </TableCell>
                    <TableCell
                      align="left"
                      style={tbCellans}
                      className="TableDataCell"
                    >
                      {row.plan_join_date}
                    </TableCell>
                    <TableCell
                      align="left"
                      style={tbCellans}
                      className="TableDataCell"
                    >
                      {row.plan_category}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </TableStyle>
    </div>
  );
}
