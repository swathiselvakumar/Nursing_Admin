import { Button, Typography } from '@mui/material'
import React from 'react'
import { HybridStyle } from './style'
import SearchIcon from '@mui/icons-material/Search';
import { styled} from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Container,Row,Col } from 'react-bootstrap';
import UpdateIcon from '@mui/icons-material/Update';
import HybridCard from './Card'
export default function Hybrid() {
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "white",
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
    <HybridStyle>
    <div className='bodystyle'>
        <div className='title'>
        <Typography sx={{fontWeight:600,fontSize:"24px"}}>Hybrid Test</Typography>
        </div>
        <Container style={{marginTop:"20px"}}>
          <Row>
            <Col xs={12} sm={12} md={6} lg={6} xl={6} className='MainCol1'>
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
            <Col xs={12} sm={12} md={6} lg={6} xl={6}  className='MainCol'>
              <div>
                <Button><UpdateIcon/>&nbsp; Update</Button>
              </div>
            </Col>
          </Row>
        </Container>
        <div>
          <HybridCard/>
        </div>
     
      
    </div>
    </HybridStyle>
  )
}
