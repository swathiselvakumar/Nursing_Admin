import React, { useEffect, useState } from "react";
import { getLocalStorage } from "../../utils/helperFunc";
// import { successToaster } from "../../utils/toastify";
import { PATH } from "../../constants/routeConstants";
import CustomBreadCrumbs from "../../components/Common/CustomBreadcrumbs";
import { Container, Row, Col } from "react-bootstrap";
import Medical from "../../assets/icons/medical.png";
import { IconButton, Typography } from "@mui/material";
import Plus from "../../assets/icons/plus b.png";
import { NavLink, useNavigate } from "react-router-dom";
import "../YearMCQ/CardStyle.css";
import Delete from "../../assets/icons/delete.jpeg";
import UpdateIcon from "@mui/icons-material/Update";
import Axios from "axios";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { useContext } from "react";
import { navContext } from "../../context/navContext";

export default function Course() {
  const languageName = getLocalStorage("languageName");
  const [courseData, setCourseData] = useState([]);
  const [click, setclick] = useState(false);
  const email = localStorage.getItem("userMail");
  const navigate = useNavigate();
  const {Endpoint}=useContext(navContext);

  const getCourses = async () => {
    try {
      const res = await Axios.post(
        `${Endpoint}admin/get/A_ViewCourseName.php`,
        {
          adminId: email,
        }
      );
      const obj = res.data.map((item) => ({
        img: Medical,
        name: item.course_name,
        path: "/viewcourse",
        sno: item.sno,
      }));
      obj.push({
        img: Plus,
        name: "Add Course",
        path: "/addcourse",
      });
      setCourseData(obj);
    } catch (error) {
      console.error("Error fetching course data:", error);
    }
  };

  const CardDelete = async (sno) => {
    // setclick(true);
    try {
      const res = await Axios.delete(
        `${Endpoint}admin/delete/A_deleteCourse.php`,
        {
          data: {
            courseId: sno,
          },
        }
      );
      getCourses();
      // console.log(sno);
    } catch (error) {
      console.error("Error fetching course data:", error);
    }
  };

  useEffect(() => {
    getCourses();
  }, []);

  const BreadcrumbItems = [
    { label: "Dashboard", path: PATH.DASHBOARD },

    { label: "Courses", path: PATH.COURSE },
  ];
  return (
    <div>
      <div style={{ padding: "20px" }}>
        <CustomBreadCrumbs items={BreadcrumbItems} />
      </div>
      <Container fluid>
        <Typography style={{ fontWeight: 600, fontSize: "20px" }}>
          Our Course
        </Typography>
        <Row style={{ marginTop: "20px", justifyContent: "center" }}>
          {courseData.map((d) => {
            return (
              <>
                {click ? (
                  <Col
                    xs={12}
                    sm={12}
                    md={6}
                    lg={3}
                    xl={3}
                    key={d.sno}
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <div className="Div">
                     {
                      d.name!="Add Course" &&  <div className="del">
                      <NavLink to={`/updatecourse/${d.sno}`}>
                        <UpdateIcon />
                      </NavLink>
                      &nbsp;
                      <Button
                        startIcon={<DeleteIcon />}
                        onClick={() => CardDelete(d.sno)}
                      ></Button>
                    </div> 
                     }
                      <NavLink
                        to={d.path}
                        style={{
                          color: "black",
                          textDecoration: "none",
                        }}
                      >
                        <div style={{display:"flex",justifyContent:"center"}}>
                          <img src={d.img} height="70px" />
                        </div>
                        <div style={{ paddingTop: "10px",textAlign:"center" }}>
                          <Typography style={{ fontWeight: 600 }}>
                            {d.name}
                          </Typography>
                        </div>
                      </NavLink>
                    </div>
                  </Col>
                ) : (
                  CardDelete()
                )}
              </>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
