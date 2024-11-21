import { ThemeProvider } from "@mui/material/styles";
import RouterConfig from "./router/RouterConfig";
import { BrowserRouter as ParentRouter } from "react-router-dom";
import { appTheme } from "./theme/appTheme";
import "@fontsource-variable/open-sans";
import NavContextProvider from "./context/navContext";
// import Modals from "./Pages/Student/Standard/Modal";
// import Profile from "./Pages/Profile";
// import '@fontsource/roboto'
// import './index.css'

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <ParentRouter path="/">
        <NavContextProvider>
          <RouterConfig />
        </NavContextProvider>
      </ParentRouter>
    </ThemeProvider>
  );
}

export default App;
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function QuestionList() {
//   const [questions, setQuestions] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchQuestions();
//   }, []);

//   const fetchQuestions = () => {
//     axios
//       .post(
//         "https://vebbox.in/Nursing/controllers/api/admin/get/A_ViewSubWiseQuestions.php",
//         {
//           adminId: "nandinivebbox@gmail.com",
//           subjectId: "16",
//           paperId: "10",
//           questionId: "14",
//         }
//       )
//       .then((response) => {
//           console.log(response.data); 
//         setQuestions(response.data);
//       })
//       .catch((error) => {
//         setError(error.message);
//       });
//   };

//   return (
//     <div>
//       <h1>Excel Sheet Questions</h1>
//       {error && <div>Error: {error}</div>}
//       <div>
//         {questions.map((question, index) => (
//           <div key={index}>
//             {/* <p>Sno: {question.sno}</p>
//             <p>Subject ID: {question.subject_id}</p>
//             <p>Paper ID: {question.paper_id}</p> */}
//             <p>Question: {question.questions}</p>
//             <p>Option 1: {question.option1}</p>
//             <p>Option 2: {question.option2}</p>
//             <p>Option 3: {question.option3}</p>
//             <p>Option 4: {question.option4}</p>
//             <p>Answer: {question.answer}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default QuestionList;
