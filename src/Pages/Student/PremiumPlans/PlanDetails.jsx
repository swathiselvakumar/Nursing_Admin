import { Button, Typography } from '@mui/material'
import React from 'react'
import { PlansStyle } from './planstyle';
import SearchIcon from '@mui/icons-material/Search';
import { styled} from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Container,Row,Col } from 'react-bootstrap';
import UpdateIcon from '@mui/icons-material/Update';
import { NavLink } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Crown from '../../../assets/images/Crown.png'
import Plus from '../../../assets/icons/plus b.png'
import Tick from '../../../assets/icons/tick.png'
import BreadcrumbsComp from '../../../components/Common/BreadCrumbs';
export default function PlanDetails() {
  const DeleteBtn={
    width:"130px",
    fontWeight:"bold",
    textTransform:"capitalize",
    backgroundColor:"white",
    color:"black",
    boxShadow:"rgba(0, 0, 0.15, 0.15) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 3px -3px"
  }
  return (
    < PlansStyle >
    <div className='bodystyle'>
    <div style={{padding:"20px"}}>
        <BreadcrumbsComp/>
      </div>
        <Container fluid style={{marginTop:"20px"}}>
          <Row>
           
            <Col xs={12} sm={12} md={12} lg={12} xl={12} className='MainCol'>
                <div className='title'>
                  <Typography sx={{fontWeight:600,fontSize:"18px",}}>Premium Plans &nbsp;<img src={Crown} height="20px"/></Typography>
                </div>
              <div>
                <Button style={DeleteBtn}><DeleteOutlineIcon />&nbsp; Delete</Button>
              </div>
            </Col>
          </Row>
        </Container>
        <div style={{padding:"10px",marginTop:"30px"}}>
        <Container  className='mainContainer'>
        <Row style={{display:"flex",justifyContent:"space-around"}}>
       
              <Col xs={12} sm={12} md={6} lg={3} xl={3}>
                <div  className="item">
                  <div className="innerContent">
                    <Typography>$ 1999/Per Month</Typography>
                  </div>
                  <div style={{ padding: "10px" }}>
                    <Typography style={{marginTop:"20px"}}>1 month plan for course</Typography>
                    <Typography style={{fontSize:"26px"}}>
                    <ul className='ulstyle' >
                        <li><img src={Tick}/>&nbsp;Lorem ipsum</li>
                        <li><img src={Tick}/>&nbsp;Lorem ipsum</li>
                        <li><img src={Tick}/>&nbsp;Lorem ipsum</li>
                        <li><img src={Tick}/>&nbsp;Lorem ipsum</li>
                        <li><img src={Tick}/>&nbsp;Lorem ipsum</li>
                    </ul>
                    </Typography>
                  </div>
                  
                  
                </div>
              </Col>
              
              <Col xs={12} sm={12} md={6} lg={3} xl={3}>
                <div  className="item">
                  <div className="innerContent">
                    <Typography>$ 1999/3 Month</Typography>
                  </div>
                  <div style={{ padding: "10px" }}>
                    <Typography style={{marginTop:"20px"}}>1 month plan for course</Typography>
                    <Typography style={{fontSize:"26px"}}>
                    <ul className='ulstyle'>
                        <li><img src={Tick}/>&nbsp;Lorem ipsum</li>
                        <li><img src={Tick}/>&nbsp;Lorem ipsum</li>
                        <li><img src={Tick}/>&nbsp;Lorem ipsum</li>
                        <li><img src={Tick}/>&nbsp;Lorem ipsum</li>
                        <li><img src={Tick}/>&nbsp;Lorem ipsum</li>
                    </ul>
                    </Typography>
                  </div>
                 
                  
                </div>
              </Col>
              <Col xs={12} sm={12} md={6} lg={3} xl={3}>
                <div  className="item">
                  <div className="innerContent">
                    <Typography>$ 1999/6 Month</Typography>
                  </div>
                  <div style={{ padding: "10px" }}>
                    <Typography style={{marginTop:"20px"}}>1 month plan for course</Typography>
                    <Typography style={{fontSize:"26px"}}>
                    <ul className='ulstyle'>
                        <li><img src={Tick}/>&nbsp;Lorem ipsum</li>
                        <li><img src={Tick}/>&nbsp;Lorem ipsum</li>
                        <li><img src={Tick}/>&nbsp;Lorem ipsum</li>
                        <li><img src={Tick}/>&nbsp;Lorem ipsum</li>
                        <li><img src={Tick}/>&nbsp;Lorem ipsum</li>
                    </ul>
                    </Typography>
                  </div>
                 
                  
                </div>
              </Col>
              <Col xs={12} sm={12} md={6} lg={3} xl={3}>
                <div  className="item">
                  <div className="innerContent">
                    <Typography>$ 1999/1 Year</Typography>
                  </div>
                  <div style={{ padding: "10px" }}>
                    <Typography style={{marginTop:"20px"}}>1 month plan for course</Typography>
                    <Typography style={{fontSize:"26px"}}>
                    <ul className='ulstyle'>
                        <li><img src={Tick}/>&nbsp;Lorem ipsum</li>
                        <li><img src={Tick}/>&nbsp;Lorem ipsum</li>
                        <li><img src={Tick}/>&nbsp;Lorem ipsum</li>
                        <li><img src={Tick}/>&nbsp;Lorem ipsum</li>
                        <li><img src={Tick}/>&nbsp;Lorem ipsum</li>
                    </ul>
                    </Typography>
                  </div>
                  
                  
                </div>
              </Col>
              {/* <Col xs={3} sm={3} md={3} lg={3} xl={3}>
              <div className='Div'>
                        <div>
                            <img src={Plus} height="70px"/>
                        </div>
                        <div style={{paddingTop:"10px"}}>
                            <Typography style={{fontWeight:600}}>Add</Typography>
                        </div>
                    </div>
              </Col> */}
        </Row>
    </Container>
        </div>
    </div>
    </ PlansStyle >
  )
}
