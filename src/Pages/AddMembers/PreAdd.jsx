import React from "react";
import { AlertBoxStyle } from "./style";
import PreDropdown from "./PreDropdown";
import { Typography } from "@mui/material";
import BreadcrumbsComp from "../../components/Common/BreadCrumbs";

function PreAdd() {
  return (
    <AlertBoxStyle>
      <div style={{padding:"25px"}}>
      <BreadcrumbsComp/>
      </div>
        
      <Typography style={{textAlign:"center",paddingBottom:"60px"}}>ADD MEMBERS</Typography>
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
         <PreDropdown/>
 
          </div>
          <button>Submit</button>
        </div>
        
      
    </div>
    </AlertBoxStyle>
  );
}

export default PreAdd;
