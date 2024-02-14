import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material";
import { GlobalStyleContainer } from "../../components/Global Styles/global.styles";
import { UploadQuestionStyles } from "./styles";
import PageHeader from "../../components/Page Header";
import { useTheme } from "@mui/material";
import UploadQuestionForm from "./Form";
import QuestionsCount from "./QuestionCount";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../constants/routeConstants";

export default function UploadQuestionsPage() {
  const theme = useTheme();
  const navigate = useNavigate();

  const queValues = [
    {
      id: "X01",
      qus: "what is programming ",
      a: "a",
      b: "b",
      c: "c",
      d: "d",
      ans: "a",
      status: "default",
    },
    {
      id: "X02",
      qus: "what is javascript",
      a: "a",
      b: "b",
      c: "c",
      d: "d",
      ans: "b",
      status: "default",
    },
    {
      id: "X03",
      qus: "what is java",
      a: "a",
      b: "b",
      c: "c",
      d: "d",
      ans: "c",
      status: "default",
    },
  ];

  const [data, setData] = useState(queValues);

  const defaultTemp = {
    qus: "",
    a: "",
    b: "",
    c: "",
    d: "",
    ans: "",
    status: "",
  };
  const [temp, setTemp] = useState(defaultTemp);
  const [click, setClick] = useState(0);

  const updateClickValue = (val) => {
    setClick(val);
  };

  const setTempData = (index) => {
    let t = { ...data[index], index };
    t.status = "active";
    let newList = [...data];
    newList[index] = t;
    setTemp(t);
    setData(newList);
  };

  const saveTempData = (tempIndex) => {
    let newList = [...data];
    newList[temp.index].status = temp;
    setData(newList);
    setTemp(defaultTemp);
    setTempData(tempIndex + 1);
  };

  const removeTempData = (tempIndex) => {
    let newList = [...data];
    newList[temp.index].status = "remove";
    setData(newList);
    setTemp(defaultTemp);
    setTempData(tempIndex + 1);
  };

  useEffect(() => {
    setTempData(0);
  }, []);

  return (
    <>
      <GlobalStyleContainer>
        <UploadQuestionStyles>
          <Grid container>
            <Grid item xs={8} className="upload-root-container">
              <div className="upload-main-container">
                <Grid
                  item
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <PageHeader
                    title="Upload Test Question"
                    fontSize="16px"
                    fontColor={theme.font.primary}
                    fontWeight="bold"
                  />
                  <Button
                    variant="contained"
                    size="small"
                    onClick={
                      temp.status == "active"
                        ? () => {
                            setTemp({ ...temp, status: "edit" });
                          }
                        : () => {
                            setTemp(defaultTemp);
                          }
                    }
                  >
                    {temp.status === "active" ? "Edit" : "Cancel"}
                  </Button>
                </Grid>
                <UploadQuestionForm
                  temp={temp}
                  data={data}
                  setTemp={setTemp}
                  saveClickEvent={saveTempData}
                  removeClickEvent={removeTempData}
                />
              </div>
            </Grid>
            <Grid item xs={4} className="questions-count-root-container">
              <div className="questions-count-main-container">
                <Stack
                  direction="row"
                  display="flex"
                  justifyContent="space-around"
                  className="quetions-status-container"
                >
                  <Grid item className="active-status">
                    <Box></Box>
                    <Typography
                      variant="body2"
                      component="div"
                      className="status-text"
                    >
                      Active
                    </Typography>
                  </Grid>
                  <Grid item className="edit-status">
                    <Box></Box>
                    <Typography
                      variant="body2"
                      component="div"
                      className="status-text"
                    >
                      Edited
                    </Typography>
                  </Grid>
                  <Grid item className="remove-status">
                    <Box></Box>
                    <Typography
                      variant="body2"
                      component="div"
                      className="status-text"
                    >
                      Remove
                    </Typography>
                  </Grid>
                </Stack>
                <Divider />
                <div className="count-main-container">
                  <QuestionsCount
                    temp={temp}
                    tempData={temp}
                    queData={data}
                    setTempData={setTempData}
                    // click={click}
                    // updateClickValue={updateClickValue}
                  />
                </div>
                <div className="test-submit-container">
                  <Button
                    variant="contained"
                    size="small"
                    disableElevation
                    onClick={() => navigate(PATH.INSTRUCTIONS)}
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </Grid>
          </Grid>
        </UploadQuestionStyles>
      </GlobalStyleContainer>
    </>
  );
}
