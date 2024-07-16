import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SendIcon from '@mui/icons-material/Send';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { navContext } from "../../context/navContext";
import CustomBreadCrumbs from "../../components/Common/CustomBreadcrumbs";
import { PATH } from "../../constants/routeConstants";
import { NotificationStyle } from "./style";

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

function UpdateAds() {
  const email = localStorage.getItem("userMail");
  const [adminId, setAdminId] = useState(email);
  const [category, setCategory] = useState("yearMCQ");
  const [file, setFile] = useState(null);
  const { Endpoint } = useContext(navContext); 

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.size > 200 * 1024) { // 200KB size limit
      alert("File size exceeds 200KB. Please upload a smaller file.");
      return;
    }
    console.log("File selected:", selectedFile);
    setFile(selectedFile);
  };

  const handleFormSubmit = async () => {
    if (!file) {
      console.error("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("admin_id", adminId);
    formData.append("category", category);
    formData.append("file", file);

    console.log("File to be uploaded:", file);

    try {
      const response = await fetch(
        `${Endpoint}admin/upload/A_updateAdvertisement.php`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to upload advertisement.");
      }

      const responseData = await response.json();
      console.log("Advertisement uploaded successfully!", responseData);
    } catch (error) {
      console.error("Error occurred while uploading advertisement:", error);
    }
  };

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const [act, setAct] = useState("password");
  const BreadcrumbItems = [
    { label: "Settings", path: PATH.SETTINGS },
    { label: "Update Ads", path: PATH.UPDATEADS },
  ];

  return (
    <>
      <NotificationStyle>
        <h6 style={{ padding: "10px 0px 0px 60px", color: "#183a1d", fontWeight: "450" }}>
          Settings
        </h6>
        <div className="btn-wrapper" style={{ padding: "10px 0px 20px 0px" }}>
          <div className="btn-1" style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap" }}>
            <div className="btn-wrap-1">
              <NavLink to="/settings">
                <button style={{
                  boxShadow: "0px 0px 3px rgba(0, 0, 0, 0.1)",
                  width: "480px",
                  padding: "10px 20px",
                  border: "none",
                  color: "black",
                  fontSize: "18px",
                  backgroundColor: "white",
                  textAlign: "center",
                  margin: "5px"
                }}>
                  Profile Update
                </button>
              </NavLink>
            </div>
            <div className="btn-wrap-2">
              <button style={{
                boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)",
                width: "480px",
                padding: "10px 0px",
                border: "none",
                color: "white",
                fontSize: "18px",
                textAlign: "center",
                backgroundColor: "#e4a45a",
                margin: "5px"
              }} onClick={() => setAct("notification")}>
                Notifications
              </button>
            </div>
          </div>
        </div>

        <div className="wrap">
          <div className="inside-wrapper">
            <div style={{ padding: "10px", display: "flex", justifyContent: "space-between" }}>
              <CustomBreadCrumbs items={BreadcrumbItems} />
            </div>
            <div>
              <div className="form1">
                <div>
                  <FormControl style={{ width: "340px", marginBottom: "20px" }}>
                    <InputLabel id="demo-simple-select-label">Choose Place</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={category}
                      label="Choose Place"
                      onChange={handleChange}
                    >
                      <MenuItem value="Home">Home</MenuItem>
                      <MenuItem value="yearMCQ">YearMCQ</MenuItem>
                    </Select>
                  </FormControl>
                </div>

                <div>
                  <label htmlFor="description" className="pass-lab">Image: </label>
                  <br />
                  <input
                    type="file"
                    id="file"
                    accept=".jpg, .jpeg, .png"
                    onChange={handleFileChange}
                    style={{ display: "none" }}
                  />
                  <label htmlFor="file">
                    <Button
                      component="span"
                      variant="contained"
                      startIcon={<CloudUploadIcon />}
                      style={{
                        height: "50px",
                        width: "345px",
                        marginTop: "5px",
                        backgroundColor: "white",
                        color: "black",
                        border: "1px dashed black",
                        boxShadow: "none"
                      }}
                    >
                      Upload file
                    </Button>
                  </label>
                </div>
                <div className="btnbox">
                  <NavLink>
                    <button className="submit-btn" onClick={handleFormSubmit}>
                      Upload&nbsp;&nbsp;
                      <SendIcon style={{ fontSize: "20px" }} />
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </NotificationStyle>
    </>
  );
}

export default UpdateAds;
