import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TableViewOrg from "../Report/Table/TableView";
import DailyTestTable from "./dailytesttb";
import "bootstrap/dist/css/bootstrap.min.css";
import RecentStudentTable from "./RecentStudents";
import Card from "./Card";

export default function DashboardPage() {
  return (
    <>
    <div >
      
    <Container fluid style={{padding:"30px"}}>
        <Row>
           <Col xs={12} sm={12} md={12} lg={6} xl={6}>
            <div >
               <DailyTestTable />
             </div>
            </Col>
       <Col xs={12} sm={12} md={12} lg={6} xl={6}>
         <div>
           <RecentStudentTable />
          </div>
           </Col>
         </Row>
       </Container>
       <Container fluid>
       <div style={{ padding: "20px" }}>
       <TableViewOrg />
    </div>
       </Container>
    </div>
    </>
    // <div style={{backgroundColor:"green",overflowX:"hidden",width:"100%"}}>
    //   <div style={{ padding: "20px" }}>
    //     <Card />
    //   </div>
    //   <Container fluid style={{ padding: "20px" }}>
    //     <Row>
    //       <Col xs={12} sm={12} md={6} lg={6} xl={6}>
    //         <div>
    //           <DailyTestTable />
    //         </div>
    //       </Col>
    //       <Col xs={12} sm={12} md={6} lg={6} xl={6}>
    //         <div>
    //           <RecentStudentTable />
    //         </div>
    //       </Col>
    //     </Row>
    //   </Container>
    //   <div style={{ padding: "20px" }}>
    //     <TableViewOrg />
    //   </div>
    // </div>
  );
}
