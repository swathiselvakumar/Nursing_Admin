import React from "react";
import myImage from "../../assets/images/profile.svg";
import Notify from "../Notification/Notify";
import { SettingStyle } from "./Style";
function Settings() {
  const [act,setact]=React.useState("password");
  return (
    <>
      <SettingStyle>
        <h5>Settings</h5>
        <div className="btn-wrapper" style={{padding:'20px'}}>
        <div
          className="btn-1"
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <button
            style={{
              padding: "15px 150px 15px 200px",
              fontWeight: "600",
              border: "none",
              color: "white",
              fontSize: "18px",
              backgroundColor: "#f0a04b",
              textAlign:"center"
            }}
            // sx={{
            //   backgroundColor:
            //   Active === "active"
            //     ? "orange"
            //     : "white",
            // color:
            //   Active === "active"
            //     ? "white"
            //     : "black",
            // }}
            onClick={()=>setact("password")}
          >
            Password Change
          </button>
          <button
            style={{
              padding: "15px 230px 15px 230px",
              fontWeight: "600",
              border: "none",
              color: "black",
              fontSize: "18px",
              backgroundColor: "white",
            }}
            // sx={{
            //   backgroundColor:
            //   Active === "isactive"
            //     ? "orange"
            //     : "White",
            // color:
            //   Active ===  "isactive"
            //     ? "white"
            //     : "black",
            // }}
            onClick={()=>setact("notification")}
          >
            Notification
          </button>
        </div>
      </div>
      {
        act==="password"?  <div className="wrap">
        <div className="inside-wrapper">
          <div className="profile-card">
            <div className="profile" style={{ fontFamily: "arial" }}>
              <img src={myImage} alt="Description of the image" />
              <h4>divya@gmail.com</h4>
            </div>
            <div
              className="form"
              style={{ fontFamily: "arial", fontWeight: 550 }}
            >
              <div>
                <label htmlFor="username">Old Password </label>
                <br />
                <input type="text" id="username" name="username" />
              </div>
              <div style={{ marginTop: "20px" }}>
                <label htmlFor="username">New Password : </label>
                <br />
                <input type="text" id="username" name="username" />
                <p>Minimum 6 Letters</p>
              </div>
              <button className="submit-btn">Change</button>
            </div>
          </div>
        </div>
      </div>:<Notify/>
      }
      
      </SettingStyle>
    </>
  );
}

export default Settings;
