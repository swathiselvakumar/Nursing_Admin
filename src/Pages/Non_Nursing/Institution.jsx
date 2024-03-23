import React from 'react'
import BreadcrumbsComp from '../../components/Common/BreadCrumbs'
import { Container,Row,Col } from 'react-bootstrap'
import {Typography } from '@mui/material'
import Delete from '../../assets/icons/delete.jpeg'
import { NavLink } from 'react-router-dom'
import Aptitude from '../../assets/images/Aptitude.jpg'
import CustomBreadCrumbs from '../../components/Common/CustomBreadcrumbs';
import { PATH } from '../../constants/routeConstants';
export default function NonInstitution() {
  const BreadcrumbItems = [
    { label: "Dashboard", path: PATH.DASHBOARD },
    
    { label: "Non Nursing", path: PATH.NONNURSING },
    { label: "Aptitude", path: PATH.NONINSTITUTION },
    
  ];
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  
  return (
    <div style={{backgroundColor:"white",padding:"10px"}}>
        <div style={{padding:"25px"}}>
        <CustomBreadCrumbs items={BreadcrumbItems} />
      </div>
    <Container fluid>
        <Row>
            <Col xs={12} sm={12} md={12} lg={12} xl={12} className='title1'>
                <div>
                    <img src={Aptitude} height="40px"/>
                </div>&nbsp;&nbsp;
                <div>
                    <Typography  style={{fontWeight:700,paddingTop:"10px"}}>Aptitude</Typography>
                </div>
            </Col>
        </Row>
    </Container>
    <div className='TotalBox'>
    <Container  className='MainBox'>
      <Row>
        <Col className='Col1'>
        <div className='box'>
          <NavLink to="/testpage" style={{textDecoration:"none"}}>
          <button style={{backgroundColor:"white",border:"none",paddingTop:"5px"}}>2022 Model MCQ</button>&nbsp;&nbsp;&nbsp;&nbsp;
          <img src={Delete} className='delete'/>
          </NavLink>
        </div>
        </Col>
        <Col className='Col1'> 
        <div className='box'>
        <NavLink to="/testpage" style={{textDecoration:"none"}}>
          <button style={{backgroundColor:"white",border:"none",paddingTop:"5px"}}>2022 Model MCQ</button>&nbsp;&nbsp;&nbsp;&nbsp;
          <img src={Delete} className='delete'/>
          </NavLink>
        </div>
        </Col>
        <Col className='Col1'> 
        <div className='box'>
        <NavLink to="/testpage" style={{textDecoration:"none"}}>
          <button style={{backgroundColor:"white",border:"none",paddingTop:"5px"}}>2022 Model MCQ</button>&nbsp;&nbsp;&nbsp;&nbsp;
          <img src={Delete} className='delete'/>
          </NavLink>
        </div>
        </Col>
      </Row>
      
    </Container>
    <Container  className='MainBox'>
      <Row style={{marginTop:"-50px"}}>
        <Col className='Col1'>
        <div className='box'>
        <NavLink to="/testpage" style={{textDecoration:"none"}}>
          <button style={{backgroundColor:"white",border:"none",paddingTop:"5px"}}>2022 Model MCQ</button>&nbsp;&nbsp;&nbsp;&nbsp;
          <img src={Delete} className='delete'/>
          </NavLink>
        </div>
        </Col>
        <Col className='Col1'> 
        <div className='box'>
        <NavLink to="/testpage" style={{textDecoration:"none"}}>
          <button style={{backgroundColor:"white",border:"none",paddingTop:"5px"}}>2022 Model MCQ</button>&nbsp;&nbsp;&nbsp;&nbsp;
          <img src={Delete} className='delete'/>
          </NavLink>
        </div>
        </Col>
        <Col className='Col1'> 
        <div className='box'>
        <NavLink to="/testpage" style={{textDecoration:"none"}}>
          <button style={{backgroundColor:"white",border:"none",paddingTop:"5px"}}>2022 Model MCQ</button>&nbsp;&nbsp;&nbsp;&nbsp;
          <img src={Delete} className='delete'/>
          </NavLink>
        </div>
        </Col>
      </Row>
    </Container>
    <Container className='MainBox'>
    <Row style={{marginTop:"-50px"}}>
        <Col className='Col1'>
        <div className='box'>
        <NavLink to="/testpage" style={{textDecoration:"none"}}>
          <button style={{backgroundColor:"white",border:"none",paddingTop:"5px"}}>2022 Model MCQ</button>&nbsp;&nbsp;&nbsp;&nbsp;
          <img src={Delete} className='delete'/>
          </NavLink>
        </div>
        </Col>
        <Col className='Col1'> 
        <div className='box'>
        <NavLink to="/testpage" style={{textDecoration:"none"}}>
          <button style={{backgroundColor:"white",border:"none",paddingTop:"5px"}}>2022 Model MCQ</button>&nbsp;&nbsp;&nbsp;&nbsp;
          <img src={Delete} className='delete'/>
          </NavLink>
        </div>
        </Col>
        <Col className='Col1'> 
        <div className='box'>
        <NavLink to="/testpage" style={{textDecoration:"none"}}>
          <button style={{backgroundColor:"white",border:"none",paddingTop:"5px"}}>2022 Model MCQ</button>&nbsp;&nbsp;&nbsp;&nbsp;
          <img src={Delete} className='delete'/>
          </NavLink>
        </div>
        </Col>
      </Row>
    </Container>
    <div className='BtnBox'>
      <NavLink to="/addsub">
      <button className='Btn' >Upload Questions</button>
      </NavLink>
    </div>
    </div>
    
    </div>
    
  )
}
