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
export default function YearInstitution() {
  const BreadcrumbItems = [
    { label: "Dashboard", path: PATH.DASHBOARD },

    { label: "YearMCQ", path: PATH.YEARMCQ },
    { label: "Institution", path: PATH.YEARINSTITUTION },
  ];
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [open, setOpen] = useState(false);
  const [openBtn, setOpenBtn] = useState(false);
  const { setYear: setNavYear } = useContext(navContext);
  const { setMonth: setNavMonth } = useContext(navContext);
  const {sno} =useParams();
  const handleChange = (event) => {
    setYear(event.target.value);
    setNavYear(event.target.value);
    setMonth(event.target.value);
    setNavMonth(event.target.value);
  };

  const handleClickOpenBtn = () => {
    setOpenBtn(true);
  };

  const handleCloseBtn = () => {
    setOpenBtn(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    viewpaper();
  }, []);
  const viewpaper = async () => {
    try {
      const response = await axios.post(
        "https://vebbox.in/Nursing/controllers/api/admin/get/A_ViewPmcqPaper.php",
        {
          adminId: "nandinivebbox@gmail.com",
          id: sno,

          //  desc: description,
          // You can include additional data here as needed
        }
        // const obj= response.data.sno;
      );
      //  console.log("Options:", options);
      console.log("New item added:", response.data);
      // setQuestion("");
      // setOptions("");
      // setAnswer("");
      // Clear input fields
      // console.log(name);
    } catch (error) {
      console.error("Error adding new item:", error);
    }
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
        <Container className="MainBox">
          <Row>
            <Col className="Col1">
              <div className="box">
                <NavLink to="/uploadtest" style={{ textDecoration: "none" }}>
                  <button
                    style={{
                      backgroundColor: "white",
                      border: "none",
                      paddingTop: "5px",
                    }}
                  >
                    2022 October Question Paper
                  </button>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <img src={Delete} className="delete" />
                </NavLink>
              </div>
            </Col>
            <Col className="Col1">
              <div className="box">
                <NavLink to="/testpage" style={{ textDecoration: "none" }}>
                  <button
                    style={{
                      backgroundColor: "white",
                      border: "none",
                      paddingTop: "5px",
                    }}
                  >
                    2022 October Question Paper
                  </button>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <img src={Delete} className="delete" />
                </NavLink>
              </div>
            </Col>
            <Col className="Col1">
              <div className="box">
                <NavLink to="/testpage" style={{ textDecoration: "none" }}>
                  <button
                    style={{
                      backgroundColor: "white",
                      border: "none",
                      paddingTop: "5px",
                    }}
                  >
                    2022 October Question Paper
                  </button>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <img src={Delete} className="delete" />
                </NavLink>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="MainBox">
          <Row style={{ marginTop: "-50px" }}>
            <Col className="Col1">
              <div className="box">
                <NavLink to="/testpage" style={{ textDecoration: "none" }}>
                  <button
                    style={{
                      backgroundColor: "white",
                      border: "none",
                      paddingTop: "5px",
                    }}
                  >
                    2022 October Question Paper
                  </button>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <img src={Delete} className="delete" />
                </NavLink>
              </div>
            </Col>
            <Col className="Col1">
              <div className="box">
                <NavLink to="/testpage" style={{ textDecoration: "none" }}>
                  <button
                    style={{
                      backgroundColor: "white",
                      border: "none",
                      paddingTop: "5px",
                    }}
                  >
                    2022 October Question Paper
                  </button>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <img src={Delete} className="delete" />
                </NavLink>
              </div>
            </Col>
            <Col className="Col1">
              <div className="box">
                <NavLink to="/testpage" style={{ textDecoration: "none" }}>
                  <button
                    style={{
                      backgroundColor: "white",
                      border: "none",
                      paddingTop: "5px",
                    }}
                  >
                    2022 October Question Paper
                  </button>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <img src={Delete} className="delete" />
                </NavLink>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="MainBox">
          <Row style={{ marginTop: "-50px" }}>
            <Col className="Col1">
              <div className="box">
                <NavLink to="/testpage" style={{ textDecoration: "none" }}>
                  <button
                    style={{
                      backgroundColor: "white",
                      border: "none",
                      paddingTop: "5px",
                    }}
                  >
                    2022 October Question Paper
                  </button>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <img src={Delete} className="delete" />
                </NavLink>
              </div>
            </Col>
            <Col className="Col1">
              <div className="box">
                <NavLink to="/testpage" style={{ textDecoration: "none" }}>
                  <button
                    style={{
                      backgroundColor: "white",
                      border: "none",
                      paddingTop: "5px",
                    }}
                  >
                    2022 October Question Paper
                  </button>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <img src={Delete} className="delete" />
                </NavLink>
              </div>
            </Col>
            <Col className="Col1">
              <div className="box">
                <NavLink to="/testpage" style={{ textDecoration: "none" }}>
                  <button
                    style={{
                      backgroundColor: "white",
                      border: "none",
                      paddingTop: "5px",
                    }}
                  >
                    2022 October Question Paper
                  </button>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <img src={Delete} className="delete" />
                </NavLink>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="BtnBox">
          <button className="Btn" onClick={handleClickOpen}>
            Upload Questions
          </button>
        </div>
      </div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
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
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={2024}>2020</MenuItem>
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
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>january</MenuItem>
                <MenuItem value={2}>february</MenuItem>
                <MenuItem value={3}>march</MenuItem>
                <MenuItem value={4}>april</MenuItem>
                <MenuItem value={5}>may</MenuItem>
                <MenuItem value={6}>june</MenuItem>
                <MenuItem value={1}>july</MenuItem>
                <MenuItem value={2}>august</MenuItem>
                <MenuItem value={3}>september</MenuItem>
                <MenuItem value={4}>october</MenuItem>
                <MenuItem value={5}>november</MenuItem>
                <MenuItem value={6}>december</MenuItem>
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
            <button className="Submit" autoFocus onClick={handleClickOpenBtn}>
              Submit
            </button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={openBtn}
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
        >
          <button className="Submit1">Download Template</button>
          <NavLink to="/uploadtest">
            <button className="Submit1">Upload Questions</button>
          </NavLink>
        </DialogContent>
      </Dialog>
    </div>
  );
}
