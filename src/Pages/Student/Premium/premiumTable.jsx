import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import { TableStdStyle } from "../../StudentTable/style";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import { Typography,Button } from "@mui/material";
import Rong from '../../../assets/icons/rong.jpg'
import { styled } from '@mui/material/styles';
// import Delete from '../../assets/icons/delete.jpeg'
import Block from '../../../assets/icons/block.png'
// import { AlertStyle } from "./style";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Profile from "../../Profile";

function createData(name, calories, fat, carbs,date, protein) {
  return { name, calories, fat, carbs,date, protein };
}
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
    width:"400px"
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(2),
  },
}));

const rows = [
  createData(1, "Divya", "divya@gmail.com", "1 / 05 /2023", "1 / 05 /2023", <img src={Block} height="20px"/>),
  createData(2, "Divya", "divya@gmail.com", "1 / 05 /2023", "1 / 05 /2023", <img src={Block} height="20px"/>),
  createData(3, "Divya", "divya@gmail.com", "1 / 05 /2023", "1 / 05 /2023", <img src={Block} height="20px"/>),
  createData(4, "Divya", "divya@gmail.com", "1 / 05 /2023", "1 / 05 /2023", <img src={Block} height="20px"/>),
  createData(5, "Divya", "divya@gmail.com", "1 / 05 /2023", "1 / 05 /2023", <img src={Block} height="20px"/>),
  createData(6, "Divya", "divya@gmail.com", "1 / 05 /2023", "1 / 05 /2023", <img src={Block} height="20px"/>),
  createData(7, "Divya", "divya@gmail.com", "1 / 05 /2023", "1 / 05 /2023", <img src={Block} height="20px"/>),
  createData(8, "Divya", "divya@gmail.com", "1 / 05 /2023", "1 / 05 /2023", <img src={Block} height="20px"/>),
  createData(9, "Divya", "divya@gmail.com", "1 / 05 /2023", "1 / 05 /2023", <img src={Block} height="20px"/>),
  createData(10, "Divya", "divya@gmail.com", "1 / 05 /2023", "1 / 05 /2023", <img src={Block} height="20px"/>),
];

export default function PremiumTb() {
  const [open, setOpen] =useState(false)
  const [modal,setModal]=useState(false)
const handleClickOpens = () => {
  setModal(true);
};
 const handleClosed = () => {
   setModal(false);
 };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const Btn={
    backgroundColor:"white",
    color:"black",
    border:"1px solid black",
    width:"100px",
    marginTop:"20px"
  }
  const Btn1={
    backgroundColor:"red",
    color:"white",
    marginLeft:"10px",
    width:"100px",
    marginTop:"20px"
  }
  const style = {
    position: "absolute",
    // top: '50%',
    // left: '50%',
    transform: "translate(5%, 5%)",
    // width: 400,
    bgcolor: "background.paper",
    // border: '2px solid #000',
    // boxShadow: 24,
    p: 4,
    width: "90%",
    // height:'92%'
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
                {rows.map((row) => (
                  <TableRow
                    className="tb-row"
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      onClick={handleClickOpens}
                    >
                      {row.name}
                    </TableCell>
                    <TableCell align="left" onClick={handleClickOpens}>
                      {row.calories}
                    </TableCell>
                    <TableCell align="left" onClick={handleClickOpens}>
                      {row.fat}
                    </TableCell>
                    <TableCell align="left" onClick={handleClickOpens}>
                      {row.carbs}
                    </TableCell>
                    <TableCell align="left" onClick={handleClickOpens}>
                      {row.date}
                    </TableCell>
                    <TableCell align="center" onClick={handleClickOpen}>
                      {row.protein}
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
        // onClose={handleClose}
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
