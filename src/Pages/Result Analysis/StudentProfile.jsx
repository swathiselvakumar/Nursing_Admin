import { Grid, Typography } from "@mui/material";
import { studentBioData } from "./data";

const StudentData = ({ title, StudentData }) => {
  return (
    <Grid item xs={12} className="student-data-row">
      <Grid item xs={6} className="student-title-text">
        <Typography variant="body2">{title}</Typography>
      </Grid>
      <Grid item xs={6} className="student-val-text">
        <Typography variant="body2">{StudentData}</Typography>
      </Grid>
    </Grid>
  );
};

export default function StudentProfile() {
  return (
    <>
      {studentBioData.map((data, index) => {
        return (
          <StudentData key={index} title={data.title} StudentData={data.val} />
        );
      })}
    </>
  );
}
