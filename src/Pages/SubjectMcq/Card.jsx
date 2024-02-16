import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Book from '../../assets/images/book.png'
import { Typography } from '@mui/material'
import Plus from '../../assets/icons/plus b.png'
export default function YearCard() {
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
            img:Book,
            name:"Subject 1",
            path:"/instruction"
        },
        {
            img:Book,
            name:"Subject 2",
            path:"/instruction"
        },
        {
            img:Book,
            name:"Subject 3",
            path:"/instruction"
        },
        {
            img:Book,
            name:"Subject 4",
            path:"/instruction"
        },
        {
            img:Book,
            name:"Subject 5",
            path:"/instruction"
        },
        {
            img:Book,
            name:"Subject 6",
            path:"/instruction"
        },
        {
            img:Book,
            name:"Subject 7",
            path:"/instruction"
        },{
            img:Book,
            name:"Subject 8",
            path:"/instruction"
        }
        ,{
            img:Book,
            name:"Subject 9",
            path:"/instruction"
        },
        {
            img:Book,
            name:"Subject 10",
            path:"/instruction"
        },
        {
            img:Plus,
            name:"Add Subject"
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
                    {/* <NavLink to={d.path} style={{color:"black",textDecoration:"none"}}> */}
                    <div style={Div}>
                        <div>
                            <img src={d.img} height="70px"/>
                        </div>
                        <div style={{paddingTop:"10px"}}>
                            <Typography style={{fontWeight:600}}>{d.name}</Typography>
                        </div>
                    </div>
                    {/* </NavLink> */}
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
