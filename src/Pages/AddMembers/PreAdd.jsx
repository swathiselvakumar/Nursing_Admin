import React from "react";
import { AlertBoxStyle } from "./style";
import PreDropdown from "./PreDropdown";
import { Typography } from "@mui/material";
import BreadcrumbsComp from "../../components/Common/BreadCrumbs";
import {PATH} from '../../constants/routeConstants'
import CustomBreadCrumbs from '../../components/Common/CustomBreadcrumbs'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { NavLink } from "react-router-dom";
function PreAdd() {
  const BreadcrumbItems = [
    { label: "Dashboard", path: PATH.DASHBOARD },
   
    { label: "Premium", path: PATH.PREMIUM },
    {label:"Add Members",path:PATH.PREADD}
  ];
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const Btn={
    border:"none",
    height:"40px",
    width:"80px",
    backgroundColor:"#1b4242",
    color:"white"
  }
  return (
    <AlertBoxStyle>
      <div style={{padding:"25px"}}>
      <CustomBreadCrumbs items={BreadcrumbItems} />
      </div>
        
      <Typography style={{textAlign:"center",paddingBottom:"10px"}}>ADD MEMBERS</Typography>
    <div className="TotalBox">
        <div className="alt-box">
          <div>
            <label htmlFor="name">Name </label>
            <br />
            <input type="text" className="textB"/>
          </div>
          <div>
          <label htmlFor="email">Email </label>
          <br />
          <input type="email" className="textB"/>
        </div>
         <div className="radioBtn">
          <span><input type="radio" name="A"/>&nbsp;&nbsp;Plan 1</span>
          <span><input type="radio" name="A"/>&nbsp;&nbsp;Plan 2</span>
         <span> <input type="radio" name="A"/>&nbsp;&nbsp;Plan 3</span>
          <span><input type="radio" name="A"/>&nbsp;&nbsp;Plan 4</span>
         </div>
          <button onClick={handleClickOpen}>Submit</button>
        </div>
        
      
    </div>
    <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        style={{display:"flex",justifyContent:"center"}}
      >
        
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
        <DialogContent dividers style={{height:"200px",width:"400px",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}} >
          <Typography style={{paddingBottom:"20px"}}>Successfully Completed</Typography>
          <NavLink to="/premium">
          <button style={Btn}>Done</button>
          </NavLink>
        </DialogContent>
      </Dialog>
    </AlertBoxStyle>
  );
}

export default PreAdd;
