import React, { useState } from 'react'
import { YEARMCQStyle } from './style'
import { Button, Typography } from '@mui/material'
export default function AddMCQ() {

  const [st,setSt]=useState(0)


 function handleChange(){
// setSt(1)
console.log("hi");
}

  return (
    <div>
        <YEARMCQStyle>
            <div className='bodystyle'>
                <div style={{backgroundColor:"white",padding:"20px",marginTop:"50px",height:"80vh"}}>
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
                        <Typography style={{fontSize:"14px"}}>Add Institution</Typography>
                        <Typography  style={{fontSize:"14px"}}>In Progress</Typography>
                      </div>
                      <div>
                        <Typography style={{color:"gray",fontSize:"12px"}}>Step 2</Typography>
                        <Typography style={{fontSize:"14px"}}>Add Academic year</Typography>
                        <Typography style={{fontSize:"14px"}}>Pending</Typography>
                      </div>
                    </div>
                    <div className='Namebox'>
                      <label>Institution Name</label>
                      <input type="text" className='box'/>
                    </div>
                    <div className='btnDiv'>
                      
                      &nbsp;&nbsp;<Button onClick={handleChange}>Next</Button>
                    </div>
                </div>

            </div>
        </YEARMCQStyle>
    </div>
  )
}
