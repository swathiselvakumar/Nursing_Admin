import React, { useEffect, useState } from "react";
import { YEARMCQStyle } from "../YearMCQ/style";
import { Button, Typography } from "@mui/material";
import CustomBreadCrumbs from "../../components/Common/CustomBreadcrumbs";
import { PATH } from "../../constants/routeConstants";
// import AlertIcon from '../../../assets/icons/alert.png'
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
// import axios from "axios";
export default function Updatecourse() {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [about, setAbout] = useState();
  const [update,setupdate]=useState([]);
  const email=localStorage.getItem("userMail");
  const {sno}=useParams();
  useEffect(() => {
   updateView();
  }, []);

  const handleClose = () => {
    setOpen(false);
  };
  const handlechangename = (event) => {
    setName(event.target.value);
  };

  const handleChangedescription = (event) => {
    setDescription(event.target.value);
  };

  const handleChangeabout = (event) => {
    setAbout(event.target.value);
  };
const updateView=async () =>{
  try {
    const response = await axios.post(
      "https://vebbox.in/Nursing/controllers/api/admin/get/A_ViewCourseContent.php",
      {
        adminId:email,
        id: sno,
        // You can include additional data here as needed
      }
    );
    setupdate(response.data);
    console.log(update);
    console.log(update.course_name);
  } catch (error) {
    console.error("Error adding new item:", error);
  }
}

  const handleClickOpen = async () => {
    setOpen(true);

    try {
      const response = await axios.post(
        "https://vebbox.in/Nursing/controllers/api/admin/put/A_updateCourse.php",
        {
          adminId:email,
          name: name, 
          about: about,
          description: description,
          id: sno,
          // You can include additional data here as needed
        }
      );
      console.log("New item added:", response.data);
      setName("");
      setDescription("");
      setAbout(""); // Clear input fields
    } catch (error) {
      console.error("Error adding new item:", error);
    }
  };

  const BreadcrumbItems = [
    { label: "Dashboard", path: PATH.DASHBOARD },

    { label: "Course", path: PATH.COURSE },
    { label: "Update course", path: PATH.UPDATECOURSE },
    // { label: "Update course", path: PATH. },
  ];
  const MainBox = {
    backgroundColor: "#f6f6f6",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    margin: "30px",
  };
  const bodystyle = {
    display: "flex",
    justifyContent: "center",
  };
 
  const MainText = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: "50px",
  };
  const TextB = {
    backgroundColor: "#DEE2DF",
    border: "none",
    borderRadius: "5px",
    outline: "none",
    paddingLeft: "10px",
    height: "30px",
    width: "230px",
    fontSize: "12px",
  };
  const TextA = {
    backgroundColor: "#DEE2DF",
    border: "none",
    borderRadius: "5px",
    outline: "none",
    paddingLeft: "10px",
    // height:"30px",
    width: "230px",
    fontSize: "12px",
  };
  const btn1 = {
    border: "none",
    backgroundColor: "#183A1D",
    color: "white",
    height: "35px",
    width: "230px",
    borderRadius: "5px",
  };
  const btn2 = {
    border: "none",
    backgroundColor: "white",
    color: "black",
    height: "35px",
    width: "230px",
    borderRadius: "5px",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  };
  const Btn = {
    border: "none",
    height: "40px",
    width: "80px",
    backgroundColor: "#1b4242",
    color: "white",
  };
  return (
    <div>
      <YEARMCQStyle>
        {
          update.map((r)=>(
            <>
            <div style={{ padding: "20px" }}>
          <CustomBreadCrumbs items={BreadcrumbItems} />
        </div>
        <div style={bodystyle}>
          <div style={MainBox}>
            <Typography
              style={{
                fontWeight: 700,
                paddingTop: "10px",
                textAlign: "center",
              }}
            >
              Update Course
            </Typography>
            <hr style={{ border: "1px solid black" }} />

            <div style={MainText}>
              <div
                style={{
                  marginTop: "15px",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "380px",
                }}
              >
                <div>
                  <label>Course Name</label>
                </div>
                
                <div>
                  <input
                    type="text"
                    style={TextB}
                    onChange={handlechangename}
                    value={name}
                    placeholder={r.course_name}
                  />
                </div>
              </div>
              <div
                style={{
                  marginTop: "15px",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "380px",
                }}
              >
                <div>
                  <label>Course Description</label>
                </div>
                <div>
                  <textarea
                    cols={20}
                    rows={5}
                    style={TextA}
                    onChange={handleChangedescription}
                    value={description}
                    placeholder={r.course_description}
                  ></textarea>
                </div>
              </div>
              <div
                style={{
                  marginTop: "15px",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "380px",
                }}
              >
                <div>
                  <label>Course About</label>
                </div>
                <div>
                  <textarea
                    cols={20}
                    rows={5}
                    style={TextA}
                    onChange={handleChangeabout}
                    value={about}
                    placeholder={r.course_about}
                  ></textarea>
                </div>
              </div>
            </div>
            <div>
              <div
                style={{
                  marginTop: "30px",
                  display: "flex",
                  justifyContent: "center",
                  width: "530px",
                }}
              >
                <button onClick={handleClickOpen} style={btn1}>
                  SUBMIT
                </button>
              </div>
            </div>
            <div>
              <div
                style={{
                  marginTop: "10px",
                  display: "flex",
                  justifyContent: "center",
                  width: "530px",
                  marginBottom:"40px"
                }}
              >
                <NavLink to="/course">
                  <button style={btn2}>CANCEL</button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
            </>
          ))
        }
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
              <button style={Btn}>Done</button>
            </NavLink>
          </DialogContent>
        </Dialog>
      </YEARMCQStyle>
    </div>
  );
}
