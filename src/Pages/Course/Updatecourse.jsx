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
import { NavLink } from "react-router-dom";
import axios from "axios";
// import axios from "axios";
export default function Updatecourse() {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [about, setAbout] = useState();
  const email=localStorage.getItem("userMail");

  // useEffect(() => {
  //  handleClickOpen();
  // }, []);
// const handleClickOpen = () => {
// };
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
  const handleClickOpen = async () => {
    // Retrieve the adminId from local storage
    // const adminId = ;
    setOpen(true);

    try {
      const response = await axios.post(
        "https://vebbox.in/Nursing/controllers/api/admin/put/A_updateCourse.php",
        {
          adminId:email,
          name: name,
          about: about,
          description: description,
          id: "1",
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
    width: "50vw",
    height: "90vh",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    margin: "30px",
  };
  const bodystyle = {
    display: "flex",
    justifyContent: "center",
  };
  const second = {
    backgroundColor: "#707070",
    height: "50px",
    width: "50px",
    borderRadius: "50%",
    marginLeft: "10px",
  };
  const div1 = {
    display: "flex",
    justifyContent: "center",
    marginTop: "30px",
  };
  const step = {
    paddingTop: "3px",
    width: "210px",
    display: "flex",
    justifyContent: "space-between",
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
                {/* <div><img src={AlertIcon}/></div> */}
                <div>
                  <input
                    type="text"
                    style={TextB}
                    onChange={handlechangename}
                    value={name}
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
                {/* <div><img src={AlertIcon}/></div> */}
                <div>
                  <textarea
                    cols={20}
                    rows={5}
                    style={TextA}
                    onChange={handleChangedescription}
                    value={description}
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
                {/* <div><img src={AlertIcon}/></div> */}
                <div>
                  <textarea
                    cols={20}
                    rows={5}
                    style={TextA}
                    onChange={handleChangeabout}
                    value={about}
                  ></textarea>
                </div>
              </div>
            </div>
            <div>
              <div
                style={{
                  marginTop: "30px",
                  display: "flex",
                  justifyContent: "end",
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
                  justifyContent: "end",
                  width: "530px",
                }}
              >
                <NavLink to="/course">
                  <button style={btn2}>CANCEL</button>
                </NavLink>
              </div>
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
              <button style={Btn}>Done</button>
            </NavLink>
          </DialogContent>
        </Dialog>
      </YEARMCQStyle>
    </div>
  );
}
