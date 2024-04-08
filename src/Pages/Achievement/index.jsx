import React, { useState } from 'react'
import {getLocalStorage} from '../../utils/helperFunc'
// import { successToaster } from "../../utils/toastify";
import {PATH} from '../../constants/routeConstants'
import CustomBreadCrumbs from '../../components/Common/CustomBreadcrumbs'
import { Container,Row,Col } from 'react-bootstrap'
import Awards from '../../assets/images/awards.png'
import { Typography } from '@mui/material'
import Plus from '../../assets/icons/plus b.png'
import { NavLink } from 'react-router-dom'
// import {  useHistory } from "react-router-dom"; 
import '../YearMCQ/CardStyle.css'
import Delete from '../../assets/icons/delete.jpeg'
import UpdateIcon from '@mui/icons-material/Update';
import Update from './Update'
import { useNavigate } from 'react-router-dom'

export default function Course() {
  const languageName = getLocalStorage("languageName");
  const Navigate = useNavigate();
  // const history = useHistory(); // Initialize useHistory hook

  // const click = () => {
  //   history.push('/src/Pages/'); // Navigate to the update page
  // };
  const click = () =>{
    Navigate(PATH.UPDATE)
  }
  const datas = [
    {
      img: Awards,
      name: "Name1",
      path: "/viewcourse",
    },
    {
      img: Awards,
      name: "Name2",
      path: "/viewcourse",
    },
    {
      img: Awards,
      name: "Name3",
      path: "/viewcourse",
    },
    {
      img: Awards,
      name: "Name4",
      path: "/viewcourse",
    },
    {
      img: Awards,
      name: "Name5",
      path: "/viewcourse",
    },
    {
      img: Awards,
      name: "Name6",
      path: "/viewcourse",
    },
    {
      img: Awards,
      name: "Name7",
      path: "/viewcourse",
    },
    {
      img: Awards,
      name: "Name8",
      path: "/viewcourse",
    },
    {
      img: Awards,
      name: "Name9",
      path: "/viewcourse",
    },
    {
      img: Awards,
      name: "Name10",
      path: "/viewcourse",
    },
    {
      img: Plus,
      name: "Add Awards",
      path: "/addachievement",
    },
  ];

  const BreadcrumbItems = [
    { label: "Dashboard", path: PATH.DASHBOARD },

    { label: "Achievement", path: PATH.ACHIEVEMENT },
  ];
  const UpdateBtn = {
    backgroundColor: "#e4a45a",
    width: "130px",
    textTransform: "capitalize",
    boxShadow:
      "rgba(0, 0, 0.15, 0.15) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 3px -3px",
    border: "none",
    color: "white",
    borderRadius: "5px",
    height: "30px",
  };
  return (
    <div>
      <div style={{ padding: "20px" }}>
        <CustomBreadCrumbs items={BreadcrumbItems} />
      </div>
      <Container fluid>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography style={{ fontWeight: 600, fontSize: "20px" }}>
            Achievement and Awards
          </Typography>
          <button style={UpdateBtn} onClick={click}>
            <UpdateIcon /> Update
          </button>
        </div>
        <Row style={{ marginTop: "20px", justifyContent: "center" }}>
          {datas.map((d) => {
            return (
              <>
                <Col
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
                    to={d.path}
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <div className="Div">
                      <div className="del">
                        <UpdateIcon />
                        &nbsp;
                        <img src={Delete} />
                      </div>
                      <div>
                        <img src={d.img} height="70px" />
                      </div>
                      <div style={{ paddingTop: "10px" }}>
                        <Typography style={{ fontWeight: 600 }}>
                          {d.name}
                        </Typography>
                      </div>
                    </div>
                  </NavLink>
                </Col>
              </>
            );
          })}
        </Row>
      </Container>
      {/* {showUpdate && <Update onClose={() => setShowUpdate(false)} />} */}
    </div>
  );
}
