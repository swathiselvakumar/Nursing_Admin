import React, { useEffect, useState,useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CustomBreadCrumbs from "../../components/Common/CustomBreadcrumbs";
import { PATH } from "../../constants/routeConstants";
import { Typography } from "@mui/material";
import Btn from "./Btn";
import axios from "axios";
import { useParams } from "react-router-dom";
import { navContext } from "../../context/navContext";

export default function HybridViewTest() {
  const { sno,id } = useParams();
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(null);
const email=localStorage.getItem("userMail");
const {Endpoint}=useContext(navContext);
  const [questions, setQuestions] = useState([]);
  const [questionsNo, setQuestionsNo] = useState([]);

 

 useEffect(() => {
  fetchQuestionSno();
}, []);

  const fetchQuestions = async (questionId) => {
    try {
      const res = await axios.post(
        `${Endpoint}admin/get/A_ViewDailyQuestion.php`,
        {
          adminId: email,
          test_id: sno,
          question_id: questionId,
        }
      )
      // console.log(res.data);
        setQuestions(res.data);
      setSelectedQuestionIndex(0); 
      
    } catch (error) {
      console.error("Error adding new item:", error);
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
        `${Endpoint}admin/get/A_ViewDailyQuestionCount.php`,
        {
          adminId: email,
          test_id: sno
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
    { label: "Hybrid", path: PATH.HYBRID },
    // { label: "Institution", path: PATH.YE },
    { label: "View Questions", path: PATH.UPLOADTEST },
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
                // height: "665px",
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
