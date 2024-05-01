import React, { useState } from "react";
import myImage from "../../assets/images/profile.svg";
import CustomBreadCrumbs from "../../components/Common/CustomBreadcrumbs";
import { PATH } from "../../constants/routeConstants";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { SettingStyle } from "./Style";

function PasswordChange() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");

  const BreadcrumbItems = [
    { label: "Settings", path: PATH.SETTINGS },
    { label: "Profile Update", path: PATH.SETTINGS },
    { label: "Password Change", path: PATH.PASSWORDCHANGE },
  ];

  

  const handlePasswordChange = async () => {
    try {
      const response = await axios.put(
        "https://vebbox.in/Nursing/controllers/api/admin/put/A_updateChangePassword.php",
        {
          admin_id: "nandinivebbox@gmail.com",
          old_password: oldPassword,
          new_password: newPassword,
        }
      );
      setNewPassword('');
      setOldPassword('')
      // Handle success response
      // console.log("Password changed successfully:", response.data);
      // Optionally, you can redirect the user to another page or show a success message
    } catch (error) {
      // Handle error response
      console.error("Error changing password:", error);
      setError("Failed to change password. Please try again.");
    }
  };

  return (
    <SettingStyle>
      <h6
        style={{
          padding: "10px 0px 0px 60px",
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
            <button
              style={{
                boxShadow: "0px 0px   3px  rgba(0, 0, 0, 0.1)",
                width: "480px",
                padding: "10px 20px",
                border: "none",
                color: "white",
                fontSize: "18px",
                backgroundColor: "#f0a04b",
                textAlign: "center",
                margin: "5px",
              }}
            >
              Profile Update
            </button>
          </div>
          <div className="btn-wrap-2">
            <NavLink to="/notification">
              <button
                style={{
                  boxShadow: "0px 0px   5px  rgba(0, 0, 0, 0.1)",
                  width: "480px",
                  padding: "10px 0px",
                  border: "none",
                  color: "#183a1d",
                  fontSize: "18px",
                  textAlign: "center",
                  backgroundColor: "white",
                  margin: "5px",
                }}
              >
                Notifications
              </button>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="wrap">
        <div className="full-wrap">
          <div className="inside-wrapper">
            <div style={{ padding: "20px" }}>
              <CustomBreadCrumbs items={BreadcrumbItems} />
            </div>
            <div className="profile-card">
              <div className="profile">
                <img src={myImage} alt="Profile" />
                <h5 className="email">Divya@gmail.com</h5>
              </div>
              <div className="form">
                <div>
                  <label htmlFor="oldPassword" className="pass-lab">
                    Old Password:
                  </label>
                  <br />
                  <input
                    type="password"
                    id="oldPassword"
                    name="oldPassword"
                    className="Old-Password"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                  />
                </div>
                <div style={{ marginTop: "20px" }}>
                  <label htmlFor="newPassword" className="pass-lab">
                    New Password:
                  </label>
                  <br />
                  <input
                    type="password"
                    id="newPassword"
                    name="newPassword"
                    className="Old-Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: 300,
                      paddingTop: "10px",
                    }}
                  >
                    Minimum 6 characters
                  </p>
                </div>
                <button className="submit-btn" onClick={handlePasswordChange}>
                  Change
                </button>
                {error && (
                  <p style={{ color: "red", marginTop: "10px" }}>{error}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SettingStyle>
  );
}

export default PasswordChange;
