import { Button, Grid, Typography } from "@mui/material";
import { GlobalStyleContainer } from "../../components/Global Styles/global.styles";
import { UploadQuestionLandingStyles } from "./styles";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../constants/routeConstants";
import DownloadButton from "../../components/Common/DownloadFile";
export default function TestPage() {
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const handleClick = () => {
    // inputRef.current.click();
    // alert();
    DownloadButton();
  };

  const handleFileChange = (event) => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }

    console.log("fileObj is", fileObj);

    event.target.value = null;

    console.log(event.target.files);

    console.log(fileObj);
    console.log(fileObj.name);
  };

  // const downloadExcelFile = () => {
  //   console.log("Download Excel File");
  // };

  return (
    <>
      <GlobalStyleContainer>
        <UploadQuestionLandingStyles>
          <Grid container className="landing-main-container">
            <Grid item xs={12} className="upload-button-container">
              <input
                style={{ display: "none" }}
                ref={inputRef}
                type="file"
                onChange={handleFileChange}
              />
              <Button
                variant="contained"
                onClick={handleClick}
                disableElevation
              >
                Download excel template
              </Button>
              <Button
                variant="contained"
                onClick={() => navigate(PATH.QUESTIONS_UPLOAD)}
                disableElevation
              >
                Upload questions in excel
              </Button>
              <Grid item xs={12} className="description-container">
                <Typography variant="h6" component="div" gutterBottom>
                  Instructions :
                </Typography>
                <div className="descriptions">
                  <Typography variant="body2" component="div" gutterBottom>
                    1.Download the template by clicking on Download Excel button
                    above.
                  </Typography>
                  <Typography variant="body2" component="div" gutterBottom>
                    2.The template has six columns. Use the first column for
                    serial numbers (SL No.), the second column for the question,
                    and the next four columns for options (A, B, C, and D). The
                    last column should be for the correct answer.
                  </Typography>
                  <Typography variant="body2" component="div" gutterBottom>
                    3.Each question can have a maximum of four options. Leave
                    the remaining option cells blank if you have fewer options
                    for any question.
                  </Typography>
                  <Typography variant="body2" component="div" gutterBottom>
                    4.In the last column of the template, indicate the correct
                    answer for each question (e.g., A, B, C, or D).
                  </Typography>
                  <Typography variant="body2" component="div" gutterBottom>
                    5.After entering all the questions and answers, save the
                    Excel file on your computer in a location you can easily
                    access.
                  </Typography>
                  <Typography variant="body2" component="div" gutterBottom>
                    6.Upload the MCQ question excel file by clicking on Upload
                    Excel button above.
                  </Typography>
                  <Typography variant="body2" component="div" gutterBottom>
                    7.You can review and edit the uploaded questions in the
                    modify section to ensure accuracy and completeness.
                  </Typography>
                  <Typography variant="body2" component="div" gutterBottom>
                    8.Once the questions are verified provide the details for
                    the test such as test name, duration, number of questions
                    and other mandatory fields.
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </UploadQuestionLandingStyles>
      </GlobalStyleContainer>
    </>
  );
}
