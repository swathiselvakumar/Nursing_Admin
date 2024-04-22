import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import FilterListIcon from "@mui/icons-material/FilterList";
// import DropDown from ;

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(1, "Divya", "100", "80", "1 / 05 /2023-8.00am"),
  createData(2, "Divya", "100", "70", "1 / 05 /2023-8.00am"),
  createData(3, "Divya", "100", "50", "1 / 05 /2023-8.00am"),
  createData(4, "Divya", "100", "50", "1 / 05 /2023-8.00am"),
  createData(5, "Divya", "100", "49", "1 / 05 /2023-8.00am"),
  createData(6, "Divya", "100", "30", "1 / 05 /2023-8.00am"),
  createData(7, "Divya", "100", "30", "1 / 05 /2023-8.00am"),
  createData(8, "Divya", "100", "30", "1 / 05 /2023-8.00am"),
];

export default function DailyTable() {
  const Tbhead = {
    fontWeight: "bold",
  };
  return (
    <>
      <div
        style={{
          padding: "15px",
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
        ></div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow style={{ backgroundColor: "#E1EEDE" }}>
                <TableCell style={Tbhead}>Sno</TableCell>
                <TableCell style={Tbhead} align="left">
                  Sname
                </TableCell>
                <TableCell style={Tbhead} align="left">
                  Total Score
                </TableCell>
                <TableCell style={Tbhead} align="left">
                  Score
                </TableCell>
                {/* <TableCell  style={Tbhead} align="left">Test Name</TableCell> */}
                <TableCell style={Tbhead} align="left">
                  Date-Time
                </TableCell>
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
                  {/* <TableCell align="left">{row.score}</TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
