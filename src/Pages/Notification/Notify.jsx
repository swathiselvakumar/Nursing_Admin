import React, { useState,useContext } from "react";
import { NotificationStyle } from "./style";
import CustomBreadCrumbs from "../../components/Common/CustomBreadcrumbs";
import { PATH } from "../../constants/routeConstants";
import { NavLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import SendIcon from "@mui/icons-material/Send";
import RestorePageIcon from "@mui/icons-material/RestorePage";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import axios from "axios";
import { navContext } from "../../context/navContext";
import * as XLSX from "xlsx"
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

function Notification() {
  const [headline, setHeadline] = useState("");
  const [description, setDescription] = useState("");
  const [attachment, setAttachment] = useState(null);
  const {Endpoint}=useContext(navContext);
  const {file,setFile} = useContext(navContext);
  const email = localStorage.getItem("userMail");
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = async (e) => {
            try {
                const data = new Uint8Array(e.target.result);
                const workbook = XLSX.read(data, { type: 'array' });
                const worksheet = workbook.Sheets[workbook.SheetNames[0]];

                // Convert worksheet to JSON
                const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

                // Extracting the notification content from the corresponding column
                const contents = jsonData.slice(1).map((row) => ({
                    sno: row[0],
                    notification: row[1],
                }));

                // Log the contents to verify
                console.log('Contents to send:', contents);

                // Send only the contents data to the backend
                const response = await axios.post(
                    `${Endpoint}admin/post/A_InsertDailyNotification.php`,
                    contents
                );
                console.log('Response:', response.data);
            } catch (error) {
                console.error('Error processing file:', error);
            }
        };
        reader.readAsArrayBuffer(file);
    } else {
        console.warn('No file uploaded.');
    }
};

  
  const handleSend = async () => {
    try {
      const response = await axios.post(
        `${Endpoint}admin/post/A_InsertNotification.php`,
        {
          admin_id: email,
          title: headline,
          content: description,
        }
      );
      console.log("Response:", response.data);
      // Optionally, reset form fields after successful submission
      setHeadline("");
      setDescription("");
      setAttachment(null);
    } catch (error) {
      console.error("Error sending notification:", error);
    }
  };
  
  
  const BreadcrumbItems = [
    { label: "Settings", path: PATH.SETTINGS },
    { label: "Notification", path: PATH.NOTIFICATION },
  ];

  return (
    <>
      <NotificationStyle>
        <h6
          style={{
            padding: " 10px 0px 0px 60px",
            color: "#183a1d",
            fontWeight: "450",
          }}
        >
          Settings
        </h6>
        <div className="btn-wrapper" style={{ padding: "10px 0px 20px 0px " }}>
          <div
            className="btn-1"
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
            }}
          >
            <div className="btn-wrap-1">
              <NavLink to="/settings">
                <button
                  style={{
                    boxShadow: "0px 0px   3px  rgba(0, 0, 0, 0.1)",
                    width: "480px",
                    padding: "10px 20px",
                    border: "none",
                    color: "black",
                    fontSize: "18px",
                    backgroundColor: "white",
                    textAlign: "center",
                    margin: "5px",
                  }}
                >
                  Profile Update
                </button>
              </NavLink>
            </div>
            <div className="btn-wrap-2">
              <button
                style={{
                  boxShadow: "0px 0px   5px  rgba(0, 0, 0, 0.1)",
                  width: "480px",
                  padding: "10px 0px",
                  border: "none",
                  color: "white",
                  fontSize: "18px",
                  textAlign: "center",
                  backgroundColor: "#e4a45a",
                  margin: "5px",
                }}
                onClick={() => setact("notification")}
              >
                Notifications
              </button>
            </div>
          </div>
        </div>

        <div className="wrap">
          <div className="inside-wrapper">
            <div
              style={{
                padding: "10px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <CustomBreadCrumbs items={BreadcrumbItems} />
              <div>
                <NavLink to="/updateads">
                  <button className="notify">
                    <AdsClickIcon style={{ fontSize: "19px" }} />
                    &nbsp;Update Ads
                  </button>
                </NavLink>
                &nbsp;&nbsp;&nbsp;
                <NavLink to="/history">
                  <button className="notify">
                    <RestorePageIcon style={{ fontSize: "19px" }} />
                    &nbsp;Notification History
                  </button>
                </NavLink>
              </div>
            </div>
            <div>
              <div className="form1">
                <div>
                  <label htmlFor="headline" className="pass-lab">
                    Headline :
                  </label>
                  <br />
                  <input
                    type="text"
                    id="headline"
                    name="headline"
                    className="Old-Password"
                    value={headline}
                    onChange={(e) => setHeadline(e.target.value)}
                  />
                </div>
                <div style={{ marginTop: "20px" }}>
                  <label htmlFor="description" className="pass-lab">
                    Description:{" "}
                  </label>
                  <br />
                  <textarea
                    rows={4}
                    cols={28}
                    className="Old-Password"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
                <div >
                </div>
                <div className="btnbox">
                  <button className="submit-btn" onClick={handleSend} style={{marginBottom:"20px"}}>
                    Send&nbsp;&nbsp;
                    <SendIcon style={{ fontSize: "20px" }} />
                  </button>
                </div>
                <div style={{display:"flex",justifyContent:"space-around",marginBottom:"30px"}}>
                <div >
                  <label htmlFor="description" className="pass-lab" >
                    Daily Notification :{" "}
                  </label>
                  <br/>
                  <input
                      type="file"
                      style={{ display: "none" }}
                      onChange={handleFileChange}
                      accept=".xlsx,.xls"
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
                        width: "340px",
                        marginTop: "5px",
                        backgroundColor: "white",
                        color: "black",
                        border: "1px dashed black",
                        boxShadow: "none",
                      }}
                    >
                      Upload file
                      <VisuallyHiddenInput type="file"  onChange={handleFileChange} />
                    </Button>
                  </label>
                </div>
                <div >
                  <label htmlFor="description" className="pass-lab" >
                    Subject Wise Notification :{" "}
                  </label>
                  <br/>
                  <input
                      type="file"
                      style={{ display: "none" }}
                      // onChange={handleFileChange}
                      accept=".xlsx,.xls"
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
                        width: "340px",
                        marginTop: "5px",
                        backgroundColor: "white",
                        color: "black",
                        border: "1px dashed black",
                        boxShadow: "none",
                      }}
                    >
                      Upload file
                      <VisuallyHiddenInput type="file"   />
                    </Button>
                  </label>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </NotificationStyle>
    </>
  );
}

export default Notification;
