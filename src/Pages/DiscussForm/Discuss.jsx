

import React, { useEffect, useState,useContext } from "react";
import axios from "axios";
import { DisFormStyle } from "./style";
import emailIcon from "../../assets/icons/email.jpeg";
import whatsappIcon from "../../assets/images/whatsapp.svg";
import reportImg from "../../assets/icons/cm.png";
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import CustomBreadCrumbs from "../../components/Common/CustomBreadcrumbs";
import { PATH } from "../../constants/routeConstants";
import { getLocalStorage } from "../../utils/helperFunc";
import './style.css'
import { navContext } from "../../context/navContext";


function Discuss() {
  const userEmail = localStorage.getItem("userMail");
  const languageName = getLocalStorage("languageName");

  const [data, setData] = useState([]);
  const [editedWhatsappLink, setEditedWhatsappLink] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editedgmailLink, setEditedgmailLink] = useState("");
  const [isEditinggmail, setIsEditinggmail] = useState(false);
  const {Endpoint}=useContext(navContext);
  const fetchData = async () => {
    try {
      const response = await axios.post(
        `${Endpoint}admin/get/A_ViewStaticInfo.php`,
        { adminId: userEmail }
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleEdit = (whatsappLink) => {
    setIsEditing(true);
    setEditedWhatsappLink(whatsappLink);
  };

  const handleDone = async () => {
    setIsEditing(false);
    try {
      await axios.post(
        `${Endpoint}admin/put/A_updateWhatsapp.php`,
        {  whatsappLink:editedWhatsappLink }
      );
      fetchData();
    } catch (error) {
      console.error("Error updating WhatsApp link:", error);
    }
  };

  const handleEditgmail = (gmailLink) => {
    setIsEditinggmail(true);
    setEditedgmailLink(gmailLink);
  };

  const handleDonegmail = async () => {
    setIsEditinggmail(false);
    try {
      await axios.post(
        `${Endpoint}admin/put/A_updateEmail.php`,
        {  gmailLink:editedgmailLink }
      );
      fetchData();
    } catch (error) {
      console.error("Error updating WhatsApp link:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <DisFormStyle>
        {data.map((r, index) => (
          <div key={index}>
            <CustomBreadCrumbs
              items={[
                { label: "Dashboard", path: PATH.DASHBOARD },
                { label: "Discussion forum", path: PATH.DISCUSS }
              ]}
            />
            <div className="wrapper" key={index}>
              <div className="title">
                <h4>Discussion Forum</h4>
              </div>
              <div className="img-wraped">
                <img src={reportImg} style={{ width: "150px" }} alt="" />
              </div>
              {isEditing ? (
                <div className="sub-card">
                  <div className="img-wraped">
                    <img src={whatsappIcon} alt="" />
                  </div>
                  <p style={{ paddingTop: "10px" }}>Edit WhatsApp Link:</p>
                  <div className="hh">
                    <input
                      type="text"
                      value={editedWhatsappLink}
                      onChange={(e) => setEditedWhatsappLink(e.target.value)}
                      style={{height:"30px",width:"200px",paddingLeft:"10px",borderRadius:"10px",outline:"none"}}
                    />
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <button className="done" onClick={handleDone}>Done</button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="sub-card">
                  <div className="img-wraped">
                    <img src={whatsappIcon} alt="" />
                  </div>
                  <p style={{ paddingTop: "10px" }}>
                    Ask questions through WhatsApp. Click on the below link to edit:
                  </p>
                  <div className="hh">
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <span className="edit">{r.whatsapplink}</span>
                      <span className="iconA">
                        <ModeEditOutlineOutlinedIcon onClick={() => handleEdit(r.whatsapplink)} />
                      </span>
                      <br />
                    </div>
                  </div>
                </div>
              )}

{isEditinggmail ? (
                <div className="sub-card">
                  <div className="img-wraped">
                    <img src={emailIcon} alt="" />
                  </div>
                  <p style={{ paddingTop: "10px" }}>Edit gmail Link:</p>
                  <div className="hh">
                    <input
                      type="text"
                      value={editedgmailLink}
                      onChange={(e) => setEditedgmailLink(e.target.value)}
                      style={{height:"30px",width:"200px",paddingLeft:"10px",borderRadius:"10px",outline:"none"}}
                    />
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <button className="done" onClick={handleDonegmail}>Done</button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="sub-card">
                  <div className="img-wraped">
                    <img src={emailIcon} alt="" />
                  </div>
                  <p style={{ paddingTop: "10px" }}>
                    Ask questions through gmail. Click on the below link to edit:
                  </p>
                  <div className="hh">
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <span className="edit">{r.gmaillink}</span>
                      <span className="iconA">
                        <ModeEditOutlineOutlinedIcon onClick={() => handleEditgmail(r.gmaillink)} />
                      </span>
                      <br />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </DisFormStyle>
    </div>
  );
}

export default Discuss;

