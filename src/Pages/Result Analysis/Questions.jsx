import { Typography } from "@mui/material";
import { questionAnswerData } from "./data";

export default function QuestionsData() {
  return (
    <>
      {questionAnswerData.map((data, index) => {
        return (
          <div className="questions_main" key={index}>
            <Typography variant="h6" className="question_title" component="div">
              {data.no} . {data.title}
            </Typography>
            <Typography variant="body2" className="question_opt1">
              a) {data.optOne}
            </Typography>
            <Typography variant="body2" className="question_opt2">
              b) {data.optTwo}
            </Typography>
            <Typography variant="body2" className="question_opt3">
              c) {data.optThree}
            </Typography>
            <Typography variant="body2" className="question_opt4">
              d) {data.optFour}
            </Typography>
          </div>
        );
      })}
    </>
  );
}
