import { Grid, Typography } from "@mui/material";
const data = [
  {
    title: "Student ID",
    data: "Santhosh@123",
  },
  {
    title: "Name",
    data: "Santhosh",
  },
  {
    title: "Attend",
    data: "Yes",
  },
  {
    title: "Correct Answer",
    data: 30,
  },
  {
    title: "Wrong Answer",
    data: 20,
  },
  {
    title: "Total Marks",
    data: "30/50",
  },
];

export const StudentData = ({ title, StudentData }) => {
  return (
    <Grid item xs={12} className="full">
      <Grid item xs={7} className="student_test_profile_key">
        <Typography sx={{ fontWeight: "bold" }} variant="body2">
          {title}
        </Typography>
      </Grid>
      <Grid item xs={5} className="student_test_profile_value">
        <Typography variant="body2">{StudentData}</Typography>
      </Grid>
    </Grid>
  );
};

export default function ResultAnalysisProfile() {
  return (
    <Grid container>
      {data.map((d, i) => {
        return <StudentData key={i} title={d.title} StudentData={d.data} />;
      })}
    </Grid>
  );
}
