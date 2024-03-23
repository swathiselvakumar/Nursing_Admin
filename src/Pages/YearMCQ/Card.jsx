import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Institution from '../../assets/images/vadakk.png'
import { Typography } from '@mui/material'
import Plus from '../../assets/icons/plus b.png'
import { NavLink } from 'react-router-dom'
import './CardStyle.css'
import Delete from '../../assets/icons/delete.jpeg'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import Rong from '../../assets/icons/rong.jpg'
import {Button} from '@mui/material'
export default function YearCard() {
    // const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    //     '& .MuiDialogContent-root': {
    //       padding: theme.spacing(2),
    //       width:"400px"
    //     },
    //     '& .MuiDialogActions-root': {
    //       padding: theme.spacing(2),
    //     },
    //   }));
      const [open, setOpen] =useState(false)
    
      const handleClickOpen = () => {
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
      };

      const Btn={
        backgroundColor:"white",
        color:"black",
        border:"1px solid black",
        width:"100px",
        marginTop:"20px"
      }
      const Btn1={
        backgroundColor:"red",
        color:"white",
        marginLeft:"10px",
        width:"100px",
        marginTop:"20px"
      }
    const datas=[
        {
            img:Institution,
            name:"Institution 1",
            path:"/yearinstitution"
        },
        {
            img:Institution,
            name:"Institution 2",
            path:"/yearinstitution"
        },
        {
            img:Institution,
            name:"Institution 3",
            path:"/yearinstitution"
        },
        {
            img:Institution,
            name:"Institution 4",
            path:"/yearinstitution"
        },
        {
            img:Institution,
            name:"Institution 5",
            path:"/yearinstitution"
        },
        {
            img:Institution,
            name:"Institution 6",
            path:"/yearinstitution"
        },
        {
            img:Institution,
            name:"Institution 7",
            path:"/yearinstitution"
        },{
            img:Institution,
            name:"Institution 8",
            path:"/yearinstitution"
        }
        ,{
            img:Institution,
            name:"Institution 9",
            path:"/yearinstitution"
        },
        {
            img:Institution,
            name:"Institution 10",
            path:"/yearinstitution"
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
                        <button onClick={handleClickOpen}><img src={Delete}  className='del'/></button>
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
        <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent sx={{textAlign:"center"}}>
            <img src={Rong} height="25px" style={{marginTop:"-30px"}}/><br/>
            Are You sure ?<br/>
            you want to delete this student?<br/>
            <Button onClick={handleClose} style={Btn}>Cancel</Button>
            <Button onClick={handleClose}  style={Btn1}>Delete</Button>
        </DialogContent>
        
      </Dialog>
    </div>
  )
}
