import React, { useEffect, useState } from "react";
import { YEARMCQStyle } from "../YearMCQ/style";
import { Button, Typography } from "@mui/material";
import CustomBreadCrumbs from "../../components/Common/CustomBreadcrumbs";
import { PATH } from "../../constants/routeConstants";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";

export default function UpdateCourse() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [about, setAbout] = useState("");
  const [update, setUpdate] = useState({});
  const email = localStorage.getItem("userMail");
  const { sno } = useParams();

  useEffect(() => {
    updateView();
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (setter) => (event) => {
    setter(event.target.value);
  };

  const updateView = async () => {
    try {
      const response = await axios.post(
        "https://vebbox.in/Nursing/controllers/api/admin/get/A_ViewCourseContent.php",
        {
          adminId: email,
          id: sno,
        }
      );
      const course = response.data[0];
      setUpdate(course);
      setName(course.course_name);
      setDescription(course.course_description);
      setAbout(course.course_about);
    } catch (error) {
      console.error("Error fetching course data:", error);
    }
  };

  const handleClickOpen = async () => {
    setOpen(true);
    try {
      await axios.post(
        "https://vebbox.in/Nursing/controllers/api/admin/put/A_updateCourse.php",
        {
          adminId: email,
          name,
          about,
          description,
          id: sno,
        }
      );
    } catch (error) {
      console.error("Error updating course:", error);
    }
  };

  const BreadcrumbItems = [
    { label: "Dashboard", path: PATH.DASHBOARD },
    { label: "Course", path: PATH.COURSE },
    { label: "Update course", path: PATH.UPDATECOURSE },
  ];

  const styles = {
    mainBox: {
      backgroundColor: "#f6f6f6",
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      margin: "30px",
    },
    bodyStyle: {
      display: "flex",
      justifyContent: "center",
    },
    mainText: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      paddingTop: "50px",
    },
    textInput: {
      backgroundColor: "#DEE2DF",
      border: "none",
      borderRadius: "5px",
      outline: "none",
      paddingLeft: "10px",
      width: "230px",
      fontSize: "12px",
    },
    textArea: {
      backgroundColor: "#DEE2DF",
      border: "none",
      borderRadius: "5px",
      outline: "none",
      paddingLeft: "10px",
      width: "230px",
      fontSize: "12px",
    },
    btnPrimary: {
      border: "none",
      backgroundColor: "#183A1D",
      color: "white",
      height: "35px",
      width: "230px",
      borderRadius: "5px",
    },
    btnSecondary: {
      border: "none",
      backgroundColor: "white",
      color: "black",
      height: "35px",
      width: "230px",
      borderRadius: "5px",
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    },
    dialogBtn: {
      border: "none",
      height: "40px",
      width: "80px",
      backgroundColor: "#1b4242",
      color: "white",
    },
  };

  return (
    <div>
      <YEARMCQStyle>
        <div style={{ padding: "20px" }}>
          <CustomBreadCrumbs items={BreadcrumbItems} />
        </div>
        <div style={styles.bodyStyle}>
          <div style={styles.mainBox}>
            <Typography style={{ fontWeight: 700, paddingTop: "10px", textAlign: "center" }}>
              Update Course
            </Typography>
            <hr style={{ border: "1px solid black" }} />
            <div style={styles.mainText}>
              <div style={{ marginTop: "15px", display: "flex", justifyContent: "space-between", width: "380px" }}>
                <label>Course Name</label>
                <input
                  type="text"
                  style={styles.textInput}
                  onChange={handleChange(setName)}
                  value={name}
                />
              </div>
              <div style={{ marginTop: "15px", display: "flex", justifyContent: "space-between", width: "380px" }}>
                <label>Course Description</label>
                <textarea
                  cols={20}
                  rows={5}
                  style={styles.textArea}
                  onChange={handleChange(setDescription)}
                  value={description}
                ></textarea>
              </div>
              <div style={{ marginTop: "15px", display: "flex", justifyContent: "space-between", width: "380px" }}>
                <label>Course About</label>
                <textarea
                  cols={20}
                  rows={5}
                  style={styles.textArea}
                  onChange={handleChange(setAbout)}
                  value={about}
                ></textarea>
              </div>
            </div>
            <div style={{ marginTop: "30px", display: "flex", justifyContent: "center", width: "530px" }}>
              <button onClick={handleClickOpen} style={styles.btnPrimary}>
                SUBMIT
              </button>
            </div>
            <div style={{ marginTop: "10px", display: "flex", justifyContent: "center", width: "530px", marginBottom: "40px" }}>
              <NavLink to="/course">
                <button style={styles.btnSecondary}>CANCEL</button>
              </NavLink>
            </div>
          </div>
        </div>
        <Dialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent
            dividers
            style={{
              height: "200px",
              width: "400px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography style={{ paddingBottom: "20px" }}>
              Successfully Completed
            </Typography>
            <NavLink to="/course">
              <button style={styles.dialogBtn}>Done</button>
            </NavLink>
          </DialogContent>
        </Dialog>
      </YEARMCQStyle>
    </div>
  );
}
