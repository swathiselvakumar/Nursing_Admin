import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {Typography } from "@mui/material";

export default function MicroTable({datas}) {
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
            {datas.length > 0 ? (
                datas.map((row, i) => (
                  <TableRow
                    key={i}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {i + 1}
                    </TableCell>
                    <TableCell align="left">{row.student_name}</TableCell>
                    <TableCell align="left">{row.total_count}</TableCell>
                    <TableCell align="left">{row.correct_count}</TableCell>
                    <TableCell align="left">{row.test_date}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} align="center">
                    <Typography>No data available</Typography>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
