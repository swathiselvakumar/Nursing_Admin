import React from "react";
import myImage from "../../assets/images/profile.svg";
import Notify from "../Notification/Notify";
import { SettingStyle } from "./Style";
function Settings() {
  const [act,setact]=React.useState("password");
  return (
    <>
      <SettingStyle>
        <h5 style={{padding:' 10px 40px'}}>Setting</h5>
        <div className="btn-wrapper" style={{padding:'20px '}}>
        <div
          className="btn-1"
          style={{ display: "flex", justifyContent: "space-around",flexWrap:'wrap' }}
        >
          <div className="btn-wrap-1">
          <button
            style={{
              padding: "15px 150px 15px 200px",
              fontWeight: "600",
              border: "none",
              color: "white",
              fontSize: "18px",
              backgroundColor: "#f0a04b",
              textAlign:"center",
              margin:'5px'
            }}
            onClick={()=>setact("password")}
          >
            Password Change
          </button>
          </div>
          <div className="btn-wrap-2">
          <button
            style={{
              padding: "15px 200px 15px 200px",
              fontWeight: "600",
              border: "none",
              color: "black",
              fontSize: "18px",
              backgroundColor: "white",
              margin:'5px'
            }}
            onClick={()=>setact("notification")}
          >
            Notification
          </button>
          </div>
         
        </div>
      </div>
      
      {
        act==="password"?  <div className="wrap">
          <div className="full-wrap">
        <div className="inside-wrapper" >
          <div className="profile-card">
            <div className="profile" style={{ fontFamily: "arial",marginRight:'100px' }}>
              <img src={myImage} alt="Description of the image" />
              <h4>divya@gmail.com</h4>
            </div>
            <div
              className="form"
              style={{ fontFamily: "arial", fontWeight: 550, }}
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
      </div>:<Notify/>
      }
      
      </SettingStyle>
    </>
  );
}

export default Settings;
