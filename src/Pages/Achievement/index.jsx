
import React, { useEffect, useState,useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Awards from '../../assets/images/awards.png';
import Plus from '../../assets/icons/plus b.png';
import Axios from 'axios';
import { Typography } from '@mui/material';
import UpdateIcon from '@mui/icons-material/Update';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { PATH } from '../../constants/routeConstants';
import CustomBreadCrumbs from '../../components/Common/CustomBreadcrumbs';
import { navContext } from '../../context/navContext';
export default function Achievement() {
  const [courseData, setCourseData] = useState([]);
  const email = localStorage.getItem("userMail");
  const { Endpoint } = useContext(navContext);
  const getCourses = async () => { 
    try {
      const res = await Axios.post(
        `${Endpoint}admin/get/A_ViewAchievement.php`,
        {
          adminId: email,
        }
      );
      console.log(res.data);
      const obj = res.data.map((item) => ({
        img: `https://vebbox.in/Nursing_Check/controllers/api/admin/upload/${item.img}`,
        name: item.content, 
        sno: item.sno
      }));

      setCourseData(obj);
    } catch (error) {
      console.error("Error fetching course data:", error);
    }
  };

  const CardDelete = async (sno) => {
    try {
      await Axios.delete(
        `${Endpoint}admin/delete/A_deleteAchievements.php`,
        {
          data: {
            achievementId: sno,
          },
        }
      );
      
      // Remove the deleted card from the courseData state
      setCourseData(courseData.filter(item => item.sno !== sno));
    } catch (error) {
      console.error("Error deleting achievement:", error);
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
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography style={{ fontWeight: 600, fontSize: '20px' }}>
            Achievement and Awards
          </Typography>
        </div>
        <Row style={{ marginTop: '20px', justifyContent: 'center' }}>
          <Col xs={4} className='order-last'>
            <NavLink to="/addachievement" style={{ color: 'black', textDecoration: 'none' }}>
              <div className="Div" style={{ height: '200px', width: '320px' }}>
                <div>
                  <img src={Plus} height="70px" alt="Awards" />
                </div>
                <div style={{ paddingTop: '10px' }}>
                  <Typography style={{ fontWeight: 600 }}>Add Achievement</Typography>
                </div>
              </div>
            </NavLink>
          </Col>
          {courseData.map((d, index) => (
            <Col
              key={index}
              xs={12}
              sm={12}
              md={6}
              lg={3}
              xl={3}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '20px',
              }}
            >
              <NavLink to={d.path} style={{ color: 'black', textDecoration: 'none' }}>
                <div className="Div d-flex flex-column p-3 service-div shadow w-100 h-100">
                  <div className="del">
                    <NavLink to={`/Update/${d.sno}`}>
                      <UpdateIcon />
                    </NavLink>
                    &nbsp;
                    <Button startIcon={<DeleteIcon />} onClick={() => CardDelete(d.sno)}></Button>
                  </div>
                  <div>
                    <img src={d.img} height="70px" alt="Awards" />
                  </div>
                  <div style={{ paddingTop: '10px' }}>
                    <Typography style={{ fontWeight: 600, textAlign: 'justify' }}>
                      {d.name}
                    </Typography>
                  </div>
                </div>
              </NavLink>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
