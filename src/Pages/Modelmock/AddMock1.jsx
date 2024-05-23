import React, { useEffect, useState } from 'react'
import { YEARMCQStyle } from '../YearMCQ/style'
import { Button, InputLabel, MenuItem, Select, Typography } from '@mui/material'
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
import axios from 'axios'
import * as XLSX from "xlsx";
import FormControl from "@mui/material/FormControl";

import { useContext } from 'react'
import { navContext } from '../../context/navContext'
export default function AddMock1() {
  const [category, setcategory] = useState("");
  const { mcqname } = useContext(navContext);
  
    const [open, setOpen] = React.useState(false);
    const [duration, setDuration] = React.useState('');
    const [time, setTime] = React.useState('');
    const { stage, setStage } = useContext(navContext);
    const { mcq, setMcq } = useContext(navContext);
    const [openFirstDialog, setOpenFirstDialog] = useState(false);
    const [openSecondDialog, setOpenSecondDialog] = useState(false);
    const [mcqid, setMcqid] = useState('');
const email=localStorage.getItem("userMail");

    // console.log(sno);
  const handleCloseFirstDialog = () => {
    setOpenFirstDialog(false);
  };
 const handleChange = (event) => {
   setcategory(event.target.value);
 };
  const handleCloseSecondDialog = () => {
    setOpenSecondDialog(false);
  };

  const handleOpenSecondDialog = () => {
    setOpenFirstDialog(false);
    setOpenSecondDialog(true);
  };

  const handleOpenFirstDialog = () => {
    setOpenFirstDialog(true);
  };

  const fetchmcqid = async () => {
    try {
      const res = await axios.post(
        "http://localhost/_Nursing_final/controllers/api/admin/get/A_ViewMCQId.php",
        {
          adminId: email,
          mcqname:mcqname,
         
        }
      );

      // Assuming `res.data` contains the object directly, not an array
      const mcqId = res.data.sno;
      setMcqid(mcqId);
      console.log(mcqid);
      setOpen(true);
    } catch (error) {
      console.error("Error fetching:", error);
    }
  };

const { sno ,id} = useParams();
const [Data, setData] = useState(() => {
  
  

  const storedData = localStorage.getItem("selectedFileData");
  return {
    adminId:email,
    institutionId: sno,
    stageId: id, 
    mcqId: mcqid,
    category: category,
    questions: storedData ? JSON.parse(storedData) : [],
  };
});
  function handleFile(e) {
    
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      
      const data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const excelData = XLSX.utils.sheet_to_json(sheet);

      setData({
        ...Data,
        institutionId: sno, 
        stageId: id,
        mcqId: mcqid,
        category: category,
        questions: excelData,
      });
    };

    reader.readAsArrayBuffer(file);
  }

  useEffect(() => {
    if (Data.questions.length > 0) {
      SendApi();
    }
   
  }, [Data.questions]);

  const SendApi = async () => {
    
    try {
      const response = await axios.post(
        "https://vebbox.in/Nursing/controllers/api/admin/post/A_InsertModelMockQuestion.php",
        Data
      );
    } catch (error) {
      console.error("Error posting questions:", error);
    }
  };

    const handleClickOpen =async () => {
      
      handleOpenSecondDialog();
          try{
             const currentDate = new Date().toISOString().split("T")[0];
            const res = await axios.post(
              "https://vebbox.in/Nursing/controllers/api/admin/post/A_InsertModelMockMeta.php",
              {
                adminId: email,
                institutionId: sno,
                stageId: id,
                mcqName: mcqname,
                date: currentDate,
                duration:time,
                category:category
              }
            );
             console.log("New item added:", res.data);
              
                setDuration("");
                setTime('');
                fetchmcqid();
               
          }
          catch (error) {
      console.error("Error fetching data:", error);
        }
      };
      const handleClose = () => {
        setOpen(false);
      };
       const durationchange = (event) => {
        //  setTime(event.target.value);
         setDuration(event.target.value);

       };
       const timechange = (event) => {
         setTime(event.target.value);
        //  setDuration(event.target.value);
       };

       
    const BreadcrumbItems = [
        { label: "Dashboard", path: PATH.DASHBOARD },
        
        { label: "Model Mock", path: PATH.MODELMOCK },
        { label: "Institution", path: PATH.MODELINSTITUTION },
        { label: "Add Question", path: PATH.ADDMOCK },


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
    height:"30px",
    width:"230px",
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
                  <label>Duration</label>
                </div>
                <div>
                  <select style={TextB} value={time} onChange={timechange}>
                    <option value="">Select Time</option>
                    {[
                      { label: "1 hour", value: "60" },
                      // { label: "1/2 hour", value: "30" },
                      { label: "2 hour", value: "120" },
                      // { label: "2 1/2 hour", value: "150" },
                      { label: "3 hour", value: "180" },
                    ].map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <FormControl
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "146px",
                  width: "228px",
                  marginTop: "10px",
                }}
              >
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={category}
                  label="Category"
                  onChange={handleChange}
                >
                  <MenuItem value="standard">Standard</MenuItem>
                  <MenuItem value="premium">Premium</MenuItem>
                </Select>
              </FormControl>
             
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
          // onClose={handleCloseSecondDialog}
          open={openSecondDialog}
          aria-labelledby="customized-dialog-title"
          // open={openBtn}
        >
          <IconButton
            aria-label="close"
            onClick={handleCloseSecondDialog}
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
          >
            <button className="Submit1">Download Template</button>
            
            <label
              htmlFor="fileInput"
              style={{
              
                textAlign: "center",
               
                alignContent: "center",
              }}
              className="Submit1"
            >
              Upload Questions
            </label>
            {/* This hidden input is used to select the file */}
            <input
              type="file"
              id="fileInput"
              onChange={handleFile}
              style={{
                display: "none",
              }}
              // className="submit1"
            />
            {/* <button className="Submit1">Download Template</button> */}

            {/* </NavLink> */}
          </DialogContent>
        </Dialog>
      </YEARMCQStyle>
    </div>
  );
}
