import React, { useState,useEffect,useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Button,  Typography } from "@mui/material";
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

export default function Profile({ onClose,studentid }) {
  const [profileData,setProfiledata]=useState([]);
  const [subjectData,setsubjectdata]=useState([]);
  const [nonnursingData,setnonnursingdata]=useState([]);
  const [scoreData,setScoredata]=useState([]);
  const {Endpoint}=useContext(navContext);
  const profile = async () => {
    try {
      const response = await axios.post(
        `${Endpoint}User/get/U_ViewProfile.php`,
        {
          email: studentid,
        }
      );
      setProfiledata(response.data);
      console.log(studentid);
      console.log(profileData);

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const subject = async () => {
    try {
      const response = await axios.post(
        `${Endpoint}User/get/U_ScoreProfile_SW.php`,
        {
          userId: studentid,
        }
      );
      setsubjectdata(response.data);
      console.log(studentid);
      console.log(subjectData);

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const nonnursing = async () => {
    try {
      const response = await axios.post(
        `${Endpoint}User/get/U_ScoreProfile_NN.php`,
        {
          userId: studentid,
        }
      );
      setnonnursingdata(response.data);
      console.log(studentid);
      console.log(nonnursingData);

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const score = async () => {
    try {
      const response = await axios.post(
        `${Endpoint}admin/get/A_StudentScore.php`,
        {
          userId: studentid,
        }
      );
      console.log(response.data);

      setScoredata(response.data);
      console.log(studentid);
     
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    profile();
    subject();
    nonnursing();
    score();
  }, []);
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };
  const [opens, setOpens] = React.useState(false);
  const handleOpens = () => setOpens(true);
  const handleClosed = () => setOpens(false);
  const MainContainer = {
    display: "flex",
    justifyContent: "center",
    height: "20vh",
  };
  const CardDesign = {
    width: "160px",
    borderRadius: "10px",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    textAlign: "center",
    marginLeft: "26px",
    height: "140px",
    margin: 10
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
    padding: "40px",
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
        <Dialog onClose={handleClose} open={open}>
          <DialogTitle
            style={{ width: "450px", height: "100px", textAlign: "center" }}
          >
            {/* <NavLink to="/"> */}
            <Button onClick={handleClose} style={{ width: 1 }}>
              <img
                src={close}
                height="10px"
                style={{ display: "flex", marginLeft: 230 }}
              />
            </Button>
            <hr style={{ width: "100%" }} />
            <Typography>Are you sure want to logout ?</Typography>
            {/* </NavLink> */}
          </DialogTitle>
          <DialogTitle>
            <NavLink to="/">
              <Button onClick={handleClose} fullWidth style={Btn}>
                yes
              </Button>
            </NavLink>
          </DialogTitle>
        </Dialog>
        <Container fluid style={MainContainer}>
          <Button onClick={onClose}>
            <CloseOutlinedIcon
              sx={{ color: "black", position: "relative",left:"70vw",bottom:30  }}
            />
          </Button> 

          <Row style={{ justifyContent: "space-evenly" }}>
            {
              profileData.map((d)=>(
                <div>
                  <Col
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              style={{ justifyContent: "space-evenly" }}
            >
              <Typography variant="h4" style={{ padding: 10 }}>
                <img src={Icon} height="65px" />&nbsp;&nbsp;{d.username}
              </Typography>
            </Col>
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              style={{ display: "flex", flexDirection: "row",justifyContent:"space-between",width:"80vw" }}
            >
              <div>
                <Typography
                  style={{ marginTop: 10, fontWeight: 600, }}
                >
                  Email ID
                </Typography>
              </div>
              <div>
                <Typography
                  style={{
                    marginTop: 10,
                    fontWeight: 600,
                  }}
                >
                  Phone Number
                </Typography>
              </div>
              <div>
                <Typography
                  style={{
                    marginTop: 10,
                    fontWeight: 600,
                  }}
                >
                  Joining Date
                </Typography>
              </div>
              <div>
                <Typography
                  style={{
                    marginTop: 10,
                    fontWeight: 600,
                  }}
                >
                  Score
                </Typography>
              </div>
            </Col>
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              style={{ display: "flex", flexDirection: "row",justifyContent:"space-between",width:"80vw" }}
            >
              <div>
                <Typography style={{ marginTop: 5,}}>
                  {d.email}
                </Typography>
              </div>
              <div>
                <Typography
                  style={{
                    textAlign: "center",
                    marginRight: 150,
                    marginTop: 5,
                  }}
                >
                  {d.mobileno}
                </Typography>
              </div>
              <div>
                <Typography
                  style={{
                    marginRight: 140,
                    marginTop: 5,
                  }}
                >
                  {d.date_of_enrollment	}
                </Typography>
              </div>
              <div>
      {
        Array.isArray(scoreData) && scoreData.length > 0 ? (
          scoreData.map((s, index) => (
            <Typography
              key={index}
              style={{
                marginRight: 20,
                marginTop: 5,
              }}
            >
              {s.correct_count}gg
            </Typography>
          ))
        ) : (
          <Typography>No data available</Typography>
        )
      }
    </div>

            </Col>
            <hr style={{ width: "100%", color: "#ccc", margin: 5 }} />
            <Typography
              style={{
                fontSize: "16px",
                fontWeight: 600,
                paddingLeft: 24,
                display: "flex",
              }}
            >
              Scores
            </Typography>
                </div>
              ))
            }
          </Row>
        </Container>
        <Container fluid>
          <Row style={{ overflow: "hidden" }}>
            <div style={Div}>
              {subjectData.map((e) => {
                const percentage = ((e.correct_count / e.total_count) * 100).toFixed(2);
                return (
                  <>
                    <Col>
                      <div style={CardDesign}>
                        <Typography
                          style={{ paddingTop: "10px", fontWeight: 600 }}
                        >
                          {e.test_name}
                        </Typography>
                        <hr />
                        <Typography style={{ fontSize: "12px" }}>
                          {e.correct_count}/{e.total_count}
                        </Typography>
                        <div style={{ marginTop: "10px" }}>
                          <CircleBar range={percentage} />
                        </div>
                      </div>
                    </Col>
                  </>
                );
              })}
            </div>
          </Row>
        </Container>
        <Container fluid>
         
          <div style={Div1}>
            {nonnursingData.map((r) => {
               const percentage = ((r.correct_count / r.total_count) * 100).toFixed(2);
               console.log(percentage);
              return (
                <>
                  <Col
                    xs={12}
                    sm={12}
                    md={4}
                    lg={4}
                    xl={4}
                    style={{ flexDirection: "row" }}
                  >
                    <div style={CardDesign1}>
                      <Typography style={{ fontWeight: 600 }}>
                        {r.test_name}
                      </Typography>
                      <hr
                        style={{
                          borderLeft: "1px solid black",
                          height: "100px",
                        }}
                      />
                      <div style={{ flexDirection: "column" }}>
                        <Typography style={{ fontSize: "12px" }}>
                        {r.correct_count}/{r.total_count} 
                        </Typography>
                        <div style={{ marginTop: "10px" }}>
                          <CircleBar range={percentage} />
                        </div>
                      </div>
                    </div>
                  </Col>
                </>
              );
            })}
          </div>
        </Container>
      </div>
    </Style>
  );
}
