import { useState } from "react";
import { Button, ButtonGroup, Container, Grid, useTheme } from "@mui/material";
import { GlobalStyleContainer } from "../../components/Global Styles/global.styles";
import CommonTable from "../../components/Common/Table";
import { ViewStudentApiData, ViewstudentData } from "./data";
import { ViewQuestionData, ViewQuestionApiData } from "./data";
import PageHeader from "../../components/Page Header";
import { ResultAnalysisStyles } from "../Result Analysis/styles";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../constants/routeConstants";
import CustomPagination from "../../components/Common/CustomPagination";
import SwapVerticalCircleRoundedIcon from "@mui/icons-material/SwapVerticalCircleRounded";

export default function ViewTestPage() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [viewTable, setViewTable] = useState("View Students");
  const [isActive, setIsActive] = useState(0);

  const viewTableHandler = (data) => {
    setViewTable(data);
  };

  const viewData = () => {
    navigate(PATH.QUESTION_VIEW);
  };

  return (
    <>
      <GlobalStyleContainer>
        <ResultAnalysisStyles viewTable={viewTable}>
          <Container maxWidth={false}>
            <div className="result-table-container">
              <Grid container>
                <Grid item sm={12}>
                  <Grid
                    item
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <PageHeader
                      title={viewTable}
                      fontSize="18px"
                      fontColor={theme.font.primary}
                      align="left"
                      onClick={() => {
                        viewTableHandler("View Students");
                        setIsActive(0);
                      }}
                    />
                    <div className="button-container">
                      <ButtonGroup>
                        <Button
                          sx={{
                            backgroundColor:
                              isActive === 0
                                ? theme.background.primary
                                : theme.background.whitePrimary,
                            color:
                              isActive === 0
                                ? theme.font.white
                                : theme.font.primary,
                            "&:hover": {
                              backgroundColor:
                                isActive === 0
                                  ? theme.background.primary
                                  : theme.background.whitePrimary,
                              color:
                                isActive === 0
                                  ? theme.font.white
                                  : theme.font.primary,
                            },
                          }}
                          onClick={() => {
                            viewTableHandler("View Students");
                            setIsActive(0);
                          }}
                        >
                          View by student
                        </Button>
                        <Button
                          sx={{
                            backgroundColor:
                              isActive === 1
                                ? theme.background.primary
                                : theme.background.whitePrimary,
                            color:
                              isActive === 1
                                ? theme.font.white
                                : theme.font.primary,
                            "&:hover": {
                              backgroundColor:
                                isActive === 1
                                  ? theme.background.primary
                                  : theme.background.whitePrimary,
                              color:
                                isActive === 1
                                  ? theme.font.white
                                  : theme.font.primary,
                            },
                          }}
                          onClick={() => {
                            viewTableHandler("View Questions");
                            setIsActive(1);
                          }}
                        >
                          View by questions
                        </Button>
                        <Button
                          sx={{
                            backgroundColor:
                              isActive === 2
                                ? theme.background.primary
                                : theme.background.whitePrimary,
                            color:
                              isActive === 2
                                ? theme.font.white
                                : theme.font.primary,
                            "&:hover": {
                              backgroundColor:
                                isActive === 2
                                  ? theme.background.primary
                                  : theme.background.whitePrimary,
                              color:
                                isActive === 2
                                  ? theme.font.white
                                  : theme.font.primary,
                            },
                          }}
                          onClick={() => {
                            setIsActive(2);
                          }}
                        >
                          <SwapVerticalCircleRoundedIcon />
                        </Button>
                      </ButtonGroup>
                    </div>
                  </Grid>
                  {viewTable === "View Students" ? (
                    <CommonTable
                      rowData={ViewStudentApiData}
                      tableHeaderData={ViewstudentData}
                      icon={false}
                      tableHeight="220px"
                      rowClickEvent={viewData}
                      columnCenter={"center"}
                      maxWidth={"90%"}
                    />
                  ) : (
                    <CommonTable
                      rowData={ViewQuestionApiData}
                      tableHeaderData={ViewQuestionData}
                      icon={false}
                      tableHeight="220px"
                      rowClickEvent={viewData}
                      columnCenter="center"
                    />
                  )}
                  <CustomPagination />
                </Grid>
              </Grid>
            </div>
          </Container>
        </ResultAnalysisStyles>
      </GlobalStyleContainer>
    </>
  );
}
