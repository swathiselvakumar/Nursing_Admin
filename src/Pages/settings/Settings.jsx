import React, { useContext, useEffect, useState } from "react";
import myImage from "../../assets/images/profile.svg";
import { SettingStyle } from "./Style";
import CustomBreadCrumbs from "../../components/Common/CustomBreadcrumbs";
import { PATH } from "../../constants/routeConstants";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { navContext } from "../../context/navContext";

function Settings() {
  const [mobileNo, setMobileNo] = useState("");
  const [address, setAddress] = useState("");
  const email = localStorage.getItem("userMail");
  const { Endpoint } = useContext(navContext);

  useEffect(() => {
    updateView();
  }, []);

  const handleMobileNoChange = (e) => {
    setMobileNo(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const updateView = async () => {
    try {
      const response = await axios.post(
        `${Endpoint}admin/get/A_ViewStaticInfo.php`,
        {
          adminId: email,
        }
      );
      const data = response.data[0]; // Assuming the response data structure
      setMobileNo(data.mobibleno);
      setAddress(data.address);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const submitchange = async () => {
    try {
      await axios.post(
        `${Endpoint}admin/put/A_updateStaticInfo.php`,
        {
          adminId: email,
          mobNo: mobileNo,
          address: address,
        }
      );
      // Handle success
      console.log("Data submitted successfully");
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  const BreadcrumbItems = [
    { label: "Settings", path: PATH.SETTINGS },
    { label: "Profile Update", path: PATH.SETTINGS },
  ];

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
                  boxShadow: "0px 0px 3px rgba(0, 0, 0, 0.1)",
                  width: "480px",
                  padding: "10px 20px",
                  border: "none",
                  color: "white",
                  fontSize: "18px",
                  backgroundColor: "#e4a45a",
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
                    boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)",
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
                  <NavLink to="/passwordchange">
                    <p style={{ color: "#e4a45a", textDecoration: "none" }}>
                      Password Change
                    </p>
                  </NavLink>
                </div>
                <div className="form">
                  <div>
                    <label htmlFor="mobileNo" className="pass-lab">
                      Mobile No :
                    </label>
                    <br />
                    <br />
                    <input
                      type="text"
                      id="mobileNo"
                      name="mobileNo"
                      className="Old-Password"
                      value={mobileNo}
                      onChange={handleMobileNoChange}
                    />
                  </div>
                  <div style={{ marginTop: "20px" }}>
                    <label htmlFor="address" className="pass-lab">
                      Address :{" "}
                    </label>
                    <br />
                    <textarea
                      rows={3}
                      cols={28}
                      className="Old-Password"
                      value={address}
                      onChange={handleAddressChange}
                    ></textarea>
                  </div>
                  <button className="submit-btn" onClick={submitchange}>
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SettingStyle>
    </>
  );
}

export default Settings;
