import React from "react";
import { DisFormStyle } from "./style";
import HistoryIcon from "@mui/icons-material/History";
import email from "../../assets/images/email.jpeg";
import whatsapp from "../../assets/images/whatsapp.svg";
import reportImg from "../../assets/images/discussion.jpeg";

function Discuss() {
  return (
    <div>
      <DisFormStyle>
        <div className="wrapper">
          <div className="title">
            <h4>Discussion Form</h4>
          </div>
          <div className="sub-title">
            <h6>Welcome I How Can I Help You</h6>
            <div className="update-btn">
              <button>
                {" "}
                <HistoryIcon />
                Update
              </button>
            </div>
          </div>
          <div className="img-wraped">
            <img src={reportImg} style={{ width: "150px" }} alt="" />
          </div>
          <div className="sub-card-wrapper">
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
            <div className="card-desc">
              <p>
                if there are any queries or questions about anythink, please
                click the above link and interact with the administrator
              </p>
            </div>
            <div className="card-btn">
                <p>Can&apos;t find what you are looking for ?</p>
                <button>Contact us</button>
            </div>
          </div>
        </div>
      </DisFormStyle>
    </div>
  );
}

export default Discuss;
