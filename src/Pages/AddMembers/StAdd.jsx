import React from "react";
import { AlertBoxStyle } from "./style";
import BasicSelect from "./Dropdown";
import { Typography } from "@mui/material";
import BreadcrumbsComp from "../../components/Common/BreadCrumbs";

function StAdd() {
  return (
    <AlertBoxStyle>
      <div style={{padding:"25px"}}>
      <BreadcrumbsComp/>
      </div>
        
      <Typography style={{textAlign:"center",paddingTop:"30px"}}>ADD MEMBERS</Typography>
    <div className="TotalBox">
        <div className="alt-box">
          <div>
            <label htmlFor="name">Name </label>
            <br />
            <input type="text" />
          </div>
          <div>
          <label htmlFor="email">Email </label>
          <br />
          <input type="email" />
        </div>
          <div className="dropDown">
         <BasicSelect/>
 
          </div>
          <button>Submit</button>
        </div>
        
      
    </div>
    </AlertBoxStyle>
  );
}

export default StAdd;
