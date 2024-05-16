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
import { PATH } from '../../constants/routeConstants';
import CustomBreadCrumbs from '../../components/Common/CustomBreadcrumbs';

export default function YearMCQ() {
  const BreadcrumbItems = [
    { label: "Dashboard", path: PATH.DASHBOARD },
    
    { label: "YearMCQ", path: PATH.YEARMCQ },
  ];
  
  return (
    <YEARMCQStyle>
     
    <div className='bodystyle'>
    <div style={{padding:"25px"}}>
    <CustomBreadCrumbs items={BreadcrumbItems} />
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
