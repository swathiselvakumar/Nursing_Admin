import React, { useEffect, useState } from "react";
import myImage from "../../assets/images/profile.svg";
import Notify from "../Notification/Notify";
import { SettingStyle } from "./Style";
import CustomBreadCrumbs from "../../components/Common/CustomBreadcrumbs";
import { PATH } from "../../constants/routeConstants";
import { NavLink } from "react-router-dom";
import axios from "axios";
function Settings() {
  const [mobileNo, setMobileNo] = useState("");
  const [address, setAddress] = useState("");
   const [data, setData] = useState(null); 
  // const [act, setact] = React.useState("password");
  const BreadcrumbItems = [
    // { label: "Dashboard", path: PATH.DASHBOARD },
    
    { label: "Settings", path: PATH.SETTINGS },
    { label: "Profile Update", path: PATH.SETTINGS },

  ];
  const handleMobileNoChange = (e) => {
    setMobileNo(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };
  useEffect(() => {
    // Fetch data when component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://vebbox.in/Nursing/controllers/api/admin/get/A_ViewStaticInfo.php", // Replace with your actual backend API endpoint
        {
          adminId: "nandinivebbox@gmail.com", // Pass any necessary parameters
        }
      );
      // Set the fetched data to the state
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

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
                  backgroundColor: "#e4a45a",
                  textAlign: "center",
                  margin: "5px",
                }}
                onClick={() => setact("password")}
              >
                Profile Update
              </button>
            </div>
            <div className="btn-wrap-2">
              <NavLink to="/notification">
                <button
                  style={{
                    boxShadow: "0px 0px   5px  rgba(0, 0, 0, 0.1)",
                    // fontWeight: "600",
                    width: "480px",
                    padding: "10px 0px",
                    border: "none",
                    color: "#183a1d",
                    fontSize: "18px",
                    textAlign: "center",
                    backgroundColor: "white",
                    margin: "5px",
                  }}
                  // onClick={() => setact("notification")}
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
                <div className="profile" style={{}}>
                  <img src={myImage} alt="Description of the image" />
                  <h5 className="email">Divya@gmail.com</h5>
                  <NavLink to="/passwordchange">
                    <p style={{ color: "#e4a45a", textDecoration: "none" }}>
                      Password Change
                    </p>
                  </NavLink>
                </div>
                <div className="form">
                  <div>
                    <label htmlFor="username" className="pass-lab">
                      Mobile No :
                    </label>
                    <br />
                    <br />
                    {/* <input
                      type="text"
                      id="mobile"
                      name="mobile"
                      className="mobile-input"
                      value={mobileNo}
                      onChange={handleMobileNoChange}
                    /> */}
                    <input
                      type="text"
                      id="Old Password"
                      name="Old Password"
                      className="Old-Password"
                      value={mobileNo}
                      onChange={handleMobileNoChange}
                    />
                  </div>
                  <div style={{ marginTop: "20px" }}>
                    <label htmlFor="username" className="pass-lab">
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
                  <button className="submit-btn">Submit</button>
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
