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
import axios from 'axios';


export default function RecentStudentTable() {
const [rows, setRows] = React.useState([]);
const email=localStorage.getItem("userMail");


    React.useEffect(() => {
      table();
    }, []);

    const table = async () => {
      try {
        const response = await axios.post(
          "https://vebbox.in/Nursing/controllers/api/admin/get/A_ViewRecentStudents.php",
           {
             adminId:email,
           }
        );

        const newData = response.data.map((item) => ({
          name: item.username,
          calories: item.plan_category,

        }));
      

        setRows(newData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  return (
 
     <Grid item display={"flex"}  sm={12} xs={12} md={6} lg={6} xl={6}>
  <TableStyle >
    <TableContainer style={{padding:"20px",backgroundColor:"#f6f6f6",borderRadius:"5px"}} >
        <Typography style={{paddingBottom:"10px",fontWeight:"bold"}}>Recently Added Students</Typography>
      <Table sx={{ minWidth: 470 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow style={{backgroundColor:"#e7f6f2"}}>
            <TableCell style={{fontWeight:600,color:"black", fontFamily: "Roboto, sans-serif"}}>Sname</TableCell>
            <TableCell style={{fontWeight:600,color:"black", fontFamily: "Roboto, sans-serif"}} align="right">Category</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 },marginTop:"10px",borderSpacing:"0px 8px",borderCollapse: "separate", }}
            >
              <TableCell component="th" scope="row" style={{backgroundColor:"white",fontSize:"12px"}}>
                {row.name}
              </TableCell>
              <TableCell align="right" style={{backgroundColor:"white",fontSize:"12px"}}>{row.calories}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </TableStyle>
      </Grid>
  
  );
}