import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import { PremiumStyle } from './style';
import SearchIcon from '@mui/icons-material/Search';
import { styled} from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Container,Row,Col } from 'react-bootstrap';
import UpdateIcon from '@mui/icons-material/Update';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { NavLink } from 'react-router-dom';
import PremiumTb from './premiumTable';
import Dialog from '@mui/material/Dialog';
import BreadcrumbsComp from '../../../components/Common/BreadCrumbs';
import Pagination from '@mui/material/Pagination';
import Block from '../../../assets/icons/block.png'
import { PATH } from '../../../constants/routeConstants';
import CustomBreadCrumbs from '../../../components/Common/CustomBreadcrumbs';
import { getLocalStorage } from '../../../utils/helperFunc';
import SearchAppBar from '../../../components/Common/Searchinput/Search';
import axios from 'axios';
import { Value } from 'sass';
import { useEffect } from "react";
export default function Premium() {
  const languageName = getLocalStorage("languageName");

  const BreadcrumbItems = [
    { label: "Dashboard", path: PATH.DASHBOARD },
    
    { label: "Premium List", path: PATH.PREMIUM },
  ];
  function createData(sno, sname, email, memberSince, expireddate) {
    return { sno, sname, email, memberSince, expireddate };
  }
 
  const [open, setOpen] = React.useState(false);
 const [search, setSearch] = useState("");
 const [searchData,setsearchdata]=useState([]);
 const [tableData, setTableData] = useState([]);
 const [currentPage, setCurrentPage] = useState(1);
 const [totalPages, setTotalPages] = useState(1);
 const [loaded, setLoaded] = useState(false);
 const [stdId,setStdId]=useState(null);
 const [load,setLoad]=useState(false);
 console.log("stdId",stdId);

 useEffect(() => {
  fetchData(currentPage);
}, [currentPage, load]);

const handleChange1 = (event, value) => {
  setCurrentPage(value);
};
 const email=localStorage.getItem("userMail");
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = async (event) => {
    setSearch(event.target.value);
    try {
      const response = await axios.post(
        'http://localhost/_Nursing_final/controllers/api/admin/get/A_filterSearchStd.php',
        {
          adminId: email,
          searchData: event.target.value,
          accountType: "premium",
          status: "1"
        }
      );
      
  
      // Log the response to debug
      console.log("API response:", response.data);
  
      // Check if response data is an array
      if (Array.isArray(response.data)) {
        const newData = response.data.map((item, i) =>
          createData(
            Number(i + 1),
            item.username,
            item.email,
            item.plan_join_date,
            item.plan_expiry_date
          )
        );
        setLoad(true);
        setTableData(newData);
      } else {
        console.error("Expected an array but got:", response.data);
        setTableData([]);
      }
    } catch (error) {
      console.error("search datas not found:", error);
    }
  };
  
   const fetchData = async (page) => {
      try {
        const response = await axios.post(
          `https://vebbox.in/Nursing/controllers/api/admin/get/A_ViewUnblockPremium.php?page=${page}`,
          {
            adminId:email,
          }
        );
        setLoad(true);
        const unblockedData = response.data.filter(
          (item) => item.status === 1
        );
        const newData = unblockedData.map((item,i) =>
          createData(
            Number(i+1),
            item.username,
            item.email,
            item.plan_join_date,
            item.plan_expiry_date
          )
        );
  
        setTableData(newData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const pagination = async () => {
      try {
        const response = await axios.post(
          `http://localhost/_Nursing_final/controllers/api/admin/get/A_UnblockPremiumPagination.php`,
          {
            adminId: email
          }
        );
        setLoaded(true);
  
        const { data, totalPages } = response.data;
        setTableData(data);
        setTotalPages(totalPages);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
  
  useEffect(()=>{
    pagination();
  },[loaded])
   
   

  const Btn1={backgroundColor:"#fefbe9",width:"200px",fontWeight:"bold",color:"black",textTransform:"capitalize",boxShadow:" rgba(0, 0, 0.15, 0.15) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 3px -3px"}
  const Btn2={backgroundColor:"white",color:"black",fontWeight:"bold",textTransform:"capitalize",boxShadow:"rgba(0, 0, 0.15, 0.15) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 3px -3px",width:"200px"}
  return (
    <PremiumStyle>
     
        {
          load ? <div className="bodystyle">
          <div style={{ padding: "25px" }}>
            <CustomBreadCrumbs items={BreadcrumbItems} />
          </div>
  
          <Container fluid style={{ marginTop: "20px" }}>
            <Row>
              <Col xs={12} sm={12} md={12} lg={12} xl={12} className="MainCol">
                <div className="title">
                  <Typography sx={{ fontWeight: "bold", fontSize: "18px" }}>
                    Premium List{" "}
                  </Typography>
                </div>
                <div className="search">
                  <SearchAppBar onChange={handleChange} value={search} />
                </div>
  
                <div>
                  <NavLink to="/blocktablepre">
                    <Button style={Btn1}>
                      <img src={Block} height="20px" /> &nbsp; Block List
                    </Button>
                  </NavLink>
                </div>
                <div>
                  <NavLink to="/preadd">
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
            <PremiumTb tableData={tableData} updateStudentId={setStdId}setLoaded={setLoaded} loaded={loaded}/>
          </div>
          <div>
          {load && (
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handleChange1}
            shape="rounded"
          />
        )}
          </div>
        </div> : <p>Loading</p>
        }
      
    </PremiumStyle>
  );
}
