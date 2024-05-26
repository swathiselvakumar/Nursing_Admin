import { Button, Typography } from "@mui/material";
import React, { useState,useEffect,useContext } from "react";
import { PremiumStyle } from "../Student/Premium/style";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { Container, Row, Col } from "react-bootstrap";
import UpdateIcon from "@mui/icons-material/Update";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { NavLink, useParams } from "react-router-dom";
// import PremiumTb from './premiumTable';
import Dialog from "@mui/material/Dialog";
// import BreadcrumbsComp from '../../../components/Common/BreadCrumbs';
import Pagination from "@mui/material/Pagination";
import Block from "../../assets/icons/block.png";
import { PATH } from "../../constants/routeConstants";
import CustomBreadCrumbs from "../../components/Common/CustomBreadcrumbs";
import { getLocalStorage } from "../../utils/helperFunc";
// import Mcqnursetable from "./Mcqnursetable";
import SearchAppBar from "../../components/Common/Searchinput/Search";
import Mocktable from "./Mocktable";
import axios from "axios";
import { navContext } from "../../context/navContext";
// import { useParams } from "react-router-dom";
export default function Mocktablepage() {
  const languageName = getLocalStorage("languageName");
  const {sno}=useParams();
  const {id}=useParams();
  const {stageno}=useParams();
  const {Endpoint}=useContext(navContext);
const email=localStorage.getItem("userMail");

  const BreadcrumbItems = [
    { label: "Dashboard", path: PATH.DASHBOARD }, 
 
    { label: "Model mock", path: PATH.MODELMOCK },
    { label: "Institution", path: PATH.MODELINSTITUTION },
    // { label: "stage1", path: PATH.MODELINSTITUTION },

    { label: "2022 Model MCQ ", path: PATH.MOCKTABLEPAGE },
  ];
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "white",
    boxShadow:
      " rgba(0, 0, 0.15, 0.15) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 3px -3px",
    width: "250px",
    "&:hover": {
      backgroundColor: "white",
    },
  }));
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 1),
    height: "100%",
    width: "250px",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 3),
      paddingLeft: `calc(1em + ${theme.spacing(1)})`,
      transition: theme.transitions.create("width"),
    },
  }));
  const MainCol = {
    display: "flex",
    justifyContent: "space-between",
    //    backgroundColor:"green"
  };

  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = useState("");
  const [datas,setdata]=useState([]);
  const [loaded, setLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    fetchTestDetails(currentPage);
  }, [currentPage, loaded]);
  
  const handleChange1 = (event, value) => {
    setCurrentPage(value);
  };
  
  const fetchTestDetails = async (page) => {
    try {
      const res = await axios.post(
        `${Endpoint}admin/get/A_ModelMock_testDetails.php?page=${page}`,
        {
          adminId:email,
          institutionId:sno,
          stageId:stageno,
          mcqId:id
        }
      );
     
      setdata(res.data);
    } catch (error) {
      console.error("Error adding new item:", error);
    }
  };

  const pagination = async () => {
    try {
      const response = await axios.post(
        `${Endpoint}admin/get/A_ModelMockPagination.php`, {
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
  

  const handleChange = (event) => {
    const { value } = event.target;
    setSearch(value);
    console.log("Search input:", value); // Log the search input value
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
  return (
    <PremiumStyle>
      <div className="bodystyle">
        <div style={{ padding: "25px" }}>
          <CustomBreadCrumbs items={BreadcrumbItems} />
        </div>

        <Container fluid>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12} xl={12} style={MainCol}>
              <div className="title">
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "18px",
                    paddingTop: "20px",
                  }}
                >
                  2022 Model MCQ
                </Typography>
              </div>
              {/* <div className="search">
                <SearchAppBar value={search} onChange={handleChange} />
              </div> */}
            </Col>
          </Row>
        </Container>
        <div style={{ marginTop: "20px", padding: "10px" }}>
          <Mocktable datas={datas} currentPage={currentPage}/>
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
      </div>
    </PremiumStyle>
  );
}
