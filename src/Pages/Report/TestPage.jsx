import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Btn from "./Btn";
import BreadcrumbsComp from "../../components/Common/BreadCrumbs";
import { navContext } from "../../context/navContext";
// import { generateExcel } from "../../components/Common/Excel/index.jsx";
import axios from "axios";

function TestPage() {
  const { year, setYear, month, setMonth,Endpoint } = useContext(navContext);
  const email=localStorage.getItem("userMail");

  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([]);
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    // Call the click function when the component mounts
    click();
  }, []);

  const click = async () => {
    try {
      const response = await axios.post(
        `${Endpoint}admin/post/A_InsertPmcqQuestion.php`,
        {
          adminId:email,
          institutionId: "2",
          year: year,
          month: month,
          questions: [
            {
              questionText: question,
              option1: options[0],
              option2: options[1],
              option3: options[2],
              option4: options[3],
              answer: answer,
            },
            {
              questionText: question,
              option1: options[0],
              option2: options[1],
              option3: options[2],
              option4: options[3],
              answer: answer,
            },
          ],
        }
      );
      console.log("New item added:", response.data);
      setQuestion(response.data.questionText);
      setOptions(response.data.options);
      setAnswer(response.data.answer);
    } catch (error) {
      console.error("Error adding new item:", error);
    }

    try {
      const response = await axios.post(
        "https://nursingupdate.in/Nursing/controllers/api/admin/get/A_ViewPmcqQuestions.php",
        {
          adminId: email,
          institutionId: "2",
          paperId: "7",
          questionId: "5",
        }
      );
      console.log("New item added:", response.data);
      setQuestion("");
      setOptions([]);
      setAnswer("");
    } catch (error) {
      console.error("Error adding new item:", error);
    }
  };

  const handleDownloadExcel = () => {
    const excelData = {
      questions: question,
      option1: options[0],
      option2: options[1],
      option3: options[2],
      option4: options[3],
      answer: answer,
    };
    generateExcel(excelData);
  };

  return (
    <div style={{ backgroundColor: "#E1EEDD", height: "120vh" }}>
      <Container fluid>
        <div>
          <BreadcrumbsComp />
        </div>
        <div className="parentt-wrap">
          <Row>
            <Col>
              <div className="left-wrapper ">
                <div className="sm-nav">
                  <span>Upload Test Questions</span>
                  <span>
                    <button className="common-btn">Edit</button>
                  </span>
                </div>
                <div className="c1 ">
                  <div className="q1">
                    <p className="ques">Questions</p>
                    <div className="viewQues">
                      <p>{question}</p>
                    </div>
                    <div className="option">
                      <p>Option</p>
                      <li>{options}</li>
                    </div>
                    <div className="answer">
                      <p>Answer</p>
                      <li>{answer}</li>
                    </div>
                  </div>
                  <div className="ft">
                    <button className="common-btn">Save</button>
                    <button className="common-btn">Remove</button>
                    <button
                      className="common-btn"
                      onClick={handleDownloadExcel}
                    >
                      Download Excel
                    </button>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div className="rigth-wrapper">
                <div className="select-num">
                  <div className="r1">
                    <Btn num1="1" num2="2" num3="3" num4="4" num5="5" />
                  </div>
                  <div className="r1">
                    <Btn num1="6" num2="7" num3="8" num4="9" num5="10" />
                  </div>
                  <div className="r1">
                    <Btn num1="11" num2="12" num3="13" num4="14" num5="15" />
                  </div>
                  <div className="r1">
                    <Btn num1="16" num2="17" num3="18" num4="19" num5="20" />
                  </div>
                  <div className="r1">
                    <Btn num1="21" num2="22" num3="23" num4="24" num5="25" />
                  </div>
                  <div className="r1">
                    <Btn num1="26" num2="27" num3="28" num4="29" num5="30" />
                  </div>
                  <div className="r1">
                    <Btn num1="31" num2="32" num3="33" num4="34" num5="35" />
                  </div>
                  <div className="r1">
                    <Btn num1="36" num2="37" num3="38" num4="39" num5="40" />
                  </div>
                  <div className="r1">
                    <Btn num1="41" num2="42" num3="43" num4="44" num5="45" />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default TestPage;
