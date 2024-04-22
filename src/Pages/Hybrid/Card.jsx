import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import DailyTest from '../../assets/images/DailyTest.png'
import MiniTest from '../../assets/images/minitest.webp'
import Micro from '../../assets/images/micro.png'
import { Typography } from '@mui/material'
import Plus from '../../assets/icons/plus b.png'
import { NavLink } from 'react-router-dom'
import '../YearMCQ/CardStyle.css'
import Delete from '../../assets/icons/delete.jpeg'
export default function HybridCard() {
    
    const datas=[
        {
            img:DailyTest,
            name:"DailyTest",
            path:"/dailyinstitution"
        },
        {
            img:MiniTest,
            name:"MiniTest",
            path:"/miniinstitution"
        },
        {
            img:Micro,
            name:"Micro Test",
            path:"/microinstitution"
        },
       
        
    ]
  return (
    <div>
         
        <Container fluid  >
            <Row style={{marginTop:"20px",justifyContent:"center"}}>
            
                {
                    datas.map((d)=>{
                        return(
                            <>
                             <Col xs={12} sm={12} md={6} lg={3} xl={3} style={{justifyContent:"center",alignItems:"center",marginBottom:"20px"}} >
                    <NavLink to={d.path} style={{color:"black",textDecoration:"none"}}>
                    <div className='Div'>
                    <img src={Delete} className='del'/>
                        <div>
                            <img src={d.img} height="70px"/>
                        </div>
                        <div style={{paddingTop:"10px"}}>
                            <Typography style={{fontWeight:600}}>{d.name}</Typography>
                        </div>
                    </div>
                    </NavLink>
                </Col> 
                            </>
                        )
                    })
                }
            </Row>
        </Container>
    </div>
  )
}
