import { Grid, Typography } from "@mui/material";
import { TaskCardStyles } from "./styles";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

export default function TaskCard() {
  return (
    <TaskCardStyles>
      <Grid item xs={12} className="task-card-container">
        <div className="percentage-container">
          <Grid item xs={1}>
            <Typography variant="body2" className="percentage-text">
              50%
            </Typography>
          </Grid>
        </div>
        <Grid item xs={11} className="content-container">
          <Grid item>
            <Typography variant="body2" component="div" className="task-name">
              Styling with CSS
            </Typography>
            <Typography variant="body2" component="div" className="task-count">
              12 tasks
            </Typography>
          </Grid>
          <Grid item>
            <ArrowForwardIosOutlinedIcon className="icons" />
          </Grid>
        </Grid>
      </Grid>
    </TaskCardStyles>
  );
}
