import React, { useEffect, useState } from 'react'
import BreadcrumbsComp from '../../components/Common/BreadCrumbs'
import '../SubjectMcq/style.css'
import { InputLabel, MenuItem, Select, Typography } from '@mui/material'
import { Container,Row,Col} from 'react-bootstrap'
import { NavLink, useParams } from 'react-router-dom'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { PATH } from '../../constants/routeConstants'
import CustomBreadCrumbs from '../../components/Common/CustomBreadcrumbs'
import FormControl from "@mui/material/FormControl";
import axios from 'axios'
import * as XLSX from "xlsx";

export default function AddNonNursing() {
  const BreadcrumbItems = [
    { label: "Dashboard", path: PATH.DASHBOARD },
    
    { label: "Non Nursing", path: PATH.NONNURSING },
    { label: "Aptitude", path: PATH.NONINSTITUTION },
    { label: "Add Question", path: PATH.ADDNONNURSING },

  ];
  const [openBtn, setOpenBtn] = React.useState(false);
  const [category, setcategory] = useState("");
  const [mcq,setMcq]=useState('');
  const modelchange=(event)=>
  {
    setMcq(event.target.value)
  }
 const handleChange = (event) => {
   setcategory(event.target.value);
 };
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
       paperName: mcq,
       category: category,
       categoryId: "5",
       // month: month,
       questions: excelData,
     });
     console.log(excelData);
   };

   reader.readAsArrayBuffer(file);
 }
  const handleClickOpenBtn = () => {
    setOpenBtn(true);
  };
  // const handleCloseBtn = () => {
  //   setOpenBtn(false);
  // };
  const {sno}=useParams();
  const [Data, setData] = useState(() => {
    const storedData = localStorage.getItem("selectedFileData");
    return {
      adminId: "nandinivebbox@gmail.com",
      subjectId: sno,
      paperName: mcq,
      category: category,
      categoryId: "5",
      questions: storedData ? JSON.parse(storedData) : [],
    };
  });

  const SendApi = async () => {
    try {
      const response = await axios.post(
        "https://vebbox.in/Nursing/controllers/api/admin/post/A_InsertNonNursingQuestion.php",
        Data
      );
      // setInput("");
      // setYear("");
      window.location.href = `/uploadtestsub/${sno}`;
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
                  type='text'
                  className="Number"
                  value={mcq}
                  onChange={modelchange}
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
                <NavLink to="/subinstitution">
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
          // onClick={handleCloseBtn}
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
