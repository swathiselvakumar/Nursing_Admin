import React, { useContext, useEffect, useState } from "react";
import BreadcrumbsComp from "../../components/Common/BreadCrumbs";
import { Container, Row, Col } from "react-bootstrap";
import Book from "../../assets/images/book.png";
import { Typography } from "@mui/material";
import Delete from "../../assets/icons/delete.jpeg";
import { NavLink, useParams } from "react-router-dom";
import { PATH } from "../../constants/routeConstants";
import CustomBreadCrumbs from "../../components/Common/CustomBreadcrumbs";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import { navContext } from "../../context/navContext";
import { useLocation } from "react-router-dom";

export default function SubInstitution() {
  
  const [lastId, setlastId] = useState(null)
  const email=localStorage.getItem("userMail");
  const {Endpoint}=useContext(navContext);
  const location = useLocation();
const subjectName = location.state?.subjectName;
  
  const BreadcrumbItems = [
    { label: "Dashboard", path: PATH.DASHBOARD },
    { label: "SubjectMCQ", path: PATH.SUBJECTMCQ },
    { label: "Institution", path: PATH.SUBINSTITUTION },
  ];
   const {sno}=useParams();   
  
  const [mcqs, setMcqs] = useState([]);

  const [indexid, setindexid] = useState();


  const Send = async () => {
   
    try {
      const response = await axios.post(
        `${Endpoint}admin/get/A_ViewSubWisePaper.php`,
        {
          adminId:email,
          id: sno,
        }
      );
      setMcqs(response.data); 
      setindexid(response.data)
      
      const lstId = await renderBoxes1(response.data);
      
      setlastId(lstId);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const renderBoxes1 = (mc) => {
    const rows = [];
    let rowItemLength = 0;
    for (let i = 1; i < mc.length; i += 3) {
      const rowItems = [];
      for (let j = i; j < Math.min(i + 3, mc.length); j++) {
        const mcq = mc[j];
        const id = `${j}`; 
        
        rowItems.push(
          <Col xs={12} sm={12} md={6} lg={4} xl={4} key={mcq.sno} id={id} className="MainBox">
            <div className="box">
              <NavLink to={`/mcqtablepage/${mcq.sno}/${sno}`} style={{ textDecoration: "none" }}>
                <button
                  style={{
                    backgroundColor: "white",
                    border: "none",
                    paddingTop: "5px",
                  }}
                 
                >
                  {mcq.paper_name}
                </button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <img
                  src={Delete}
                  className="delete"
                  alt="Delete icon"
                  onClick={() => handleDelete(mcq.id)}
                />
              </NavLink>
            </div>
            <NavLink 
              to={`/viewquestionssub/${mcq.sno}/${sno}`}
              style={{ textDecoration: "none", marginLeft: "20px" }}
            >
              <div style={{ display: "flex", marginLeft: 160 }}>
                View Questions
              </div>
            </NavLink>
          </Col>
        );
      }
     
      rows.push(
        <Row key={i} style={{ marginTop: "20px" }}>
          {rowItems}
        </Row>
      );
      
      rowItemLength += rowItems.length
    }
    

    return rowItemLength+1;
  };

  const CardDelete = async (sno) => {
  
    try {
      const res = await axios.delete(
        `${Endpoint}admin/delete/A_deleteSubWisePaper.php`,
        {
          data: {
            adminId:email,
            paperId: sno,
          }, 
        }
      );
      Send();
    } catch (error) {
      console.error("Error fetching course data:", error);
    }
  };

  useEffect(() => {
    Send();
  }, []);

  console.log(subjectName);
  

  const renderBoxes = () => {
    const rows = [];
    for (let i = 0; i < mcqs.length; i += 3) {
      const rowItems = [];
      for (let j = i; j < Math.min(i + 3, mcqs.length); j++) {
        const mcq = mcqs[j];
        const id = `${j+1}`; 
     
        rowItems.push(
          <Col xs={12} sm={12} md={6} lg={4} xl={4} key={mcq.sno} id={id} className="MainBox">
            <div className="box">
              <NavLink to={`/mcqtablepage/${mcq.sno}/${sno}`} style={{ textDecoration: "none" }}>
                <button
                  style={{
                    backgroundColor: "white",
                    border: "none",
                    paddingTop: "5px",
                  }}
                >
                  {mcq.paper_name}
                </button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                
              </NavLink>
              <button onClick={() => CardDelete(mcq.sno)} className="delete" style={{border:"none",backgroundColor:"white",height:"10px"}}><DeleteIcon/></button>
            </div>
            <NavLink
              to={`/viewquestionssub/${mcq.sno}/${sno}`}
              style={{ textDecoration: "none", marginLeft: "20px" }}
            >
              <div style={{ display: "flex", marginLeft: 160 }}>
                View Questions
              </div>
            </NavLink>
          </Col>
        );
      }
    
      rows.push(
        <Row key={i} style={{ marginTop: "20px" }}>
          {rowItems}
        </Row>
      );
    }
   

    return rows;
  };

  return (
    <div style={{ backgroundColor: "white", padding: "10px" }}>
      <div style={{ padding: "25px" }}>
        <CustomBreadCrumbs items={BreadcrumbItems} />
      </div>
      <Container fluid style={{ paddingLeft: "27px", paddingRight: "27px" }}>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} className="title1">
            <div>
              <img src={Book} height="40px" alt="Book icon" />
            </div>
            &nbsp;&nbsp;
            <div>
              <Typography style={{ fontWeight: 700, paddingTop: "10px" }}>
              {subjectName ? subjectName : "Subject Not Found"}
              </Typography>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="TotalBox">{renderBoxes()}</div>
      <div className="BtnBox">
        <NavLink to={`/addsub/${sno}/${lastId}`}>
          <button className="Btn">Upload Questions</button>
        </NavLink>
      </div>
    </div>
  );
}
