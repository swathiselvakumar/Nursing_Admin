import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { LearningboardCardStyle } from "./styles";
import goldMedal from "../../assets/images/gold-medal.png";
import silverMedal from "../../assets/images/silver-medal.png";
import bronzeMedal from "../../assets/images/bronze-medal.png";

export default function LearningboardCard({
  courseTitle,
  deptTitle,
  goldMedalCount,
  silverMedalCount,
  bronzeMedalCount,
  clickEvent,
}) {
  return (
    <Grid item>
      <LearningboardCardStyle>
        <Card className="card-container">
          <CardContent>
            <div className="course-title">
              <Typography variant="body2" component="div" gutterBottom>
                {courseTitle}
              </Typography>
            </div>
            <div className="dept-title">
              <Typography variant="body2" component="div" gutterBottom>
                {deptTitle}
              </Typography>
            </div>
            <div className="count-title">
              <Typography variant="body2" component="div" gutterBottom>
                Total count of students
              </Typography>
            </div>
            <div className="badge-container">
              <Stack direction="row" spacing={2}>
                <div>
                  <Avatar alt="gold medal" src={goldMedal} className="medal" />
                  <Typography variant="body2" component="div">
                    {goldMedalCount}
                  </Typography>
                </div>
                <div>
                  <Avatar
                    alt="silver medal"
                    src={silverMedal}
                    className="medal"
                  />
                  <Typography variant="body2" component="div">
                    {silverMedalCount}
                  </Typography>
                </div>
                <div>
                  <Avatar
                    alt="bronze medal"
                    src={bronzeMedal}
                    className="medal"
                  />
                  <Typography variant="body2" component="div">
                    {bronzeMedalCount}
                  </Typography>
                </div>
              </Stack>
            </div>
          </CardContent>
          <CardActions className="action-container">
            <Button size="small" onClick={clickEvent}>
              View Students
            </Button>
          </CardActions>
        </Card>
      </LearningboardCardStyle>
    </Grid>
  );
}
