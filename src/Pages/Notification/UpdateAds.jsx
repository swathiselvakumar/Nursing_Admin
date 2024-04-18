import React from "react";
import myImage from "../../assets/images/profile.svg";
import Notify from "../Notification/Notify";
import { NotificationStyle } from "./style";
import CustomBreadCrumbs from "../../components/Common/CustomBreadcrumbs";
import { PATH } from "../../constants/routeConstants";
import { NavLink } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SendIcon from '@mui/icons-material/Send';
import RestorePageIcon from '@mui/icons-material/RestorePage';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from "react";
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

function UpdateAds() {
    const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [act, setact] = React.useState("password");
  const BreadcrumbItems = [
    // { label: "Dashboard", path: PATH.DASHBOARD },
    
    { label: "Settings", path: PATH.SETTINGS },
    { label: "Update Ads", path: PATH.UPDATEADS },
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
            
              </div>
              <div >
              <div className="form1">
                    <div>
                      <FormControl style={{width:"340px",marginBottom:"20px"}}>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Choose Place"
          onChange={handleChange}
        >
          <MenuItem value={10}>Home</MenuItem>
          <MenuItem value={20}>YearMCQ</MenuItem>
          {/* <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
      </FormControl>
                    </div>
                    
                    <div>
                    <label htmlFor="description" className="pass-lab">
                        Image:{" "}
                      </label>
                      <br/>
                    <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
      style={{
        height:"50px",
        width:"345px",
        marginTop:"5px",
        backgroundColor:"white",
        color:"black",
        border:"1px dashed black",
        boxShadow:"none"
      }}
    >
      Upload file
      <VisuallyHiddenInput type="file" />
    </Button>
    
                    </div>
                    <div className="btnbox">
                    <NavLink to="/settings">
                    <button className="submit-btn">Upload&nbsp;&nbsp;<SendIcon style={{fontSize:"20px"}}/></button>
                    </NavLink>
                    </div>
                  </div>
              </div>
            </div>
          </div>
       
      </NotificationStyle>
    </>
  );
}

export default UpdateAds;
