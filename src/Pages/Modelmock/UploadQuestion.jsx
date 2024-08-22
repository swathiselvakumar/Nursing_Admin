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
import { useNavigate } from 'react-router-dom'
export default function UploadQuestion() {
  const {category} = useContext(navContext);
    const {mcqid} = useContext(navContext);
    const {Endpoint}=useContext(navContext);
    const Navigate=useNavigate();
const email=localStorage.getItem("userMail");
 console.log(category);
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

const handleDownloadTemplate = () => {
  // Create a new workbook
  const wb = XLSX.utils.book_new();
  
  // Define headers and data
  const headers = ["questionText", "option1", "option2", "option3", "option4", "answer"];
  const data = [headers]; // Start with headers row
  
  // Create worksheet
  const ws = XLSX.utils.aoa_to_sheet(data);
  
  // Add the worksheet to the workbook
  XLSX.utils.book_append_sheet(wb, ws, "Template");
  
  // Generate an XLSX file and initiate download
  XLSX.writeFile(wb, "template.xlsx");
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
        `${Endpoint}admin/post/A_InsertModelMockQuestion.php`,
        Data
      );
      Navigate(`/modelinstitution/${sno}`);
    } catch (error) {
      let errorMessage = "An unexpected error occurred.";
  
      if (error.response && error.response.data) {
        // Parse the JSON error data if it's a string
        try {
          const errorData = typeof error.response.data === 'string'
            ? JSON.parse(error.response.data)
            : error.response.data;
  
          if (typeof errorData === 'object' && errorData.error) {
            errorMessage = errorData.error; // Extract the 'error' field from the JSON
          } else {
            errorMessage = JSON.stringify(errorData); // Fallback if the 'error' field is not present
          }
        } catch (parseError) {
          // Handle JSON parsing errors
          errorMessage = "Failed to parse error response.";
        }
      } else {
        errorMessage = error.message;
      }
  
      alert("Error posting questions: " + errorMessage);
    }
  };

   
     
       

       
    const BreadcrumbItems = [
        { label: "Dashboard", path: PATH.DASHBOARD },
        
        { label: "Model Mock", path: PATH.MODELMOCK },
        { label: "Institution", path: PATH.MODELINSTITUTION },
        { label: "Add Question", path: PATH.ADDMOCK },


      ];
      const MainBox={
        backgroundColor:"#f6f6f6",
        width:"70vw",
        height:"40vh",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        margin:"30px"
      }
      const bodystyle={
        display:"flex",
        justifyContent:"center"
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
            <div style={{display:"flex",justifyContent:"space-evenly"}}>

            <button className="Submit1" onClick={handleDownloadTemplate}>Download Template</button>
            
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
            </div>
            
          </div>
        </div>
        
      </YEARMCQStyle>
    </div>
  );
}
