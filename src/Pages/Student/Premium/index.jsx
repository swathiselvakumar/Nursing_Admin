import { Button, Typography } from '@mui/material'
import React from 'react'
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
export default function Premium() {
  const languageName = getLocalStorage("languageName");

  const BreadcrumbItems = [
    { label: "Dashboard", path: PATH.DASHBOARD },
    
    { label: "Premium List", path: PATH.PREMIUM },
  ];
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "white",
    boxShadow:" rgba(0, 0, 0.15, 0.15) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 3px -3px",
    width:"250px",
    '&:hover': {
      backgroundColor: "white",
    },
   
    
  }));
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 1),
    height: '100%',
    width:"250px",
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 3),
      paddingLeft: `calc(1em + ${theme.spacing(1)})`,
      transition: theme.transitions.create('width'),
     
    },
  }));
 
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const Btn1={backgroundColor:"#fefbe9",width:"200px",fontWeight:"bold",color:"black",textTransform:"capitalize",boxShadow:" rgba(0, 0, 0.15, 0.15) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 3px -3px"}
  const Btn2={backgroundColor:"white",color:"black",fontWeight:"bold",textTransform:"capitalize",boxShadow:"rgba(0, 0, 0.15, 0.15) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 3px -3px",width:"200px"}
  return (
    < PremiumStyle>
    <div className='bodystyle'>
      <div style={{padding:"25px"}}>
      <CustomBreadCrumbs items={BreadcrumbItems} />
      </div>
        
        <Container fluid style={{marginTop:"20px"}}>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12} xl={12}  className='MainCol'>
            <div className='title'>
        <Typography sx={{fontWeight:"bold",fontSize:"18px"}}>Premium List </Typography>
        </div>
            <div className='search'>
          <Search>
          <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper> 
            <StyledInputBase
             sx={{ fontFamily: "Roboto, sans-serif"}}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
            
          </Search>
          </div>
          
          <div>
                <NavLink to="/unblock">
                <Button style={Btn1}><img src={Block} height="20px"/> &nbsp; Block List</Button>
                </NavLink>
              </div>
              <div>
                <NavLink to="/preadd">
                <Button style={Btn2} onClick={handleClickOpen}><AddCircleOutlineIcon style={{height:"20px"}} />&nbsp; Add Members</Button>
                </NavLink>
              </div>
            </Col>
            
          </Row>
        </Container>
        <div style={{marginTop:"25px",padding:"10px"}}>
          <PremiumTb/>
        </div>
        <div>
        <Pagination count={10} shape="rounded" />
        </div>
        
    </div>
    
    </ PremiumStyle>

    
  )
}
