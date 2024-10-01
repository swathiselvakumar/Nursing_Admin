import React, { useContext, useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";
import Dialog from "@mui/material/Dialog";
import axios from "axios";
import { navContext } from "../../../context/navContext";
import Profile from "../../Profile/index"; // Import Profile component

export default function TestTable() {
  const { Endpoint } = useContext(navContext);
  const [rows, setRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loaded, setLoaded] = useState(false);
  const [openDialog, setOpenDialog] = useState(false); // State for dialog
  const [selectedStudentId, setSelectedStudentId] = useState(null); // Selected student email for profile
  const email = localStorage.getItem("userMail");

  useEffect(() => {
    table(currentPage);
  }, [currentPage, loaded]);

  const handleChangePage = (event, value) => {
    setCurrentPage(value);
  };

  const itemsPerPage = currentPage === 1 ? 50 : 10;

  const table = async (page) => {
    try {
      const response = await axios.post(
        `${Endpoint}admin/get/A_ViewStudentreport.php?page=${page}`,
        { adminId: email }
      );

      const itemsPerPageFirstPage = 50;
      const itemsPerPageOtherPages = 10;

      let sno;
      if (page === 1) {
        sno = 1;
      } else {
        sno = itemsPerPageFirstPage + (page - 2) * itemsPerPageOtherPages + 1;
      }

      const newData = response.data.map((item) => ({
        id: sno++,
        name: item.username,
        email: item.email,
        date: item.plan_join_date,
        score: item.score,
      }));

      setRows(newData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const pagination = async () => {
    try {
      const response = await axios.post(
        `${Endpoint}admin/get/A_StudentReportPagination.php`,
        { adminId: email }
      );

      setLoaded(true);
      setTotalPages(response.data.pages);
    } catch (error) {
      console.error("Error fetching pagination data:", error);
    }
  };

  useEffect(() => {
    pagination();
  }, []);

  const handleRowClick = (studentEmail) => {
    setSelectedStudentId(studentEmail);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedStudentId(null);
  };

  const Tbhead = {
    fontWeight: "bold",
  };

  return (
    <>
      <div style={{ padding: "10px", backgroundColor: "#f1f1f1", borderRadius: "10px" }}>
        <div className="table-head" style={{ display: "flex", justifyContent: "flex-start", paddingBottom: "10px" }}>
          <div className="d1" style={{ flex: "1" }}>
            <h5>Students Reports</h5>
          </div>
        </div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow style={{ backgroundColor: "#E1EEDE" }}>
                <TableCell style={Tbhead}>Sno</TableCell>
                <TableCell style={Tbhead} align="left">Sname</TableCell>
                <TableCell style={Tbhead} align="left">Email Id</TableCell>
                <TableCell style={Tbhead} align="left">Date</TableCell>
                <TableCell style={Tbhead} align="left">Score</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  onClick={() => handleRowClick(row.email)} // Handle row click
                  style={{ cursor: "pointer" }} // Change cursor to pointer
                >
                  <TableCell component="th" scope="row">{row.id}</TableCell>
                  <TableCell align="left">{row.name}</TableCell>
                  <TableCell align="left">{row.email}</TableCell>
                  <TableCell align="left">{row.date}</TableCell>
                  <TableCell align="left">{row.score}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "10px" }}>
        {loaded && (
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handleChangePage}
            shape="rounded"
            style={{ backgroundColor: "#e1eede" }}
          />
        )}
      </div>

      {/* Dialog to show profile */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="md" fullWidth>
        <Profile onClose={handleCloseDialog} studentid={selectedStudentId} />
      </Dialog>
    </>
  );
}
