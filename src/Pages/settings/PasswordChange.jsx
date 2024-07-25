import React, { useState,useContext } from "react";
import myImage from "../../assets/images/profile.svg";
import CustomBreadCrumbs from "../../components/Common/CustomBreadcrumbs";
import { PATH } from "../../constants/routeConstants";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { SettingStyle } from "./Style";
import { navContext } from "../../context/navContext";
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
function PasswordChange() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");
  
  const {Endpoint}=useContext(navContext);
const email=localStorage.getItem("userMail");


  const BreadcrumbItems = [
    { label: "Settings", path: PATH.SETTINGS },
    { label: "Profile Update", path: PATH.SETTINGS },
    { label: "Password Change", path: PATH.PASSWORDCHANGE },
  ];

  

  const handlePasswordChange = async () => {
    try {
      const response = await axios.put(
        `${Endpoint}admin/put/A_updateChangePassword.php`,
        {
          admin_id: email,
          old_password: oldPassword,
          new_password: newPassword,
        }
      );
      setNewPassword('');
      setOldPassword('')
      
      alert("Password changed successfully");
     
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
      <Container fluid className="wrap">
      <Row className="full-wrap">
        <Col md={12}>
          <div className="inside-wrapper">
            <div className="mb-4" style={{ padding: "20px" }}>
              <CustomBreadCrumbs items={BreadcrumbItems} />
            </div>
            <Row className="profile-card">
              <Col md={4} className="d-flex justify-content-center align-items-center">
                <div className="profile text-center">
                  <Image src={myImage} alt="Profile" roundedCircle fluid />
                  <h5 className="email mt-3">{email}</h5>
                </div>
              </Col>
              <Col md={8} style={{display:"flex",justifyContent:"center"}}>
                <Form className="form">
                  <Form.Group controlId="oldPassword">
                    <Form.Label>Old Password:</Form.Label>
                    <Form.Control
                      type="password"
                      name="oldPassword"
                      value={oldPassword}
                      onChange={(e) => setOldPassword(e.target.value)}
                      placeholder="Enter your old password"
                    />
                  </Form.Group>
                  <Form.Group controlId="newPassword" className="mt-3">
                    <Form.Label>New Password:</Form.Label>
                    <Form.Control
                      type="password"
                      name="newPassword"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="Enter your new password"
                    />
                    <Form.Text className="text-muted">
                      Minimum 6 characters
                    </Form.Text>
                  </Form.Group>
                  <Button className="submit-btn mt-4" onClick={handlePasswordChange} variant="primary">
                    Change
                  </Button>
                  {error && (
                    <p style={{ color: "red", marginTop: "10px" }}>{error}</p>
                  )}
                </Form>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
    </SettingStyle>
  );
}

export default PasswordChange;
