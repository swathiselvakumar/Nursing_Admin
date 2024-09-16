import React from "react";
import { DisFormStyle } from "./style";
import HistoryIcon from "@mui/icons-material/History";
import email from "../../assets/icons/email.jpeg";
import whatsapp from "../../assets/images/whatsapp.svg";
import reportImg from "../../assets/images/discussion.jpeg";
import BreadcrumbsComp from "../../components/Common/BreadCrumbs";
function Discuss() {
  return (
    <div>
      <DisFormStyle> 
        <div style={{padding:"25px"}}>
          <BreadcrumbsComp/>
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
              <p>
                Ask questions through what &apos;sapp click on the below link
              </p>
              <span>https://nursing.com</span>
            </div>
            <div className="sub-card">
              <div className="img-wraped">
                <img src={email} style={{ width: "38px" }} alt="" />
              </div>
              <p>Ask questions through Email click on the below link</p>
              <span>https://nursing.com</span>
            </div>
           
           
          {/* </div> */}
        </div>
      </DisFormStyle>
    </div>
  );
}

export default Discuss;
