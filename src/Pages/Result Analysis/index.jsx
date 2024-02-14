import { useState } from "react";
import { Button, ButtonGroup, Container, Grid, useTheme } from "@mui/material";
import { GlobalStyleContainer } from "../../components/Global Styles/global.styles";
import CommonTable from "../../components/Common/Table";
import {
  upcomminApiData,
  upcomminTableData,
  cancelApiData,
  cancelTableData,
  completeApiData,
  completeTableData,
} from "./data";
import PageHeader from "../../components/Page Header";
import { ResultAnalysisStyles } from "./styles";
import { useNavigate } from "react-router-dom";
import CustomPagination from "../../components/Common/CustomPagination";
import { PATH } from "../../constants/routeConstants";
import SwapVerticalCircleRoundedIcon from "@mui/icons-material/SwapVerticalCircleRounded";

export default function ResultAnalysisPage() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [viewTable, setViewTable] = useState("Upcoming Tests");
  const [isActive, setIsActive] = useState(0);

  const viewTableHandler = (data) => {
    setViewTable(data);
  };

  const completedTestViewData = () => {
    navigate(PATH.VIEW_TEST_DETAILS);
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
                      align="center"
                      onClick={() => viewTableHandler("Upcoming Tests")}
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
                            viewTableHandler("Upcoming Tests");
                            setIsActive(0);
                          }}
                        >
                          Upcoming test
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
                            viewTableHandler("Cancel Tests");
                            setIsActive(1);
                          }}
                        >
                          Cancelled test
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
                            viewTableHandler("Completed Tests");
                            setIsActive(2);
                          }}
                        >
                          Completed test
                        </Button>
                        <Button
                          sx={{
                            backgroundColor:
                              isActive === 3
                                ? theme.background.primary
                                : theme.background.whitePrimary,
                            color:
                              isActive === 3
                                ? theme.font.white
                                : theme.font.primary,
                            "&:hover": {
                              backgroundColor:
                                isActive === 3
                                  ? theme.background.primary
                                  : theme.background.whitePrimary,
                              color:
                                isActive === 3
                                  ? theme.font.white
                                  : theme.font.primary,
                            },
                          }}
                          onClick={() => {
                            setIsActive(3);
                          }}
                        >
                          <SwapVerticalCircleRoundedIcon />
                        </Button>
                      </ButtonGroup>
                    </div>
                  </Grid>
                  {viewTable === "Upcoming Tests" ? (
                    <CommonTable
                      tableHeaderData={upcomminTableData}
                      rowData={upcomminApiData}
                      icon={false}
                      tableHeight="180px"
                      columnCenter="center"
                      maxWidth={"90%"}
                    />
                  ) : viewTable === "Cancel Tests" ? (
                    <CommonTable
                      tableHeaderData={cancelTableData}
                      rowData={cancelApiData}
                      icon={false}
                      tableHeight="180px"
                      columnCenter="center"
                      maxWidth={"90%"}
                    />
                  ) : viewTable === "Completed Tests" ? (
                    <CommonTable
                      tableHeaderData={completeTableData}
                      rowData={completeApiData}
                      icon={false}
                      tableHeight="180px"
                      rowClickEvent={completedTestViewData}
                      columnCenter="center"
                      maxWidth={"90%"}
                    />
                  ) : null}
                  {/* <CustomPagination /> */}
                </Grid>
              </Grid>
            </div>
          </Container>
        </ResultAnalysisStyles>
      </GlobalStyleContainer>
    </>
  );
}
