import React from "react";
import myImage from "../../assets/images/profile.svg";
import Notify from "../Notification/Notify";
import { SettingStyle } from "./Style";
function Settings() {
  const [act, setact] = React.useState("password");
  return (
    <>
      <SettingStyle>
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
              <button
                style={{
                  boxShadow: "0px 0px   3px  rgba(0, 0, 0, 0.1)",
                  // fontWeight: "600",
                  width: "480px",
                  padding: "10px 20px",
                  border: "none",
                  color: "white",
                  fontSize: "18px",
                  backgroundColor: "#f0a04b",
                  textAlign: "center",
                  margin: "5px",
                }}
                onClick={() => setact("password")}
              >
                Password Change
              </button>
            </div>
            <div className="btn-wrap-2">
              <button
                style={{
                  boxShadow: "0px 0px   5px  rgba(0, 0, 0, 0.1)",
                  // fontWeight: "600",
                  width: "480px",
                  padding: "10px 40px",
                  border: "none",
                  color: "#183a1d",
                  fontSize: "18px",
                  textAlign: "left",
                  backgroundColor: "white",
                  margin: "5px",
                }}
                onClick={() => setact("notification")}
              >
                Notifications
              </button>
            </div>
          </div>
        </div>

        {act === "password" ? (
          <div className="wrap">
            <div className="full-wrap">
              <div className="inside-wrapper">
                <div className="profile-card">
                  <div className="profile" style={{}}>
                    <img src={myImage} alt="Description of the image" />
                    <h5 className="email">Divya@gmail.com</h5>
                  </div>
                  <div className="form">
                    <div>
                      <label htmlFor="username" className="pass-lab">
                        Old Password :
                      </label>
                      <br />
                      <input
                        type="text"
                        id="Old Password"
                        name="Old Password"
                        className="Old-Password"
                      />
                    </div>
                    <div style={{ marginTop: "20px" }}>
                      <label htmlFor="username" className="pass-lab">
                        New Password :{" "}
                      </label>
                      <br />
                      <input
                        type="text"
                        id="New-pass"
                        name="New-pass"
                        className="Old-Password"
                      />
                      <p
                        className="char-err"
                        style={{
                          fontSize: "15px",
                          color: "gray",
                          fontWeight: "400",
                          marginTop: "5px",
                        }}
                      >
                        Minimum 6 letters
                      </p>
                    </div>
                    <button className="submit-btn">Change</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Notify />
        )}
      </SettingStyle>
    </>
  );
}

export default Settings;
