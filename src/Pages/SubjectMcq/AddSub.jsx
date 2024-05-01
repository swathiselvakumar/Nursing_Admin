import React, { useEffect, useState } from 'react'
import BreadcrumbsComp from '../../components/Common/BreadCrumbs'
import './style.css'
import { Typography } from '@mui/material'
import { Container,Row,Col } from 'react-bootstrap'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { PATH } from '../../constants/routeConstants'
import CustomBreadCrumbs from '../../components/Common/CustomBreadcrumbs'
import { useContext } from 'react'
import { navContext } from '../../context/navContext'
import axios from 'axios'
import * as XLSX from "xlsx";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function AddSub() {

  const Navigate = useNavigate()

  const {sno , lastId}=useParams();
  console.log(lastId);
  const[input,setInput]=useState('');
  const [category, setcategory] = useState('');
const [index, setIndex] = useState(0);
  const handleChange = (event) => {
    setcategory(event.target.value);
  };
//  const {sno}=useParams()

  const { setInput: setNavInput } = useContext(navContext);
  //  const { input, setInput } = useContext(navContext);
  const BreadcrumbItems = [
    { label: "Dashboard", path: PATH.DASHBOARD },
    
    { label: "SubjectMCQ", path: PATH.SUBJECTMCQ },
    { label: "Subject", path: PATH.SUBINSTITUTION },
    { label: "Add Subject", path: PATH.ADDSUB },

  ];
  const [openBtn, setOpenBtn] = React.useState(false);
  const handleClickOpenBtn =  () => {
    setOpenBtn(true);
    
  };
   const handleClickcloseBtn = () => {
     setOpenBtn(false);
     console.log(input);
   };
  const handlechange =(event)=>
  {
setInput(event.target.value)
setNavInput(event.target.value)
  console.log(`Input ID: ${event.target.id}`);
  }
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
        subjectId: sno,
        paperName: input,
        category:category,
        // month: month,
        questions: excelData,
      });
      console.log(excelData);
    };

    reader.readAsArrayBuffer(file);
  }

  
const [Data, setData] = useState(() => {
  const storedData = localStorage.getItem("selectedFileData");
  return {
    
      adminId: "nandinivebbox@gmail.com",
      subjectId: sno,
      paperName :input,
      category:category,
    
    questions: storedData ? JSON.parse(storedData) : [],
  };
});
 
  const SendApi = async () => {
    try {
      const response = await axios.post(
        "https://vebbox.in/Nursing/controllers/api/admin/post/A_InsertSubWiseQuestion.php",
        Data
      );

      // setInput("");
      // setYear("");
      console.log(lastId);
      Navigate(`/uploadtestsub/${sno}/${lastId}`);
      // window.location.href = `/uploadtestsub/${sno}/${lastId}`;
    } catch (error) {
      console.error("Error posting questions:", error);
    }
  };
  useEffect(() => {
    if (Data.questions.length > 0) {
      SendApi();
    }
    // Send();
    // response();
  }, [Data.questions]);
  // const inputs =(event)=>
  // {
  //   setInput(event.target.value)
  //   setNavInput(event.target.value);

  // }
  // const handleCloseBtn = () => {
  //   setOpenBtn(false);
  // };
  return (
    <div style={{ backgroundColor: "white", height: "90vh" }}>
      <div style={{ padding: "25px" }}>
        <CustomBreadCrumbs items={BreadcrumbItems} />
      </div>
      <Container className="Main">
        <Row>
          <Col>
            <div className="Sub">
              <Typography
                style={{
                  fontWeight: 600,
                  textAlign: "center",
                  paddingTop: "10px",
                }}
              >
                Add Questions
              </Typography>
              <hr style={{ border: "1px solid black" }} />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100px",
                }}
              >
                <Typography>Model MCQ</Typography>
                <input
                  // key={index}
                  type="text"
                  className="Number"
                  onChange={handlechange}
                  value={input}
                  // id={`input-${index}`}
                />
              </div>
              <FormControl
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "200px",
                  width: "220px",
                  marginBottom: "20px",
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
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "200px",
                }}
              >
                <button className="SubBtn" onClick={handleClickOpenBtn}>
                  SUBMIT
                </button>
                <NavLink to={`/subinstitution/${input}`}>
                  <button className="SubBtn1">CANCEL</button>
                </NavLink>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Dialog
        // onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={openBtn}
      >
        <IconButton
          aria-label="close"
          onClick={handleClickcloseBtn}
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
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <button className="Submit1">Download Template</button>

          <label
            htmlFor="fileInput"
            style={{
              border: "none",
              backgroundColor: "#1b4242",
              color: "white",
              height: "60px",
              // width: "100px",
              fontWeight: "500",
              textTransform: "uppercase",
              fontFamily: "Roboto, sans-serif",
              margin: "40px",
              textAlign: "center",
              // justifyContent:'center',
              // alignItems:'center',
              alignContent: "center",
            }}
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
          {/* </NavLink> */}
        </DialogContent>
      </Dialog>
    </div>
  );
}
