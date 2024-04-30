import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Modal,
  Box,
  Button,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import { TableStdStyle } from "../../StudentTable/style";
import Profile from "../../Profile";
import BlockIcon from "../../../assets/icons/block.png";

function createData(sno, sname, email, memberSince, expireddate) {
  return { sno, sname, email, memberSince, expireddate };
}

export default function PremiumTb() {
  const [openDialog, setOpenDialog] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [rows, setRows] = useState([]);
  const [Originaldata,setOriginaldata] = useState();
  const [modified,setmodified] = useState();
  const [index,setindex] = useState();
  const [True,setTrue] = useState()

console.log(index);
  useEffect(() => {
    if (Originaldata && index >= 0) {
      setmodified(Originaldata[index]);
    }
  }, [Originaldata, index]);

  useEffect(()=>{
    blocklist()
  },[True])


  console.log(modified);


  const blocklist = async () => {
    try {
      const response = await axios.put(
        "https://vebbox.in/Nursing/controllers/api/admin/put/A_blockUnblockStd.php",
        {
          adminId: "nandinivebbox@gmail.com",
          id: modified.email,
          status: modified.status,
        }
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    
  };


  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

const handleCloseDialog = () => {
  
  const modifiedData = { ...modified, status: "block" };
  setmodified(modifiedData);
  setTrue(!True)
  setOpenDialog(false);
};


  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.post(
        "https://vebbox.in/Nursing/controllers/api/admin/get/A_ViewPremiumSt.php",
        {
          adminId: "nandinivebbox@gmail.com",
        }
      );

      setOriginaldata(response.data);

      const unblockedData = response.data.filter(
        (item) => item.status === 1
      );

      const newData = unblockedData.map((item) =>
        createData(
          item.id,
          item.username,
          item.email,
          item.plan_join_date,
          item.plan_expiry_date
        )
      );

      setRows(newData);
      console.log(newData)
      console.log(rows);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  return (
    <>
      <TableStdStyle>
        <div style={{ margin: "10px" }}>
          <TableContainer
            style={{
              borderRadius: "10px",
              padding: "30px",
              backgroundColor: "#f6f6f6",
            }}
            component={Paper}
          >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow className="tb-row ">
                  <TableCell className="head">Sno</TableCell>
                  <TableCell className="head" align="left">
                    Sname
                  </TableCell>
                  <TableCell className="head" align="left">
                    Email Id
                  </TableCell>
                  <TableCell className="head" align="left">
                    Member Since
                  </TableCell>
                  <TableCell className="head" align="left">
                    Expired Date
                  </TableCell>
                  <TableCell className="head" align="center">
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow
                    className="tb-row"
                    key={row.sno}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    onClick={() => {
                    setindex(index);
                    }}
                  >
                    <TableCell component="th" scope="row">
                      {row.sno}
                    </TableCell>
                    <TableCell align="left">{row.sname}</TableCell>
                    <TableCell align="left">{row.email}</TableCell>
                    <TableCell align="left">{row.memberSince}</TableCell>
                    <TableCell align="left">{row.expireddate}</TableCell>
                    {/* <TableCell align="left">{row.expireddate}</TableCell> */}
                    <TableCell align="center">
                      <img
                        src={BlockIcon}
                        height="20px"
                        onClick={handleOpenDialog}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </TableStdStyle>
      <Dialog
        onClose={handleCloseDialog}
        open={openDialog}
        aria-labelledby="customized-dialog-title"
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Are you sure?
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleCloseDialog} color="error">
            Block
          </Button>
        </DialogActions>
      </Dialog>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            p: 4,
            width: "90%",
          }}
        >
          <Profile student={selectedStudent} />
        </Box>
      </Modal>
    </>
  );
}
