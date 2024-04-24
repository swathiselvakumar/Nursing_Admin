import React, { useState, useEffect } from "react";
import { AlertBoxStyle } from "./style";
import { Typography } from "@mui/material";
import { PATH } from "../../constants/routeConstants";
import CustomBreadCrumbs from "../../components/Common/CustomBreadcrumbs";
import { NavLink } from "react-router-dom";
import axios from "axios";

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

  useEffect(() => {
    fetchPlans();
  }, []);

  const fetchPlans = async () => {
    try {
      const response = await axios.get(
        "https://vebbox.in/Nursing/controllers/api/admin/get/A_ViewPlans.php"
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
  width: "510px",
};
  const handleClickOpen = async () => {
    try {
      const userData = {
        username: name,
        email: email,
        current_plan_id: selectedPlan,
      };

      const response = await axios.post(
        "https://vebbox.in/Nursing/controllers/api/admin/post/A_InsertStudentPre.php",
        userData
      );

      console.log("Success:", response.data);

      setOpen(true);
      setEmail("");
      setName("");
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
                  <label htmlFor={plan.plan_id}>{plan.title}</label>
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
          <NavLink to="/premium">
            <button onClick={handleClickOpen} style={Btn}>
              Submit
            </button>
          </NavLink>
        </div>
      </div>
    </AlertBoxStyle>
  );
}

export default PreAdd;
