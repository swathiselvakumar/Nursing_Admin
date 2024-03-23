import React from "react";
import { DisFormStyle } from "./style";
import HistoryIcon from "@mui/icons-material/History";
import email from "../../assets/icons/email.jpeg";
import whatsapp from "../../assets/images/whatsapp.svg";
import reportImg from "../../assets/icons/cm.png";
import BreadcrumbsComp from "../../components/Common/BreadCrumbs";
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import { PATH } from "../../constants/routeConstants";
import CustomBreadCrumbs from "../../components/Common/CustomBreadcrumbs";
import { getLocalStorage } from "../../utils/helperFunc";
import './style.css'
function Discuss() {
  const languageName = getLocalStorage("languageName");

  const BreadcrumbItems = [
    { label: "Dashboard", path: PATH.DASHBOARD },
    
    { label: "Discussion forum", path: PATH.DISCUSS },
  ];
  return (
    <div>
      <DisFormStyle> 
        <div style={{padding:"25px"}}>
        <CustomBreadCrumbs items={BreadcrumbItems} />
        </div>
        <div className="wrapper">
          <div className="title">
            <h4 >Discussion Form</h4>
          </div>
          
          <div className="img-wraped">
            <img src={reportImg} style={{ width: "150px" }} alt="" />
          </div>
          {/* <div className="sub-card-wrapper"> */}
            <div className="sub-card">
              <div className="img-wraped">
                <img src={whatsapp} alt="" />
              </div>
              <p style={{paddingTop:"10px"}}>
                Ask questions through what &apos;sapp click on the below link
              </p>
              <div className="hh">
                <div style={{display:"flex",justifyContent:"center"}}>
              <span className="edit">https://nursing.com</span><span className="iconA"><ModeEditOutlineOutlinedIcon /></span><br/>
                </div>
              <div style={{display:"flex",justifyContent:"center"}}>
              <button className="done">Done</button>
              </div>
              </div>
            </div>
            <div className="sub-card">
              <div className="img-wraped">
                <img src={email} style={{ width: "38px" }} alt="" />
              </div>
              <p style={{paddingTop:"10px"}}>Ask questions through Email click on the below link</p>
              <div className="hh">
                <div style={{display:"flex",justifyContent:"center"}}>
              <span className="edit">https://nursing.com</span><span className="iconA"><ModeEditOutlineOutlinedIcon /></span><br/>
                </div>
              <div style={{display:"flex",justifyContent:"center"}}>
              <button className="done">Done</button>
              </div>
              </div>
            </div>
           
           
          {/* </div> */}
        </div>
      </DisFormStyle>
    </div>
  );
}

export default Discuss;
