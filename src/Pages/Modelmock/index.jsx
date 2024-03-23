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
import { PATH } from '../../constants/routeConstants';
import CustomBreadCrumbs from '../../components/Common/CustomBreadcrumbs';
export default function ModelMock() {
  const BreadcrumbItems = [
    { label: "Dashboard", path: PATH.DASHBOARD },
    
    { label: "Model Mock", path: PATH.MODELMOCK },
    
  ];
  return (
    <ModelMockStyle >
    <div className='bodystyle'>
      <div style={{padding:"25px"}}>
      <CustomBreadCrumbs items={BreadcrumbItems} />
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
