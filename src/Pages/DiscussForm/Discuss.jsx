// import React, { useEffect, useState } from "react";
// import { DisFormStyle } from "./style";
// import HistoryIcon from "@mui/icons-material/History";
// import emailIcon from "../../assets/icons/email.jpeg";
// import whatsappIcon from "../../assets/images/whatsapp.svg";
// import reportImg from "../../assets/icons/cm.png";
// import BreadcrumbsComp from "../../components/Common/BreadCrumbs";
// import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
// import { PATH } from "../../constants/routeConstants";
// import CustomBreadCrumbs from "../../components/Common/CustomBreadcrumbs";
// import { getLocalStorage } from "../../utils/helperFunc";
// import { useNavigate } from "react-router-dom";
// import './style.css'
// import axios from "axios";

// function Discuss() {
//   const Navigate=useNavigate();
//   const languageName = getLocalStorage("languageName");
//   const userEmail = localStorage.getItem("userMail");

//   const BreadcrumbItems = [
//     { label: "Dashboard", path: PATH.DASHBOARD },
//     { label: "Discussion forum", path: PATH.DISCUSS },
//   ];

//   const [data, setData] = useState([]); // State to store fetched data
//   const [mail,setmail]=useState([]);
//   const [isEditing, setIsEditing] = useState(false); // State to manage edit mode
//   const [editedWhatsappLink, setEditedWhatsappLink] = useState(""); // State to store edited WhatsApp link
//   const [isEditing1, setIsEditing1] = useState(false); // State to manage edit mode
//   const [editedemailLink, setEditedemailLink] = useState(""); // State to store edited WhatsApp link

  

//   const fetchData = async () => {
//     try {
//       const response = await axios.post(
//         "https://vebbox.in/Nursing/controllers/api/admin/get/A_ViewStaticInfo.php",
//         { adminId: userEmail }
//       );
//       setData(response.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   const handleEdit = (whatsappLink) => {
//     setIsEditing(true);
//     setEditedWhatsappLink(whatsappLink);
//   };

//   const handleDone = () => {
//     setIsEditing(false); // Set isEditing to false when editing is don
//     if (editedWhatsappLink) {
//       whatsappData(editedWhatsappLink);
//     } else {
//       console.error("Edited WhatsApp link is empty");
//     }
//   };

//   const handleEdit1 = (gmailLink) => {
//     setIsEditing1(true);
//     setEditedemailLink(gmailLink);
//   };

//   const handleDone1 = () => {
//     setIsEditing1(false);
//     emailData();
//     // Save the edited WhatsApp link using an API call or other method
//   };

//   const whatsappData = async () => {
//     try {
//       const response = await axios.post(
//         "http://localhost/_Nursing_final/controllers/api/admin/put/A_updateWhatsapp.php",
//         {  whatsappLink:editedWhatsappLink }
//       );
//       setData(response.data);
//       // Navigate('/discuss');
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   const emailData = async () => {
//     try {
//       const response = await axios.post(
//         "http://localhost/_Nursing_final/controllers/api/admin/put/A_updateEmail.php",
//         {  gmailLink:editedemailLink }
//       );
//       setData(response.data);
//       // Navigate('/discuss');
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <DisFormStyle>
//       {Array.isArray(data) ? (
//         data.map((r, index) => (
//           <div key={index}>
//             <div style={{ padding: "25px" }}>
//               <CustomBreadCrumbs items={BreadcrumbItems} />
//             </div>
//             <div className="wrapper" key={index}>
//               <div className="title">
//                 <h4>Discussion Form</h4>
//               </div>
//               <div className="img-wraped">
//                 <img src={reportImg} style={{ width: "150px" }} alt="" />
//               </div>
//               {isEditing ? (
//                 <div className="sub-card">
//                   <div className="img-wraped">
//                     <img src={whatsappIcon} alt="" />
//                   </div>
//                   <p style={{ paddingTop: "10px" }}>
//                     Edit WhatsApp Link:
//                   </p>
//                   <div className="hh">
//                     <input
//                       type="text"
//                       value={editedWhatsappLink}
//                       onChange={(e) => setEditedWhatsappLink(e.target.value)}
//                     />
//                     <div style={{ display: "flex", justifyContent: "center" }}>
//                       <button className="done" onClick={handleDone}>Done</button>
//                     </div>
//                   </div>
//                 </div>
//               ) : (
//                 <div className="sub-card">
//                   <div className="img-wraped">
//                     <img src={whatsappIcon} alt="" />
//                   </div>
//                   <p style={{ paddingTop: "10px" }}>
//                     Ask questions through WhatsApp. Click on the below link to edit:
//                   </p>
//                   <div className="hh">
//                     <div style={{ display: "flex", justifyContent: "center" }}>
//                       <span className="edit">{r.whatsapplink}</span>
//                       <span className="iconA">
//                         <ModeEditOutlineOutlinedIcon onClick={() => handleEdit(r.whatsapplink)} />
//                       </span>
//                       <br />
//                     </div>
//                   </div>
//                 </div>
//               )}

// {isEditing1 ? (
//                 <div className="sub-card">
//                   <div className="img-wraped">
//                     <img src={emailIcon} alt="" />
//                   </div>
//                   <p style={{ paddingTop: "10px" }}>
//                     Edit Email Link:
//                   </p>
//                   <div className="hh">
//                     <input
//                       type="text"
//                       value={editedemailLink}
//                       onChange={(e) => setEditedemailLink(e.target.value)}
//                     />
//                     <div style={{ display: "flex", justifyContent: "center" }}>
//                       <button className="done" onClick={handleDone1}>Done</button>
//                     </div>
//                   </div>
//                 </div>
//               ) : (
//                 <div className="sub-card">
//              <div className="img-wraped">
//                  <img src={emailIcon} style={{ width: "38px" }} alt="" />
//                </div>
//                <p style={{ paddingTop: "10px" }}>
//                  Ask questions through Email click on the below link
//                </p>
//                <div className="hh">
                
//                  <div style={{ display: "flex", justifyContent: "center" }}>
//                    <span className="edit">{r.gmaillink}</span>
//                    <span className="iconA">
//                      <ModeEditOutlineOutlinedIcon onClick={() => handleEdit1(r.gmaillink)}/>
//                    </span>                   <br />
//                  </div>
//                  <div style={{ display: "flex", justifyContent: "center" }}>
//                    <button className="done">Done</button>
//                  </div>
//                </div>
//              </div>
//               )}
//               {/* Other card content */}
//             </div>
//           </div>
//         ))
//       ):(
//         <p>No data available</p>

//       )}
//       </DisFormStyle>
//     </div>

//   );
// }

// export default Discuss;


import React, { useEffect, useState } from "react";
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


function Discuss() {
  const userEmail = localStorage.getItem("userMail");
  const languageName = getLocalStorage("languageName");

  const [data, setData] = useState([]);
  const [editedWhatsappLink, setEditedWhatsappLink] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editedgmailLink, setEditedgmailLink] = useState("");
  const [isEditinggmail, setIsEditinggmail] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.post(
        "https://vebbox.in/Nursing/controllers/api/admin/get/A_ViewStaticInfo.php",
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
        "http://localhost/_Nursing_final/controllers/api/admin/put/A_updateWhatsapp.php",
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
        "http://localhost/_Nursing_final/controllers/api/admin/put/A_updateEmail.php",
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

