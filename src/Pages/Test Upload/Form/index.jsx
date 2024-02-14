import { Button, Grid, TextField, Typography } from "@mui/material";
import { UploadQuestionFormStyles } from "./styles";

const TextBox = ({ value, disabledState, onChangeHandler }) => {
  return (
    <Grid item sm={6} className="answer-textbox-container">
      <TextField
        id="outlined-basic"
        variant="outlined"
        type="text"
        value={value}
        focused={false}
        placeholder="Options"
        fullWidth
        InputProps={{
          disabled: disabledState,
        }}
        onChange={onChangeHandler}
      />
    </Grid>
  );
};

export default function UploadQuestionForm({
  temp,
  setTemp,
  saveClickEvent,
  removeClickEvent,
  data,
}) {
  console.log(data);
  return (
    <UploadQuestionFormStyles>
      <Grid item className="question-container">
        <Typography variant="h5" component="div">
          Questions
        </Typography>
        <TextField
          id="outlined-basic"
          variant="outlined"
          type="text"
          value={temp.qus}
          focused={false}
          placeholder="Enter your question"
          fullWidth
          onChange={(e) => {
            setTemp({ ...temp, qus: e.target.value });
          }}
          multiline
          rows={2}
          InputProps={{
            disabled: temp.status === "active",
          }}
        />
      </Grid>
      <Grid item className="answer-container">
        <Typography variant="h5" component="div">
          Options
        </Typography>
        <Grid container>
          <TextBox
            disabledState={temp.status === "active"}
            value={temp.a}
            onChangeHandler={(e) => {
              setTemp({ ...temp, a: e.target.value });
            }}
          />
          <TextBox
            disabledState={temp.status === "active"}
            value={temp.b}
            onChangeHandler={(e) => {
              setTemp({ ...temp, b: e.target.value });
            }}
          />
          <TextBox
            disabledState={temp.status === "active"}
            value={temp.c}
            onChangeHandler={(e) => {
              setTemp({ ...temp, c: e.target.value });
            }}
          />
          <TextBox
            disabledState={temp.status === "active"}
            value={temp.d}
            onChangeHandler={(e) => {
              setTemp({ ...temp, d: e.target.value });
            }}
          />
        </Grid>
      </Grid>
      <Grid container className="instruction-container">
        <Grid item>
          <Typography variant="h5" component="div">
            Answer
          </Typography>
          <TextField
            id="outlined-basic"
            variant="outlined"
            type="text"
            value={temp.ans}
            focused={false}
            placeholder="Enter answer"
            onChange={(e) => {
              setTemp({ ...temp, ans: e.target.value });
            }}
            fullWidth
            InputProps={{
              disabled: temp.status === "active",
            }}
          />
        </Grid>
      </Grid>
      {temp.status === "edit" && (
        <Grid
          item
          display="flex"
          flexDirection="row"
          className="save-remove-btn"
        >
          <Button
            variant="contained"
            size="small"
            onClick={() => saveClickEvent(temp.index)}
          >
            save
          </Button>
          <Button
            variant="contained"
            size="small"
            onClick={() => removeClickEvent(temp.index)}
          >
            remove
          </Button>
        </Grid>
      )}
    </UploadQuestionFormStyles>
  );
}
