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
        // height:"500px",
        width:"auto",
        borderRadius:"15px"
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
  return (
    <div>
        <div style={{padding:"25px"}}>
        <CustomBreadCrumbs items={BreadcrumbItems} />
      </div>
      <Container>
        <Row>
            <Col>
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
            <Col>
            <div style={ColStyle}>
              <Btn/>
            </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}
