import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import { TableStdStyle } from "./style";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import { Typography,Button } from "@mui/material";
import Rong from '../../assets/icons/rong.jpg'
import { styled } from '@mui/material/styles';
import Delete from '../../assets/icons/delete.jpeg'
// import { AlertStyle } from "./style";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
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
  createData(1, "Divya", "divya@gmail.com", "1 / 05 /2023", <img src={Delete} height="20px"/>),
  createData(2, "Divya", "divya@gmail.com", "1 / 05 /2023", <img src={Delete} height="20px"/>),
  createData(3, "Divya", "divya@gmail.com", "1 / 05 /2023", <img src={Delete} height="20px"/>),
  createData(4, "Divya", "divya@gmail.com", "1 / 05 /2023", <img src={Delete} height="20px"/>),
  createData(5, "Divya", "divya@gmail.com", "1 / 05 /2023", <img src={Delete} height="20px"/>),
  createData(6, "Divya", "divya@gmail.com", "1 / 05 /2023", <img src={Delete} height="20px"/>),
  createData(7, "Divya", "divya@gmail.com", "1 / 05 /2023", <img src={Delete} height="20px"/>),
  createData(8, "Divya", "divya@gmail.com", "1 / 05 /2023", <img src={Delete} height="20px"/>),
  createData(9, "Divya", "divya@gmail.com", "1 / 05 /2023", <img src={Delete} height="20px"/>),
  createData(10, "Divya", "divya@gmail.com", "1 / 05 /2023", <img src={Delete} height="20px"/>),
];

export default function StdTb() {
  const [open, setOpen] =useState(false)

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
  return (
    <> 
    <TableStdStyle> 
        <div style={{margin:"10px"}}>
        <TableContainer style={{borderRadius:"10px",padding:"30px"}} component={Paper}>
          <Table sx={{ minWidth: 650,}} aria-label="simple table">
            <TableHead>
              <TableRow className="tb-row ">
                <TableCell className="head"  >Sno</TableCell>
                <TableCell className="head" align="left">Sname</TableCell>
                <TableCell className="head" align="left">Email Id</TableCell>
                <TableCell className="head" align="left">Member Since</TableCell>
                <TableCell className="head" align="center">action</TableCell>
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
                  <TableCell align="left">{row.calories}</TableCell>
                  <TableCell align="left">{row.fat}</TableCell>
                  <TableCell align="left">{row.carbs}</TableCell>
                  <TableCell align="center" onClick={handleClickOpen}>{row.protein}</TableCell>
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
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent sx={{textAlign:"center"}}>
            <img src={Rong} height="25px" style={{marginTop:"-30px"}}/><br/>
            Are You sure ?<br/>
            Do you realy want to delete ?<br/>
            <Button onClick={handleClose} style={Btn}>Cancel</Button>
            <Button onClick={handleClose}  style={Btn1}>Delete</Button>
        </DialogContent>
        
      </BootstrapDialog>
    </>
  );
}
