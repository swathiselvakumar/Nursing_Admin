import { Button, Typography } from '@mui/material'
import React from 'react'
import { NonNursingMCQStyle } from './style'

import NonNursingCard from './Card'
import BreadcrumbsComp from '../../components/Common/BreadCrumbs';

export default function NonNursingMCQ() {
 
  return (
    <NonNursingMCQStyle >
    <div className='bodystyle'>
      <div style={{padding:"25px"}}>
        <BreadcrumbsComp/>
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
