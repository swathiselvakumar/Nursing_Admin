import React, { useEffect, useState } from "react";
import BreadcrumbsComp from "../../components/Common/BreadCrumbs";
import { Container, Row, Col } from "react-bootstrap";
import Book from "../../assets/images/book.png";
import { Typography } from "@mui/material";
import Delete from "../../assets/icons/delete.jpeg";
import { NavLink, useParams } from "react-router-dom";
import { PATH } from "../../constants/routeConstants";
import CustomBreadCrumbs from "../../components/Common/CustomBreadcrumbs";
import axios from "axios";

export default function SubInstitution() {
  const BreadcrumbItems = [
    { label: "Dashboard", path: PATH.DASHBOARD },
    { label: "SubjectMCQ", path: PATH.SUBJECTMCQ },
    { label: "Institution", path: PATH.SUBINSTITUTION },
  ];

  // Define state for storing MCQ data
   const [mcqs, setMcqs] = useState([]);
   
  const { sno } = useParams();

  const Send = async () => {
    try {
      const response = await axios.post(
        "https://vebbox.in/Nursing/controllers/api/admin/get/A_ViewSubWisePaper.php",
        {
          adminId: "nandinivebbox@gmail.com",
          id: 1,
        }
      );
      setMcqs(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    Send();
  }, []);

  const handleDelete = (id) => {
    // Implement deletion logic here
    console.log("Delete MCQ with ID:", id);
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
      <div className="TotalBox">
       {Array.isArray(mcqs) && mcqs.map((mcq, index) => (
  // <Container key={mcq.sno} className="MainBox">
            <Container key={mcq.sno} className="MainBox">
              <Row>
                <Col className="Col1">
                  <div className="box">
                    <NavLink
                      to="/mcqnursingtable"
                      style={{ textDecoration: "none" }}
                    >
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
                </Col>
                <NavLink
                  to="/uploadtest" // Replace `/mcq/${mcq.id}` with the actual path you want to navigate to
                  style={{ textDecoration: "none" }}
                >
                  <div style={{ display: "flex", marginLeft: 620 }}>
                    View Questions
                  </div>
                </NavLink>
              </Row>
            </Container>
          ))}
        <div className="BtnBox">
          <NavLink to={`/addsub/${sno}`}>
            <button className="Btn">Upload Questions</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
