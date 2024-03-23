import React from "react";
import { AlertBoxStyle } from "./style";
// import BasicSelect from "./Dropdown";
import { Typography } from "@mui/material";
import BreadcrumbsComp from "../../components/Common/BreadCrumbs";
import { Container,Row,Col } from "react-bootstrap";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import {PATH} from '../../constants/routeConstants'
import CustomBreadCrumbs from '../../components/Common/CustomBreadcrumbs'
// import getLocalStorage from '../../utils/helperFunc'
import { NavLink } from "react-router-dom";
function StAdd() {
  const BreadcrumbItems = [
    { label: "Dashboard", path: PATH.DASHBOARD },
   
    { label: "Standard", path: PATH.STANDARD },
    {label:"Add Members",path:PATH.STADD}
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
         
      <Typography style={{textAlign:"center",}}>ADD MEMBERS</Typography>
      <Container>
        <Row>
          <Col>
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
          
          <button onClick={handleClickOpen}>Submit</button>
        </div>
        
      
    </div>      
          </Col>
        </Row>
      </Container>
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
          <NavLink to="/standard">
          <button style={Btn}>Done</button>
          </NavLink>
        </DialogContent>
      </Dialog>
    
    </AlertBoxStyle>
  );
}

export default StAdd;
