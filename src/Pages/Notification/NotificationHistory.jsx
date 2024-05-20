import React, { useEffect, useState } from "react";
import { NotificationStyle } from "./style";
import CustomBreadCrumbs from "../../components/Common/CustomBreadcrumbs";
import { PATH } from "../../constants/routeConstants";
import { NavLink, useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';
import NotificationsIcon from '@mui/icons-material/Notifications';
import axios from "axios";

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
  const [act, setact] = useState("password");
  const [todaynotifications, setTodaynotifications] = useState([]);
  const [yesterdaynotifications, setYesterdaynotifications] = useState([]);
  const [allnotifications, setAllnotifications] = useState([]);
  const email = localStorage.getItem("userMail");
  const navigate = useNavigate();

  const BreadcrumbItems = [
    { label: "Settings", path: PATH.SETTINGS },
    { label: "Notification", path: PATH.NOTIFICATION },
    { label: "Notification History", path: PATH.NOTIFICATIONHISTORY },
  ];

  useEffect(() => {
    fetchTodayNotifications();
    fetchYesterdayNotifications();
    fetchAllNotifications();
  }, []);

  const fetchTodayNotifications = async () => {
    try {
      const response = await axios.post(
        "https://vebbox.in/Nursing/controllers/api/admin/get/A_ViewTodayNotification.php",
        { admin_id: email }
      );
      if (Array.isArray(response.data)) {
        setTodaynotifications(response.data);
      } else {
        console.error("Unexpected response format for today's notifications");
      }
    } catch (error) {
      console.error("Error fetching today's notifications:", error);
    }
  };

  const fetchYesterdayNotifications = async () => {
    try {
      const response = await axios.post(
        "https://vebbox.in/Nursing/controllers/api/admin/get/A_ViewYesterdayNotification.php",
        { admin_id: email }
      );
      if (Array.isArray(response.data)) {
        setYesterdaynotifications(response.data);
      } else {
        console.error("Unexpected response format for yesterday's notifications");
      }
    } catch (error) {
      console.error("Error fetching yesterday's notifications:", error);
    }
  };

  const fetchAllNotifications = async () => {
    try {
      const response = await axios.post(
        "https://vebbox.in/Nursing/controllers/api/admin/get/A_ViewAllNotification.php",
        { admin_id: email }
      );
      if (Array.isArray(response.data)) {
        setAllnotifications(response.data);
      } else {
        console.error("Unexpected response format for all notifications");
      }
    } catch (error) {
      console.error("Error fetching all notifications:", error);
    }
  };

  return (
    <>
      <NotificationStyle>
        <h6
          style={{
            padding: "10px 0px 0px 60px",
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
                    boxShadow: "0px 0px 3px rgba(0, 0, 0, 0.1)",
                    width: "480px",
                    padding: "10px 20px",
                    border: "none",
                    color: "black",
                    fontSize: "18px",
                    backgroundColor: "white",
                    textAlign: "center",
                    margin: "5px",
                  }}
                >
                  Profile Update
                </button>
              </NavLink>
            </div>
            <div className="btn-wrap-2">
              <button
                style={{
                  boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)",
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
            <div
              style={{
                padding: "10px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <CustomBreadCrumbs items={BreadcrumbItems} />
              <button className="notify" onClick={() => navigate('/notification')}>
                <NotificationsIcon style={{ fontSize: "19px" }} />
                &nbsp;Send Notification
              </button>
            </div>
            <div>
              <label htmlFor="description" className="pass-lab">Today</label>
              {Array.isArray(todaynotifications) ? (
                todaynotifications.map((notification, index) => (
                  <div key={index} className="details">
                    <p>{notification.admin_id}</p>
                    <p>{notification.title}</p>
                    <p>{notification.content}</p>
                    <p>{notification.created_at}</p>
                  </div>
                ))
              ) : (
                <p>No notifications for today.</p>
              )}
            </div>
            <div>
              <label htmlFor="description" className="pass-lab">Yesterday</label>
              {Array.isArray(yesterdaynotifications) ? (
                yesterdaynotifications.map((notification, index) => (
                  <div key={index} className="details">
                    <p>{notification.admin_id}</p>
                    <p>{notification.title}</p>
                    <p>{notification.content}</p>
                    <p>{notification.created_at}</p>
                  </div>
                ))
              ) : (
                <p>No notifications for yesterday.</p>
              )}
            </div>
            <label htmlFor="description" className="pass-lab">All notifications</label>
            {Array.isArray(allnotifications) ? (
              allnotifications.map((notification, index) => (
                <div key={index} className="details">
                  <p>{notification.admin_id}</p>
                  <p>{notification.title}</p>
                  <p>{notification.content}</p>
                  <p>{notification.created_at}</p>
                </div>
              ))
            ) : (
              <p>No notifications available.</p>
            )}
          </div>
        </div>
      </NotificationStyle>
    </>
  );
}

export default NotificationHistory;
