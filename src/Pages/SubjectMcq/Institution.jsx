import React, { useEffect, useState } from "react";
import BreadcrumbsComp from "../../components/Common/BreadCrumbs";
import { Container, Row, Col } from "react-bootstrap";
import Book from "../../assets/images/book.png";
import { Typography } from "@mui/material";
import Delete from "../../assets/icons/delete.jpeg";
import { NavLink } from "react-router-dom";
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
  const [mcqs, setMcqs] = useState([
   
  ]);
const Send = async () => {
  try {
    const response = await axios.post(
      "https://vebbox.in/Nursing/controllers/api/admin/get/A_ViewSubWisePaper.php",
      {
        adminId: "nandinivebbox@gmail.com",
        id: "1",
      }
    );
    setMcqs(response.data);
    // setMonth("");
    // setYear("");
  //  const obj = response.data.map((item) => ({
  //    paper_name: item.mcqs, // Assuming mcqs is a property of each item in response.data
  //  }));
  //  setMcqs(obj)
    //  window.location.href = "/uploadtestsub";
  } catch (error) {
    console.error("Error posting questions:", error);
  }
};

useEffect(()=>
{
  Send()
},[])
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
        {mcqs.map(
          (mcq, index) =>
            index % 2 === 0 && (
              <Container key={mcq.id} className="MainBox">
                <Row>
                  <Col className="Col1">
                    <div className="box">
                      <NavLink
                        to="/mcqtablepage"
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
                  {mcqs[index + 1] && (
                    <Col className="Col1">
                      <div className="box">
                        <NavLink
                          to="/mcqtablepage"
                          style={{ textDecoration: "none" }}
                        >
                          <button
                            style={{
                              backgroundColor: "white",
                              border: "none",
                              paddingTop: "5px",
                            }}
                          >
                            {mcqs[index + 1].name}
                          </button>
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          <img
                            src={Delete}
                            className="delete"
                            alt="Delete icon"
                            onClick={() => handleDelete(mcqs[index + 1].id)}
                          />
                        </NavLink>
                      </div>
                    </Col>
                  )}
                </Row>
              </Container>
            )
        )}
        <div className="BtnBox">
          <NavLink to="/addsub">
            <button className="Btn">Upload Questions</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
