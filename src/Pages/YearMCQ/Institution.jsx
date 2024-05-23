import React, { useEffect, useState } from "react";
import BreadcrumbsComp from "../../components/Common/BreadCrumbs";
import { Container, Row, Col } from "react-bootstrap";
import institution from "../../assets/images/vadakk.png";
import { Typography } from "@mui/material";
import Delete from "../../assets/icons/delete.jpeg";
import "./CardStyle.css";
import { NavLink, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { PATH } from "../../constants/routeConstants";
import CustomBreadCrumbs from "../../components/Common/CustomBreadcrumbs";
import { useContext } from "react";
import { navContext } from "../../context/navContext";
import axios from "axios";
import * as XLSX from "xlsx";
import DeleteIcon from "@mui/icons-material/Delete";


export default function YearInstitution() {
  const BreadcrumbItems = [
    { label: "Dashboard", path: PATH.DASHBOARD },
    { label: "YearMCQ", path: PATH.YEARMCQ },
    { label: "Institution", path: PATH.YEARINSTITUTION },
  ];
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [openFirstDialog, setOpenFirstDialog] = useState(false);
  const [openSecondDialog, setOpenSecondDialog] = useState(false);
   const[paper,setPaper]=useState([]);
  const [open, setOpen] = useState(false);
const email=localStorage.getItem("userMail");

  const { sno} = useParams();

  const handleChange = (event) => {
    setYear(event.target.value);
  };

  const handleChanged = (event) => {
    setMonth(event.target.value);
  };

  const handleCloseFirstDialog = () => {
    setOpenFirstDialog(false);
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

  const [Data, setData] = useState(() => {
    const storedData = localStorage.getItem("selectedFileData");
    return {
      adminId: email,
      institutionId: "",
      year: "",
      month: "",
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
        year: year,
        month: month,
        questions: excelData,
      });
    };

    reader.readAsArrayBuffer(file);
  }

  useEffect(() => {
    if (Data.questions.length > 0) {
      SendApi();
    }
    response()
  }, [Data.questions]);

  const SendApi = async () => {
    try {
      const response = await axios.post(
        "https://vebbox.in/Nursing/controllers/api/admin/post/A_InsertPmcqQuestion.php",
        Data
      );
      setMonth("");
      setYear("");
     
      window.location.href = `/yearinstitution/${sno}`;
    } catch (error) {
      console.error("Error posting questions:", error);
    }
  };

 const response =async()=>
 {
  try 
  {
    const res = await axios.post(
      "https://vebbox.in/Nursing/controllers/api/admin/get/A_ViewPmcqPaper.php",
      {
        adminId:email,
        id: sno,
      }
      
    );
     setPaper(res.data);
  }
  catch(error)
  {
      console.error("Error adding new item:", error);
  }
 }
 const CardDelete = async (sno) => {
  // setclick(true);
  try {
    const res = await axios.delete(
      "http://localhost/_Nursing_final/controllers/api/admin/delete/A_deletePMCQPaper.php",
      {
        data: {
          adminId:email,
          paperId: sno,
        },
      }
    );
    response();
  } catch (error) {
    console.error("Error fetching course data:", error);
  }
};

useEffect(() => {
  response();
}, []);

  return (
    <div style={{ backgroundColor: "white", padding: "10px" }}>
      <div style={{ padding: "25px" }}>
        <CustomBreadCrumbs items={BreadcrumbItems} />
      </div>
      <Container fluid style={{ paddingLeft: "27px", paddingRight: "27px" }}>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} className="title1">
            <div>
              <img src={institution} height="40px" />
            </div>
            &nbsp;&nbsp;
            <div>
              <Typography style={{ fontWeight: 700, paddingTop: "10px" }}>
                Institution 1
              </Typography>
            </div>
          </Col>
        </Row>
      </Container> 
      <div className="TotalBox">
        
            <Container fluid className="MainBox">
              <Row >
                {Array.isArray(paper) && paper.map((item, index) => {
                  return (
                    <Col  xs={12} sm={12} md={6} lg={4} xl={4}  key={item.sno}  style={{padding:'10px'}}>
                    <div className="box">
                      <NavLink
                        to={`/uploadtest/${item.institution_id}/${item.sno}`}
                        style={{ textDecoration: "none" }}
                      >
                        <button
                          style={{
                            backgroundColor: "white",
                            border: "none",
                            paddingTop: "5px",
                          }}
                        >
                          {item.year} {item.month}  Paper
                        </button>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                      </NavLink>
                      <button onClick={() => CardDelete(item.sno)} className="delete" style={{border:"none",backgroundColor:"white",height:"20px"}}><DeleteIcon/></button>
                    </div>
                  </Col>
                  )
                })}
              </Row>
            </Container>
          
        <div className="BtnBox">
          <button className="Btn" onClick={handleOpenFirstDialog}>
            Upload Questions
          </button>
        </div>
      </div>
      <Dialog
        // onClose={handleCloseFirstDialog}
        open={openFirstDialog}
        aria-labelledby="customized-dialog-title"
        // open={open}
        style={{}}
      >
        <DialogTitle
          sx={{ m: 0, p: 2 }}
          id="customized-dialog-title"
          style={{
            fontWeight: 600,
            textAlign: "center",
            backgroundColor: "#f6f6f6",
          }}
        >
          Add Academic Year
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleCloseFirstDialog}
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
            backgroundColor: "#f6f6f6",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography>Choose Year</Typography>
          <div style={{ display: "flex" }}>
            <FormControl
              sx={{ m: 1, minWidth: 150, backgroundColor: "white" }}
              size="small"
            >
              <InputLabel id="demo-select-small-label">Year</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={year}
                label="Year"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={2010}>2010</MenuItem>
                <MenuItem value={2011}>2011</MenuItem>
                <MenuItem value={2012}>2012</MenuItem>
                <MenuItem value={2013}>2013</MenuItem>
                <MenuItem value={2014}>2014</MenuItem>
                <MenuItem value={2016}>2016</MenuItem>
                <MenuItem value={2017}>2017</MenuItem>
                <MenuItem value={2018}>2018</MenuItem>
                <MenuItem value={2019}>2019</MenuItem>
                <MenuItem value={2020}>2020</MenuItem>
                <MenuItem value={2021}>2021</MenuItem>
                <MenuItem value={2022}>2022</MenuItem>
                <MenuItem value={2023}>2023</MenuItem>
                <MenuItem value={2024}>2024</MenuItem>
                <MenuItem value={2025}>2025</MenuItem>
                <MenuItem value={2026}>2026</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              sx={{ m: 1, minWidth: 150, backgroundColor: "white" }}
              size="small"
            >
              <InputLabel id="demo-select-small-label">Month</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={month}
                label="Month"
                onChange={handleChanged}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="January">January</MenuItem>
                <MenuItem value="February">February</MenuItem>
                <MenuItem value="March">March</MenuItem>
                <MenuItem value="April">April</MenuItem>
                <MenuItem value="May">May</MenuItem>
                <MenuItem value="June">June</MenuItem>
                <MenuItem value="July">July</MenuItem>
                <MenuItem value="August">August</MenuItem>
                <MenuItem value="September">September</MenuItem>
                <MenuItem value="Octobe">October</MenuItem>
                <MenuItem value="November">November</MenuItem>
                <MenuItem value="December">December</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <button
              className="Submit"
              autoFocus
              onClick={handleOpenSecondDialog}
            >
              Submit
            </button>
          </div>
        </DialogContent>
      </Dialog>

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
            style={{ textAlign: "center", alignContent: "center",}}
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
    </div>
  );
}
