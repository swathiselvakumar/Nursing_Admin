import { Button, Typography } from "@mui/material";
import React, { useState,useEffect } from "react";
import { PremiumStyle } from "../Student/Premium/style";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { Container, Row, Col } from "react-bootstrap";
import UpdateIcon from "@mui/icons-material/Update";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { NavLink } from "react-router-dom";
// import PremiumTb from './premiumTable';
import Dialog from "@mui/material/Dialog";
// import BreadcrumbsComp from '../../../components/Common/BreadCrumbs';
import Pagination from "@mui/material/Pagination";
import Block from "../../assets/icons/block.png"; 
import { PATH } from "../../constants/routeConstants";
import CustomBreadCrumbs from "../../components/Common/CustomBreadcrumbs";
import { getLocalStorage } from "../../utils/helperFunc";
import Mcqnursetable from "./Mcqnursetable";
import SearchAppBar from "../../components/Common/Searchinput/Search";
import { useParams } from "react-router-dom";
import axios from "axios";
export default function Mcqnursingtable() {
  const languageName = getLocalStorage("languageName");
  const { sno } = useParams();
  const { id } = useParams();
  const BreadcrumbItems = [
    { label: "Dashboard", path: PATH.DASHBOARD },

    { label: "Non nursing", path: PATH.NONNURSING },
    { label: "Institution", path: PATH.NONINSTITUTION },
    { label: "2022 Model MCQ ", path: PATH.NONNURSINGMCQ },
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
const email=localStorage.getItem("userMail");


  useEffect(() => {
    fetchTestDetails();
  }, []);
  
  const fetchTestDetails = async () => {
    try {
      const res = await axios.post(
        "http://localhost/_Nursing_final/controllers/api/admin/get/A_NonNursing_testDetails.php",
        {
          adminId:email,
          categoryId:sno,
          paperId:id
        }
      );
      // const newData = res.data.map((item,i) =>
      //   createData(Number(i+1), item.student_name, item.total_count, item.correct_count,item.test_date)
      // );
      setdata(res.data);
    } catch (error) {
      console.error("Error adding new item:", error);
    }
  };
  


  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
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
          <Mcqnursetable datas={datas}/>
        </div>
        <div>
          <Pagination count={10} shape="rounded" />
        </div>
      </div>
    </PremiumStyle>
  );
}
