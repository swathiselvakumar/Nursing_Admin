import React from "react";
import { AlertBoxStyle } from "./style";
import { Typography } from "@mui/material";
import {PATH} from '../../constants/routeConstants'
import CustomBreadCrumbs from '../../components/Common/CustomBreadcrumbs'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { NavLink } from "react-router-dom";
import ProfileImg from '../../assets/images/profile.svg'
import Layer1 from '../../assets/icons/layer1.png'
import Gpay from '../../assets/icons/gpay.png'
import Paytm from '../../assets/icons/paytm.png'
import Upi from '../../assets/icons/upi.png'
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
  const procontent={
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",height:"30px",padding:"5px",fontSize:"14px",borderRadius:"5px",width:"80px",textAlign:"center",alignSelf:"flex-start",
  }
  const pro={
    display:"flex",justifyContent:"space-between",alignItems:"center"
  }
  const firstbox={
    width:"400px",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",borderRadius:"5px",
    padding:"20px"
  }
  const boxdesign={
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    height:"27px",
    width:"60px",
    borderRadius:"5px",
    textAlign:"center",
    padding:"2px"
  }
  const boxdesign1={
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    height:"27px",
    width:"85px",
    borderRadius:"5px",
    textAlign:"center",
    padding:"2px"
    
  }
  const dialogbox={
  overflowX:"auto",
    height:"700px",
    width:"100%"
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
          <button onClick={handleClickOpen}>Pay Now</button>
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
        < DialogTitle >
        <Typography style={{textAlign:"center"}}>Payment</Typography>
        </DialogTitle>
        <DialogContent dividers style={dialogbox}  >
          <div >
            <div style={firstbox}>
              <div style={pro} >
              <img src={ProfileImg} height="120px"/>
              <Typography style={procontent} ><img src={Layer1}/>&nbsp;22,000</Typography>
              </div>
              <Typography style={{fontSize:"12px",paddingLeft:"20px",paddingBottom:"20px"}}>@santhosh123</Typography>
              <div style={{display:"flex",justifyContent:"space-between"}}>
                <Typography style={{fontSize:"14px"}}><span style={{fontWeight:600}}>Paid Date :</span> 10/11/2023</Typography>
                <Typography style={{fontSize:"14px"}}><span style={{fontWeight:600}}>Expiry Date :</span> 10/11/2023</Typography>

              </div>
              <div style={{display:"flex",justifyContent:"space-between",marginTop:"20px"}}>
                <div style={boxdesign}>
                <img src={Gpay}/>
                </div>
                <div style={boxdesign}>
                <img src={Paytm}/>
                </div>
              <div style={boxdesign}>
              <img src={Upi}/>
              </div>
              <div style={boxdesign1}>
                <Typography style={{fontSize:"12px"}}>Credit/Debit</Typography>
              </div>
              </div>
            </div>
            <div>
            {/* <div style={firstbox}>
              <div style={pro} >
              <img src={ProfileImg} height="120px"/>
              <Typography style={procontent} ><img src={Layer1}/>&nbsp;22,000</Typography>
              </div>
              <Typography style={{fontSize:"12px",paddingLeft:"20px",paddingBottom:"20px"}}>@santhosh123</Typography>
              <div style={{display:"flex",justifyContent:"space-between"}}>
                <Typography style={{fontSize:"14px"}}><span style={{fontWeight:600}}>Paid Date :</span> 10/11/2023</Typography>
                <Typography style={{fontSize:"14px"}}><span style={{fontWeight:600}}>Expiry Date :</span> 10/11/2023</Typography>

              </div>
              <div style={{display:"flex",justifyContent:"space-between",marginTop:"20px"}}>
                <div style={boxdesign}>
                <img src={Gpay}/>
                </div>
                <div style={boxdesign}>
                <img src={Paytm}/>
                </div>
              <div style={boxdesign}>
              <img src={Upi}/>
              </div>
              <div style={boxdesign1}>
                <Typography style={{fontSize:"12px"}}>Credit/Debit</Typography>
              </div>
              </div>
            </div> */}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </AlertBoxStyle>
  );
}

export default PreAdd;
