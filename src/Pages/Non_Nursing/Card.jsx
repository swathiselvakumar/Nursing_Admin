import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Aptitude from '../../assets/images/Aptitude.jpg'
import Reasoning from '../../assets/images/reasoning.png'
import English from '../../assets/images/english.png'
import GK from '../../assets/images/gk.webp'
import { Typography } from '@mui/material'
import Plus from '../../assets/icons/plus b.png'
import { NavLink } from 'react-router-dom'
export default function NonNursingCard() {
    const Div={
        backgroundColor:"white",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        display:"flex",
        justifyContent:"center",
        flexDirection: "column",
        alignItems:"center",
        borderRadius:"10px",
        padding:"20px"
    }
    const datas=[
        {
            img:Aptitude,
            name:"Aptitude",
            path:"/testpage"
        },
        {
            img:Reasoning,
            name:"Reasoning",
            path:"/testpage"
        },
        {
            img:GK,
            name:"GK",
            path:"/testpage"
        },
        {
            img:English,
            name:"English",
            path:"/testpage"
        },
       
        {
            img:Plus,
            name:"Add Category"
        }
        
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
                    <div style={Div}>
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