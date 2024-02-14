import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { CommonTableStyles } from "./styles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import { Typography, useTheme } from "@mui/material";

export default function CommonTable({
  tableHeaderData,
  rowData,
  maxWidth,
  icon,
  tableHeight,
  rowClickEvent,
  columnCenter,
  padLeft,
}) {
  const theme = useTheme();
  const [selectedRow, setSelectedRow] = useState(0);

  const handleClick = (select) => {
    setSelectedRow(select);
  };
  
  return (
    <CommonTableStyles tableHeight={tableHeight}>
      <TableContainer component={Paper}>
        <Table sx={{ maxWidth: maxWidth ? maxWidth : "100%" }}>
          <TableHead>
            <TableRow className="table-header" sx={{ zIndex: 3 }}>
              {tableHeaderData.map((data, index) => {
                return (
                  <TableCell
                    key={index}
                    align={data.align}
                    className="table-header-cells"
                  >
                    {data.label}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {rowData.map((row, index) => (
              <TableRow
                key={row.name}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  backgroundColor:
                    selectedRow === index
                      ? theme.table.hover
                      : theme.table.primary,
                }}
                className="table-data-row"
                onClick={() => {
                  handleClick(index);
                  rowClickEvent(index);
                }}
              >
                <TableCell className="table-data-cell" align="center">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: columnCenter ? columnCenter : "start",
                      paddingLeft: padLeft ? padLeft : "0px",
                    }}
                  >
                    {icon ? <AccountCircleIcon sx={{ mr: 2 }} /> : null}
                    {row.firstData}
                  </div>
                </TableCell>
                <TableCell align="center" className="table-data-cell">
                  {row.secondData}
                </TableCell>
                <TableCell align="center" className="table-data-cell">
                  {row.thirdData}
                </TableCell>
                {row.fourthData ? (
                  <TableCell align="center" className="table-data-cell">
                    {row.fourthData}
                  </TableCell>
                ) : null}
                {row.fifthData ? (
                  <TableCell align="center" className="table-data-cell">
                    {row.fifthData}
                  </TableCell>
                ) : null}
                {row.sixthData ? (
                  <TableCell align="center" className="table-data-cell">
                    {row.sixthData}
                  </TableCell>
                ) : null}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </CommonTableStyles>
  );
}
