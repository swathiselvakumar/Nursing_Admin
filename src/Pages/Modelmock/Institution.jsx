import React, { useState } from 'react'
import BreadcrumbsComp from '../../components/Common/BreadCrumbs'
import { Container,Row,Col } from 'react-bootstrap'
import {Typography } from '@mui/material'
import Delete from '../../assets/icons/delete.jpeg'
import { NavLink, useParams } from 'react-router-dom'
import Model from '../../assets/images/model.png'
import '../YearMCQ/CardStyle.css'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { PATH } from '../../constants/routeConstants';
import CustomBreadCrumbs from '../../components/Common/CustomBreadcrumbs';
import axios from 'axios'
import DeleteIcon from "@mui/icons-material/Delete";


export default function ModelInstitution() {

  const BreadcrumbItems = [
    { label: "Dashboard", path: PATH.DASHBOARD },
    
    { label: "Model Mock", path: PATH.MODELMOCK },
    { label: "Institution", path: PATH.MODELINSTITUTION },
    
  ];
  const [open, setOpen] = React.useState(false);
  const[stage,setStage]=useState();
const email=localStorage.getItem("userMail");
const {sno}=useParams();
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = async() => {
    setOpen(false);

try{ 
const response = await axios.post(
      "https://vebbox.in/Nursing/controllers/api/admin/post/A_InsertModelMockStage.php",
      {
        adminId:email,
        institutionId: sno,
        stageName: stage,
      }
    );
    setStage(response.data.stageName)
    // console.log();
}catch(error)
{
      console.error("Error fetching data:", error);

}
    
  };

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };


