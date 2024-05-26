import React, { useState, useEffect, useContext } from "react";
import { YEARMCQStyle } from "../YearMCQ/style";
import { Button, Typography } from "@mui/material";
import CustomBreadCrumbs from "../../components/Common/CustomBreadcrumbs";
import { PATH } from "../../constants/routeConstants";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { navContext } from "../../context/navContext";

export default function Update() {
  const [open, setOpen] = useState(false);
  const [update, setUpdate] = useState([]);
  const [description, setDescription] = useState("");
  const email = localStorage.getItem("userMail");
  const { Endpoint } = useContext(navContext);
  const { sno } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    updateView();
  }, []);

  const handleChangedescription = (event) => {
    setDescription(event.target.value);
  };

  const updateView = async () => {
    try {
      const response = await axios.post(
        `${Endpoint}admin/get/A_ViewAchievementById.php`,
        {
          adminId: email,
          id: sno,
        }
      );
      setUpdate(response.data);
      if (response.data && response.data.length > 0) {
        setDescription(response.data[0].content); // Set initial description
      }
    } catch (error) {
      console.error("Error fetching achievement data:", error);
    }
  };

  const handleClickOpen = async () => {
    try {
      const response = await axios.post(
        `${Endpoint}admin/put/A_updateAchievement.php`,
        {
          adminId: email,
          id: sno,
          content: description,
        }
      );
      console.log("Achievement updated:", response.data);
      setOpen(true);
    } catch (error) {
      console.error("Error updating achievement:", error);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const BreadcrumbItems = [
    { label: "Dashboard", path: PATH.DASHBOARD },
    { label: "Achievement", path: PATH.ACHIEVEMENT },
    { label: "Update Achievement", path: PATH.UPDATE },
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

  const TextA = {
    backgroundColor: "#DEE2DF",
    border: "none",
    borderRadius: "5px",
    outline: "none",
    paddingLeft: "10px",
    width: "230px",
    fontSize: "12px",
  };

  const btn1 = {
    border: "none",
    backgroundColor: "#1B4242",
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
        {update.map((r) => (
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
                  Update Achievement
                </Typography>
                <hr style={{ border: "1px solid black" }} />
                <div style={MainText}>
                  <div
                    style={{
                      marginTop: "15px",
                      display: "flex",
                      justifyContent: "space-between",
                      width: "425px",
                    }}
                  >
                    <div>
                      <label>Achievement Description</label>
                    </div>
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
                      UPDATE
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
                      marginBottom: "30px",
                    }}
                  >
                    <NavLink to="/achievement">
                      <button style={btn2}>CANCEL</button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
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
            <NavLink to="/achievement">
              <button style={Btn}>Done</button>
            </NavLink>
          </DialogContent>
        </Dialog>
      </YEARMCQStyle>
    </div>
  );
}
