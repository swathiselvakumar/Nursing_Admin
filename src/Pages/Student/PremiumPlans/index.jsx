import { Button, Typography, IconButton, Dialog, DialogTitle, DialogContent } from '@mui/material';
import React, { useEffect, useState, useContext } from 'react';
import { PremiumPlansStyle } from './style';
import { styled } from '@mui/material/styles';
import { Container, Row, Col } from 'react-bootstrap';
import UpdateIcon from '@mui/icons-material/Update';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Crown from '../../../assets/images/Crown.png';
import Plus from '../../../assets/icons/plus b.png';
import CustomBreadCrumbs from '../../../components/Common/CustomBreadcrumbs';
import { PATH } from '../../../constants/routeConstants';
import axios from 'axios';
import { navContext } from '../../../context/navContext';
import { NavLink, useNavigate } from 'react-router-dom'; // Import useNavigate

export default function PremiumPlans() {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const [open, setOpen] = useState(false);
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const email = localStorage.getItem("userMail");
  const { Endpoint } = useContext(navContext);

  const handleDelete = async (planId) => {
    try {
      const response = await axios.post(
        `${Endpoint}admin/delete/A_deletePlans.php`,
        { planId: planId }
      );
      // Assuming you may want to refetch plans after deletion
      fetchPlans(); // Refetch plans after deletion
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  const fetchPlans = async () => {
    try {
      const response = await axios.post(
        `${Endpoint}admin/get/A_ViewPlans.php`,
        { adminId: email }
      );
      setPlans(response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlans();
  }, [Endpoint, email]);

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

  const BreadcrumbItems = [
    { label: "Dashboard", path: PATH.DASHBOARD },
    { label: "Premium Plans", path: PATH.PREMIUMPLANS },
  ];

  const Update = (planId) => {
    // Navigate to '/updateplan/:planId'
    navigate(`/updateplan/${planId}`);
  };

  return (
    <PremiumPlansStyle>
      <div className='bodystyle'>
        <div style={{ padding: "20px" }}>
          <CustomBreadCrumbs items={BreadcrumbItems} />
        </div>
        <div>
          <Container fluid>
            <Row>
              <Col xs={12} sm={12} md={5} lg={6} xl={6} className='MainCol1'>
                <div className='title'>
                  <Typography sx={{ fontWeight: 600, fontSize: "18px" }}>Premium Plans &nbsp;<img src={Crown} height="20px" alt="Crown" /></Typography>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div style={{ padding: "20px" }}>
          <Container className='mainContainer'>
            <Row style={{ display: "flex", justifyContent: "space-around" }}>
              {Array.isArray(plans) && plans.map((plan, index) => (
                <Col key={plan.id} xs={12} sm={12} md={6} lg={3} xl={3}>
                  <div className="item" style={{ width: "230px" }}>
                    <div className="icons">
                      <IconButton aria-label="edit" size="small">
                        <UpdateIcon onClick={() => Update(plan.id)} />
                      </IconButton>
                      <IconButton aria-label="delete" size="small">
                        <DeleteOutlineIcon onClick={() => handleDelete(plan.id)} />
                      </IconButton>
                    </div>
                    <div className="innerContent">
                      <Typography style={{ fontWeight: "bold" }}>{plan.title}</Typography>
                    </div>
                    
                    <div style={{ padding: "5px" }}>
                      <Typography style={{ fontSize: "26px", paddingBottom: "10px", paddingTop:"20px" }}>${plan.amount}</Typography>
                      <Typography style={{ fontSize: "15px", paddingBottom: "10px"}}>{plan.duration} Months</Typography>
                      <ul style={{ paddingBottom: "10px",textAlign:"left" }}>
                        {plan.description.split(',').map((desc, idx) => (
                          <li key={idx}>{desc.trim()}</li>
                        ))}
                      </ul>
                    </div>
                   
                  </div>
                </Col>
              ))}
              <Col xs={12} sm={12} md={6} lg={3} xl={3}>
                <NavLink to="/addpremiumplan">
                  <div className='Div'>
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

      <style jsx>{`
        .item {
          position: relative;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 8px;
          transition: box-shadow 0.3s ease;
        }
        .item:hover {
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .icons {
          position: absolute;
          display: none;
          width: 100%;
          justify-content: space-between;
        }
        .item:hover .icons {
          display: flex;
        }
      `}</style>
    </PremiumPlansStyle>
  );
}
