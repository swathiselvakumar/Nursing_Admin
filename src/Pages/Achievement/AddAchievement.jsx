import React, { useState } from "react";
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
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ADDACHIEVEMENT() {
  const [achievementDescription, setAchievementDescription] = useState("");
  const [open,setOpen] = useState(false);
  const [successDialogOpen, setSuccessDialogOpen] = useState(false);
  const email=localStorage.getItem("userMail");
  const Navigate=useNavigate();


  const handleChange = (e) => {
    setAchievementDescription(e.target.value);
  };

  

  const handleSuccessDialogClose = () => {
    setSuccessDialogOpen(false);
  };

 
  const handleSubmit = async () => {
    
    setOpen(true);

    try {
      const response = await axios.post(
        "https://vebbox.in/Nursing/controllers/api/admin/post/A_InsertAchievement.php",
        {
          adminId:email,
          content: achievementDescription
          // You can include additional data here as needed
        }
      );
      console.log("New item added:", response.data);
      setAchievementDescription("");
      Navigate('/achievement');
     
    } catch (error) {
      console.error("Error adding new item:", error);
    }
  };
  const BreadcrumbItems = [
    { label: "Dashboard", path: PATH.DASHBOARD },
    { label: "Achievement", path: PATH.ACHIEVEMENT },
    { label: "Add Achievement", path: PATH.ADDACHIEVEMENT },
  ];

  return (
    <div>
      <YEARMCQStyle>
        <div style={{ padding: "20px" }}>
          <CustomBreadCrumbs items={BreadcrumbItems} />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              backgroundColor: "#f6f6f6",
              width: "50vw",
              height: "60vh",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              margin: "30px",
            }}
          >
            <Typography
              style={{
                fontWeight: 700,
                paddingTop: "10px",
                textAlign: "center",
              }}
            >
              Add Achievement
            </Typography>
            <hr style={{ border: "1px solid black" }} />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                paddingTop: "50px",
              }}
            >
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
                    style={{
                      backgroundColor: "#DEE2DF",
                      border: "none",
                      borderRadius: "5px",
                      outline: "none",
                      paddingLeft: "10px",
                      width: "230px",
                      fontSize: "12px",
                    }}
                    value={achievementDescription}
                    onChange={handleChange}
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
                <Button
                  onClick={handleSubmit}
                  style={{
                    border: "none",
                    backgroundColor: "#1B4242",
                    color: "white",
                    height: "35px",
                    width: "230px",
                    borderRadius: "5px",
                  }}
                >
                  SUBMIT
                </Button>
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
                <NavLink to="/achievement">
                  <Button
                    style={{
                      border: "none",
                      backgroundColor: "white",
                      color: "black",
                      height: "35px",
                      width: "230px",
                      borderRadius: "5px",
                      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                    }}
                  >
                    CANCEL
                  </Button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <Dialog
          onClose={handleSuccessDialogClose}
          aria-labelledby="customized-dialog-title"
          open={successDialogOpen}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <IconButton
            aria-label="close"
            onClick={handleSuccessDialogClose}
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
              <Button
                style={{
                  border: "none",
                  height: "40px",
                  width: "80px",
                  backgroundColor: "#1b4242",
                  color: "white",
                }}
              >
                Done
              </Button>
            </NavLink>
          </DialogContent>
        </Dialog>
      </YEARMCQStyle>
    </div>
  );
}
