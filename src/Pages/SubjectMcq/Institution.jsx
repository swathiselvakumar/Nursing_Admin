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

// import { navContext } from "../../context/navContext";

export default function SubInstitution() {
  
  const [lastId, setlastId] = useState(null)
  const email=localStorage.getItem("userMail");

  // const [idstate]
  const BreadcrumbItems = [
    { label: "Dashboard", path: PATH.DASHBOARD },
    { label: "SubjectMCQ", path: PATH.SUBJECTMCQ },
    { label: "Institution", path: PATH.SUBINSTITUTION },
  ];
   const {sno}=useParams();   
  //  const {questionpaperhistory,setQuestionpaperhistory}=useContext(navContext)
  const [mcqs, setMcqs] = useState([]);

  const [indexid, setindexid] = useState();
// console.log(questionpaperhistory);

// useEffect(()=>{
//   const length=indexid.length-1;
//   console.log(mcqs[length]);
// },[])


  const Send = async () => {
    // console.log("jsj");
    try {
      const response = await axios.post(
        "https://vebbox.in/Nursing/controllers/api/admin/get/A_ViewSubWisePaper.php",
        {
          adminId:email,
          id: sno,
        }
      );
      setMcqs(response.data); 
      setindexid(response.data)
      // console.log(response.data);
      const lstId = await renderBoxes1(response.data);
      // console.log(lstId);
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
        const id = `${j}`; // Concatenate sno with index for unique ID
        //  console.log(id);
        rowItems.push(
          <Col xs={12} sm={12} md={6} lg={4} xl={4} key={mcq.sno} id={id} className="MainBox">
            <div className="box">
              <NavLink to={`/mcqtablepage/${id}/${sno}`} style={{ textDecoration: "none" }}>
                <button
                  style={{
                    backgroundColor: "white",
                    border: "none",
                    paddingTop: "5px",
                  }}
                  onClick={()=>console.log(`/mcqtablepage/${id}/${sno}`)}
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
              to={`/viewquestionssub/${id}/${sno}`}
              style={{ textDecoration: "none", marginLeft: "20px" }}
            >
              <div style={{ display: "flex", marginLeft: 160 }}>
                View Questions
              </div>
            </NavLink>
          </Col>
        );
      }
      // setlastId(rowItems.length+1);
      rows.push(
        <Row key={i} style={{ marginTop: "20px" }}>
          {rowItems}
        </Row>
      );
      // console.log(rowItems);
      rowItemLength += rowItems.length
    }
    // console.log(rows);
    // setlastId(rows.length+1)

    return rowItemLength+1;
  };

  const CardDelete = async (sno) => {
    // setclick(true);
    try {
      const res = await axios.delete(
        "http://localhost/_Nursing_final/controllers/api/admin/delete/A_deleteSubWisePaper.php",
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

  

  const renderBoxes = () => {
    const rows = [];
    for (let i = 0; i < mcqs.length; i += 3) {
      const rowItems = [];
      for (let j = i; j < Math.min(i + 3, mcqs.length); j++) {
        const mcq = mcqs[j];
        const id = `${j+1}`; // Concatenate sno with index for unique ID
      //  console.log(id); 
        rowItems.push(
          <Col xs={12} sm={12} md={6} lg={4} xl={4} key={mcq.sno} id={id} className="MainBox">
            <div className="box">
              <NavLink to={`/mcqtablepage/${id}/${sno}`} style={{ textDecoration: "none" }}>
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
              to={`/viewquestionssub/${id}/${sno}`}
              style={{ textDecoration: "none", marginLeft: "20px" }}
            >
              <div style={{ display: "flex", marginLeft: 160 }}>
                View Questions
              </div>
            </NavLink>
          </Col>
        );
      }
      // setlastId(rowItems.length+1);
      rows.push(
        <Row key={i} style={{ marginTop: "20px" }}>
          {rowItems}
        </Row>
      );
    }
    // setlastId(rows.length+1)

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
                Subject Name
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
