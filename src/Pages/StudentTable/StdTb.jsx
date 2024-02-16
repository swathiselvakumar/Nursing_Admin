import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import { TableStdStyle } from "./style";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(1, "Divya", "divya@gmail.com", "1 / 05 /2023", <DeleteIcon />),
  createData(2, "Divya", "divya@gmail.com", "1 / 05 /2023", <DeleteIcon />),
  createData(3, "Divya", "divya@gmail.com", "1 / 05 /2023", <DeleteIcon />),
  createData(4, "Divya", "divya@gmail.com", "1 / 05 /2023", <DeleteIcon />),
  createData(5, "Divya", "divya@gmail.com", "1 / 05 /2023", <DeleteIcon />),
  createData(6, "Divya", "divya@gmail.com", "1 / 05 /2023", <DeleteIcon />),
  createData(7, "Divya", "divya@gmail.com", "1 / 05 /2023", <DeleteIcon />),
  createData(8, "Divya", "divya@gmail.com", "1 / 05 /2023", <DeleteIcon />),
  createData(9, "Divya", "divya@gmail.com", "1 / 05 /2023", <DeleteIcon />),
  createData(10, "Divya", "divya@gmail.com", "1 / 05 /2023", <DeleteIcon />),
];

export default function StdTb() {
  return (
    <>
    <TableStdStyle>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow className="tb-row ">
                <TableCell className="head"  >Sno</TableCell>
                <TableCell className="head" align="right">Sname</TableCell>
                <TableCell className="head" align="right">Email Id</TableCell>
                <TableCell className="head" align="right">Member Since</TableCell>
                <TableCell className="head" align="right">action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow className="tb-row"
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
        </TableStdStyle>
     
    </>
  );
}
