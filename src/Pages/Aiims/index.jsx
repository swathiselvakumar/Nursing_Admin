import React from 'react'
import CustomBreadCrumbs from '../../components/Common/CustomBreadcrumbs';
import { Typography } from '@mui/material';
import { PATH } from '../../constants/routeConstants';
import Prelims from '../../assets/images/aiims.png'
import {Container,Row,Col} from 'react-bootstrap'
import Mains from '../../assets/images/mains.png'
import { NavLink } from 'react-router-dom';
export default function Aiims() {
    const BreadcrumbItems = [
        { label: "Dashboard", path: PATH.DASHBOARD },
        
        { label: "Aiims Prelims", path: PATH.AIIMSPRELIMS },
      ];
  return (
    <div>
    <div style={{padding:"25px"}}>
      <CustomBreadCrumbs items={BreadcrumbItems} />
    </div>
    <Container >
        <Row>
            <Col  style={{display:"flex",justifyContent:"center",}}>
           <NavLink to="/prelimscard">
           <div style={{ color: "black", textDecoration: "none", cursor: "pointer",backgroundColor:"white",width:"300px",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",padding:"30px",borderRadius:"5px"}}>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <img src={ Prelims} alt="institution" height="70px" />
                  </div>
                  <div style={{ paddingTop: "10px", textAlign: "center" }}>
                    <Typography style={{ fontWeight: 600 }}>Aiims Prelims</Typography>
                  </div>
                </div>
           </NavLink>
            </Col>
            <Col style={{display:"flex",justifyContent:"center",backgroundColor:"white"}}>
            <NavLink to="/mainscard">
            <div style={{ color: "black", textDecoration: "none", cursor: "pointer",backgroundColor:"white",width:"300px",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",padding:"30px",borderRadius:"5px"}}>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <img src={Mains} alt="institution" height="70px" />
                  </div>
                  <div style={{ paddingTop: "10px", textAlign: "center" }}>
                    <Typography style={{ fontWeight: 600 }}>Aiims Mains</Typography>
                  </div>
                </div>
            </NavLink>
            </Col>
        </Row>
    </Container>
    

                
    </div>
  )
}
