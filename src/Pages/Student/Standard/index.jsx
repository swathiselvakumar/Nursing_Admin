import { Button, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { StandardStyle } from "./style";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { Container, Row, Col } from "react-bootstrap";
import UpdateIcon from "@mui/icons-material/Update";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import StdTb from "../../StudentTable/StdTb";
import Dialog from "@mui/material/Dialog";
import BreadcrumbsComp from "../../../components/Common/BreadCrumbs";
import Pagination from "@mui/material/Pagination";
import Block from "../../../assets/icons/block.png";
import { NavLink } from "react-router-dom";
import CustomBreadCrumbs from "../../../components/Common/CustomBreadcrumbs";
import { getLocalStorage } from "../../../utils/helperFunc";
import { PATH } from "../../../constants/routeConstants";
import SearchAppBar from "../../../components/Common/Searchinput/Search";
import axios from "axios";
import { navContext } from "../../../context/navContext";
export default function Standard() {
  const languageName = getLocalStorage("languageName");

  const BreadcrumbItems = [
    { label: "Dashboard", path: PATH.DASHBOARD },
    { label: "Standard List", path: PATH.STANDARD },
  ];
  const [loaded, setLoaded] = useState(false)
  const email=localStorage.getItem("userMail");
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = useState(""); // State variable to store search input
  const [tableData, setTableData] = useState([]);
  const {index,setindex}=useContext(navContext)
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function createData(sno, sname, email, memberSince) {
    return { sno, sname, email, memberSince };
  }
  

  const handleChange = async (event) => {
    // console.log(event.target.value);
    // const { value } = event.target.value;
    setSearch(event.target.value);
    try {
    
      const response = await axios.post(
        "http://localhost/Nursing/controllers/api/admin/get/A_filterSearchStd.php",
        {
          adminId: email,
          searchData:event.target.value,
          accountType:"standard"
        }
      );
      const blockedData = response.data.filter((item) => item.status === 1);

     const newData = response.data.map((item,i) =>
       createData(Number(i+1), item.username, item.email, item.plan_join_date)
     );

      // console.log(response.data);
      setLoaded(true)
      setTableData(newData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  
  const fetchData = async () => {
    try {
      const response = await axios.post(
        "http://localhost/_Nursing_final/controllers/api/admin/get/A_ViewUnblockStandard.php",
        {
          adminId: email,
        }
      );
      setLoaded(true)
      console.log(response.data);
      // const blockedData = response.data.filter((item) => item.status === 1);

     const newData = response.data.map((item,i) =>
       createData(Number(i+1), item.username, item.email, item.plan_join_date)
     );

      // console.log(newData);

      setTableData(newData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const Btn1 = {
    backgroundColor: "#fefbe9",
    width: "200px",
    fontWeight: "bold",
    color: "black",
    textTransform: "capitalize",
    boxShadow:
      " rgba(0, 0, 0.15, 0.15) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 3px -3px",
  };
  const Btn2 = {
    backgroundColor: "white",
    color: "black",
    fontWeight: "bold",
    textTransform: "capitalize",
    boxShadow:
      "rgba(0, 0, 0.15, 0.15) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 3px -3px",
    width: "200px",
  };
  useEffect(()=>{
    fetchData();
  },[])

  return (
    <StandardStyle>
      {
        loaded ? 
        <div className="bodystyle">
        <div style={{ padding: "25px" }}>
          <CustomBreadCrumbs items={BreadcrumbItems} />
        </div>

        <Container fluid style={{ marginTop: "20px" }}>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12} xl={12} className="MainCol">
              <div className="title">
                <Typography sx={{ fontWeight: "bold", fontSize: "18px" }}>
                  Standard List{" "}
                </Typography>
              </div>
              <div className="search">
                <SearchAppBar onChange={handleChange} value={search} />
              </div>

              <div>
                <NavLink to="/unblock">
                  <Button style={Btn1}>
                    <img src={Block} height="20px" /> &nbsp; Block List
                  </Button>
                </NavLink>
              </div>
              <div>
                <NavLink to="/stadd">
                  <Button style={Btn2} onClick={handleClickOpen}>
                    <AddCircleOutlineIcon style={{ height: "20px" }} />
                    &nbsp; Add Members
                  </Button>
                </NavLink>
              </div>
            </Col>
          </Row>
        </Container>
        <div style={{ marginTop: "25px", padding: "10px" }}>
          {/* <StdTb /> */}
          <StdTb tableData={tableData}   onClick={() => {
                      setindex(index);
                    }}/>
        </div>
        <div>
          <Pagination count={10} shape="rounded" />
        </div>
      </div> : <p>Loading</p>
      }
      
    </StandardStyle>
  );
}
