import { Button, Typography } from '@mui/material';
import React, { useEffect, useState, useContext } from 'react';
import { PremiumPlansStyle } from './style';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Container, Row, Col } from 'react-bootstrap';
import UpdateIcon from '@mui/icons-material/Update';
import { NavLink } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Crown from '../../../assets/images/Crown.png';
import Plus from '../../../assets/icons/plus b.png';
import BreadcrumbsComp from '../../../components/Common/BreadCrumbs';
import { PATH } from '../../../constants/routeConstants';
import CustomBreadCrumbs from '../../../components/Common/CustomBreadcrumbs';
import { getLocalStorage } from '../../../utils/helperFunc';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import { navContext } from '../../../context/navContext';
import Rong from '../../../assets/icons/rong.jpg'
import Tick from "../../../assets/icons/tick.png";

export default function PremiumPlans() {
  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
      width: "400px"
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(2),
    },
  }));
  const [open, setOpen] = useState(false);
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null); // Track the selected plan for view

  const email = localStorage.getItem("userMail");
  const { Endpoint } = useContext(navContext);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await axios.post(
          `${Endpoint}admin/get/A_ViewPlans.php`,
          {
            adminId: email
          }
        );
        setPlans(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchPlans();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleViewPlan = (plan) => {
    setSelectedPlan(plan);
  };

  const BreadcrumbItems = [
    { label: "Dashboard", path: PATH.DASHBOARD },
    { label: "Premium Plans", path: PATH.PREMIUMPLANS },
  ];

  const UpdateBtn = {
    backgroundColor: "#e4a45a",
    width: "130px",
    textTransform: "capitalize",
    boxShadow: "rgba(0, 0, 0.15, 0.15) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 3px -3px"
  };

  const DeleteBtn = {
    width: "130px",
    fontWeight: "bold",
    textTransform: "capitalize",
    backgroundColor: "white",
    color: "black",
    boxShadow: "rgba(0, 0, 0.15, 0.15) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 3px -3px"
  };

  const Btn = {
    backgroundColor: "white",
    color: "black",
    border: "1px solid black",
    width: "100px",
    marginTop: "20px"
  };

  const Btn1 = {
    backgroundColor: "red",
    color: "white",
    marginLeft: "10px",
    width: "100px",
    marginTop: "20px"
  };

  return (
    <PremiumPlansStyle>
      <div className='bodystyle'>
        <div style={{ padding: "20px" }}>
          <CustomBreadCrumbs items={BreadcrumbItems} />
        </div>
        <div >
          <Container fluid >
            <Row>
              <Col xs={12} sm={12} md={5} lg={6} xl={6} className='MainCol1'>
                <div className='title'>
                  <Typography sx={{ fontWeight: 600, fontSize: "18px" }}>Premium Plans &nbsp;<img src={Crown} height="20px" /></Typography>
                </div>
              </Col>
              <Col xs={12} sm={12} md={7} lg={6} xl={6} className='MainCol'>
                {/* <div>
                  <NavLink to="/updateplan">
                    <Button style={UpdateBtn}><UpdateIcon />&nbsp; Update</Button>
                  </NavLink>
                </div>&nbsp;&nbsp;
                <div>
                  <Button onClick={handleClickOpen} style={DeleteBtn}><DeleteOutlineIcon />&nbsp; Delete</Button>
                </div> */}
              </Col>
            </Row>
          </Container>
        </div>
        <div style={{ padding: "20px", }}>
          <Container className='mainContainer'>
            <Row style={{ display: "flex", justifyContent: "space-around" }}>
              {plans.map((plan, index) => (
                <Col key={index} xs={12} sm={12} md={6} lg={3} xl={3}>
                <div className="item" style={{ width: "260px" }}>
                  <div className="innerContent">
                    <Typography style={{ fontWeight: "bold" }}>{plan.title}</Typography>
                  </div>
                  <div style={{ paddingTop: "30px" }}>
                    <Typography style={{ fontSize: "26px", paddingBottom: "10px" }}>${plan.amount}</Typography>
                  </div>
                  {/* View button now triggers handleViewPlan with the current plan */}
                  <Button onClick={() => handleViewPlan(plan)} style={{marginBottom:"10px"}}>View</Button>
                  {/* Conditional rendering of plan details */}
                  {selectedPlan === plan && (
  <Typography style={{ fontSize: "20px" }}>
  <ul style={{ listStyleType: "none" }}>
    {plan.description.split(',').map((word, index) => (
      word.trim() && (
        <li key={index} style={{ display: 'flex',  lineHeight: '1.5' }}>
          <span style={{ marginRight: '5px', color: 'green' }}>&#10003;</span>
          {word.trim()}
        </li>
      )
    ))}
  </ul>
  <Button>Buy Now</Button>
</Typography>
)}

                </div>
              </Col>
              
              
              ))}
              <Col xs={12} sm={12} md={6} lg={3} xl={3}>
                <NavLink to="/addpremiumplan">
                  <div className='Div' style={{height:"150px"}}>
                    <div>
                      <img src={Plus} height="70px" alt="Add icon" />
                    </div>
                    <div style={{ paddingTop: "10px" }}>
                      <Typography style={{ fontWeight: 600, textDecoration: "none", color: "black" }}>Add</Typography>
                    </div>
                  </div>
                </NavLink>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
     
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">

        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent sx={{ textAlign: "center" }}>
          <img src={Rong} height="25px" style={{ marginTop: "-30px" }} /><br />
          Are You sure ?<br />
          you want to delete this Plan?<br />
          <Button onClick={handleClose} style={Btn}>Cancel</Button>
          <Button onClick={handleClose} style={Btn1}>Delete</Button>
        </DialogContent>

      </BootstrapDialog>
    </PremiumPlansStyle>
  )
}
