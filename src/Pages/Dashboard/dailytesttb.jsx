import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Grid, Typography } from "@mui/material";
import { TableStyle } from "../Report/Table/style";
import axios from "axios";
import { useContext } from "react";
import { navContext } from "../../context/navContext";

export default function DailyTestTable() {
  const [testData, setTestData] = useState([]);
  const {Endpoint}=useContext(navContext);
  
  useEffect(() => {
    fetchTestData();
  }, []);
const email=localStorage.getItem("userMail");
console.log(email);
  const fetchTestData = async () => {
    
    try {
      const response = await axios.post(
        `${Endpoint}admin/get/A_ViewDailyTestDetailsDashboard.php`,
        {
          adminId:email ,
        }
      );
      setTestData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <Grid item display={"flex"} sm={12} xs={12} md={6} lg={6} xl={6}>
      <TableStyle>
        <TableContainer
          style={{
            padding: "20px",
            backgroundColor: "#f6f6f6",
            borderRadius: "5px",
          }}
        >
          <Typography style={{ paddingBottom: "10px", fontWeight: "bold" }}>
            Recent Test
          </Typography>
          <Table sx={{ minWidth: 450 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow style={{ backgroundColor: "#e7f6f2" }}>
                <TableCell
                  style={{
                    fontWeight: 600,
                    color: "black",
                    fontFamily: "Roboto, sans-serif",
                  }}
                >
                  Test Name
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: 600,
                    color: "black",
                    fontFamily: "Roboto, sans-serif",
                  }}
                  align="right"
                >
                   Date
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {testData.map((test, index) => (
                <TableRow
                  key={index}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    marginTop: "10px",
                    borderSpacing: "0px 8px",
                    borderCollapse: "separate",
                  }}
                >
                  <TableCell
                    style={{ backgroundColor: "white", fontSize: "12px" }}
                  >
                    {test.test_name}
                  </TableCell>
                  <TableCell
                    align="right"
                    style={{ backgroundColor: "white", fontSize: "12px" }}
                  >
                    {test.test_date}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </TableStyle>
    </Grid>
  );
}
