import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import { TableStyle } from "../Report/Table/style";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
     
const rows = [
  createData('Divya',"Premium"),
  createData('Monica',"Premium"),
  createData('Suba',"Standard"),
  createData('hema',"Standard"),
  createData('Raji',"Standard"),
];

export default function RecentStudentTable() {
   
  return (
    <TableStyle >
    <TableContainer style={{padding:"20px",backgroundColor:"#f6f6f6",borderRadius:"5px"}} >
        <Typography style={{paddingBottom:"10px",fontWeight:"bold"}}>Recently Added Students</Typography>
      <Table sx={{ minWidth: 350 }} size="small" aria-label="a dense table">
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
  );
}