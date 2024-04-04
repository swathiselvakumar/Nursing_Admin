import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import CustomBreadCrumbs from '../../components/Common/CustomBreadcrumbs'
import { PATH } from '../../constants/routeConstants'
import { Typography } from '@mui/material';
import Btn from './Btn';
export default function UploadTest() {
    const BreadcrumbItems = [
        { label: "Dashboard", path: PATH.DASHBOARD },
        
        { label: "YearMCQ", path: PATH.YEARMCQ },
        { label: "Institution", path: PATH.YEARINSTITUTION },
        { label: "View Test", path: PATH.UPLOADTEST },

      ];
      const ColStyle={
        backgroundColor:"#f6f6f6",
        height:"750px",
        width:"auto",
        borderRadius:"15px"
      }
      const ColStyle1={
        backgroundColor:"#f6f6f6",
        height:"665px",
        width:"auto",
        borderRadius:"15px",
        overflow:"auto"
      }
      const title={
        display:"flex",
        justifyContent:"space-between",
        paddingLeft:"15px",
        paddingRight:"15px",
        paddingTop:"15px"
      }
      const btn={
        padding:"5px",
        width:"60px",
        // boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        border:"1px solid black"
      }
      const finish={
        width:"100px",
        border:"none",
        backgroundColor:"#1b4242",
        color:"white",
        fontSize:"12px",
        borderRadius:"5px",
        height:"30px"
      }
      const save={
        width:"100px",
        border:"1px solid black",
        fontSize:"12px",
        borderRadius:"5px"
      }
      const remove={
        width:"100px",
        border:"1px solid black",
        fontSize:"12px",
        borderRadius:"5px"
      }
      const final={
        width:"500px",
        border:"none",
        backgroundColor:"#1b4242",
        color:"white",
        fontSize:"20px",
        borderRadius:"5px",
        height:"50px",
        marginLeft:"60px",
        marginTop:"20px",
        marginBottom:"20px"
      }
  return (
    <div>
        <div style={{padding:"25px"}}>
        <CustomBreadCrumbs items={BreadcrumbItems} />
      </div>
      <Container style={{paddingLeft:"30px",paddingRight:"30px",paddingBottom:"30px"}}>
        <Row>
            <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                <div style={ColStyle}>
                    <div style={title}>
                    <Typography style={{fontWeight:700}}>Upload Test Questions</Typography>
                    <button style={btn}>Edit</button>
                    </div>
                    <hr/>
                    <div >
                        <Typography style={{paddingLeft:"20px"}}>Questions</Typography>
                        <div style={{backgroundColor:"#CED2CF",padding:"10px",margin:"15px",borderRadius:"10px",fontSize:"12px"}}>
                         <p style={{fontWeight:400}}>
                         What are the benefits of using Python language?
                         </p>
                        </div>
                    </div>
                    <div >
                        <Typography style={{paddingLeft:"20px"}}>Options</Typography>
                        <div style={{backgroundColor:"#CED2CF",padding:"10px",margin:"15px",borderRadius:"10px",fontSize:"12px",width:"200px",height:"50px"}}>
                         <p style={{fontWeight:400}}>
                         a) Object-Oriented Language
                         </p>
                        </div>
                        <div style={{backgroundColor:"#CED2CF",padding:"10px",margin:"15px",borderRadius:"10px",fontSize:"12px",width:"200px",height:"50px"}}>
                         <p style={{fontWeight:400}}>
                         b) High-Level Language
                         </p>
                        </div>
                        <div style={{backgroundColor:"#CED2CF",padding:"10px",margin:"15px",borderRadius:"10px",fontSize:"12px",width:"200px",height:"50px"}}>
                         <p style={{fontWeight:400}}>
                         c) Portable and Interactive
                         </p>
                        </div>
                        <div style={{backgroundColor:"#CED2CF",padding:"10px",margin:"15px",borderRadius:"10px",fontSize:"12px",width:"200px",height:"50px"}}>
                         <p style={{fontWeight:400}}>
                         d) Extensive support Libraries
                         </p>
                        </div>
                    </div>
                    <div >
                        <Typography style={{paddingLeft:"20px"}}>Answer</Typography>
                        <div style={{backgroundColor:"#CED2CF",padding:"10px",margin:"15px",borderRadius:"10px",fontSize:"12px",width:"200px",height:"50px"}}>
                         <p style={{fontWeight:400}}>
                         a) Object-Oriented Language
                         </p>
                        </div>
                    </div>
                    <div style={{display:"flex",justifyContent:"space-between",padding:"20px"}}>
                      <button style={finish}>Finish</button>
                      <button style={save}>Save</button>
                      <button style={remove}>Remove</button>
                    </div>
                </div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={6} xl={6}>
            <div style={ColStyle1}>
              <div>
              <Btn v1={1} v2={2} v3={3} v4={4} v5={5} />
              <Btn v1={6} v2={7} v3={8} v4={9} v5={10} />
              <Btn v1={11} v2={12} v3={13} v4={14} v5={15} />
              <Btn v1={16} v2={17} v3={18} v4={19} v5={20} />
              <Btn v1={21} v2={22} v3={23} v4={24} v5={25} />
              <Btn v1={26} v2={27} v3={28} v4={29} v5={30} />
              <Btn v1={31} v2={32} v3={33} v4={34} v5={35} />
              <Btn v1={36} v2={37} v3={38} v4={39} v5={40} />
              <Btn v1={41} v2={42} v3={43} v4={44} v5={45} />
              <Btn v1={46} v2={47} v3={48} v4={49} v5={50} />
              </div>
            </div>
            <div style={{width:"400px"}}>
            <button style={final}>Finish </button>
            </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}
