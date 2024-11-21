import React, { useEffect, useState, useContext, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import institution from "../../assets/images/vadakk.png";
import { Typography } from "@mui/material";
import { NavLink, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CustomBreadCrumbs from "../../components/Common/CustomBreadcrumbs";
import { navContext } from "../../context/navContext";
import axios from "axios";
import * as XLSX from "xlsx";
import DeleteIcon from "@mui/icons-material/Delete";
import {PATH} from '../../constants/routeConstants'
import "./CardStyle.css";

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
  const [paper, setPaper] = useState([]);
  const { Endpoint } = useContext(navContext);
  const email = localStorage.getItem("userMail");
  const { sno } = useParams();

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
    response();
  }, [Data.questions]);

  const SendApi = async () => {
    try {
      const response = await axios.post(
        `${Endpoint}admin/post/A_InsertPmcqQuestion.php`,
        Data
      );
      setMonth("");
      setYear("");

      window.location.href = `/yearinstitution/${sno}`;
    } catch (error) {
      console.error("Error posting questions:", error);
    }
  };

  const response = async () => {
    try {
      const res = await axios.post(`${Endpoint}admin/get/A_ViewPmcqPaper.php`, {
        adminId: email,
        id: sno,
      });

      setPaper(res.data);
    } catch (error) {
      console.error("Error adding new item:", error);
    }
  };

  const CardDelete = async (sno) => {
    try {
      const res = await axios.delete(
        `${Endpoint}admin/delete/A_deletePMCQPaper.php`,
        {
          data: {
            adminId: email,
            paperId: sno,
          },
        }
      );
      response();
    } catch (error) {
      console.error("Error deleting paper:", error);
    }
  };

  useEffect(() => {
    response();
  }, []);

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

  return (
    <div style={{ backgroundColor: "white", padding: "10px" }}>
      <div style={{ padding: "25px" }}>
        <CustomBreadCrumbs items={BreadcrumbItems} />
      </div>
      <Container fluid style={{ paddingLeft: "27px", paddingRight: "27px" }}>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} className="title1">
            <div>
              <img src={institution} height="40px" alt="Institution Logo" />
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
          <Row>
            {Array.isArray(paper) &&
              paper.map((item) => (
                <Col
                  xs={12}
                  sm={12}
                  md={6}
                  lg={4}
                  xl={4}
                  key={item.sno}
                  style={{ padding: "10px" }}
                >
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
                        {item.year} {item.month} Paper
                      </button>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                    </NavLink>
                    <button
                      onClick={() => CardDelete(item.sno)}
                      className="delete"
                      style={{
                        border: "none",
                        backgroundColor: "white",
                        height: "20px",
                      }}
                    >
                      <DeleteIcon />
                    </button>
                  </div>
                </Col>
              ))}
          </Row>
        </Container>
        <div className="BtnBox">
          <button className="Btn" onClick={handleOpenFirstDialog}>
            Upload Questions
          </button>
        </div>
      </div>
      <Dialog
        open={openFirstDialog}
        aria-labelledby="customized-dialog-title"
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
                {[...Array(17).keys()].map((i) => (
                  <MenuItem key={2010 + i} value={2010 + i}>
                    {2010 + i}
                  </MenuItem>
                ))}
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
                {[
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                ].map((m) => (
                  <MenuItem key={m} value={m}>
                    {m}
                  </MenuItem>
                ))}
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
            <button className="Submit" autoFocus onClick={handleOpenSecondDialog}>
              Submit
            </button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={openSecondDialog} aria-labelledby="customized-dialog-title">
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
          <button className="Submit1" onClick={handleDownloadTemplate}>
            Download Template
          </button>
          <label
            htmlFor="fileInput"
            style={{ textAlign: "center", alignContent: "center" }}
            className="Submit1"
          >
            Upload Questions
          </label>
          <input
            type="file"
            id="fileInput"
            onChange={handleFile}
            style={{
              display: "none",
            }}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
