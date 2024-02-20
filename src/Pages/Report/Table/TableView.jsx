import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import FilterListIcon from "@mui/icons-material/FilterList";
import DropDown from "./DropDown";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(1, "Divya", "divya@gmail.com", "1 / 05 /2023", "standard"),
  createData(2, "Divya", "divya@gmail.com", "1 / 05 /2023", "standard"),
  createData(3, "Divya", "divya@gmail.com", "1 / 05 /2023", "Premium"),
  createData(4, "Divya", "divya@gmail.com", "1 / 05 /2023", "standard"),
  createData(5, "Divya", "divya@gmail.com", "1 / 05 /2023", "Premium"),
];

export default function TableViewOrg() {
  return (
    <>
    <div className="tableWrapper" style={{padding:'0px 20px'}}>
      
    
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
            <h3>Students Reports</h3>
          </div>
          <div
            className="menu-wrapper"
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              padding: "5px",
              backgroundColor: "#e1eede",
              borderRadius: "10px",
            }}
          >
            <FilterListIcon  />
            <DropDown/>
          </div>
        </div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow style={{ backgroundColor: "#E1EEDE" }}>
                <TableCell>Sno</TableCell>
                <TableCell align="right">Sname</TableCell>
                <TableCell align="right">Email Id</TableCell>
                <TableCell align="right">Joining Date</TableCell>
                <TableCell align="right">Category</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      </div>
    </>
  );
}
