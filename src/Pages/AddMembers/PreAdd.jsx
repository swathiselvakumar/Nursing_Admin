import React, { useState, useEffect } from "react";
import { AlertBoxStyle } from "./style";
import { Typography } from "@mui/material";
import { PATH } from "../../constants/routeConstants";
import CustomBreadCrumbs from "../../components/Common/CustomBreadcrumbs";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useContext } from "react";
import { navContext } from "../../context/navContext";

function PreAdd() {
  const BreadcrumbItems = [
    { label: "Dashboard", path: PATH.DASHBOARD },
    { label: "Premium", path: PATH.PREMIUM },
    { label: "Add Members", path: PATH.PREADD },
  ];

  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("");
  const [plans, setPlans] = useState([]);
  const emailId = localStorage.getItem("userMail");
  const { Endpoint } = useContext(navContext);
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    fetchPlans();
  }, []);

  const fetchPlans = async () => {
    try {
      const response = await axios.post(
        `${Endpoint}admin/get/A_ViewPlans.php`,
        {
          adminId: emailId
        }
      );
      setPlans(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const validateForm = () => {
    let errors = {};
    let formIsValid = true;

    if (!name) {
      formIsValid = false;
      errors["name"] = "Please enter your name.";
    }

    if (!email) {
      formIsValid = false;
      errors["email"] = "Please enter your email address.";
    }

    if (!selectedPlan) {
      formIsValid = false;
      errors["selectedPlan"] = "Please select a plan.";
    }

    setFormErrors(errors);
    return formIsValid;
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
    if (validateForm()) {
      setOpen(true);
      // console.log("..............",selectedPlan);
      try {
        const userData = {
          username: name,
          email: email,
          current_plan_id: selectedPlan,
        };

        const response = await axios.post(
          `${Endpoint}admin/post/A_InsertStudentPre.php`,
          userData
        );

        console.log("Success:", response.data);

        setOpen(true);
        setEmail("");
        setName("");
        setSelectedPlan("");
        setFormErrors({});
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  const handlename = (event) => {
    setName(event.target.value);
    setFormErrors({ ...formErrors, name: "" });
  };

  const handleemail = (event) => {
    setEmail(event.target.value);
    setFormErrors({ ...formErrors, email: "" });
  };

  const handlePlanChange = (event) => {
    setSelectedPlan(event.target.value);
    setFormErrors({ ...formErrors, selectedPlan: "" });
  };

  const handleClose = () => {
    setOpen(false);
  };

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
          {formErrors["name"] && (
            <div style={{ color: "red", marginBottom: "10px" }}>{formErrors["name"]}</div>
          )}
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
          {formErrors["email"] && (
            <div style={{ color: "red", marginBottom: "10px" }}>{formErrors["email"]}</div>
          )}
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
          {formErrors["selectedPlan"] && (
            <div style={{ color: "red", marginBottom: "10px" }}>{formErrors["selectedPlan"]}</div>
          )}
          <div className="radioBtn" >
            <span style={{display:"flex",justifyContent:"space-evenly",width:"300px"}}>
              {plans.map((plan) => (
                <React.Fragment key={plan.id}>
                  <input
                    type="radio"
                    id={plan.id}
                    name="plans"
                    value={plan.id}
                    onChange={handlePlanChange}
                  />
                  <label htmlFor={plan.id}>{plan.title}</label>
                  <br />
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
          <button style={Btn1} onClick={handleClose}>Done</button>
        </DialogContent>
      </Dialog>
    </AlertBoxStyle>
  );
}

export default PreAdd;
