import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Typography } from "@mui/material";
import Delete from "../../assets/icons/delete.jpeg";
import { NavLink, useParams } from "react-router-dom";
import CustomBreadCrumbs from "../../components/Common/CustomBreadcrumbs";
import axios from "axios";
import { PATH } from "../../constants/routeConstants";
import Aptitude from "../../assets/images/Aptitude.jpg";

export default function NonInstitution() {
  const [mcqs, setMcqs] = useState([]);
const {sno}=useParams();
  const Send = async () => {
    try {
      const response = await axios.post(
        "https://vebbox.in/Nursing/controllers/api/admin/get/A_ViewNonNursingPaper.php",
        {
          adminId: "nandinivebbox@gmail.com",
          id: sno,
        }
      );
      setMcqs(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    Send();
  }, []);

  const handleDelete = (id) => {
    console.log("Delete MCQ with ID:", id);
    // Implement deletion logic here
  };

  const renderBoxes = () => {
    const rows = [];
    for (let i = 0; i < mcqs.length; i += 3) {
      const rowItems = [];
      for (let j = i; j < Math.min(i + 3, mcqs.length); j++) {
        const mcq = mcqs[j];
        rowItems.push(
          <Col key={mcq.sno} className="MainBox">
            <div className="box">
              <NavLink to="/mcqnursingtable" style={{ textDecoration: "none" }}>
                <button
                  style={{
                    backgroundColor: "white",
                    border: "none",
                    paddingTop: "5px",
                  }}
                >
                  {mcq.paper_name}
                </button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <img
                  src={Delete}
                  className="delete"
                  alt="Delete icon"
                  onClick={() => handleDelete(mcq.id)}
                />
              </NavLink>
            </div>
            <NavLink
              to="/viewquestionsnursing"
              style={{ textDecoration: "none", marginLeft: "20px" }}
            >
              <div style={{ display: "flex", marginLeft: 160 }}>
                View Questions
              </div>
            </NavLink>
          </Col>
        );
      }
      rows.push(
        <Row key={i} style={{ marginTop: "20px" }}>
          {rowItems}
        </Row>
      );
    }
    return rows;
  };

  return (
    <div style={{ backgroundColor: "white", padding: "10px" }}>
      <div style={{ padding: "25px" }}>
        <CustomBreadCrumbs
          items={[
            { label: "Dashboard", path: PATH.DASHBOARD },
            { label: "Non Nursing", path: PATH.NONNURSING },
            { label: "Aptitude", path: PATH.NONINSTITUTION },
          ]}
        />
      </div>
      <Container fluid style={{ paddingLeft: "27px", paddingRight: "27px" }}>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} className="title1">
            <div>
              <img src={Aptitude} height="40px" alt="Aptitude" />
            </div>
            &nbsp;&nbsp;
            <div>
              <Typography style={{ fontWeight: 700, paddingTop: "10px" }}>
                Aptitude
              </Typography>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="TotalBox">{renderBoxes()}</div>
      <div className="BtnBox">
        <NavLink to={`/addnonnursing/${sno}`}>
          <button className="Btn">Upload Questions</button>
        </NavLink>
      </div>
    </div>
  );
}
