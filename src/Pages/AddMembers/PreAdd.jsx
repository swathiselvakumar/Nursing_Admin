import React, { useState, useEffect } from "react";
import { AlertBoxStyle } from "./style";
import { Typography } from "@mui/material";
import { PATH } from "../../constants/routeConstants";
import CustomBreadCrumbs from "../../components/Common/CustomBreadcrumbs";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function PreAdd() {
  const BreadcrumbItems = [
    { label: "Dashboard", path: PATH.DASHBOARD },
    { label: "Premium", path: PATH.PREMIUM },
    { label: "Add Members", path: PATH.PREADD },
  ];

  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("");
  const [plans, setPlans] = useState([]);
  const emailId=localStorage.getItem("userMail");
  const [boxopen, setBoxOpen] = React.useState(false);


  useEffect(() => {
    fetchPlans();
  }, []);

  const fetchPlans = async () => {
    try {
      const response = await axios.post(
        "https://vebbox.in/Nursing/controllers/api/admin/get/A_ViewPlans.php",
        {
          adminId:emailId
        }
      );
      setPlans(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
const Btn = {
  padding: "10px 20px",
  backgroundColor: "rgb(240, 160, 75)",
  border: "none",
  borderRadius: "5px",
  marginTop: "20px",
  color: "white",
  fontWeight: "550",
  marginBottom: "10px",
  width: "500px",
};
const Btn1 = {
  padding: "10px 20px",
  backgroundColor: "green",
  border: "none",
  borderRadius: "5px",
  marginTop: "20px",
  color: "white",
  fontWeight: "550",
  marginBottom: "10px",
  width: "100px",
};
  const handleClickOpen = async () => {
    setOpen(true);
    try {
      const userData = {
        username: name,
        email: email,
        current_plan_id: selectedPlan,
      };

      const response = await axios.post(
        "http://localhost/_Nursing_final/controllers/api/admin/post/A_InsertStudentPre.php",
        userData
      );

      console.log("Success:", response.data);

      setOpen(true);
      setEmail("");
      setName("");
      // setPlans("");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handlename = (event) => {
    setName(event.target.value);
  };

  const handleemail = (event) => {
    setEmail(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };
 const chunkedPlans = plans.reduce((acc, curr, index) => {
   const chunkIndex = Math.floor(index / 4);
   if (!acc[chunkIndex]) {
     acc[chunkIndex] = [];
   }
   acc[chunkIndex].push(curr);
   return acc;
 }, []);
  return (
    <AlertBoxStyle>
      <div style={{ padding: "25px" }}>
        <CustomBreadCrumbs items={BreadcrumbItems} />
      </div>

      <Typography style={{ textAlign: "center", paddingBottom: "10px" }}>
        ADD MEMBERS
      </Typography>
      <div className="TotalBox">
        <div className="alt-box">
          <div>
            <label htmlFor="name">Name </label>
            <br />
            <input
              type="text"
              className="textB"
              value={name}
              onChange={handlename}
            />
          </div>
          <div>
            <label htmlFor="email">Email </label>
            <br />
            <input
              type="email"
              className="textB"
              value={email}
              onChange={handleemail}
            />
          </div>
          <div className="radioBtn">
            <span>
              {plans.map((plan, index) => (
                <React.Fragment key={plan.plan_id}>
                  <input
                    type="radio"
                    id={plan.plan_id}
                    name="plans"
                    value={plan.title}
                    onChange={(e) => setSelectedPlan(e.target.value)}
                  />
                  {/* {"                                                      "} */}
                  &nbsp;<label htmlFor={plan.plan_id}>{plan.title}</label>
                  {/* <br/> */}
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; */}
                  {(index + 1) % 4 === 0 && <br />}
                  {/* {"  "} */}
                  {/* Add line break after every 4th radio button */}
                </React.Fragment>
              ))}
            </span>
          </div>
            <button onClick={handleClickOpen} style={Btn}>
              Submit
            </button>
        </div>
      </div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        style={{ display: "flex", justifyContent: "center" }}
      >
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
        <DialogContent
          dividers
          style={{
            height: "200px",
            width: "400px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography style={{ paddingBottom: "20px" }}>
            Successfully Completed
          </Typography>
          {/* <NavLink to="/standard"> */}
            <button style={Btn1} onClick={handleClose}>Done</button>
          {/* </NavLink> */}
        </DialogContent>
      </Dialog>
    </AlertBoxStyle>
  );
}

export default PreAdd;
