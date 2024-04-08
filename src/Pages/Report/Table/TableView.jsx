import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import FilterListIcon from "@mui/icons-material/FilterList";
import DropDown from "./DropDown";
import { TableStyle } from "./style";


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const col=["Sno","Sname","Email id","Joining Date","Category"]

const rows = [
  createData(1, "Divya", "divya@gmail.com", "1 / 05 /2023", "standard"),
  createData(2, "Divya", "divya@gmail.com", "1 / 05 /2023", "standard"),
  createData(3, "Divya", "divya@gmail.com", "1 / 05 /2023", "Premium"),
  createData(4, "Divya", "divya@gmail.com", "1 / 05 /2023", "standard"),
  createData(5, "Divya", "divya@gmail.com", "1 / 05 /2023", "Premium"),
];

export default function TableViewOrg() {
  const tbCell={
    fontWeight:"bold",
    fontSize:"17px",
    textAlign:"left",
    backgroundColor:"#E7f6f2",
    fontFamily: "Roboto, sans-serif"
    
    
  }
  const tbCellans={
    fontSize:"14px"
  }
  return (
    <>
    <div className="tableWrapper" >
      <TableStyle>
      <div
        style={{
          padding: "20px",
          backgroundColor: "#f6f6f6",
          borderRadius: "10px",
          
          
        }}
      >
        <div
          className="table-head"
         
        >
          <div className="d1" style={{ flex: "1" }}>
            <h5 >Students Report</h5>
          </div>
          <div>
          
          </div>
         
        </div>
        <TableContainer>
          <Table sx={{ minWidth: 650,fontFamily:"sans-serif" }} aria-label="simple table">
            <TableHead>
            <TableRow >
              {
                col.map((d)=>{
                  return(
                    <>
                    
                <TableCell style={tbCell}>{d}</TableCell>
              
                    </>
                  )
                })
              }
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 }}}
                >
                  <TableCell component="th" scope="row" style={tbCellans} className="TableDataCell">
                    {row.name}
                  </TableCell>
                  <TableCell align="left" style={tbCellans} className="TableDataCell">{row.calories}</TableCell>
                  <TableCell align="left" style={tbCellans} className="TableDataCell">{row.fat}</TableCell>
                  <TableCell align="left" style={tbCellans} className="TableDataCell">{row.carbs}</TableCell>
                  <TableCell align="left" style={tbCellans} className="TableDataCell">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      </TableStyle>
    
     
      </div>
    </>
  );
}
