import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Aptitude from '../../assets/images/Aptitude.jpg'
import Reasoning from '../../assets/images/reasoning.png'
import English from '../../assets/images/english.png'
import GK from '../../assets/images/gk.webp'
import { Typography } from '@mui/material'
import Plus from '../../assets/icons/plus b.png'
import { NavLink } from 'react-router-dom'
import '../YearMCQ/CardStyle.css'
import Delete from '../../assets/icons/delete.jpeg'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
export default function NonNursingCard() {
    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
    const datas=[
        {
            img:Aptitude,
            name:"Aptitude",
            path:"/noninstitution"
        },
        {
            img:Reasoning,
            name:"Reasoning",
            path:"/noninstitution"
        },
        {
            img:GK,
            name:"GK",
            path:"/noninstitution"
        },
        {
            img:English,
            name:"English",
            path:"/noninstitution"
        },
       
        {
            img:Plus,
            name:"Add Category",
            on:handleClickOpen
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
                    <div className='Div' onClick={d.on}>
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
        <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2,width:"420px",textAlign:"center",backgroundColor:"#f6f6f6" }} id="customized-dialog-title">
          Add Category
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
        <DialogContent dividers style={{padding:"20px",backgroundColor:"#f6f6f6"}}>
          <div style={{margin:"20px"}}>
          <Typography>Category Name :</Typography>
          <input type='text' className='textbox'/>
          <Typography>Category Description :</Typography>
          <textarea rows={4} cols={40} placeholder='Add Description' className='textarea'/>
          <Typography>Instruction :</Typography>
          <textarea rows={4} cols={40} placeholder='Add Instruction' className='textarea'/><br/>
        <button autoFocus onClick={handleClose} className='subjectBtn'>
            Submit
          </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
