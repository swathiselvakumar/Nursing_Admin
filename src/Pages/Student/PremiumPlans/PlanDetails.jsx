import { Button, Typography } from '@mui/material'
import React from 'react'
import { PlansStyle } from './planstyle';
import SearchIcon from '@mui/icons-material/Search';
import { styled} from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Container,Row,Col } from 'react-bootstrap';
import UpdateIcon from '@mui/icons-material/Update';
import { NavLink } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Crown from '../../../assets/images/Crown.png'
import Plus from '../../../assets/icons/plus b.png'
import Tick from '../../../assets/icons/tick.png'
export default function PlanDetails() {
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "white",
    width:"350px",
    '&:hover': {
      backgroundColor: "white",
    },
   
    
  }));
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    // width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
     
    },
  }));
  return (
    < PlansStyle >
    <div className='bodystyle'>
        <div className='title'>
        <Typography sx={{fontWeight:600,fontSize:"24px",}}>Premium Plans &nbsp;<img src={Crown} height="20px"/></Typography>
        </div>
        <Container fluid style={{marginTop:"20px"}}>
          <Row>
            <Col xs={12} sm={12} md={5} lg={6} xl={6}  className='MainCol1'>
            <div className='search'>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
            sx={{fontFamily: "Roboto, sans-serif"}}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          </div>
            </Col>
            <Col xs={12} sm={12} md={7} lg={6} xl={6} className='MainCol'>
              <div>
                <Button style={{backgroundColor:"#F0A04b",width:"130px",fontWeight:"bold",textTransform:"capitalize"}}><UpdateIcon/>&nbsp; Update</Button>
              </div>&nbsp;&nbsp;
              <div>
                <Button style={{width:"130px",fontWeight:"bold",textTransform:"capitalize"}}><DeleteOutlineIcon />&nbsp; Delete</Button>
              </div>
            </Col>
          </Row>
        </Container>
        <div style={{padding:"10px",marginTop:"30px"}}>
        <Container  className='mainContainer'>
        <Row style={{display:"flex",justifyContent:"space-around"}}>
       
              <Col xs={12} sm={12} md={6} lg={3} xl={3}>
                <div  className="item">
                  <div className="innerContent">
                    <Typography>$ 1999/Per Month</Typography>
                  </div>
                  <div style={{ padding: "10px" }}>
                    <Typography style={{marginTop:"20px"}}>1 month plan for course</Typography>
                    <Typography style={{fontSize:"26px"}}>
                    <ul className='ulstyle' >
                        <li><img src={Tick}/>&nbsp;Lorem ipsum</li>
                        <li><img src={Tick}/>&nbsp;Lorem ipsum</li>
                        <li><img src={Tick}/>&nbsp;Lorem ipsum</li>
                        <li><img src={Tick}/>&nbsp;Lorem ipsum</li>
                        <li><img src={Tick}/>&nbsp;Lorem ipsum</li>
                    </ul>
                    </Typography>
                  </div>
                  
                  
                </div>
              </Col>
              
              <Col xs={12} sm={12} md={6} lg={3} xl={3}>
                <div  className="item">
                  <div className="innerContent">
                    <Typography>$ 1999/3 Month</Typography>
                  </div>
                  <div style={{ padding: "10px" }}>
                    <Typography style={{marginTop:"20px"}}>1 month plan for course</Typography>
                    <Typography style={{fontSize:"26px"}}>
                    <ul className='ulstyle'>
                        <li><img src={Tick}/>&nbsp;Lorem ipsum</li>
                        <li><img src={Tick}/>&nbsp;Lorem ipsum</li>
                        <li><img src={Tick}/>&nbsp;Lorem ipsum</li>
                        <li><img src={Tick}/>&nbsp;Lorem ipsum</li>
                        <li><img src={Tick}/>&nbsp;Lorem ipsum</li>
                    </ul>
                    </Typography>
                  </div>
                 
                  
                </div>
              </Col>
              <Col xs={12} sm={12} md={6} lg={3} xl={3}>
                <div  className="item">
                  <div className="innerContent">
                    <Typography>$ 1999/6 Month</Typography>
                  </div>
                  <div style={{ padding: "10px" }}>
                    <Typography style={{marginTop:"20px"}}>1 month plan for course</Typography>
                    <Typography style={{fontSize:"26px"}}>
                    <ul className='ulstyle'>
                        <li><img src={Tick}/>&nbsp;Lorem ipsum</li>
                        <li><img src={Tick}/>&nbsp;Lorem ipsum</li>
                        <li><img src={Tick}/>&nbsp;Lorem ipsum</li>
                        <li><img src={Tick}/>&nbsp;Lorem ipsum</li>
                        <li><img src={Tick}/>&nbsp;Lorem ipsum</li>
                    </ul>
                    </Typography>
                  </div>
                 
                  
                </div>
              </Col>
              <Col xs={12} sm={12} md={6} lg={3} xl={3}>
                <div  className="item">
                  <div className="innerContent">
                    <Typography>$ 1999/1 Year</Typography>
                  </div>
                  <div style={{ padding: "10px" }}>
                    <Typography style={{marginTop:"20px"}}>1 month plan for course</Typography>
                    <Typography style={{fontSize:"26px"}}>
                    <ul className='ulstyle'>
                        <li><img src={Tick}/>&nbsp;Lorem ipsum</li>
                        <li><img src={Tick}/>&nbsp;Lorem ipsum</li>
                        <li><img src={Tick}/>&nbsp;Lorem ipsum</li>
                        <li><img src={Tick}/>&nbsp;Lorem ipsum</li>
                        <li><img src={Tick}/>&nbsp;Lorem ipsum</li>
                    </ul>
                    </Typography>
                  </div>
                  
                  
                </div>
              </Col>
              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
              <div className='Div'>
                        <div>
                            <img src={Plus} height="70px"/>
                        </div>
                        <div style={{paddingTop:"10px"}}>
                            <Typography style={{fontWeight:600}}>Add</Typography>
                        </div>
                    </div>
              </Col>
        </Row>
    </Container>
        </div>
    </div>
    </ PlansStyle >
  )
}
