import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import TableViewOrg from '../Report/Table/TableView'
import DailyTestTable from './dailytesttb'
import 'bootstrap/dist/css/bootstrap.min.css';
import RecentStudentTable from './RecentStudents';
import Card from './Card';
export default function DashboardPage() {
  return ( 
    <div>
      <div style={{padding:"20px"}}>
          {/* <Col xs={6} sm={6} md={12} lg={12} xl={12}> */}

        <Card/>
        {/* </Col> */}
      </div>
      <Container fluid style={{padding:"20px"}}>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
          <div >
          <DailyTestTable/>
        </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
          <div >
          <RecentStudentTable/>
        </div>
          </Col>
        </Row>
      </Container>
      <div style={{padding:"20px"}}>
          <TableViewOrg/>
        </div>
     
      
        
    </div>
  )
}


