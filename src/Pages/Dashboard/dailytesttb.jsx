import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Grid, Typography } from '@mui/material';
import { TableStyle } from "../Report/Table/style";
import { NavLink } from 'react-router-dom';
import axios from 'axios';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
     
const rows = [
  createData('Daily Test',10),
  createData('Mini Test',13),
  createData('Micro Test',24),
  createData('English',18),
  createData('Aptitude',8),
];

export default function DailyTestTable() {
// const [rows, setRows] = React.useState([]);

   React.useEffect(() => {
     table();
   }, []);

   const table = async () => {
     try {
       const response = await axios.post(
         "https://vebbox.in/Nursing/controllers/api/admin/post/A_InsertDailyTest.php"
         //  {
         //    adminId: "nandinivebbox@gmail.com",
         //  }
       );

      //  const newData = response.data.map((item) => ({
      //    name: item.username,
      //    calories: item.plan_category,
      //  }));
       //  "id": 26,
       // "username": "moni",
       // "plan_category": "",
       // "email": "pathi@gmail.com",
       // "plan_join_date": "0000-00-00"

      //  setRows(newData);
     } catch (error) {
       console.error("Error fetching data:", error);
     }
   };
   
  return (
    <Grid
      item
      display={"flex"}
      // justifyContent={"flex-end"}
      sm={12}
      xs={12}
      md={6}
      lg={6}
      xl={6}
    >
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
          <Table sx={{ minWidth: 550 }} size="small" aria-label="a dense table">
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
                  Total Test
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    marginTop: "10px",
                    borderSpacing: "0px 8px",
                    borderCollapse: "separate",
                  }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    style={{ backgroundColor: "white", fontSize: "12px" }}
                  >
                    {row.name}
                  </TableCell>
                  <TableCell
                    align="right"
                    style={{ backgroundColor: "white", fontSize: "12px" }}
                  >
                    {row.calories}
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