import React from 'react'
import { DashboardStyles } from './styles'
import { Button, Typography } from '@mui/material'
import Crown from '../../assets/images/crown.png'
import { Container,  Col, Row } from "react-bootstrap";
import { Card } from "@mui/material";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function PremiumPlan() {
    
      
  return (
    <DashboardStyles>
        <div className='premium'>
        <Typography style={{fontWeight:700,}}>Premium Plans <img src={Crown} height="15px" /></Typography>
       
        <Container  className='mainContainer'>
        <Row style={{display:"flex",justifyContent:"space-around"}}>
       
              <Col xs={12} sm={12} md={6} lg={3} xl={3}>
                <div  className="item">
                  <div className="innerContent">
                    <Typography>Plan 1</Typography>
                  </div>
                  <div style={{ padding: "10px" }}>
                    <Typography style={{marginTop:"15px"}}>1 month plan for course</Typography>
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
                    <Typography>Plan 1</Typography>
                  </div>
                  <div style={{ padding: "10px" }}>
                    <Typography style={{marginTop:"15px"}}>1 month plan for course</Typography>
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
                    <Typography>Plan 1</Typography>
                  </div>
                  <div style={{ padding: "10px" }}>
                    <Typography style={{marginTop:"15px"}}>1 month plan for course</Typography>
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
                    <Typography>Plan 1</Typography>
                  </div>
                  <div style={{ padding: "10px" }}>
                    <Typography style={{marginTop:"15px"}}>1 month plan for course</Typography>
                    <Typography style={{fontSize:"26px"}}>$1999</Typography>
                  </div>
                  <Button>
                    View
                  </Button>
                  
                </div>
              </Col>
          
        
        </Row>
    </Container>
        
        </div>
    </DashboardStyles>
  )
}
