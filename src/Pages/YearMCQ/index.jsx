import { Button, Typography } from '@mui/material'
import React from 'react'
import { YEARMCQStyle } from './style'
import SearchIcon from '@mui/icons-material/Search';
import { styled} from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Container,Row,Col } from 'react-bootstrap';
import UpdateIcon from '@mui/icons-material/Update';
import YearCard from './Card';
import BreadcrumbsComp from '../../components/Common/BreadCrumbs';

export default function YearMCQ() {
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
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
     
    },
  }));
  return (
    <YEARMCQStyle>
     
    <div className='bodystyle'>
    <div style={{padding:"25px"}}>
        <BreadcrumbsComp/>
      </div>
        <div className='title'> 
        <Typography sx={{fontWeight:600,fontSize:"18px"}}>Previous Year MCQ's</Typography>
        </div>
        
        <div>
          <YearCard/>
        </div>
     
      
    </div>
    </YEARMCQStyle>
  )
}
