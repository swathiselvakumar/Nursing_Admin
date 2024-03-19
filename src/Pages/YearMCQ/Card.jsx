import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Institution from '../../assets/images/vadakk.png'
import { Typography } from '@mui/material'
import Plus from '../../assets/icons/plus b.png'
import { NavLink } from 'react-router-dom'
import './CardStyle.css'
import Delete from '../../assets/icons/delete.jpeg'
export default function YearCard() {
    

    const datas=[
        {
            img:Institution,
            name:"Institution 1",
            path:"/yearinstitution"
        },
        {
            img:Institution,
            name:"Institution 2",
            path:"/testpage"
        },
        {
            img:Institution,
            name:"Institution 3",
            path:"/testpage"
        },
        {
            img:Institution,
            name:"Institution 4",
            path:"/testpage"
        },
        {
            img:Institution,
            name:"Institution 5",
            path:"/testpage"
        },
        {
            img:Institution,
            name:"Institution 6",
            path:"/testpage"
        },
        {
            img:Institution,
            name:"Institution 7",
            path:"/testpage"
        },{
            img:Institution,
            name:"Institution 8",
            path:"/testpage"
        }
        ,{
            img:Institution,
            name:"Institution 9",
            path:"/testpage"
        },
        {
            img:Institution,
            name:"Institution 10",
            path:"/testpage"
        },
        {
            img:Plus,
            name:"Add Institution",
            path:"/addmcq"
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
                    <div className='Div' >
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
