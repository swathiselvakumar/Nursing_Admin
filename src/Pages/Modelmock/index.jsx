import { Button, Typography } from '@mui/material'
import React from 'react'
import { ModelMockStyle } from './style'
import SearchIcon from '@mui/icons-material/Search';
import { styled} from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Container,Row,Col } from 'react-bootstrap';
import UpdateIcon from '@mui/icons-material/Update';
import ModelMockCard from './Card'
import BreadcrumbsComp from '../../components/Common/BreadCrumbs';
export default function ModelMock() {
  
  return (
    <ModelMockStyle >
    <div className='bodystyle'>
      <div style={{padding:"25px"}}>
        <BreadcrumbsComp/>
      </div>
        <div className='title'>
        <Typography sx={{fontWeight:600,fontSize:"18px"}}>Model_Mock MCQ's</Typography>
        </div>
        
        <div>
          <ModelMockCard/>
        </div>
     
      
    </div>
    </ModelMockStyle >
  )
}
