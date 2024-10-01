import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Button, Typography } from "@mui/material";
import "./style.css";
import CircleBar from "../Profile/Circularbar";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Style } from "../Profile/style";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { NavLink } from "react-router-dom";
import Icon from '../../assets/images/Group 2391.png'
import axios from "axios";
import { navContext } from "../../context/navContext";
import { Table} from "react-bootstrap";

export default function Profile({ onClose, studentid }) {
  const [profileData, setProfileData] = useState([]);
  const [subjectData, setSubjectData] = useState([]);
  const [nonnursingData, setNonnursingData] = useState([]);
  const [scoreData, setScoreData] = useState([]);
  const { Endpoint } = useContext(navContext);

  const profile = async () => {
    try {
      const response = await axios.post(
        `${Endpoint}admin/get/A_ViewStudentProfile.php`,
        { email: studentid }
      );
      setProfileData(response.data);
    } catch (error) {
      console.error("Error fetching profile data:", error);
    }
  };

  const subject = async () => {
    try {
      const response = await axios.post(
       ` ${Endpoint}admin/get/A_StudentScoreProfile_SW.php`,
        { userId: studentid }
      );
      setSubjectData(response.data);
    } catch (error) {
      console.error("Error fetching subject data:", error);
    }
  };

  const nonnursing = async () => {
    try {
      const response = await axios.post(
        `${Endpoint}admin/get/A_StudentScoreProfile_NN.php`,
        { userId: studentid }
      );
      setNonnursingData(response.data);
    } catch (error) {
      console.error("Error fetching non-nursing data:", error);
    }
  };

  const score = async () => {
    try {
      const response = await axios.post(
        `${Endpoint}admin/get/A_StudentScore.php`,
        { userId: studentid }
      );
      console.log("API Response:", response.data); // Log response data

      setScoreData(response.data);
      console.log("Student ID:", studentid);
      console.log("Score Data:", scoreData);
    } catch (error) {
      console.error("Error fetching score data:", error);
    }
  };

  useEffect(() => {
    profile();
    subject();
    nonnursing();
    score();
  }, []);

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [opens, setOpens] = useState(false);
  const handleOpens = () => setOpens(true);
  const handleClosed = () => setOpens(false);

  const MainContainer = {
    display: "flex",
    justifyContent: "center",
    height: "20vh",
  };
  const CardDesign = {
    width: "200px",
    borderRadius: "10px",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    textAlign: "center",
    marginLeft: "26px",
    height: "180px",
    margin: 10,
  };
  const CardDesign1 = {
    borderRadius: "10px",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    textAlign: "center",
    margin: "10px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: "20px",
    height: "140px",
  };
  const Div = {
    minWidth: "400px",
    display: "flex",
    flexDirection: "row",
    overflow: "auto",
    padding: "1px",
    border: "none",
    marginTop: 65,
  };
  const Div1 = {
    minWidth: "400px",
    display: "flex",
    flexDirection: "row",
    overflow: "auto",
    padding: "1px",
    border: "none",
  };
  const Btn = {
    backgroundColor: "#E4A45A",
    color: "white",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    border: "none",
  };
  const buttonStyle = {
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  return (
    <Style>
      <div>
       
        <Container fluid style={MainContainer}>
          

          <Row>
      <Col xs={12} className="text-center mb-3">
        <Typography variant="h4" style={{ padding: 10 }}>
          <img src={Icon} height="65px" alt="Profile Icon" />
          &nbsp;&nbsp;Profile Details
        </Typography>
        <div style={{display:"flex",justifyContent:"flex-end",width:"10ovw",marginTop:"-30px"}}>
          <button onClick={onClose} style={{border:"none",backgroundColor:"white"}}>
            <CloseOutlinedIcon
              sx={{ color: "black" }}
            />
          </button>
        </div>
      </Col>
      

      {Array.isArray(profileData) && profileData.length > 0 ? (
        <Table striped bordered hover responsive="lg">
          <thead>
            <tr>
              <th>Username</th>
              <th>Email ID</th>
              <th>Phone Number</th>
              <th>Joining Date</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {profileData.map((d) => (
              <tr key={d.id}>
                <td>{d.username}</td>
                <td>{d.email}</td>
                <td>{d.mobileno}</td>
                <td>{d.date_of_enrollment}</td>
                <td>
                  {scoreData ? (
                    <Typography>{scoreData.correct_count}</Typography>
                  ) : (
                    "No data available"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <Typography>No profile data available</Typography>
      )}
    </Row>
        </Container>
        <Container fluid>
          <Row style={{ overflow: "hidden" }}>
            <div style={Div}>
              {Array.isArray(subjectData) && subjectData.length > 0 ? (
                subjectData.map((e) => {
                  const percentage = ((e.total_correct_count / e.total_answers_count) * 100).toFixed(2);
                  return (
                    <Col key={e.id}>
                      <div style={CardDesign}>
                        <Typography style={{ padding: "10px", fontWeight: 600 }}>
                          {e.subject_name}
                        </Typography>
                        <hr />
                        <Typography style={{ fontSize: "12px" }}>
                        {e.total_correct_count}/{e.total_answers_count}
                        </Typography>
                        <div style={{ marginTop: "10px" }}>
                          <CircleBar range={percentage} />
                        </div>
                      </div>
                    </Col>
                  );
                })
              ) : (
                <Typography>No subject data available</Typography>
              )}
            </div>
          </Row>
        </Container>
        <Container fluid>
          <div style={Div1}>
            {Array.isArray(nonnursingData) && nonnursingData.length > 0 ? (
              nonnursingData.map((r) => {
                const percentage = ((r.total_correct_count / r.total_answers_count) * 100).toFixed(2);
                return (
                  <Col xs={12} sm={12} md={4} lg={4} xl={4} style={{ marginBottom: '20px' }} key={r.id}>
                    <div style={CardDesign1}>
                      <Typography style={{ fontWeight: 600 }}>
                        {r.subject_name}
                      </Typography>
                      <hr style={{ borderLeft: "1px solid black", height: "100px", margin: '10px 0' }} />
                      <div style={{ textAlign: 'center' }}>
                        <Typography style={{ fontSize: '12px' }}>
                          {r.total_correct_count}/{r.total_answers_count}
                        </Typography>
                        <div style={{ marginTop: '10px' }}>
                          <CircleBar range={percentage} />
                        </div>
                      </div>
                    </div>
                  </Col>
                );
              })
            ) : (
              <Typography>No non-nursing data available</Typography>
            )}
          </div>
        </Container>
      </div>
    </Style>
  );
}
