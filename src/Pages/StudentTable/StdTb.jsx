import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableStdStyle } from "./style";
import Dialog from "@mui/material/Dialog";
import Modal from "@mui/material/Modal";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState,useContext } from "react";
import { Typography, Button } from "@mui/material";
import Rong from "../../assets/icons/rong.jpg";
import { styled } from "@mui/material/styles";
import Block from "../../assets/icons/block.png";
import Profile from "../Profile";
import Box from "@mui/material/Box";
import axios from "axios";
import DialogActions from "@mui/material/DialogActions";
import { navContext } from "../../context/navContext";


export default function StdTb({ tableData, updateStudentId,setUpdate,update }) {
  const [open, setOpen] = useState(false);
  const [ studentid, setstudentid] = useState();
  const [modified, setmodified] = useState();
  const [True, setTrue] = useState();
  const [modal, setModal] = useState(false);
  const email = localStorage.getItem("userMail");
  const {Endpoint}=useContext(navContext);


  const handleCloseDialog = () => {
    setOpen(false);
  };
  const handleClickOpens = (e,row) => {
    setModal(true);
    setstudentid(row.email);

  };
  const handleClosed = () => {
    setModal(false);
  };

  const handleClickOpen = (e,row,index) => {
    e.stopPropagation();
    setOpen(true);
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
 
  const handleCloseDialogBlk=()=>{
    setTrue(!True)
    blocklist();
    setOpen(false);
  }

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
                  <TableCell className="head" align="center">
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tableData?.map((row,index) => (
                  
                  <TableRow
                    className="tb-row"
                    key={row.sno}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    onClick={(e)=>handleClickOpens(e,row)}
                  >
                    <TableCell component="th" scope="row">
                      {row.sno}
                    </TableCell>
                    <TableCell align="left">{row.sname}</TableCell>
                    <TableCell align="left">{row.email}</TableCell>
                    <TableCell align="left">{row.memberSince}</TableCell>
                    <TableCell align="center" onClick={(e)=>handleClickOpen(e,row,index)}>
                      <img src={Block} height="20px" />
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
      <Modal
        open={modal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{ height: "10%" }}
      >
        <Box sx={style}>
          <Profile onClose={handleClosed} studentid={studentid}/>
        </Box>
      </Modal>
    </>
  );
}
