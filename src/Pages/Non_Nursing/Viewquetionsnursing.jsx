import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CustomBreadCrumbs from "../../components/Common/CustomBreadcrumbs";
import { PATH } from "../../constants/routeConstants";
import { Typography } from "@mui/material";
import Btn from './Btn';
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Viewquestionsnursing() {
  const { sno } = useParams();
  const { id } = useParams();
const email=localStorage.getItem("userMail");

  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(null);
  const [questions, setQuestions] = useState([]);

  const finish = {
    width: "100px",
    border: "none",
    backgroundColor: "#1b4242",
    color: "white",
    fontSize: "12px",
    borderRadius: "5px",
    height: "30px",
  };
  const save = {
    width: "100px",
    border: "1px solid black",
    fontSize: "12px",
    borderRadius: "5px",
  };
  const remove = {
    width: "100px",
    border: "1px solid black",
    fontSize: "12px",
    borderRadius: "5px",
  };
  const final = {
    width: "500px",
    border: "none",
    backgroundColor: "#1b4242",
    color: "white",
    fontSize: "20px",
    borderRadius: "5px",
    height: "50px",
    marginLeft: "60px",
    marginTop: "20px",
    marginBottom: "20px",
  };
  useEffect(() => {
    fetchQuestions(1);
  }, []);

  const fetchQuestions = async (questionId) => {
    try {
      const res = await axios.post(
        "https://vebbox.in/Nursing/controllers/api/admin/get/A_ViewNonNursingQuestions.php",
        {
          adminId:email,
          categoryId: sno,
          paperId: id,
          questionId: questionId,
        }
      );
      setQuestions(res.data);
      setSelectedQuestionIndex(0); 
    } catch (error) {
      console.error("Error adding new item:", error);
    }
  };

  const handleQuestionChange = (index) => {
    console.log("Selected question index:", index);
    setSelectedQuestionIndex(index - 1);
  };

  // const handleNextQuestion = () => {
  //   if (
  //     selectedQuestionIndex !== null &&
  //     selectedQuestionIndex < questions.length - 1
  //   ) {
  //     console.log("Next question index:", selectedQuestionIndex + 1);
  //     setSelectedQuestionIndex(selectedQuestionIndex + 1);
  //   }
  // };

  const BreadcrumbItems = [
    { label: "Dashboard", path: PATH.DASHBOARD },
    { label: "Non Nursing MCQ", path: PATH.NONNURSINGMCQ },
    { label: "Institution", path: PATH.NONINSTITUTION },
    { label: "View Questions", path: PATH.VIEWQUESTIONSNURSING},
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
                  <ul>
                    {[1, 2, 3, 4].map((option) => (
                      <li key={option}>
                        {questions[selectedQuestionIndex][`option${option}`]}
                      </li>
                    ))}
                  </ul>
                  <p>
                    Correct Answer: {questions[selectedQuestionIndex].answer}
                  </p>
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
                height: "665px",
              }}
            >
              {[...Array(10)].map((_, index) => (
                <Btn
                  key={index}
                  v1={index * 5 + 1}
                  v2={index * 5 + 2}
                  v3={index * 5 + 3}
                  v4={index * 5 + 4}
                  v5={index * 5 + 5}
                  handleQuestionChange={handleQuestionChange}
                  fetchQuestions={fetchQuestions}
                />
              ))}
            </div>
            <div style={{ width: "400px" }}>
              <button style={final}>Finish </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
