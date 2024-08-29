import React, { useEffect, useState,useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CustomBreadCrumbs from "../../../components/Common/CustomBreadcrumbs";
import { PATH } from "../../../constants/routeConstants";
import { Typography } from "@mui/material";
import axios from "axios";
import { useParams } from "react-router-dom";
import { navContext } from "../../../context/navContext";

export default function MainsQuestions() {
  const { sno, id } = useParams(); 
  const email = localStorage.getItem("userMail");
const {Endpoint}=useContext(navContext);
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [questionsNo, setQuestionsNo] = useState([]);

  

  useEffect(() => {
    fetchQuestionSno();
  }, []);

  const fetchQuestions = async (questionId) => {
    try {
      const res = await axios.post(
        `http://localhost/Nursing/controllers/api/admin/get/A_ViewMainsQuestions.php`,
        {
          adminId: email,
          mainsId: sno,
          paperId: id,
          questionId: questionId,
        }
      );
      setQuestions(res.data);
      setSelectedQuestionIndex(0);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  const handleQuestionChange = (index) => {
    console.log("Selected question index:", index);
    if (index >= 0 && index < questionsNo.length) {
      const selectedSno = questionsNo[index].sno;
      console.log("Selected question sno:", selectedSno);
      fetchQuestions(selectedSno);
      setSelectedQuestionIndex(index);
    }
  };

  const fetchQuestionSno = async () => {
    try {
      const res = await axios.post(
        `http://localhost/Nursing/controllers/api/admin/get/A_ViewMainsQuestionCount.php`,
        {
          adminId: email,
          mainsId: sno,
          paperId: id,
        }
      );
      setQuestionsNo(res.data);
      console.log(res.data);
      setSelectedQuestionIndex(0);
    } catch (error) {
      console.error("Error fetching question numbers:", error);
    }
  };

  const BreadcrumbItems = [
    { label: "Dashboard", path: PATH.DASHBOARD },
    { label: "Mains", path: PATH.MAINSCARD },
    { label: "Institution", path: PATH.MAINSINSTITUTION},
    { label: "View Questions", path: PATH.MAINSQUESTION },
  ];

  return (
    <div>
      <div style={{ padding: "25px" }}>
        <CustomBreadCrumbs items={BreadcrumbItems} />
      </div>
      <Container
        style={{
          paddingLeft: "30px",
          paddingRight: "30px",
          paddingBottom: "30px",
        }}
      >
        <Row>
          <Col xs={12} sm={12} md={12} lg={6} xl={6}>
            {/* Content for displaying selected question details */}
            <div
              style={{
                backgroundColor: "#f6f6f6",
                padding: "20px",
                borderRadius: "15px",
              }}
            >
              <Typography style={{ fontWeight: 700 }}>
                Question Details
              </Typography>
              <hr />
              {questions[selectedQuestionIndex] ? (
                <div>
                  <p>{questions[selectedQuestionIndex].questions}</p>
                  <ol type="a">
                    {[1, 2, 3, 4].map((option) => (
                      <li key={option}>
                        {questions[selectedQuestionIndex][`option${option}`]}
                      </li>
                    ))}
                  </ol>
                  <p>Correct Answer: {questions[selectedQuestionIndex].answer}</p>
                </div>
              ) : (
                <p>No question selected</p>
              )}
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} xl={6}>
            {/* Buttons for selecting questions */}
            <div
              style={{
                backgroundColor: "#f6f6f6",
                padding: "20px",
                borderRadius: "15px",
                overflow: "auto",
                height: "500px",
              }}
            >
              {Array.isArray(questionsNo) && questionsNo.length > 0 ? (
                questionsNo.map((question, index) => (
                  <button
                    key={index}
                    style={{
                      margin: "20px",
                      padding: "10px",
                      borderRadius: "50%",
                      border: "1px solid #ccc",
                      backgroundColor: "#f9f9f9",
                      cursor: "pointer",
                      width: "50px",
                    }}
                    onClick={() => handleQuestionChange(index)}
                  >
                    {index + 1}
                  </button>
                ))
              ) : (
                <p>No questions available</p>
              )}
              
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
