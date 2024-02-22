
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import FilterListIcon from "@mui/icons-material/FilterList";
import DropDown from "./DropDown";

function createData(name, calories, fat, carbs, protein,score) {
  return { name, calories, fat, carbs, protein,score };
}

const rows = [
  createData(1, "Divya", "divya@gmail.com", "1 / 05 /2023", "Hybrid","5"),
  createData(2, "Divya", "divya@gmail.com", "1 / 05 /2023", "subject name","7"),
  createData(3, "Divya", "divya@gmail.com", "1 / 05 /2023", "mini test","9"),
  createData(4, "Divya", "divya@gmail.com", "1 / 05 /2023", "daily test","5"),
  createData(5, "Divya", "divya@gmail.com", "1 / 05 /2023", "model mock","4"),
];

export default function TestTable() {
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
            borderRadius: "10px",
            display:"flex"
          }}
        >
          {/* <FilterListIcon />&nbsp;
          <DropDown /> */}
        </div>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow style={{ backgroundColor: "#E1EEDE" }}>
              <TableCell  style={Tbhead}>Sno</TableCell>
              <TableCell style={Tbhead} align="left">Sname</TableCell>
              <TableCell  style={Tbhead} align="left">Email Id</TableCell>
              <TableCell  style={Tbhead} align="left">Date</TableCell>
              <TableCell  style={Tbhead} align="left">Test Name</TableCell>
              <TableCell  style={Tbhead} align="left">Score</TableCell>

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
                <TableCell align="left">{row.calories}</TableCell>
                <TableCell align="left">{row.fat}</TableCell>
                <TableCell align="left">{row.carbs}</TableCell>
                <TableCell align="left">{row.protein}</TableCell>
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
