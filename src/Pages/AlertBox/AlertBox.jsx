import React from "react";
import { AlertBoxStyle } from "./style";
import BasicSelect from "./Dropdown";

function AlertBox() {
  return (
    <div>
      <AlertBoxStyle>
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
          <button>Add</button>
        </div>
        
      </AlertBoxStyle>
    </div>
  );
}

export default AlertBox;
