import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CustomBreadCrumbs from "../../components/Common/CustomBreadcrumbs";
import { PATH } from "../../constants/routeConstants";
import { Typography } from "@mui/material";
import Btn from "./Btn";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Viewquestionsmodel() {
  const { sno } = useParams();
const email=localStorage.getItem("userMail");
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(null);
  const [questions, setQuestions] = useState([
    {
      number: 1,
      text: "What is your age?",
      options: ["10-20", "21-30", "31-40", "41+"],
      answer: "21-30", // Correct answer
    },
    {
      number: 2,
      text: "What is your name?",
      options: ["John", "Alice", "Bob", "Jane"],
      answer: "John", // Correct answer
    },
    {
      number: 3,
      text: "Javascript is an ___ language?",
      options: [
        "Object-Oriented",
        "Object-Based",
        "Assembly-language",
        "High-level+",
      ],
      answer: "Object-Based", // Correct answer
    },
    {
      number: 4,
      text: "The function and  var are known as:",
      options: [
        "Keywords",
        "Data types",
        "Declaration statements",
        "Prototypes",
      ],
      answer: "Declaration statements", // Correct answer
    },
    {
      number: 5,
      text: "Which one of the following is the correct way for calling the JavaScript code?",
      options: ["Preprocessor", "Triggering Event", "RMI", "Function/Method"],
      answer: "Function/Method", // Correct answer
    },
    {
      number: 6,
      text: "Which of the following type of a variable is volatile?",
      options: [
        "Mutable variable",
        "Dynamic variable",
        "Volatile variable",
        "Immutable variable",
      ],
      answer: "Mutable variable", // Correct answer
    },
    {
      number: 7,
      text: "In the JavaScript, which one of the following is not considered as an error?",
      options: [
        "Syntax error",
        "Missing of semicolons",
        "Division by zero",
        "Missing of Bracket",
      ],
      answer: "Division by zero", // Correct answer
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
          adminId:email,
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
    setSelectedQuestionIndex(index - 1);
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
    { label: "Model MCQ", path: PATH.MODELMOCK },
    { label: "Institution", path: PATH.MODELINSTITUTION },
    { label: "View Questions", path: PATH.VIEWQUESTIONSMODEL },
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
            <div style={{ width: "400px" }}>
              <button style={final}>Finish </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
