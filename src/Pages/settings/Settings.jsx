import React from "react";
import myImage from "../../assets/images/profile.svg";

import TableButton from "../Report/Table/TableButton";
import { SettingStyle } from "./Style";
function Settings() {
  return (
    <>
      <SettingStyle>
        <h5>Settings</h5>
        <TableButton name="Password Change" name2="Notification" />
        <div className="wrap">
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
        </div>
      </SettingStyle>
    </>
  );
}

export default Settings;
