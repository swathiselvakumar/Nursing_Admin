import { Button, Grid, useTheme } from "@mui/material";
import { GlobalStyleContainer } from "../../components/Global Styles/global.styles";
import ProfileCard from "../../components/ProfileCard";
import QuestionsData from "./Questions";
import UserAvatar from "../../assets/images/User-avatar.png";
import PageHeader from "../../components/Page Header";
import StudentsProfile from "./StudentProfile";
import { TestQuestionStyles } from "./styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../constants/routeConstants";

export default function QuestionsView() {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <>
      <GlobalStyleContainer>
        <TestQuestionStyles>
          <Grid container className="spacing-test-container">
            <Grid item xs={12} md={8.5} className="questions-main-container">
              <PageHeader
                title={"Santhosh@123"}
                fontColor={theme.font.primary}
                fontSize="16px"
                paddingRight={5}
              />
              <QuestionsData />
              <div className="back-btn-container">
                <Button
                  variant="text"
                  startIcon={<ArrowBackIcon />}
                  onClick={() => {
                    navigate(PATH.VIEW_TEST_DETAILS);
                  }}
                >
                  Previous
                </Button>
              </div>
            </Grid>
            <Grid item xs={12} md={3.5} className="spacing-detail-container">
              <div className="detail-container">
                <ProfileCard
                  image={UserAvatar}
                  username="username"
                  email="username@gmail.com"
                  mobileNum="+91 96005 12344"
                />
                <StudentsProfile />
              </div>
            </Grid>
          </Grid>
        </TestQuestionStyles>
      </GlobalStyleContainer>
    </>
  );
}
