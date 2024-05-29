import React, { useEffect, useState,useContext } from "react";
import { Button, Typography } from "@mui/material";
import { PlansStyle } from "./planstyle";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Crown from "../../../assets/images/Crown.png";
import Plus from "../../../assets/icons/plus b.png";
import Tick from "../../../assets/icons/tick.png";
import BreadcrumbsComp from "../../../components/Common/BreadCrumbs";
import { PATH } from "../../../constants/routeConstants";
import CustomBreadCrumbs from "../../../components/Common/CustomBreadcrumbs";
import { getLocalStorage } from "../../../utils/helperFunc";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Rong from "../../../assets/icons/rong.jpg";
import axios from "axios";
import { navContext } from "../../../context/navContext";

export default function PlanDetails() {
  const [open, setOpen] = useState(false);
  const [plansData, setPlansData] = useState([]);
  const email=localStorage.getItem("userMail");
  const {Endpoint}=useContext(navContext);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    // Fetch plans data when the component mounts
    fetchPlansData();
  }, []);

  const fetchPlansData = async () => {
    try {
      const response = await axios.post(
        `${Endpoint}admin/get/A_ViewPlans.php`,
        {
          adminId:email
        }
      );
      setPlansData(response.data || []); // Ensure plansData is an array
    } catch (error) {
      console.error("Error fetching plans data:", error);
    }
  };

  const DeleteBtn = {
    width: "130px",
    fontWeight: "bold",
    textTransform: "capitalize",
    backgroundColor: "white",
    color: "black",
    boxShadow:
      "rgba(0, 0, 0.15, 0.15) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 3px -3px",
  };

  const Btn = {
    backgroundColor: "white",
    color: "black",
    border: "1px solid black",
    width: "100px",
    marginTop: "20px",
  };

  const Btn1 = {
    backgroundColor: "red",
    color: "white",
    marginLeft: "10px",
    width: "100px",
    marginTop: "20px",
  };

  return (
    <PlansStyle>
      <div className="bodystyle">
        <div style={{ padding: "20px" }}>
          <CustomBreadCrumbs
            items={[
              { label: "Dashboard", path: PATH.DASHBOARD },
              { label: "Premium Plans", path: PATH.PREMIUMPLANS },
              { label: "Plans", path: PATH.PLANDETAILS },
            ]}
          />
        </div>
        <Container fluid style={{ marginTop: "20px" }}>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12} xl={12} className="MainCol">
              <div className="title">
                <Typography sx={{ fontWeight: 600, fontSize: "18px" }}>
                  Premium Plans &nbsp;
                  <img src={Crown} height="20px" alt="Crown" />
                </Typography>
              </div>
              <div>
                <Button onClick={handleClickOpen} style={DeleteBtn}>
                  <DeleteOutlineIcon />
                  &nbsp; Delete
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
        <div style={{ padding: "10px", marginTop: "30px" }}>
          <Container className="mainContainer">
            <Row style={{ display: "flex", justifyContent: "space-around" }}>
              {plansData.map((plan, index) => (
                <Col xs={12} sm={12} md={6} lg={3} xl={3} key={index}>
                  <div className="item">
                    <div className="innerContent">
                      <Typography>
                        {plan.amount}/Per {plan.duration}
                      </Typography>
                    </div>
                    <div style={{ padding: "10px" }}>
                      <Typography style={{ marginTop: "20px" }}>
                        {plan.duration} month plan for course
                      </Typography>
                      <Typography style={{ fontSize: "26px" }}>
                        <ul >
                          {[...Array(plan.tickCount)].map((_, i) => (
                            <li key={i}>
                              <img src={Tick} alt="Tick" />
                              &nbsp;{plan.description}
                            </li>
                          ))}
                        </ul>
                      </Typography>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
          <Dialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
          >
            <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title" />
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
            <DialogContent sx={{ textAlign: "center" }}>
              <img
                src={Rong}
                height="25px"
                alt="Rong"
                style={{ marginTop: "-30px" }}
              />
              <br />
              Are You sure ?<br />
              you want to delete this Plan?
              <br />
              <Button onClick={handleClose} style={Btn}>
                Cancel
              </Button>
              <Button onClick={handleClose} style={Btn1}>
                Delete
              </Button>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </PlansStyle>
  );
}
