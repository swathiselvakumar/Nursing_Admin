import { Grid, Typography, useTheme } from "@mui/material";
import { QutionsCountStyles } from "./styles";

export default function QuestionsCount({ queData, temp, setTempData }) {
  const theme = useTheme();
  // console.log("??????", que);

  return (
    <QutionsCountStyles>
      <Grid
        container
        columnSpacing={1}
        rowSpacing={2}
        display="flex"
        flexDirection="row"
      >
        {queData.map((data, index) => {
          return (
            <Grid
              item
              xs={3}
              key={index}
              display="flex"
              flexDirection="row"
              justifyContent="center"
            >
              <div
                className={
                  temp.status === "active" && temp.index === index
                    ? "active-btn"
                    : temp.status === "edit" && temp.index === index
                    ? "edited-btn"
                    : data.status === "remove" && data.index === index
                    ? "remove-btn"
                    : "default-btn"
                }
                onClick={() => {
                  setTempData(index);
                }}
              >
                <Typography
                  variant="h5"
                  component="button"
                  size="small"
                  style={{
                    color:
                      temp.status === "active" && temp.index === index
                        ? theme.font.white
                        : temp.status === "edit" && temp.index === index
                        ? theme.font.white
                        : data.status === "remove" && data.index === index
                        ? theme.font.white
                        : theme.font.green,
                  }}
                >
                  {index + 1}
                </Typography>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </QutionsCountStyles>
  );
}
