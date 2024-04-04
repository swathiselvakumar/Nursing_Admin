import { Button, Typography } from '@mui/material'
import React from 'react'
import { HybridStyle } from './style'
import SearchIcon from '@mui/icons-material/Search';
import { styled} from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Container,Row,Col } from 'react-bootstrap';
import UpdateIcon from '@mui/icons-material/Update';
import HybridCard from './Card'
import BreadcrumbsComp from '../../components/Common/BreadCrumbs';
import { PATH } from '../../constants/routeConstants';
import CustomBreadCrumbs from '../../components/Common/CustomBreadcrumbs';
export default function Hybrid() {
  const BreadcrumbItems = [
    // { label: "Dashboard", path: PATH.DASHBOARD },
    
    { label: "Hybrid", path: PATH.HYBRID },
    
  ];
  return (
    <HybridStyle>
    <div style={{backgroundColor:"white",height:"90vh"}}>
      <div style={{padding:"25px"}}>
      <CustomBreadCrumbs items={BreadcrumbItems} />
      </div>
        <div className='title'>
        <Typography sx={{fontWeight:600,fontSize:"18px"}}>Hybrid Test</Typography>
        </div>
        
        <div>
          <HybridCard/>
        </div>
     
      
    </div>
    </HybridStyle>
  )
}
