import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CustomBreadCrumbs from "../../components/Common/CustomBreadcrumbs";
import { PATH } from "../../constants/routeConstants";
import { Typography } from "@mui/material";
import Btn from "./Btn";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function UploadTest() {
  const { sno } = useParams();
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(null);
  const [questions, setQuestions] = useState([
    {
      number: 3,
      text: "What is your age?",
      options: ["10-20", "21-30", "31-40", "41+"],
      answer: "21-30", // Correct answer
    },
    {
      number: 1,
      text: "What is your name?",
      options: ["John", "Alice", "Bob", "Jane"],
      answer: "John", // Correct answer
    },
    {
      number: 2,
      text: "What is your age?",
      options: ["10-20", "21-30", "31-40", "41+"],
      answer: "21-30", // Correct answer
    },
    {
      number: 2,
      text: "What is your age?",
      options: ["10-20", "21-30", "31-40", "41+"],
      answer: "21-30", // Correct answer
    },
    {
      number: 2,
      text: "What is your age?",
      options: ["10-20", "21-30", "31-40", "41+"],
      answer: "21-30", // Correct answer
    },
    {
      number: 2,
      text: "What is your age?",
      options: ["10-20", "21-30", "31-40", "41+"],
      answer: "21-30", // Correct answer
    },
    {
      number: 2,
      text: "What is your age?",
      options: ["10-20", "21-30", "31-40", "41+"],
      answer: "21-30", // Correct answer
    },

    // Add more questions as needed
  ]);

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
    response();
  }, []);

  const response = async () => {
    try {
      const res = await axios.post(
        "https://vebbox.in/Nursing/controllers/api/admin/get/A_ViewPmcqQuestions.php",
        {
          adminId: "nandinivebbox@gmail.com",
          institutionId: sno,
          paperId: "7",
          questionId: "5",
        }
      );
    } catch (error) {
      console.error("Error adding new item:", error);
    }
  };

  const handleQuestionChange = (index) => {
    console.log("Selected question index:", index);
    setSelectedQuestionIndex(index-1);
  };


  const handleNextQuestion = () => {
    if (
      selectedQuestionIndex !== null &&
      selectedQuestionIndex < questions.length - 1
    ) {
      console.log("Next question index:", selectedQuestionIndex + 1);
      setSelectedQuestionIndex(selectedQuestionIndex + 1);
    }
  };


  const BreadcrumbItems = [
    { label: "Dashboard", path: PATH.DASHBOARD },
    { label: "YearMCQ", path: PATH.YEARMCQ },
    { label: "Institution", path: PATH.YEARINSTITUTION },
    { label: "View Test", path: PATH.UPLOADTEST },
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
              {selectedQuestionIndex !== null &&
                selectedQuestionIndex < questions.length && (
                  <div>
                    <p>{questions[selectedQuestionIndex].text}</p>
                    <ul>
                      {questions[selectedQuestionIndex].options.map(
                        (option, index) => (
                          <li key={index}>{option}</li>
                        )
                      )}
                    </ul>
                    <p>
                      Correct Answer: {questions[selectedQuestionIndex].answer}
                    </p>
                  </div>
                )}

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "20px",
                }}
              >
                <button style={finish}>Finish</button>
                <button style={save}>Save</button>
                <button style={remove}>Remove</button>
              </div>
              <div style={{ textAlign: "center", marginTop: "20px" }}>
                <button
                  style={{
                    width: "100px",
                    border: "none",
                    backgroundColor: "#1b4242",
                    color: "white",
                    borderRadius: "5px",
                    height: "30px",
                  }}
                  onClick={handleNextQuestion}
                >
                  Next
                </button>
              </div>
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
                />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
