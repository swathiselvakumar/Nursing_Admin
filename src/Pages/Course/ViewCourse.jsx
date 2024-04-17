import React, { useEffect, useState } from 'react';
import BreadcrumbsComp from '../../components/Common/BreadCrumbs';
import { Container, Row, Col } from 'react-bootstrap';
import institution from '../../assets/images/vadakk.png';
import { Typography } from '@mui/material';
import Delete from '../../assets/icons/delete.jpeg';
import '../YearMCQ/CardStyle.css';
import { PATH } from '../../constants/routeConstants';
import CustomBreadCrumbs from '../../components/Common/CustomBreadcrumbs';
import Medical from '../../assets/icons/medical.png';
import Axios from 'axios';

export default function ViewCourse() {
  const [courseData, setCourseData] = useState(null);
  const BreadcrumbItems = [
    { label: "Dashboard", path: PATH.DASHBOARD },
    { label: "Course", path: PATH.COURSE },
    { label: "View Course", path: PATH.VIEWCOURSE },
  ];
   const id = 1;

  const ViewCourse = async () => {
    try {
      const res = await Axios.post(
        "https://vebbox.in/Nursing/controllers/api/admin/get/A_ViewCourseContent.php",
        {
          adminId: "nandinivebbox@gmail.com",
          id: id,
        }
      );
      const obj = res.data.map((item) => ({
        name: item.course_name,
        description: item.course_description,
        about: item.course_about,
         sno: item.sno
      }));
      setCourseData(obj);
    } catch (error) {
      console.error("Error fetching course data:", error);
    }
  };

  useEffect(() => {
    ViewCourse(); // Pass id to ViewCourse
  }, []); // Include id in the dependency array

  return (
    <div style={{ backgroundColor: "white", padding: "10px" }}>
      <div style={{ padding: "25px" }}>
        <CustomBreadCrumbs items={BreadcrumbItems} />
      </div>
      <Container fluid style={{ paddingLeft: "27px", paddingRight: "27px" }}>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} className="title1">
            <div>
              <img src={Medical} height="40px" alt="Medical Icon" />
            </div>
            &nbsp;&nbsp;
            <div>
              <Typography style={{ fontWeight: 700, paddingTop: "10px" }}>
                Course Name
              </Typography>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="TotalBox">
        <Container className="MainBox">
          <Row>
            <Col className="Con">
              <Col className="Con">
                <Col className="Con">
                  {courseData ? (
                    courseData.map((data) => (
                      <div key={data.sno} id={data.sno}>
                        {" "}
                        {/* Adding a unique key */}
                        <Typography
                          style={{ fontSize: "16px", fontWeight: 600 }}
                        >
                          {data.name}
                        </Typography>
                        <p
                          style={{
                            fontSize: "12px",
                            fontWeight: 400,
                            textAlign: "justify",
                          }}
                        >
                          {data.description}
                        </p>
                        <div>
                          <Typography
                            style={{
                              fontSize: "16px",
                              fontWeight: 400,
                              paddingBottom: "10px",
                            }}
                          >
                            About this Program
                          </Typography>
                          <Typography
                            style={{
                              fontSize: "14px",
                              fontWeight: 400,
                              paddingBottom: "10px",
                            }}
                          >
                            What will you Learn:
                          </Typography>
                          <p
                            style={{
                              fontSize: "12px",
                              fontWeight: 400,
                              textAlign: "justify",
                            }}
                          >
                            {data.about}
                          </p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p>Loading...</p>
                  )}
                </Col>
              </Col>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
