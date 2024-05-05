
import React, { useEffect, useState } from 'react';
import { getLocalStorage } from '../../utils/helperFunc';
import { PATH } from '../../constants/routeConstants';
import CustomBreadCrumbs from '../../components/Common/CustomBreadcrumbs';
import { Container, Row, Col } from 'react-bootstrap';
import Awards from '../../assets/images/awards.png';
import { Typography } from '@mui/material';
import Plus from '../../assets/icons/plus b.png';
import { NavLink } from 'react-router-dom';
import Delete from '../../assets/icons/delete.jpeg';
import UpdateIcon from '@mui/icons-material/Update';
import Update from './Update'; // Import Update component
import { useNavigate } from 'react-router-dom';
import  Axios  from 'axios';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Achievement() {
  const [courseData,setCourseData]=useState([]);
  const email=localStorage.getItem("userMail");

  const languageName = getLocalStorage("languageName");
  const Navigate = useNavigate();
  const getCourses = async () => {
    try {
      const res = await Axios.post(
        "https://vebbox.in/Nursing/controllers/api/admin/get/A_ViewAchievement.php",
        {
          adminId:email,
        }
      );
      const obj = res.data.map((item) => ({
        img: Awards,
        name: item.content,
        sno:item.sno
      }));
      obj.push({
        img: Plus,
        name: "Add Achievement",
        path: "/addachievement",
      });
      setCourseData(obj);
    } catch (error) {
      console.error("Error fetching course data:", error);
    }
  };

  const CardDelete = async (sno) => {
    try {
      
      const res = await Axios.delete(
        "https://vebbox.in/Nursing/controllers/api/admin/delete/A_deleteAchievements.php",
        {
          data: {
            achievementId: sno,
          },
        }
      );
      getCourses();
      console.log(sno);
    } catch (error) {
      console.error("Error fetching course data:", error);
    }
  };

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <div>
      <div style={{ padding: "20px" }}>
        <CustomBreadCrumbs
          items={[
            { label: "Dashboard", path: PATH.DASHBOARD },
            { label: "Achievement", path: PATH.ACHIEVEMENT },
          ]}
        />
      </div>
      <Container fluid>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography style={{ fontWeight: 600, fontSize: "20px" }}>
            Achievement and Awards
          </Typography>
         
        </div>
        <Row style={{ marginTop: "20px", justifyContent: "center" }}>
          <Row style={{ marginTop: "20px", justifyContent: "center" }}>
            {courseData ? (
              courseData.map((d, index) => (
                <Col
                  key={index}
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
                  <NavLink
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <div className="Div">
                   
                      {
                        d.name!="Add Achievement" && <div className="del">
                        <NavLink to={`/Update/${d.sno}`}>
                        <UpdateIcon  />
                        </NavLink>
                        &nbsp;
                        <Button  startIcon={<DeleteIcon />} onClick={()=>CardDelete(d.sno)}></Button>
                      </div>
                      }
                      <div>
                        <img src={d.img} height="70px" alt="Awards" />
                      </div>
                      <div style={{ paddingTop: "10px" }}>
                        <Typography style={{ fontWeight: 600 }}>
                          {d.name}
                        </Typography>
                      </div>
                    </div>
                  </NavLink>
                </Col>
              ))
            ) : (
              <p>Loading...</p>
            )}
          </Row>
        </Row>
      </Container>
    </div>
  );
}

