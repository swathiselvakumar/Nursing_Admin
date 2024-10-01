import React, { useState } from "react";
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
import DialogActions from "@mui/material/DialogActions";
import axios from "axios";
import { TableStdStyle } from "../../StudentTable/style";
import Profile from "../../Profile";
import BlockIcon from "../../../assets/icons/block.png";
import { useContext } from "react";
import { navContext } from "../../../context/navContext";
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

export default function PremiumTb({ tableData, updateStudentId, setUpdate, update }) {
  const [open, setOpen] = useState(false);
  const { index, setindex } = useState();
  const [modified, setmodified] = useState();
  const [True, setTrue] = useState();
  const [modal, setModal] = useState(false);
  const email = localStorage.getItem("userMail");
  const { Endpoint } = useContext(navContext);
  const [studentid, setstudentid] = useState();
  const [planopen, setPlanOpen] = useState(false);
  // console.log(tableData);

  const handleCloseDialog = () => {
    setOpen(false);
    setPlanOpen(false);
  };
  const handleClickOpens = (e, row) => {
    setModal(true);
    setstudentid(row.email);
  };
  const handleClosed = () => {
    setModal(false);
  };

  const handleClickOpen = (e, row, index) => {
    e.stopPropagation();
    setOpen(true);
    updateStudentId(row.sno);
    setmodified(tableData[index]);
  }

  const handleClick = (e, row, index) => {
    e.stopPropagation();
    setPlanOpen(true);
    updateStudentId(row.sno);
    setmodified(tableData[index]);
    console.log(row.email);
  }

  const style = {
    position: "absolute",
    transform: "translate(5%, 5%)",
    bgcolor: "background.paper",
    p: 4,
    width: "90%",
  };

  const handleCloseDialogBlk = () => {
    setTrue(!True)
    blocklist();
    setOpen(false);
  }

  const handleClosePlan = () => {
    setTrue(!True)
    PlanChange();
    setPlanOpen(false);
  }

  const PlanChange = async () => {
    try {
      const response = await axios.post(
        `${Endpoint}admin/put/A_updateStandardToPremium.php`,
        {
          adminId: email,
          id: modified.email,
          plan: "standard",
        }
      );
      setUpdate(!update);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const blocklist = async () => {
    try {
      const response = await axios.post(
        `${Endpoint}admin/put/A_blockUnblockStd.php`,
        {
          adminId: email,
          id: modified.email,
          status: "block",
        }
      );
      setUpdate(!update);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <TableStdStyle >
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
                    Expiry Date
                  </TableCell>
                  <TableCell className="head" align="left">
                    Current Plan
                  </TableCell>
                  <TableCell className="head" align="center">
                    Action
                  </TableCell>
                  <TableCell className="head" align="center">
                    Plan
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tableData.map((row, index) => (
                  <TableRow
                    className="tb-row"
                    key={row.username} // Assuming 'username' can act as a unique key
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    onClick={(e) => handleClickOpens(e, row)}
                  >
                    <TableCell component="th" scope="row">
                      {index + 1}
                    </TableCell>
                    <TableCell align="left">{row.sname}</TableCell>
                    <TableCell align="left">{row.email}</TableCell>
                    <TableCell align="left">{row.memberSince}</TableCell>
                    <TableCell align="left">{row.expireddate}</TableCell>
                    <TableCell align="left">{row.current_plan_id}</TableCell>
                    <TableCell align="center" onClick={(e) => handleClickOpen(e, row, index)}>
                      <img src={BlockIcon} height="20px" />
                    </TableCell>
                    <TableCell align="center" onClick={(e) => handleClick(e, row, index)}>
                      <WorkspacePremiumIcon/>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </TableStdStyle >
      <Dialog
        onClose={handleCloseDialog}
        open={open}
        aria-labelledby="customized-dialog-title"
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Are you sure?
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleCloseDialogBlk} color="error">
            Block
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        onClose={handleCloseDialog}
        open={planopen}
        aria-labelledby="customized-dialog-title"
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Are you sure to change standard plan?
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleClosePlan} color="error">
            Yes
          </Button>
        </DialogActions>
      </Dialog>
      <Modal
        open={modal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{ height: "10%" }}
      >
        <Box sx={style}>
          <Profile onClose={handleClosed} studentid={studentid} />
        </Box>
      </Modal>
    </>
  );
}
