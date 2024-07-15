import { Button, Typography } from "@mui/material";
import React, { useEffect, useState,useContext } from "react";
import { StandardStyle } from "./style";
import { Container, Row, Col } from "react-bootstrap";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import StdTb from "../../StudentTable/StdTb";
import Pagination from "@mui/material/Pagination";
import Block from "../../../assets/icons/block.png";
import { NavLink } from "react-router-dom";
import CustomBreadCrumbs from "../../../components/Common/CustomBreadcrumbs";
import { PATH } from "../../../constants/routeConstants";
import SearchAppBar from "../../../components/Common/Searchinput/Search";
import axios from "axios";
import { navContext } from "../../../context/navContext";

export default function Standard() {

  const BreadcrumbItems = [
    { label: "Dashboard", path: PATH.DASHBOARD },
    { label: "Standard List", path: PATH.STANDARD },
  ];
  const email = localStorage.getItem("userMail");
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(""); // State variable to store search input
  const [tableData, setTableData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [stdId, setStdId] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [update, setUpdate] = useState(false);
  const {Endpoint}=useContext(navContext);
  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage, update]); 

  const handleChange1 = (event, value) => {
    setCurrentPage(value);
  };

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
    setSearch(event.target.value);
    try {
      const response = await axios.post(
      `${Endpoint}admin/get/A_filterSearchStd.php`,
        {
          adminId: email,
          searchData: event.target.value,
          accountType: "standard",
          status: "1"
        }
      );

      const newData = response.data.map((item, i) =>
        createData(Number(i + 1), item.username, item.email, item.date_of_enrollment)
      );
      setLoaded(true);
      setTableData(newData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchData = async (page) => {
    try {
      const response = await axios.post(
        `${Endpoint}admin/get/A_ViewUnblockStandard.php?page=${page}`,
        {
          adminId: email,
        }
      );
      setLoaded(true);
      const itemsPerPageFirstPage = 50;
      const itemsPerPageOtherPages = 10;
      
      let sno; 
      if (currentPage === 1) {
          sno = 1;
      } else {
          sno = itemsPerPageFirstPage + (currentPage - 2) * itemsPerPageOtherPages + 1;
      }

      const newData = response.data.map((item, i) =>
        createData(sno++, item.username, item.email, item.date_of_enrollment)
      );

      setTableData(newData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const pagination = async () => {
    try {
      const response = await axios.post(
        `${Endpoint}admin/get/A_UnblockStandardPagination.php`, {
          adminId: email
        }
      );

      setLoaded(true);

      // const { totalPages } = response.data;
      setTotalPages(response.data || []);
      console.log(totalPages);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    pagination();
  }, []);

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
              <StdTb tableData={tableData} updateStudentId={setStdId} setUpdate={setUpdate} update={update} />
            </div>
            <div>
              {loaded && (
                <Pagination
                  count={totalPages.pages}
                  page={currentPage}
                  onChange={handleChange1}
                  shape="rounded"
                />
              )}
            </div>
          </div> : <p>Loading</p>
      }

    </StandardStyle>
  );
}
