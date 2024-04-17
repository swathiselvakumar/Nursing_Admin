import React from "react";
import { NotificationStyle } from "./style";
import CustomBreadCrumbs from "../../components/Common/CustomBreadcrumbs";
import { PATH } from "../../constants/routeConstants";
import { NavLink } from "react-router-dom";
import { styled } from '@mui/material/styles';
import NotificationsIcon from '@mui/icons-material/Notifications';
const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

function NotificationHistory() {
  const [act, setact] = React.useState("password");
  const BreadcrumbItems = [
    // { label: "Dashboard", path: PATH.DASHBOARD },
    
    { label: "Settings", path: PATH.SETTINGS },
    { label: "Notification", path: PATH.NOTIFICATION },
    { label: "Notification History", path: PATH.NOTIFICATIONHISTORY },

    // { label: "Password Change", path: PATH.PASSWORDCHANGE },
  ];
  return (
    <>
      <NotificationStyle>
        <h6
          style={{
            padding: " 10px 0px 0px 60px",
            color: "#183a1d",
            fontWeight: "450",
          }}
        >
          Settings
        </h6>
        <div className="btn-wrapper" style={{ padding: "10px 0px 20px 0px " }}>
          <div
            className="btn-1"
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
            }}
          >
            <div className="btn-wrap-1">
              <NavLink to="/settings">
              <button
                style={{
                  boxShadow: "0px 0px   3px  rgba(0, 0, 0, 0.1)",
                  // fontWeight: "600",
                  width: "480px",
                  padding: "10px 20px",
                  border: "none",
                  color: "black",
                  fontSize: "18px",
                  backgroundColor: "white",
                  textAlign: "center",
                  margin: "5px",
                }}
                // onClick={() => setact("password")}
              >
                Profile Update
              </button>
              </NavLink>
            </div>
            <div className="btn-wrap-2">
              <button
                style={{
                  boxShadow: "0px 0px   5px  rgba(0, 0, 0, 0.1)",
                  // fontWeight: "600",
                  width: "480px",
                  padding: "10px 0px",
                  border: "none",
                  color: "white",
                  fontSize: "18px",
                  textAlign: "center",
                  backgroundColor: "#e4a45a",
                  margin: "5px",
                }}
                onClick={() => setact("notification")}
              >
                Notifications
              </button>
            </div>
          </div>
        </div>
        
       
          <div className="wrap">
            <div className="inside-wrapper">
            <div style={{padding:"10px",display:"flex",justifyContent:"space-between"}}>
                <CustomBreadCrumbs items={BreadcrumbItems} />
                <button className="notify"><NotificationsIcon style={{fontSize:"19px"}}/>&nbsp;Send Notification</button>
              </div>
              <div>
              <label htmlFor="description" className="pass-lab">
                        Today
            </label>
            <div className="details">
                <p>Sender name</p>
                <p>Headline</p>
                <p>Description</p>
                <p>Date</p>
            </div>
            <div className="details">
                <p>Sender name</p>
                <p>Headline</p>
                <p>Description</p>
                <p>Date</p>
            </div>
              </div>
              <div>
              <label htmlFor="description" className="pass-lab">
                        Yesterday
            </label>
            <div className="details">
                <p>Sender name</p>
                <p>Headline</p>
                <p>Description</p>
                <p>Date</p>
            </div>
            <div className="details">
                <p>Sender name</p>
                <p>Headline</p>
                <p>Description</p>
                <p>Date</p>
            </div>
              </div>
              <div>
              <label htmlFor="description" className="pass-lab">
                        Last week
            </label>
            <div className="details">
                <p>Sender name</p>
                <p>Headline</p>
                <p>Description</p>
                <p>Date</p>
            </div>
            <div className="details">
                <p>Sender name</p>
                <p>Headline</p>
                <p>Description</p>
                <p>Date</p>
            </div>
              </div>
            </div>
          </div>
       
      </NotificationStyle>
    </>
  );
}

export default NotificationHistory;
