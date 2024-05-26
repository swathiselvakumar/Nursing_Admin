import React, { useState } from 'react'
import { YEARMCQStyle } from '../YearMCQ/style'
import { Button, Typography } from '@mui/material'
import CustomBreadCrumbs from '../../components/Common/CustomBreadcrumbs'
import { PATH } from '../../constants/routeConstants'
import AlertIcon from '../../assets/icons/alert.png'
import Tick from '../../assets/icons/tick1.png'
import { NavLink, useParams } from 'react-router-dom'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
// import { useLocation } from "react-router-dom";
import { useContext } from 'react'
import { navContext } from '../../context/navContext'
// import { zhTW } from '@mui/material/locale'
import axios from 'axios'
export default function AddMCQ1() {
    const [open, setOpen] = React.useState(false);
    const [description, setDescription] = useState();
    const [instruction, setInstruction] = useState();
    const { name, setName } = useContext(navContext);
    const {Endpoint}=useContext(navContext);
    const email=localStorage.getItem("userMail");
      // const location = useLocation();
  //  const location = useLocation();
  // const location = useLocation();
// const {name} = useParams();
// console.log(name);
      // console.log("Received prop:", location.state.stateProp);
// console.log(name);
    const handleClickOpen = async() => {
      
        setOpen(true);
          try {
         const response = await axios.post(
           `${Endpoint}admin/post/A_InsertPmcqInstitution.php`,
           {
             adminId:email,
             name: name,
             instruction: instruction,
             desc: description,
             // You can include additional data here as needed
           }
         );
      console.log("New item added:", response.data);
      //  setName("");
       setDescription("");
       setInstruction(""); 
       // Clear input fields
      console.log(name);

    } catch (error) {
      console.error("Error adding new item:", error);
    }
      };
      const handleClose = () => {
        setOpen(false);
      };
       const handlechangedescription = (event) => {
         setDescription(event.target.value);
       };

       const handleChangeinstruction = (event) => {
         setInstruction(event.target.value);
       };

      
      //  const handleNextClick = () => {
      //    const planDetails = { description,instruction};
      //    console.log("Plan Details:", planDetails);
      //    setSuccessDialogOpen(true);
      //  };
    const BreadcrumbItems = [
        { label: "Dashboard", path: PATH.DASHBOARD },
        
        { label: "YearMCQ", path: PATH.YEARMCQ },
        // { label: "Institution", path: PATH.YEARINSTITUTION },
        { label: "Add Institution", path: PATH.ADDMCQ },


      ];
      const MainBox={
        backgroundColor:"#f6f6f6",
        width:"50vw",
        height:"90vh",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        margin:"30px"
      }
      const bodystyle={
        display:"flex",
        justifyContent:"center"
      }
      const second={
        backgroundColor:"#707070",
        height:"50px",
        width:"50px",
        borderRadius:"50%",
        marginLeft:"10px"
    }
   const div1={
      display:"flex",
      justifyContent:"center",
      marginTop:"30px",
      
  }
  const step={
      paddingTop:"3px",
      width:"210px",
      display:"flex",
      justifyContent:"space-between"
  }
  const MainText={
    display:"flex",
   justifyContent:"center",
   alignItems:"center",
   flexDirection:"column",
   paddingTop:"50px",
  }
  const TextB={
    backgroundColor:"#DEE2DF",
    border:"none",
    borderRadius:"5px",
    outline:"none",
    paddingLeft:"10px",
    // height:"30px",
    // width:"230px",
    fontSize:"12px"
  }
  const btn1={
    border:"none",
    backgroundColor:"#183A1D",
    color:"white",
    height:"35px",
    width:"230px",
    borderRadius:"5px"
  }
  const btn2={
    border:"none",
    backgroundColor:"white",
    color:"black",
    height:"35px",
    width:"230px",
    borderRadius:"5px",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
  }
  return (
    <div>
      <YEARMCQStyle>
        <div style={{ padding: "20px" }}>
          <CustomBreadCrumbs items={BreadcrumbItems} />
        </div>
        <div style={bodystyle}>
          <div style={MainBox}>
            <Typography
              style={{
                fontWeight: 700,
                paddingTop: "10px",
                textAlign: "center",
              }}
            >
              Add Question
            </Typography>
            <hr style={{ border: "1px solid black" }} />
            <div style={div1}>
              <div className="circle">
                <div className="inner-circle">
                  <img src={Tick} style={{ margin: "6px" }} />
                </div>
              </div>
              <div className="line"></div>
              <div className="circle">
                <div className="inner-circle"></div>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={step}>
                <Typography style={{ fontSize: "12px" }}>Step 1</Typography>
                <Typography style={{ fontSize: "12px" }}>Step 2</Typography>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={step}>
                <Typography style={{ fontSize: "12px" }}>
                  In Progress
                </Typography>
                <Typography style={{ fontSize: "12px" }}>Pending</Typography>
              </div>
            </div>

            <div style={MainText}>
              <div
                style={{
                  marginTop: "15px",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "380px",
                }}
              >
                <div>
                  <label>Institution Description</label>
                </div>
                {/* <div><img src={AlertIcon}/></div> */}
                <textarea
                  rows={4}
                  cols={30}
                  style={TextB}
                  placeholder="Add Description"
                  onChange={handlechangedescription}
                  value={description}
                ></textarea>
              </div>
              <div
                style={{
                  marginTop: "15px",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "380px",
                }}
              >
                <div>
                  <label>Instruction</label>
                </div>
                {/* <div><img src={AlertIcon}/></div> */}
                <textarea
                  rows={4}
                  cols={30}
                  style={TextB}
                  placeholder="Add Instruction"
                  onChange={handleChangeinstruction}
                  value={instruction}
                ></textarea>
              </div>
            </div>
            <div>
              <div
                style={{
                  marginTop: "30px",
                  display: "flex",
                  justifyContent: "end",
                  width: "530px",
                }}
              >
                <button onClick={handleClickOpen} style={btn1}>
                  SUBMIT
                </button>
              </div>
            </div>
            <div>
              <div
                style={{
                  marginTop: "10px",
                  display: "flex",
                  justifyContent: "end",
                  width: "530px",
                }}
              >
                <NavLink to="/addmock">
                  <button style={btn2}>CANCEL</button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <Dialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
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
          <DialogContent
            dividers
            style={{ display: "flex", justifyContent: "space-between" }}
            onClick={handleClose}
          >
           <NavLink to="/yearmcq">
           <button className="Submit1">ok</button>
           </NavLink>
          </DialogContent>
        </Dialog>
      </YEARMCQStyle>
    </div>
  );
}
