import React, { useState, useContext, useEffect } from "react";
import BreadcrumbsComp from "../../components/Common/BreadCrumbs";
import { Container, Row, Col } from "react-bootstrap";
import Mini from '../../assets/images/minitest.webp';
import { Typography } from "@mui/material";
import Delete from "../../assets/icons/delete.jpeg";
import "../YearMCQ/CardStyle.css";
import { NavLink } from "react-router-dom";
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
import { navContext } from "../../context/navContext";
import axios from "axios";

export default function MiniInstitution() {
  const BreadcrumbItems = [
    { label: "Hybrid", path: PATH.HYBRID },
    { label: "Institution", path: PATH.MINIINSTITUTION },
  ];
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [open, setOpen] = React.useState(false);
  const [openBtn, setOpenBtn] = React.useState(false);
  const [data, setData] = useState([]);
  const email = localStorage.getItem("userMail");
  const { Endpoint } = useContext(navContext);

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

  const fetchApi = async () => {
    try {
      const response = await axios.post(
        `${Endpoint}admin/get/A_ViewMiniTestDetails.php`,
        {
          adminId: email,
        }
      );
      console.log("API Response:", response.data);
      setData(response.data || []); // Ensure setData is always called with an array
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchApi();
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
              <img src={Mini} height="40px" alt="Mini Test" />
            </div>
            &nbsp;&nbsp;
            <div>
              <Typography style={{ fontWeight: 700, paddingTop: "10px" }}>
                Mini Test
              </Typography>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="TotalBox">
        <Container className="MainBox">
          <Row>
            {Array.isArray(data) && data.length === 0 ? (
              <Col xs={12} className="text-center">
                <Typography>No data found</Typography>
              </Col>
            ) : (
              data.map((d) => (
                <Col className="Col1" key={d.sno}>
                  <div className="box">
                    <NavLink
                      to={`/miniupload/${d.sno}`}
                      style={{ textDecoration: "none" }}
                    >
                      <button
                        style={{
                          backgroundColor: "white",
                          border: "none",
                          paddingTop: "5px",
                        }}
                      >
                        {d.test_name}
                      </button>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                    </NavLink>
                    <NavLink
                      to={`/minitestquestions/${d.sno}`}
                      style={{ textDecoration: "none", marginLeft: "20px" }}
                    >
                      <div
                        style={{
                          display: "flex",
                          marginLeft: 160,
                          marginTop: "20px",
                        }}
                      >
                        View Questions
                      </div>
                    </NavLink>
                  </div>
                </Col>
              ))
            )}
          </Row>
        </Container>
      </div>
  
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
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <button className="Submit1">Download Template</button>
          <NavLink to="/testpage">
            <button className="Submit1">Upload Questions</button>
          </NavLink>
        </DialogContent>
      </Dialog>
    </div>
  );
}
