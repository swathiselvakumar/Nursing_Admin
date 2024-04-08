import React from 'react'
import BreadcrumbsComp from '../../components/Common/BreadCrumbs'
import { Container,Row,Col } from 'react-bootstrap'
import institution from '../../assets/images/vadakk.png'
import {Typography } from '@mui/material'
import Delete from '../../assets/icons/delete.jpeg'
import '../YearMCQ/CardStyle.css'

import { PATH } from '../../constants/routeConstants'
import CustomBreadCrumbs from '../../components/Common/CustomBreadcrumbs'
import Medical from '../../assets/icons/medical.png'

export default function ViewCourse() {
  const BreadcrumbItems = [
    { label: "Dashboard", path: PATH.DASHBOARD },
    
    { label: "Course", path: PATH.COURSE},
    { label: "View Course", path: PATH.VIEWCOURSE },
  ];

  return (
    <div style={{backgroundColor:"white",padding:"10px"}}>
        <div style={{padding:"25px"}}>
        <CustomBreadCrumbs items={BreadcrumbItems} />
      </div>
    <Container fluid style={{paddingLeft:"27px",paddingRight:"27px"}}>
        <Row>
            <Col xs={12} sm={12} md={12} lg={12} xl={12} className='title1'>
                <div>
                    <img src={Medical} height="40px"/>
                </div>&nbsp;&nbsp;
                <div>
                    <Typography  style={{fontWeight:700,paddingTop:"10px"}}>Course Name</Typography>
                </div>
            </Col>
        </Row>
    </Container>
    <div className='TotalBox'>
    <Container  className='MainBox'>
      <Row>
        <Col className='Con'>
            <div>
                <Typography style={{fontSize:"16px",fontWeight:600}}>Course Name</Typography>
                <p style={{fontSize:"12px",fontWeight:400,textAlign:"justify"}}>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum<br/>Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum<br/>Lorem ipsumLorem ipsumLorem ipsum </p>
            </div>
            <div>
                <Typography style={{fontSize:"16px",fontWeight:400,paddingBottom:"10px"}}>About this Program</Typography>
                <Typography style={{fontSize:"14px",fontWeight:400,paddingBottom:"10px"}}>What will you Learn :</Typography>
                <p style={{fontSize:"12px",fontWeight:400,textAlign:"justify"}}>Java is a widely-used programming language for coding web applications. It has been a popular choice among developers for over two decades,<br/> with millions of Java applications in use today. </p>
                <p style={{fontSize:"12px",fontWeight:400,textAlign:"justify"}}>Java is a multi-platform, object-oriented, and network-centric language that can be used as a platform in itself.</p>
                <p style={{fontSize:"12px",fontWeight:400,textAlign:"justify"}}>You can use Java to build applications for almost any platform, including desktop, mobile, and web. It is also widely used in developing enterprise-level applications,<br/> such as financial and trading systems, e-commerce platforms, and healthcare systems.</p>
                <p style={{fontSize:"12px",fontWeight:400,textAlign:"justify"}}>JAVA stands for Just Another Virtual Accelerator. It is a computer-based programming language that is used as a platform in itself.</p>
                <p style={{fontSize:"12px",fontWeight:400,textAlign:"justify"}}>Java is a widely used object-oriented programming language and software platform that runs on billions of devices, including notebook computers, mobile devices, gaming consoles, medical devices and many others. The rules and syntax of Java are based on the C and C++ languages.</p>
            </div>
        </Col>
        
      </Row>
      </Container>
      
    
    
    </div>
    </div>
    
  )
}
