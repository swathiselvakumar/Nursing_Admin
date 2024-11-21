import { Button, Typography } from '@mui/material'
import React from 'react'
import { NonNursingMCQStyle } from './style'

import NonNursingCard from './Card'
import BreadcrumbsComp from '../../components/Common/BreadCrumbs';
import CustomBreadCrumbs from '../../components/Common/CustomBreadcrumbs';
import { PATH } from '../../constants/routeConstants';
export default function NonNursingMCQ() {
  const BreadcrumbItems = [
    { label: "Dashboard", path: PATH.DASHBOARD },
    
    { label: "Non Nursing", path: PATH.NONNURSING },
    
  ];
  return (
    <NonNursingMCQStyle >
    <div className='bodystyle'>
      <div style={{padding:"25px"}}>
      <CustomBreadCrumbs items={BreadcrumbItems} />
      </div>
        <div className='title'>
        <Typography sx={{fontWeight:600,fontSize:"18px"}}>Non_Nursing MCQ's</Typography>
        </div>
      
        <div>
          <NonNursingCard/>
        </div>
     
      
    </div>
    </NonNursingMCQStyle>
  )
}
