// import React from 'react'
import { DashboardStyles } from "./styles";
import { Button, Typography } from "@mui/material";
import Crown from "../../assets/images/crown.png";
import { Container, Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
// import { Card } from "@mui/material";
import studentIcon from "../../assets/icons/9023992_student_fill_icon.svg";

import "bootstrap/dist/css/bootstrap.min.css";
export default function PremiumPlan() {
  return (
    <DashboardStyles>
      {/* <div className='premium'>
        <Typography style={{fontWeight:700}}>Premium Plans <img src={Crown} height="15px" /></Typography>
       
        <Container  className='mainContainer'>
        <Row style={{display:"flex",justifyContent:"space-around"}}>
       
              <Col xs={12} sm={12} md={6} lg={3} xl={3}>
                <div  className="item">
                  <div className="innerContent">
                    <Typography style={{ fontWeight:600}}>Plan 1</Typography>
                  </div>
                  <div style={{ padding: "10px" }}>
                    <Typography style={{marginTop:"15px",fontSize:"12px",fontWeight:600}}>1 month plan for course</Typography>
                    <Typography style={{fontSize:"26px"}}>$1999</Typography>
                  </div>
                  <NavLink to="/premiumplans">
                  <Button>
                    View
                  </Button>
                  </NavLink>
                  
                </div>
              </Col>
              
              <Col xs={12} sm={12} md={6} lg={3} xl={3}>
                <div  className="item">
                  <div className="innerContent">
                    <Typography style={{ fontWeight:600}}>Plan 2</Typography>
                  </div>
                  <div style={{ padding: "10px" }}>
                    <Typography style={{marginTop:"15px",fontSize:"12px",fontWeight:600}}>1 month plan for course</Typography>
                    <Typography style={{fontSize:"26px"}}>$1999</Typography>
                  </div>
                  <Button>
                    View
                  </Button>
                  
                </div>
              </Col>
              <Col xs={12} sm={12} md={6} lg={3} xl={3}>
                <div  className="item">
                  <div className="innerContent">
                    <Typography style={{ fontWeight:600}}>Plan 3</Typography>
                  </div>
                  <div style={{ padding: "10px" }}>
                    <Typography style={{marginTop:"15px",fontSize:"12px",fontWeight:600}}>1 month plan for course</Typography>
                    <Typography style={{fontSize:"26px"}}>$1999</Typography>
                  </div>
                  <Button>
                    View
                  </Button>
                  
                </div>
              </Col>
              <Col xs={12} sm={12} md={6} lg={3} xl={3}>
                <div  className="item">
                  <div className="innerContent">
                    <Typography style={{ fontWeight:600}}>Plan 4</Typography>
                  </div>
                  <div style={{ padding: "10px" }}>
                    <Typography style={{marginTop:"15px",fontSize:"12px",fontWeight:600}}>1 month plan for course</Typography>
                    <Typography style={{fontSize:"26px"}}>$1999</Typography>
                  </div>
                  <Button>
                    View
                  </Button>
                  
                </div>
              </Col>
          
        
        </Row>
    </Container>
        
        </div> */}

      <div className="container">
        <Col xs={12} sm={12} md={6} lg={3} xl={3}>
          <div className="item">
            <div className="innerContent">
              <div>
                <img src={studentIcon} alt="Description of the image" />
              </div>
              <div className="vertical-line"></div>
              <div style={{ display: "flex" }}>
                <Typography
                  style={{
                    color: "#E4A45A",
                    fontFamily: "Roboto",
                    fontSize: "35px",
                    paddingLeft: "20px",
                  }}
                >
                  20
                </Typography>
              </div>
            </div>
            <div
              className="text"
              style={{ position: "relative", right: "62%" }}
            >
              <Typography style={{ fontWeight: "bold" }}>Premium</Typography>
            </div>
          </div>
        </Col>
        <Col xs={12} sm={12} md={6} lg={3} xl={3}>
          <div className="item">
            <div className="innerContent">
              <div>
                <img src={studentIcon} alt="Description of the image" />
              </div>
              <div className="vertical-line"></div>
              <div style={{ display: "flex" }}>
                <Typography
                  style={{
                    color: "#E4A45A",
                    fontFamily: "Roboto",
                    fontSize: "35px",
                    paddingLeft: "20px",
                  }}
                >
                  20
                </Typography>
              </div>
            </div>
            <div
              className="text"
              style={{ position: "relative", right: "62%",padding:'1vh 3vw' }}
            >
              <Typography style={{ fontWeight: "bold" }}>Premium</Typography>
            </div>
          </div>
        </Col>
      </div>
    </DashboardStyles>
  );
}
