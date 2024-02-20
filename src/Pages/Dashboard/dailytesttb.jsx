import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

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
    <TableContainer style={{padding:"20px"}} component={Paper}>
        <Typography style={{paddingBottom:"20px",fontWeight:600}}>Daily Test</Typography>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow style={{backgroundColor:"#F0A04B"}}>
            <TableCell style={{fontWeight:600}}>Date</TableCell>
            <TableCell style={{fontWeight:600}} align="right">Status</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}