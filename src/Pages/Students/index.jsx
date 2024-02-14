import CommonTable from "../../components/Common/Table";
import TableToolbar from "../../components/Common/TableToolbar";
import CustomPagination from "../../components/Common/CustomPagination";
import ProfileCard from "../../components/ProfileCard";
import ProfileButton from "../../components/ProfileCard/ProfileButton";
import ProgressCard from "../../components/ProgressCard";
import { Grid } from "@mui/material";
import { GlobalStyleContainer } from "../../components/Global Styles/global.styles";
import { apiData, tableData } from "./data";
import { progressCardData } from "./data";

import UserAvatar from "../../assets/images/User-avatar.png";
import PageHeader from "../../components/Page Header";
import { StudentPageStyles } from "./styles";

export default function StudentsPage() {
  return (
    <>
      <GlobalStyleContainer>
        <Grid container>
          <Grid item xs={12} md={9} className="root-container">
            <StudentPageStyles>
              <TableToolbar
                title="Student List"
                download={true}
                filter={true}
                search={true}
                sort={true}
              />
              <CommonTable
                icon={true}
                rowData={apiData}
                tableHeaderData={tableData}
                maxWidth={"95%"}
                tableHeight="240px"
                padLeft={"27%"}
              />
            </StudentPageStyles>
            <div className="pagination-container">
              <CustomPagination
                itemsPerPage={4}
                hidePrevButton={true}
                hideNextButton={true}
              />
            </div>
          </Grid>
          <Grid item xs={12} md={3} className="detail-root-container">
            <div className="detail-container">
              <ProfileCard
                image={UserAvatar}
                username="username"
                email="username@gmail.com"
                mobileNum="+91 96005 12344"
              />
              <PageHeader
                title="Purchased Courses"
                fontSize="12px"
                headerMarginBottom="16px"
              />
              <div className="sub-detail-container">
                {progressCardData.map((data, index) => {
                  return (
                    <ProgressCard
                      img={data.img}
                      title={data.title}
                      progressCal={data.progressCal}
                      progressVal={data.progressVal}
                      key={index}
                    />
                  );
                })}
              </div>
              <ProfileButton
                buttonOneText="View More"
                buttonTwoText="Block"
                // handleViewMoreOpen={handleViewMoreOpen}
              />
            </div>
          </Grid>
        </Grid>
      </GlobalStyleContainer>
    </>
  );
}
