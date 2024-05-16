import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import ProfileImg from "../../asserts/Component 278 – 1.png";
import { Button, IconButton, Typography } from "@mui/material";
// import Footer from "../footer";
import "./style.css";
import CircleBar from "../Profile/Circularbar";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { Style } from "../Profile/style";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { NavLink } from "react-router-dom";
import Icon from '../../assets/images/Group 2391.png'
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
// import Editprofile from "../Pages/Editprofile";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
// //   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };
export default function Profile({ onClose }) {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    // console.log(open);
  };
  const [opens, setOpens] = React.useState(false);
  const handleOpens = () => setOpens(true);
  const handleClosed = () => setOpens(false);
  const MainContainer = {
    display: "flex",
    justifyContent: "center",
    // alignItems: "center",
    // alignContent:'center',
    // backgroundColor: "#E1EEDD",
    height: "20vh",
    // border:'none'
  };
  const CardDesign = {
    width: "160px",
    borderRadius: "10px",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    textAlign: "center",
    marginLeft: "26px",
    height: "140px",
    margin: 10,
    // display:'flex',
    // top:80
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

    // width: "160px",
  };

  const Div = {
    minWidth: "400px",
    display: "flex",
    flexDirection: "row",
    overflow: "auto",
    padding: "1px",
    border: "none",
    marginTop: 65,

    // backgroundColor: "red",

    // top:70
  };
  const Div1 = {
    minWidth: "400px",
    display: "flex",
    flexDirection: "row",
    overflow: "auto",
    padding: "1px",
    border: "none",
    // marginTop: 5,
    // backgroundColor: "blue",

    // backgroundColor:'red'
    // top:70
  };
  const Btn = {
    backgroundColor: "#E4A45A",
    color: "white",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    border: "none",

    // border: "1px solid #183A1D",
  };
  const buttonStyle = {
    // padding: "8px 16px",
    // backgroundColor: "#007bff",
    border: "none",
    borderRadius: "4px",
    // color: "red",
    cursor: "pointer",
    // transition: "background-color 0.3s ease",
  };

  // Define a variable to conditionally apply background image
  const withBackground = {
    backgroundImage: "url('../../asserts/Component 278 – 1.png)", // Adjust the path to your background image
    backgroundSize: "cover", // Adjust background image size
    backgroundPosition: "center", // Adjust background image position
  };

  const datas = [
    {
      sub: "Subject 1",
      rank: "3/10",
      range: 40,
    },
    {
      sub: "Subject 2",
      rank: "5/10",
      range: 70,
    },
    {
      sub: "Subject 3",
      rank: "2/10",
      range: 30,
    },
    {
      sub: "Subject 4",
      rank: "4/10",
      range: 30,
    },
    {
      sub: "Subject 5",
      rank: "7/10",
      range: 60,
    },
    {
      sub: "Subject 6",
      rank: "1/10",
      range: 20,
    },
    {
      sub: "Subject 7",
      rank: "9/10",
      range: 95,
    },
    {
      sub: "Subject 8",
      rank: "5/10",
      range: 60,
    },
    {
      sub: "Subject 9",
      rank: "4/10",
      range: 30,
    },
    {
      sub: "Subject 10",
      rank: "7/10",
      range: 60,
    },
  ];
  const Details = [
    {
      name: "Aptitude",
      rank: "3/10",
      range: 20,
    },
    {
      name: "Reasoning",
      rank: "4/10",
      range: 30,
    },
    {
      name: "GK & CA",
      rank: "5/10",
      range: 47,
    },
    {
      name: "English & CSE",
      rank: "7/10",
      range: 60,
    },
  ];
  return (
    <Style>
      <div>
        <Dialog onClose={handleClose} open={open}>
          <DialogTitle
            style={{ width: "350px", height: "100px", textAlign: "center" }}
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
              sx={{ color: "black", position: "relative",left:1000,bottom:30  }}
            />
          </Button>

          <Row style={{ justifyContent: "space-evenly" }}>
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              style={{ justifyContent: "space-evenly" }}
            >
              <Typography variant="h4" style={{ padding: 10 }}>
                <img src={Icon} height="65px" /> Santhosh
              </Typography>
            </Col>
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              style={{ display: "flex", flexDirection: "row" }}
            >
              <div>
                <Typography
                  style={{ marginTop: 10, fontWeight: 600, marginLeft: 10 }}
                >
                  Email ID
                </Typography>
              </div>
              <div>
                <Typography
                  style={{
                    // textAlign: "center",
                    marginLeft: 221,
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
                    // textAlign: "center",
                    marginLeft: 123,
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
                    // textAlign: "center",
                    marginLeft: 110,
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
              style={{ display: "flex", flexDirection: "row" }}
            >
              <div>
                <Typography style={{ marginTop: 5, marginLeft: 10 }}>
                  santhosh@gmail.com
                </Typography>
              </div>
              <div>
                <Typography
                  style={{
                    // textAlign: "center",
                    marginLeft: 120,
                    marginTop: 5,
                  }}
                >
                  +91 1234567890
                </Typography>
              </div>
              <div>
                <Typography
                  style={{
                    // textAlign: "center",
                    marginLeft: 120,
                    marginTop: 5,
                  }}
                >
                  12/02/2024
                </Typography>
              </div>
              <div>
                <Typography
                  style={{
                    // textAlign: "center",
                    marginLeft: 120,
                    marginTop: 5,
                  }}
                >
                  50
                </Typography>
              </div>
            </Col>
            <hr style={{ width: "100%", color: "#ccc", margin: 5 }} />
            <Typography
              style={{
                fontSize: "16px",
                fontWeight: 600,
                paddingLeft: 24,
                display: "flex",
                // top: 40,
              }}
            >
              Scores
            </Typography>
          </Row>
        </Container>
        <Container fluid>
          <Row style={{ overflow: "hidden" }}>
            <div style={Div}>
              {datas.map((e) => {
                return (
                  <>
                    <Col>
                      <div style={CardDesign}>
                        <Typography
                          style={{ paddingTop: "10px", fontWeight: 600 }}
                        >
                          {e.sub}
                        </Typography>
                        <hr />
                        <Typography style={{ fontSize: "12px" }}>
                          {e.rank}
                        </Typography>
                        <div style={{ marginTop: "10px" }}>
                          <CircleBar range={e.range} />
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
          {/* <Row style={{ overflow: "hidden",backgroundColor:'yellow' }}> */}
          <div style={Div1}>
            {Details.map((r) => {
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
                        {r.name}
                      </Typography>
                      <hr
                        style={{
                          borderLeft: "1px solid black",
                          height: "100px",
                        }}
                      />
                      <div style={{ flexDirection: "column" }}>
                        <Typography style={{ fontSize: "12px" }}>
                          {r.rank}
                        </Typography>
                        <div style={{ marginTop: "10px" }}>
                          <CircleBar range={r.range} />
                        </div>
                      </div>
                    </div>
                  </Col>
                </>
              );
            })}
          </div>
          {/* </Row> */}
        </Container>
        {/* <Footer /> */}
      </div>
    </Style>
  );
}
