import { Button, Grid, Typography } from "@mui/material";
import { GlobalStyleContainer } from "../../components/Global Styles/global.styles";
import { UploadQuestionLandingStyles } from "./styles";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../constants/routeConstants";
import CustomBreadCrumbs from "../../components/Common/CustomBreadcrumbs";
import { testBreadcrumbItems } from "./data";
// import { saveAs } from "file-saver";
import { useContext } from "react";
import { navContext } from "../../context/navContext";
// import { errorToaster } from "../../utils/tosterMsg";
import InfoIcon from "@mui/icons-material/Info";
import ExcelJS from "exceljs";

export default function TestPage() {
  const { updateTestDetails } = useContext(navContext);
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const { updateQuestionData } = useContext(navContext);

  const handleClick = () => {
    inputRef.current.click();
  };

  const readExcelFile = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const workbook = new ExcelJS.Workbook();
      await workbook.xlsx.load(file);

      // Assuming there's only one sheet
      const worksheet = workbook.getWorksheet(1);

      // Convert sheet to array of objects
      const data = [];
      worksheet.eachRow((row, rowNumber) => {
        if (rowNumber !== 1) {
          // Skip header row
          const rowData = {};
          row.eachCell((cell, colNumber) => {
            // Assuming column names are in the first row
            const columnName = worksheet.getRow(1).getCell(colNumber).value;
            rowData[columnName] = cell.value;
          });
          data.push(rowData);
        }
      });

      const newData = data.map((item) => ({
        ...item,
        status: "default",
      }));

      const queDataStatus = newData.every((item) => item.question);

      if (newData.length > 0) {
        if (queDataStatus) {
          updateQuestionData(newData);
          updateTestDetails({});
          navigate(PATH.QUESTIONS_UPLOAD);
        } else {
          errorToaster({ msg: "Invalid template format" });
        }
      } else {
        errorToaster({ msg: "Do not accept empty file" });
        updateQuestionData([]);
      }
    }
  };

  const downloadTemplate = async () => {
    let downloadRowData = [];
    let downloadHeadingData = [
      "sno",
      "question",
      "option1",
      "option2",
      "option3",
      "option4",
      "answer",
    ];
    let manuallyAddedHeading = [];

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Sheet1");

    // Add headings to the worksheet
    const manuallyAddedHead = manuallyAddedHeading;
    worksheet.addRow([...downloadHeadingData, ...manuallyAddedHead]);

    // Add data rows to the worksheet
    downloadRowData.forEach((row) => {
      worksheet.addRow(row);
    });

    // Generate a blob containing the Excel file
    const blob = await workbook.xlsx.writeBuffer();

    // Create a URL for the blob and trigger a download
    const url = window.URL.createObjectURL(new Blob([blob]));
    const a = document.createElement("a");
    a.href = url;
    a.download = "questions data.xlsx";
    a.click();
    window.URL.revokeObjectURL(url);
  };

  // const downloadTemplate = async () => {
  //   const filePath = "../../../public/questions-xl.xlsx";

  //   try {
  //     const response = await fetch(filePath);
  //     const blob = await response.blob();

  //     saveAs(blob, "question-data.xlsx");
  //   } catch (error) {
  //     console.error("Error downloading the file:", error);
  //   }
  // };

  return (
    <>
      <GlobalStyleContainer>
        <CustomBreadCrumbs items={testBreadcrumbItems} />
        <UploadQuestionLandingStyles>
          <Grid container className="landing-main-container">
            <Grid item xs={12} className="upload-button-container">
              <Button
                variant="contained"
                onClick={downloadTemplate}
                disableElevation
              >
                Download excel template
              </Button>
              <input
                style={{ display: "none" }}
                ref={inputRef}
                type="file"
                onChange={readExcelFile}
                accept=".xlsx"
              />
              <Button
                variant="contained"
                onClick={handleClick}
                disableElevation
              >
                Upload questions in excel
              </Button>
              <Grid item xs={12} className="description-container">
                <Typography
                  variant="h6"
                  component="div"
                  display="flex"
                  alignItems="center"
                  gutterBottom
                >
                  <InfoIcon sx={{ mr: 0.5 }} />
                  Instructions :
                </Typography>
                <div className="descriptions">
                  <Typography variant="body2" component="div" gutterBottom>
                    1. Do not refresh untill submit the test.
                  </Typography>
                  <Typography variant="body2" component="div" gutterBottom>
                    2. Download the template by clicking on Download Excel
                    button above.
                  </Typography>
                  <Typography variant="body2" component="div" gutterBottom>
                    3. The template has six columns. Use the first column for
                    serial numbers (SL No.), the second column for the question,
                    and the next four columns for options (A, B, C, and D). The
                    last column should be for the correct answer.
                  </Typography>
                  <Typography variant="body2" component="div" gutterBottom>
                    4. Each question can have a maximum of four options. Leave
                    the remaining option cells blank if you have fewer options
                    for any question.
                  </Typography>
                  <Typography variant="body2" component="div" gutterBottom>
                    5. In the last column of the template, indicate the correct
                    answer for each question (e.g., A, B, C, or D).
                  </Typography>
                  <Typography variant="body2" component="div" gutterBottom>
                    6. After entering all the questions and answers, save the
                    Excel file on your computer in a location you can easily
                    access.
                  </Typography>
                  <Typography variant="body2" component="div" gutterBottom>
                    7. Upload the MCQ question excel file by clicking on Upload
                    Excel button above.
                  </Typography>
                  <Typography variant="body2" component="div" gutterBottom>
                    8. You can review and edit the uploaded questions in the
                    modify section to ensure accuracy and completeness.
                  </Typography>
                  <Typography variant="body2" component="div" gutterBottom>
                    9. Once the questions are verified provide the details for
                    the test such as test name, duration, number of questions
                    and other mandatory fields.
                  </Typography>
                  <Typography variant="body2" component="div" gutterBottom>
                    10. Test must be scheduled atleast 15 minutes from the
                    current time.
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
