import React, { useState } from 'react'
import { YEARMCQStyle } from '../../YearMCQ/style'
import { Button, Typography } from '@mui/material'
import CustomBreadCrumbs from '../../../components/Common/CustomBreadcrumbs'
import { PATH } from '../../../constants/routeConstants'
export default function UpdatePlan() {
    const BreadcrumbItems = [
        { label: "Dashboard", path: PATH.DASHBOARD },
        
        { label: "Premium Plans", path: PATH.PREMIUMPLANS },
        { label: "Update Plans", path: PATH.UPDATEPLAN },

      ];


  return (
    <div>
        <YEARMCQStyle>
            <div className='bodystyle'>
            <div style={{padding:"20px"}}>
      <CustomBreadCrumbs items={BreadcrumbItems} />
      </div>
                {/* <div style={{backgroundColor:"white",padding:"20px",marginTop:"10px",height:"80vh"}}>
                    <Typography>Add Institution</Typography>
                    <div className='div1'>
                        <div className='circle'>
                          <div className='inner-circle'>

                          </div>
                        </div>
                        <div className='line'></div>
                        <div className='second'></div>
                    </div>
                    <div className='content'>
                      <div>
                        <Typography style={{color:"gray",fontSize:"12px"}}>Step 1</Typography>
                        <Typography  style={{fontSize:"14px"}}>In Progress</Typography>
                      </div>
                      <div>
                        <Typography style={{color:"gray",fontSize:"12px"}}>Step 2</Typography>
                        <Typography style={{fontSize:"14px"}}>Pending</Typography>
                      </div>
                    </div>
                    <div className='Namebox'>
                      <label>Institution Name</label>
                      <input type="text" className='box'/>
                    </div>
                    <div className='btnDiv'>
                      
                      &nbsp;&nbsp;<Button >Next</Button>
                    </div>
                </div> */}

            </div>
        </YEARMCQStyle>
    </div>
  )
}
