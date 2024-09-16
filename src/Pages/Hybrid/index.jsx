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
export default function Hybrid() {
  
  return (
    <HybridStyle>
    <div style={{backgroundColor:"white",height:"90vh"}}>
      <div style={{padding:"25px"}}>
        <BreadcrumbsComp/>
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
