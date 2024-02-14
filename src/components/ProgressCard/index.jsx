import LinearProgress from "@mui/material/LinearProgress";
import IconButton from "@mui/material/IconButton";
import { Avatar, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { ProgressCardStyles, ProgressbarStyles } from "./styles";

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mt: 1 }}>
        <ProgressbarStyles>
          <LinearProgress variant="determinate" {...props} />
        </ProgressbarStyles>
      </Box>
      {/* <Box>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box> */}
    </Box>
  );
}

export default function ProgressCard({
  img,
  title,
  progressCal,
  description,
  progressVal,
  key,
}) {
  //   const [progress, setProgress] = React.useState(10);

  //   React.useEffect(() => {
  //     const timer = setInterval(() => {
  //       setProgress((prevProgress) =>
  //         prevProgress >= 100 ? 10 : prevProgress + 10
  //       );
  //     }, 800);
  //     return () => {
  //       clearInterval(timer);
  //     };
  //   }, []);

  return (
    <ProgressCardStyles>
      <Grid key={key} container className="progress-main-container">
        <Grid
          item
          xs={3}
          display="flex"
          flexDirection="row"
          justifyContent="flex-start"
        >
          <IconButton color="inherit" className="course-image-container">
            <Avatar
              alt="course detail"
              src={img}
              sx={{ width: 25, height: 25 }}
            />
          </IconButton>
        </Grid>
        <Grid item xs={9}>
          <Grid
            container
            display="flex"
            flexDirection="row"
            alignItems="flex-end"
            justifyContent="space-between"
          >
            <Grid item>
              <Typography variant="body2" component="div" className="title">
                {title}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body2"
                component="div"
                color="text.secondary"
                className="progress-title"
              >
                {progressCal}
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item>
              <Typography
                variant="body2"
                component="div"
                className="date-content"
              >
                Expires @ 12-jun-2023{description}
              </Typography>
            </Grid>
            <Box sx={{ width: "100%" }}>
              <LinearProgressWithLabel value={progressVal} />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </ProgressCardStyles>
  );
}
