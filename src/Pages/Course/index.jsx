import React from 'react'
import {getLocalStorage} from '../../utils/helperFunc'
// import { successToaster } from "../../utils/toastify";
import {PATH} from '../../constants/routeConstants'
import CustomBreadCrumbs from '../../components/Common/CustomBreadcrumbs'
import { Container,Row,Col } from 'react-bootstrap'
import Medical from '../../assets/icons/medical.png'
import { Typography } from '@mui/material'
import Plus from '../../assets/icons/plus b.png'
import { NavLink } from 'react-router-dom'
import '../YearMCQ/CardStyle.css'
import Delete from '../../assets/icons/delete.jpeg'
import UpdateIcon from '@mui/icons-material/Update';
export default function Course() {
  const languageName = getLocalStorage("languageName");
  const datas=[
    {
        img:Medical,
        name:"Course Name",
        path:"/viewcourse"
    },
    {
        img:Medical,
        name:"Course Name",
        path:"/viewcourse"
    },
    {
        img:Medical,
        name:"Course Name",
        path:"/viewcourse"
    },
    {
        img:Medical,
        name:"Course Name",
        path:"/viewcourse"
    },
    {
        img:Medical,
        name:"Course Name",
        path:"/viewcourse"
    },
    {
        img:Medical,
        name:"Course Name",
        path:"/viewcourse"
    },
    {
        img:Medical,
        name:"Course Name",
        path:"/viewcourse"
    },{
        img:Medical,
        name:"Course Name",
        path:"/viewcourse"
    }
    ,{
        img:Medical,
        name:"Course Name",
        path:"/viewcourse"
    },
    {
        img:Medical,
        name:"Course Name",
        path:"/viewcourse"
    },
    {
        img:Plus,
        name:"Add Course",
        path:"/addcourse"
    }
    
]

  const BreadcrumbItems = [
    { label: "Dashboard", path: PATH.DASHBOARD },
   
    { label: "Courses", path: PATH.COURSE },
    
  ];
  return (
    <div>
      <div style={{padding:"20px"}}>
      <CustomBreadCrumbs items={BreadcrumbItems} />
    </div>
    <Container fluid  >
        <Typography style={{fontWeight:600,fontSize:"20px"}}>Our Course</Typography>
            <Row style={{marginTop:"20px",justifyContent:"center"}}>
            
                {
                    datas.map((d)=>{
                        return(
                            <>
                    <Col xs={12} sm={12} md={6} lg={3} xl={3} style={{justifyContent:"center",alignItems:"center",marginBottom:"20px"}} >
                    <NavLink to={d.path} style={{color:"black",textDecoration:"none"}}>
                    <div className='Div' >
                        <div className='del'>
                        <UpdateIcon/>&nbsp;
                        <img src={Delete} />
                        </div>
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
