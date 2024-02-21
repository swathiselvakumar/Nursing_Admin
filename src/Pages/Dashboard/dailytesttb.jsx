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
  createData('12/05/2023',"Today Active"),
  createData('12/05/2023',"Expired"),
  createData('12/05/2023',"Today Active"),
  createData('12/05/2023',"Today Active"),
  createData('12/05/2023',"Expired"),
];

export default function DailyTestTable() {
   
  return (
    <TableStyle >
    <TableContainer style={{padding:"20px",backgroundColor:"#E1EEDD",borderRadius:"10px"}} >
        <Typography style={{paddingBottom:"20px",fontWeight:"bold"}}>Daily Test</Typography>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow style={{backgroundColor:"#F0A04B"}}>
            <TableCell style={{fontWeight:600,color:"white"}}>Date</TableCell>
            <TableCell style={{fontWeight:600,color:"white"}} align="right">Status</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 },marginTop:"10px",borderSpacing:"0px 8px",borderCollapse: "separate", }}
            >
              <TableCell component="th" scope="row" style={{backgroundColor:"white"}}>
                {row.name}
              </TableCell>
              <TableCell align="right" style={{backgroundColor:"white"}}>{row.calories}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </TableStyle>
  );
}