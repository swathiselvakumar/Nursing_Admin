import React, { useEffect, useState ,useContext} from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import CustomBreadCrumbs from '../../components/Common/CustomBreadcrumbs'
import { PATH } from '../../constants/routeConstants'
import { Typography } from '@mui/material';
import Btn from './Btn';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { navContext } from '../../context/navContext';
export default function UploadTestsub() {
const {sno}=useParams();
const {lastId}  =useParams();
const email=localStorage.getItem("userMail");
const {Endpoint}=useContext(navContext);
    const BreadcrumbItems = [
        { label: "Dashboard", path: PATH.DASHBOARD },
        
        { label: "SubMCQ", path: PATH.SUBJECTMCQ },
        { label: "Institution", path: PATH.SUBINSTITUTION },
        { label: "View Test", path: PATH.UPLOADTESTSUB },

      ];
      const [editMode, setEditMode] = useState(false);
     const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(null);
  // const [editMode, setEditMode] = useState(false);

    const [questions, setQuestions] = useState([]);
const handleQuestionChange = (index) => {
  console.log("Selected question index:", index);
  setSelectedQuestionIndex(index - 1);
};
const handleEdit = () => {
  setEditMode(!editMode); // Toggle edit mode
};
   useEffect(()=>
  {
    // response();
    fetchQuestions(1)
    // Send()
  },[])   

 const fetchQuestions = (questionId) => {
   axios
     .post(
       `${Endpoint}admin/get/A_ViewSubWiseQuestions.php`,
       {
         adminId: email,
         subjectId: sno,
         paperId: lastId,
         questionId: questionId,
       }
     )
     .then((response) => {
       console.log(response.data);

       const obj = response.data.map((item) => ({
         text: item.questions,
         options: [item.option1, item.option2, item.option3, item.option4],
         answer: item.answer,
       }));
       setQuestions(obj);
     })
     .catch((error) => {
           console.error("Error adding new item:", error);
     });
 };



      const ColStyle={
        backgroundColor:"#f6f6f6",
        height:"750px",
        width:"auto",
        borderRadius:"15px"
      }
      const ColStyle1={
        backgroundColor:"#f6f6f6",
        height:"665px",
        width:"auto",
        borderRadius:"15px",
        overflow:"auto"
      }
      const title={
        display:"flex",
        justifyContent:"space-between",
        paddingLeft:"15px",
        paddingRight:"15px",
        paddingTop:"15px"
      }
      const btn={
        padding:"5px",
        width:"60px",
        // boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        border:"1px solid black"
      }
      const finish={
        width:"100px",
        border:"none",
        backgroundColor:"#1b4242",
        color:"white",
        fontSize:"12px",
        borderRadius:"5px",
        height:"30px"
      }
      const save={
        width:"100px",
        border:"1px solid black",
        fontSize:"12px",
        borderRadius:"5px"
      }
      const remove={
        width:"100px",
        border:"1px solid black",
        fontSize:"12px",
        borderRadius:"5px"
      }
      const final={
        width:"500px",
        border:"none",
        backgroundColor:"#1b4242",
        color:"white",
        fontSize:"20px",
        borderRadius:"5px",
        height:"50px",
        marginLeft:"60px",
        marginTop:"20px",
        marginBottom:"20px"
      }
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
            <div style={ColStyle}>
              <div style={title}>
                <Typography style={{ fontWeight: 700 }}>
                  Upload Test Questions
                </Typography>
                <button style={btn} onClick={handleEdit}>
                  {editMode ? "Done" : "Edit"}
                </button>{" "}
                {/* Toggle edit button */}
              </div>
              <hr />
              <div>
                {/* <Typography style={{ paddingLeft: "20px" }}>
                  Questions
                </Typography> */}
                {selectedQuestionIndex !== null &&
                  selectedQuestionIndex < questions.length && (
                    <div>
                      <p>{questions[selectedQuestionIndex].text}</p>
                      <ol>
                        {questions[selectedQuestionIndex].options.map(
                          (option, index) => (
                            <li key={index}>{option}</li>
                          )
                        )}
                      </ol>
                      <p>
                        Correct Answer:{" "}
                        {questions[selectedQuestionIndex].answer}
                      </p>
                    </div>
                  )}
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "20px",
                }}
              >
               
              </div>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} xl={6}>
            <div
              style={{
                backgroundColor: "#f6f6f6",
                padding: "20px",
                borderRadius: "15px",
                overflow: "auto",
                height: "665px",
              }}
            >
              <div>
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
                    // onClick={fetchQuestions}
                  />
                ))}
              </div>
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
