import React, { useEffect, useState,useContext } from "react";
import myImage from "../../assets/images/profile.svg";
import { SettingStyle } from "./Style";
import CustomBreadCrumbs from "../../components/Common/CustomBreadcrumbs";
import { PATH } from "../../constants/routeConstants";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { navContext } from "../../context/navContext";
import {Container,Row,Col, Form,Button, Image} from 'react-bootstrap'
function Settings() {
  const [mobileNo, setMobileNo] = useState("");
  const [address, setAddress] = useState("");
  const email = localStorage.getItem("userMail");
  const {Endpoint}=useContext(navContext);

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
      alert("Updated successfully");
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

        <Container fluid className="wrap">
      <Row className="full-wrap">
        <Col md={12}>
          <div className="inside-wrapper">
            <div className="mb-4 ms-3 mt-3">
              <CustomBreadCrumbs items={BreadcrumbItems} />
            </div>
            <Row className="profile-card">
              <Col md={4} className="d-flex justify-content-center align-items-center">
                <div className="profile text-center">
                  <Image src={myImage} alt="Profile" roundedCircle fluid />
                  <h5 className="email mt-3">{email}</h5>
                  <NavLink to="/passwordchange">
                    <p style={{ color: "#e4a45a", textDecoration: "none" }}>
                      Password Change
                    </p>
                  </NavLink>
                </div>
              </Col>
              <Col md={8} style={{display:"flex",justifyContent:"center"}}>
                <Form className="form">
                  <Form.Group controlId="mobileNo">
                    <Form.Label>Mobile No :</Form.Label>
                    <Form.Control
                      type="text"
                      name="mobileNo"
                      value={mobileNo}
                      onChange={handleMobileNoChange}
                      placeholder="Enter your mobile number"
                    />
                  </Form.Group>
                  <Form.Group controlId="address" className="mt-3">
                    <Form.Label>Address :</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      value={address}
                      onChange={handleAddressChange}
                      placeholder="Enter your address"
                    />
                  </Form.Group>
                  <Button className="submit-btn mt-4" onClick={submitchange} variant="primary">
                    Submit
                  </Button>
                </Form>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
      </SettingStyle>
    </>
  );
}

export default Settings;
