import { useState } from "react";
import {
  Button,
  Grid,
  Popover,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { GlobalStyleContainer } from "../../components/Global Styles/global.styles";
import { InstructionsStyles, PopoverStyles } from "./styles";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import PageHeader from "../../components/Page Header";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import AlertDialog from "../../components/Common/PopUp";
function PopoverComponent({ popoverText }) {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <InfoOutlinedIcon onClick={handleClick} />
      <PopoverStyles>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          sx={{
            ml: 1,
            width: "80%",
          }}
        >
          <Typography
            sx={{
              p: 1,
              borderRadius: "25px",
              fontSize: "14px",
              color: theme.font.primary,
              fontWeight: "normal",
              width: "100%",
            }}
          >
            {popoverText}
          </Typography>
        </Popover>
      </PopoverStyles>
    </>
  );
}

function FormContent({
  label,
  icon,
  type,
  textboxType,
  setInstructionInformation,
  instructionInformation,
  popoverText,
  fieldName,
  handleFormSubmit,
}) {
  // const [formData, setFormData] = useState({
  //   firstName: "",
  //   lastName: "",
  // });
  // const handleFormSubmit = (event) => {
  //   // event.preventDefault(); // Prevent the default form submission behavior
  //   console.log(instructionInformation);
  //   // Perform any validation or processing you need before updating the state
  //   // For simplicity, let's directly update the state with the form data
  //   setInstructionInformation({
  //     ...instructionInformation, // Spread the existing data
  //     [fieldName]: event.target.value, // Update the specific field
  //   });
  // };
  // console.log(instructionInformation);
  return (
    <Grid
      item
      sm={8}
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      className="form-content-container"
    >
      <Grid item sm={5}>
        <Typography variant="h6" component="div">
          {label}&nbsp;
          {icon && <PopoverComponent popoverText={popoverText} />}
        </Typography>
      </Grid>
      <Grid item sm={4}>
        {type === "textbox" ? (
          <TextField
            fullWidth
            focused={false}
            onChange={handleFormSubmit}
            type={textboxType ? textboxType : "text"}
          />
        ) : type === "date" ? (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DesktopDatePicker"]}>
              <DesktopDatePicker sx={{ width: "100%" }} />
            </DemoContainer>
          </LocalizationProvider>
        ) : type === "durations" ? (
          <>
            <Stack direction="row" display="flex" alignItems="center">
              <TextField
                className="duration-textbox"
                focused={false}
                type={textboxType ? textboxType : "text"}
              />
              &nbsp; &nbsp;
              <span className="duration-separator">&#47;</span> &nbsp;&nbsp;
              <TextField
                className="duration-textbox"
                focused={false}
                type={textboxType ? textboxType : "text"}
                // onChange={setInstructionInformation({...instructionInformation,[e.target.name]:e.target.value})}
                value={40}
              />
            </Stack>
            <p className="question-msg">* No of questions to be uploaded</p>
          </>
        ) : null}
      </Grid>
    </Grid>
  );
}

export default function InstructionsPage() {
  const [popupMsg, setPopupMsg] = useState(false);
  const [instructionInformation, setInstructionInformation] = useState({
    testname: "Java MCQ",
    noOfQues: "40",
    duration1: "30",
    duration2: "40",
    date: "20/10/2023",
    start: "1.00 PM",
    end: "2.00 PM",
  });

  const handleFormSubmit = (event) => {
    // event.preventDefault(); // Prevent the default form submission behavior
    // console.log(event.target.name);
    // Perform any validation or processing you need before updating the state
    // For simplicity, let's directly update the state with the form data
    setInstructionInformation({
      ...instructionInformation, // Spread the existing data
      [event.target.name]: event.target.value, // Update the specific field
    });
  };

  const theme = useTheme();
  const popHandle = () => {
    setPopupMsg(false);
  };
  // console.log(instructionInformation);
  return (
    <>
      <GlobalStyleContainer>
        <InstructionsStyles>
          <Grid item xs={12} className="instructions-main-container">
            <div className="instructions-form-container">
              <Grid container>
                <Grid item sm={12}>
                  <PageHeader
                    title="Test Informations"
                    fontSize="18px"
                    fontColor={theme.font.primary}
                    align="center"
                    headerMarginBottom="24px"
                  />
                </Grid>
                <Grid
                  container
                  display="flex"
                  flexDirection="row"
                  justifyContent="center"
                >
                  <FormContent
                    label="Test Name"
                    type="textbox"
                    fieldName={"testname"}
                    handleFormSubmit={handleFormSubmit}
                  />
                  <FormContent
                    label="Number of questions"
                    icon={true}
                    type="textbox"
                    setInstructionInformation={setInstructionInformation}
                    instructionInformation={instructionInformation}
                    handleFormSubmit={handleFormSubmit}
                    popoverText="The number of questions that should be displayed to the students for which they have to answer"
                  />
                  <FormContent
                    label="Durations"
                    icon={true}
                    type="durations"
                    popoverText="The time given to the students to answer the questions"
                  />
                  <FormContent
                    label="Date"
                    icon={true}
                    type="date"
                    popoverText="The day on which the test should be conducted"
                  />
                  <FormContent
                    label="Start time"
                    icon={true}
                    type="textbox"
                    textboxType="time"
                    popoverText="The time at which the test should be started"
                  />
                  <FormContent
                    label="End time"
                    icon={true}
                    type="textbox"
                    textboxType="time"
                    popoverText="The time at which the test should be ended"
                  />
                </Grid>
                <Grid
                  container
                  display="flex"
                  flexDirection="row"
                  justifyContent="center"
                >
                  <Button
                    variant="contained"
                    onClick={() => setPopupMsg(true)}
                    disableElevation
                  >
                    submit
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Grid>
          {popupMsg && (
            <AlertDialog
              popHandle={popHandle}
              questData={instructionInformation}
            />
          )}
        </InstructionsStyles>
      </GlobalStyleContainer>
    </>
  );
}
