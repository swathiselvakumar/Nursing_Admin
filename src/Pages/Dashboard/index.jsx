// import { Button, Container, Grid, Typography } from "@mui/material";
// import { GlobalStyleContainer } from "../../components/Global Styles/global.styles";
// import { DashboardStyles } from "./styles";
// import PageHeader from "../../components/Page Header";
// import { useTheme } from "@mui/material";
// import LearningboardCard from "../../components/Learningboard Card";
// import {
//   LearningboardCardData,
//   apiData,
//   apiTopperData,
//   tableData,
//   tableTopperData,
// } from "./data";
// import CommonTable from "../../components/Common/Table";
// import Glider from "react-glider";
// import "glider-js/glider.min.css";
// import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import CustomPagination from "../../components/Common/CustomPagination";
// import { useContext } from "react";
// import { navContext } from "../../context/navContext";
// import { useNavigate } from "react-router-dom";
// import { PATH } from "../../constants/routeConstants";
// import { useState } from "react";
// import TableToolbar from "../../components/Common/TableToolbar";

// export default function DashboardPage() {
//   const theme = useTheme();
//   const navigate = useNavigate();
//   const { open } = useContext(navContext);

//   const [test, setTest] = useState(false);

//   return (
//     <>
//       <GlobalStyleContainer>
//         <DashboardStyles sidebarState={open}>
//           <Grid item xs={12}>
//             <div className="total-learning-container">
//               <div className="slide-main-container">
//                 <PageHeader
//                   title="Learning board"
//                   subTitle="Overall rank of college"
//                   fontSize="14px"
//                   subFontSize="12px"
//                   fontColor={theme.font.primary}
//                 />
//                 <Container>
//                   <Glider
//                     className="glider-container"
//                     draggable
//                     hasDots={false}
//                     hasArrows
//                      slidesToShow={5}
//                      iconLeft={<ArrowBackIosNewIcon className="arrow" />}
//                      iconRight={<ArrowForwardIosIcon className="arrow" />}
//                     duration={7}
//                   >
//                     {LearningboardCardData.map((data, index) => {
//                       return (
//                         <LearningboardCard
//                           key={index}
//                           courseTitle={data.courseTitle}
//                           deptTitle={data.deptTitle}
//                           goldMedalCount={data.goldMedalCount}
//                           silverMedalCount={data.silverMedalCount}
//                           bronzeMedalCount={data.bronzeMedalCount}
//                           clickEvent={data.action}
//                         />
//                       );
//                     })}
//                   </Glider>
//                 </Container>
//               </div>
//             </div>
//           </Grid>
//           <div className="total-test-container">
//             <Grid container columnSpacing={3}>
//               <Grid item sm={5.5}>
//                 <div className="test-container">
//                   <TableToolbar
//                     title="Test Status"
//                     subTitle="Test details"
//                     titleFontSize="14px"
//                     subTitleFontSize="13px"
//                     padding="0px"
//                     titleMarginBottom="8px"
//                     subtTitleMarginBottom="8px"
//                     titleMarginLeft="0px"
//                     sort={true}
//                   />
//                   {test ? (
//                     <>
//                       <CommonTable
//                         rowData={apiData}
//                         tableHeaderData={tableData}
//                         tableHeight="84vh"
//                       />
//                       <CustomPagination />
//                     </>
//                   ) : (
//                     <div className="schedule-test-container">
//                       <Typography variant="h4" component="div" gutterBottom>
//                         No test active today
//                       </Typography>
//                       <Button
//                         disableElevation
//                         onClick={() => navigate(PATH.TESTS)}
//                       >
//                         schedule test
//                       </Button>
//                     </div>
//                   )}
//                 </div>
//               </Grid>
//               <Grid item sm={6.5}>
//                 <div className="task-container">
//                   <TableToolbar
//                     title="Geeks"
//                     subTitle="Our base2geeks toppers"
//                     titleFontSize="14px"
//                     subTitleFontSize="13px"
//                     padding="0px"
//                     titleMarginBottom="8px"
//                     subtTitleMarginBottom="8px"
//                     titleMarginLeft="0px"
//                     sort={true}
//                   />
//                   <CommonTable
//                     icon={true}
//                     rowData={apiTopperData}
//                     tableHeaderData={tableTopperData}
//                     tableHeight="77vh"
//                     padLeft="30%"
//                   />
//                   <div className="viewmore-btn-container">
//                     <Button
//                       variant="contained"
//                       size="small"
//                       disableElevation
//                       style={{ marginTop: "5px" }}
//                     >
//                       view more
//                     </Button>
//                   </div>
//                 </div>
//               </Grid>
//             </Grid>
//           </div>
//         </DashboardStyles>
//       </GlobalStyleContainer>
//     </>
//   );
// }

import React from 'react'
import { DashboardStyles } from './styles'
export default function DashboardPage() {
  return ( 
    <div>
      <DashboardStyles>
        <h1>hiii</h1>
      </DashboardStyles>
    </div>
  )
}


