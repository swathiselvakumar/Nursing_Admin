import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import { navContext } from "../../context/navContext";
import Plus from "../../assets/icons/plus b.png";
export default function YearCard() {
  const [name, setName] = useState([]);
  const email = localStorage.getItem("userMail");
  const { Endpoint } = useContext(navContext);
  const navigate = useNavigate(); // Use useNavigate hook from React Router

  const getCourses = async () => {
    try {
      const res = await axios.post(
        `${Endpoint}admin/get/A_ViewPmcqInstitution.php`,
        {
          adminId: email,
        }
      );
      if (res.data.length > 0) {
        const obj = res.data.map((item) => ({
          img: `https://nursingupdate.in/Nursing/controllers/api/admin/upload/${item.img}`,
          name: item.institution_name,
          path: `/yearinstitution/${item.sno}`,
          sno1: item.sno,
        }));
        obj.push({
          img: Plus,
          name: "Add institution",
          path: "/addmcq",
        });
        setName(obj);
      } else {
        setName([
          {
            img: Plus,
            name: "Add institution",
            path: "/addmcq",
          },
        ]);
      }
    } catch (error) {
      console.error("Error fetching course data:", error);
      setName([
        {
          img: Plus,
          name: "Add institution",
          path: "/addmcq",
        },
      ]);
    }
  };

  const CardDelete = async (sno) => {
    try {
      await axios.delete(
        `${Endpoint}admin/delete/A_deletePMCQInstitution.php`,
        {
          data: {
            adminId: email,
            institutionId: sno,
          },
        }
      );
      getCourses();
    } catch (error) {
      console.error("Error deleting institution:", error);
    }
  };

  useEffect(() => {
    getCourses();
  }, []);

  const handleCardClick = (d) => {
    if (d.name !== "Add institution") {
      navigate(d.path, { state: { institutionName: d.name } });
    } else {
      navigate(d.path);
    }
  };

  return (
    <div>
      <Container fluid>
        <Row style={{ marginTop: "20px", justifyContent: "center" }}>
          {name.map((d) => (
            <Col
              key={d.sno1 || d.name}
              xs={12}
              sm={12}
              md={6}
              lg={3}
              xl={3}
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <div className="Div">
                {d.name !== "Add institution" && (
                  <button
                    onClick={() => CardDelete(d.sno1)}
                    className="del"
                    style={{ border: "none", backgroundColor: "white" }}
                  >
                    <DeleteIcon />
                  </button>
                )}
                <div
                  onClick={() => handleCardClick(d)}
                  style={{ color: "black", textDecoration: "none", cursor: "pointer" }}
                >
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <img src={d.img} alt="institution" height="70px" />
                  </div>
                  <div style={{ paddingTop: "10px", textAlign: "center" }}>
                    <Typography style={{ fontWeight: 600 }}>{d.name}</Typography>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
