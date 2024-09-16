import React from 'react'
import BreadcrumbsComp from '../../components/Common/BreadCrumbs'
import { Container,Row,Col } from 'react-bootstrap'
import institution from '../../assets/images/vadakk.png'
import { Typography } from '@mui/material'
import './CardStyle.css'
export default function YearInstitution() {
  return (
    <div style={{backgroundColor:"white"}}>
        <div style={{padding:"25px"}}>
        <BreadcrumbsComp/>
      </div>
    <Container>
        <Row>
            <Col xs={12} sm={12} md={12} lg={12} xl={12} className='title'>
                <div>
                    <img src={institution} height="40px"/>
                </div>
                <div>
                    <Typography>Institution 1</Typography>
                </div>
            </Col>
        </Row>
    </Container>
    </div>
  )
}
