import React from "react";
import { Switch } from "@mui/material";
import { NotifyWrapper } from "./style.js";
import TableNav from "../Report/Table/TableNav.jsx";
import TableButton from "../Report/Table/TableButton.jsx";
function Notify() {
  return (
    <div>
      
      <NotifyWrapper>
        <div className="parent">
          <div className="full-wrap2">
            <p>Notification <Switch color="warning" disabled={false} size="lg" /> </p>
            
          </div>
        </div>
      </NotifyWrapper>
    </div>
  );
}

export default Notify;
