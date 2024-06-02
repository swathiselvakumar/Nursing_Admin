import React, { useState,useContext } from "react";
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
import { navContext } from "../../context/navContext";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
export default function ADDACHIEVEMENT() {
  const {file,setFile} = useContext(navContext);
  const handleFileChange = (event) => {
    // Get the selected file from the input
    const file = event.target.files[0];
    const newName = file.name.replaceAll(" ", "-");
    const newFile = new File([file], newName, { type: file.type });
    setFile(newFile);
  };

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });
  const [achievementDescription, setAchievementDescription] = useState("");
  const [open,setOpen] = useState(false);
  const [successDialogOpen, setSuccessDialogOpen] = useState(false);
  const email = localStorage.getItem("userMail");
  const { Endpoint } = useContext(navContext);
  const Navigate=useNavigate();


  const handleChange = (e) => {
    setAchievementDescription(e.target.value);
  };

  

  const handleSuccessDialogClose = () => {
    setSuccessDialogOpen(false);
  };

 
  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('file', file);
  
    // Append other form data fields
    formData.append('admin_id', email);
    formData.append('content', achievementDescription);
    
    setOpen(true);

    try {
      const response = await axios.post(
        `${Endpoint}admin/post/A_InsertAchievement.php`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data' // Set content type to multipart/form-data
          }
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
            <div style={{marginLeft:"170px"}}>
                  <label htmlFor="description" className="pass-lab" >
                    Image {" "}
                  </label>
                  <input
                    type="file"
                    id="file"
                    accept=".jpg, .jpeg, .png"
                    style={{ display: "none" }}
                  />
                  <label htmlFor="file">
                    <Button
                      component="label"
                      role={undefined}
                      variant="contained"
                      tabIndex={-1}
                      startIcon={<CloudUploadIcon />}
                      style={{
                        height: "50px",
                        width: "230px",
                        marginTop: "5px",
                        backgroundColor: "white",
                        color: "black",
                        border: "1px dashed black",
                        boxShadow: "none",
                        marginLeft:"150px"
                      }}
                    >
                      Upload file
                      <VisuallyHiddenInput type="file"  onChange={handleFileChange}/>
                    </Button>
                  </label>
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
