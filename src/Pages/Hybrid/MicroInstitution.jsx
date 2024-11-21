import React from "react";
import BreadcrumbsComp from "../../components/Common/BreadCrumbs";
import { Container, Row, Col } from "react-bootstrap";
import Micro from '../../assets/images/micro.png'
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
import axios from "axios";
import { useState,useEffect,useContext } from "react";
import { navContext } from "../../context/navContext";
export default function MicroInstitution() {
  const BreadcrumbItems = [
    // { label: "Dashboard", path: PATH.DASHBOARD },

    { label: "Hybrid", path: PATH.HYBRID },
    { label: "Institution", path: PATH.MICROINSTITUTION },
  ];
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [open, setOpen] = React.useState(false);
  const [openBtn, setOpenBtn] = React.useState(false);
  const [data,setdata]=useState([]); 
  const email=localStorage.getItem("userMail");
  const [paper,setpaper]=useState();
  const {Endpoint}=useContext(navContext);
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

  const fetchApi=async()=>{
    try{ 
      const response = await axios.post(
            `${Endpoint}admin/get/A_ViewMicroTestDetails.php`,
            {
              adminId:email
            }
          );
          setdata(response.data);
      }catch(error)
      {
            console.error("Error fetching data:", error);
      
      }
  }
  useEffect(()=>{
    fetchApi();
  },[])

  return (
    <div style={{ backgroundColor: "white", padding: "10px" }}>
      <div style={{ padding: "25px" }}>
        <CustomBreadCrumbs items={BreadcrumbItems} />
      </div>
      <Container fluid style={{ paddingLeft: "27px", paddingRight: "27px" }}>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} className="title1">
            <div>
              <img src={Micro} height="40px" />
            </div>
            &nbsp;&nbsp;
            <div>
              <Typography style={{ fontWeight: 700, paddingTop: "10px" }}>
                Micro Test
              </Typography>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="TotalBox">
        <Container className="MainBox">
          <Row>
            {
              data.map((d)=>(
                
                <Col className="Col1">
              <div className="box mb-3">
                <NavLink to={`/microupload/${d.sno}`} style={{ textDecoration: "none" }}>
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
              to={`/microtestquestions/${d.sno}`}
              style={{ textDecoration: "none", marginLeft: "20px" }}
            >
              <div style={{ display: "flex", marginLeft: 160,marginTop:"10px" }}>
                View Questions
              </div>
            </NavLink>
              </div>
            </Col>
              ))
            }
          </Row>
        </Container>

       
      </div>
      
      
    </div>
  );
}
