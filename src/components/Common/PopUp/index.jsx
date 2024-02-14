import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import { PATH } from "../../../constants/routeConstants";

export default function AlertDialog({ popHandle, questData }) {
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    //  onClick={() => navigate('PATH.VIEW_TEST_DETAILS')};
    //  navigate(`view-test-details`);
    popHandle();
  };
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`view-test-details`);
  };
  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button> */}

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {/* <Grid>
          {" "}
          <Button onClick={handleClose} style={{ float: "right" }}>
            <CloseIcon />
          </Button>
        </Grid> */}
        {/* <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle> */}
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {/* Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running. */}
            Thank You! your form has been submitted successfully
          </DialogContentText>
        </DialogContent>
        <Grid container>
          <Grid m={"auto"}>
            <Grid my={1}>
              <p> Testname : {questData.testname}</p>
            </Grid>
            <Grid my={1}>
              <p> Number of questions : {questData.noOfQues}</p>
            </Grid>
            <Grid my={1}>
              <p>
                {" "}
                Durations : {questData.duration1} / {questData.duration2}
              </p>{" "}
            </Grid>
            <Grid my={1}>
              <p> Date : {questData.date}</p>
            </Grid>
            <Grid my={1}>
              <p> Start time : {questData.start}</p>
            </Grid>
            <Grid my={1}>
              <p> End time : {questData.end}</p>
            </Grid>
          </Grid>
        </Grid>

        {/* <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions> */}
        <Grid
          m={1}
          container
          display="flex"
          flexDirection="row"
          justifyContent="center"
        >
          <Button
            variant="contained"
            onClick={() => navigate(PATH.RESULT_ANALYSIS)}
            disableElevation
          >
            Done
          </Button>
        </Grid>
        {/* <Button onClick={handleClose}>Done</Button> */}
      </Dialog>
    </div>
  );
}