const handlestage = (event) => {
  setStage(event.target.value);
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
              <img src={Model} height="40px" />
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
              <div className="box" style={{ backgroundColor: "black" }}>
                <button
                  style={{
                    backgroundColor: "black",
                    border: "none",
                    paddingTop: "5px",
                    color: "white",
                  }}
                >
                  Stage 1
                </button>
                &nbsp;&nbsp;&nbsp;&nbsp;
              </div>
            </Col>
            <Col className="Col1">
              <div className="box" style={{ backgroundColor: "black" }}>
                <button
                  style={{
                    backgroundColor: "black",
                    border: "none",
                    paddingTop: "5px",
                    color: "white",
                  }}
                >
                  Stage 2
                </button>
                &nbsp;&nbsp;&nbsp;&nbsp;
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="MainBox">
          <Row style={{ marginTop: "-80px" }}>
            <Col className="Col1">
              <div className="box">
                <NavLink to="/mocktablepage" style={{ textDecoration: "none" }}>
                  <button
                    style={{
                      backgroundColor: "white",
                      border: "none",
                      paddingTop: "5px",
                    }}
                  >
                    2022 Model MCQ
                  </button>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <button onClick={() => CardDelete(mcq.sno)} className="delete" style={{border:"none",backgroundColor:"white",height:"10px"}}><DeleteIcon/></button>
                </NavLink>
                <NavLink
                  to="/viewquestionsmodel"
                  style={{ textDecoration: "none", marginLeft: "20px" }}
                >
                  <div
                    style={{ display: "flex", marginLeft: 160, marginTop: 10 }}
                  >
                    View Questions
                  </div>
                </NavLink>
              </div>
            </Col>
            <Col className="Col1">
              <div className="box">
                <NavLink to="/mocktablepage" style={{ textDecoration: "none" }}>
                  <button
                    style={{
                      backgroundColor: "white",
                      border: "none",
                      paddingTop: "5px",
                    }}
                  >
                    2022 Model MCQ
                  </button>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <button onClick={() => CardDelete(mcq.sno)} className="delete" style={{border:"none",backgroundColor:"white",height:"10px"}}><DeleteIcon/></button>
                </NavLink>
                <NavLink
                  to="/viewquestionsmodel"
                  style={{ textDecoration: "none", marginLeft: "20px" }}
                >
                  <div
                    style={{ display: "flex", marginLeft: 160, marginTop: 10 }}
                  >
                    View Questions
                  </div>
                </NavLink>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="MainBox">
          <Row style={{ marginTop: "-80px" }}>
            <Col className="Col1">
              <div className="box">
                <NavLink to="/mocktablepage" style={{ textDecoration: "none" }}>
                  <button
                    style={{
                      backgroundColor: "white",
                      border: "none",
                      paddingTop: "5px",
                    }}
                  >
                    2022 Model MCQ
                  </button>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <button onClick={() => CardDelete(mcq.sno)} className="delete" style={{border:"none",backgroundColor:"white",height:"10px"}}><DeleteIcon/></button>
                </NavLink>
                <NavLink
                  to="/viewquestionsmodel"
                  style={{ textDecoration: "none", marginLeft: "20px" }}
                >
                  <div
                    style={{ display: "flex", marginLeft: 160, marginTop: 10 }}
                  >
                    View Questions
                  </div>
                </NavLink>
              </div>
            </Col>
            <Col className="Col1">
              <div className="box">
                <NavLink to="/mocktablepage" style={{ textDecoration: "none" }}>
                  <button
                    style={{
                      backgroundColor: "white",
                      border: "none",
                      paddingTop: "5px",
                    }}
                  >
                    2022 Model MCQ
                  </button>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <button onClick={() => CardDelete(mcq.sno)} className="delete" style={{border:"none",backgroundColor:"white",height:"10px"}}><DeleteIcon/></button>
                </NavLink>
                <NavLink
                  to="/viewquestionsmodel"
                  style={{ textDecoration: "none", marginLeft: "20px" }}
                >
                  <div
                    style={{ display: "flex", marginLeft: 160, marginTop: 10 }}
                  >
                    View Questions
                  </div> 
                </NavLink>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="MainBox">
          <Row style={{ marginTop: "-80px" }}>
            <Col className="Col1">
              <div className="box">
                <NavLink to="/mocktablepage" style={{ textDecoration: "none" }}>
                  <button
                    style={{
                      backgroundColor: "white",
                      border: "none",
                      paddingTop: "5px",
                    }}
                  >
                    2022 Model MCQ
                  </button>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <button onClick={() => CardDelete(mcq.sno)} className="delete" style={{border:"none",backgroundColor:"white",height:"10px"}}><DeleteIcon/></button>
                </NavLink>
                <NavLink
                  to="/viewquestionsmodel"
                  style={{ textDecoration: "none", marginLeft: "20px" }}
                >
                  <div
                    style={{ display: "flex", marginLeft: 160, marginTop: 10 }}
                  >
                    View Questions
                  </div>
                </NavLink>
              </div>
            </Col>
            <Col className="Col1">
              <div className="box">
                <NavLink to="/mocktablepage" style={{ textDecoration: "none" }}>
                  <button
                    style={{
                      backgroundColor: "white",
                      border: "none",
                      paddingTop: "5px",
                    }}
                  >
                    2022 Model MCQ
                  </button>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <button onClick={() => CardDelete(mcq.sno)} className="delete" style={{border:"none",backgroundColor:"white",height:"10px"}}><DeleteIcon/></button>
                </NavLink>
                <NavLink
                  to="/viewquestionsmodel"
                  style={{ textDecoration: "none", marginLeft: "20px" }}
                >
                  <div
                    style={{ display: "flex", marginLeft: 160, marginTop: 10 }}
                  >
                    View Questions
                  </div>
                </NavLink>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="BtnBox" style={{ marginTop: "-30px" }}>
          <button className="Btn" onClick={handleClickOpen}>
            Add Stage
          </button>
        </div>
        <div className="BtnBox">
          <NavLink to={`/addmock/${sno}`}>
            <button className="Btn">Upload Questions</button>
          </NavLink>
        </div>
      </div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle
          sx={{
            m: 0,
            p: 2,
            width: "400px",
            textAlign: "center",
            backgroundColor: "#f6f6f6",
          }}
          id="customized-dialog-title"
        >
          Add Stage
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
            padding: "20px",
            backgroundColor: "#f6f6f6",
            width: "400px",
          }}
        >
          <div style={{ margin: "10px" }}>
            <Typography>Add Stage :</Typography>
            <input
              type="text"
              className="textbox"
              value={stage}
              onChange={handlestage}
            />

            <button autoFocus onClick={handleClose} className="subjectBtn">
              Submit
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
