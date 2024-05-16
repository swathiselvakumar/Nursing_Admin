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
import { useEffect, useState } from "react";
import { Typography, Button } from "@mui/material";
import Rong from "../../assets/icons/rong.jpg";
import { styled } from "@mui/material/styles";
import Block from "../../assets/icons/block.png";
import Profile from "../Profile";
import Box from "@mui/material/Box";
import axios from "axios";
import { useContext } from "react";
import { navContext } from "../../context/navContext";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
    width: "400px",
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(2),
  },
}));
export default function StdTb({ tableData, updateStudentId }) {
  const [open, setOpen] = useState(false);
  const { index, setindex } = useContext(navContext);
  const [rows, setRows] = useState([]);
  const [Originaldata, setOriginaldata] = useState();
  const [modified, setmodified] = useState();
  const [True, setTrue] = useState();
  const [modal, setModal] = useState(false);
  const emailId = localStorage.getItem("userMail");
  const handleClickOpens = () => {
    setModal(true);
  };
  const handleClosed = () => {
    setModal(false);
  };

  const handleClickOpen = (e,row) => {
    e.stopPropagation();
    setOpen(true);
    updateStudentId(row.sno);
  }
  useEffect(() => {
    if (Originaldata && index >= 0) {
      setmodified(Originaldata[index]);
    }
  }, [Originaldata, index]);
  useEffect(() => {
    blocklist();
  }, [True]);
  useEffect(() => {
  }, []);

  const Btn = {
    backgroundColor: "white",
    color: "black",
    border: "1px solid black",
    width: "100px",
    marginTop: "20px",
  };
  const Btn1 = {
    backgroundColor: "red",
    color: "white",
    marginLeft: "10px",
    width: "100px",
    marginTop: "20px",
  };
  const style = {
    position: "absolute",
    transform: "translate(5%, 5%)",
    bgcolor: "background.paper",
    p: 4,
    width: "90%",
  };
 

  const blocklist = async () => {
    try {
      const response = await axios.post(
        "https://vebbox.in/Nursing/controllers/api/admin/put/A_blockUnblockStd.php",
        {
          adminId: emailId,
          id: modified.email,
          status: modified.status,
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const handleClose = () => {
    setOpen(false);
    const modifiedData = { ...modified, status: "block" };
    setmodified(modifiedData);
    setTrue(!True);
  };
  const handleOpenDialog = () => {
    setOpenDialog(true);
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
                {tableData?.map((row) => (
                  <TableRow
                    className="tb-row"
                    key={row.sno}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    onClick={handleClickOpens}
                  >
                    <TableCell component="th" scope="row">
                      {row.sno}
                    </TableCell>
                    <TableCell align="left">{row.sname}</TableCell>
                    <TableCell align="left">{row.email}</TableCell>
                    <TableCell align="left">{row.memberSince}</TableCell>
                    <TableCell align="center" onClick={(e)=>handleClickOpen(e,row)}>
                      <img src={Block} height="20px" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </TableStdStyle>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle
          sx={{ m: 0, p: 2 }}
          id="customized-dialog-title"
        ></DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent sx={{ textAlign: "center" }}>
          <img src={Rong} height="25px" style={{ marginTop: "-30px" }} />
          <br />
          Are You sure ?<br />
          want to block this student?
          <br />
          <Button onClick={handleClose} style={Btn}>
            Cancel
          </Button>
          <Button onClick={handleClose} style={Btn1}>
            Block
          </Button>
        </DialogContent>
      </BootstrapDialog>
      <Modal
        open={modal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{ height: "10%" }}
      >
        <Box sx={style}>
          <Profile onClose={handleClosed} />
        </Box>
      </Modal>
    </>
  );
}
