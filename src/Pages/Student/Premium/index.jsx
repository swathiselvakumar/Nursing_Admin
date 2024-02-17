import { Button, Typography } from '@mui/material'
import React from 'react'
import { PremiumStyle } from './style';
import SearchIcon from '@mui/icons-material/Search';
import { styled} from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Container,Row,Col } from 'react-bootstrap';
import UpdateIcon from '@mui/icons-material/Update';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
export default function Premium() {
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
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
     
    },
  }));
  return (
    < PremiumStyle>
    <div className='bodystyle'>
        <div className='title'>
        <Typography sx={{fontWeight:600,fontSize:"24px"}}>Premium </Typography>
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
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          </div>
            </Col>
            <Col xs={12} sm={12} md={7} lg={6} xl={6} className='MainCol'>
              <div>
                <Button ><UpdateIcon/>&nbsp; Update</Button>
              </div>&nbsp;&nbsp;
              <div>
                <Button style={{backgroundColor:"white",color:"black"}}><AddCircleOutlineIcon />&nbsp; Add Members</Button>
              </div>
            </Col>
          </Row>
        </Container>
        
    </div>
    </ PremiumStyle>
  )
}
