import { Button, Typography } from '@mui/material'
import React from 'react'
import { PremiumStyle } from './style';
import SearchIcon from '@mui/icons-material/Search';
import { styled} from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Container,Row,Col } from 'react-bootstrap';
import UpdateIcon from '@mui/icons-material/Update';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { NavLink } from 'react-router-dom';
import PremiumTb from './premiumTable';
// import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import AlertBox from '../../AlertBox/AlertBox';
// import Typography from '@mui/material/Typography';
export default function Premium() {
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "white",
    width:"350px",
    '&:hover': {
      backgroundColor: "white",
    },
   
    
  }));
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
     
    },
  }));
  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    < PremiumStyle>
    <div className='bodystyle'>
        <div className='title'>
        <Typography sx={{fontWeight:600,fontSize:"24px"}}>Premium </Typography>
        </div>
        <Container fluid style={{marginTop:"20px"}}>
          <Row>
            <Col xs={12} sm={12} md={5} lg={6} xl={6}  className='MainCol1'>
            <div className='search'>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          </div>
            </Col>
            <Col xs={12} sm={12} md={7} lg={6} xl={6} className='MainCol'>
              <div>
                <Button ><UpdateIcon/>&nbsp; Update</Button>
              </div>&nbsp;&nbsp;
              <div>
               
                <Button style={{backgroundColor:"white",color:"black"}} onClick={handleClickOpen}><AddCircleOutlineIcon />&nbsp; Add Members</Button>
                
              </div>
            </Col>
          </Row>
        </Container>
        <div>
          <PremiumTb/>
        </div>
        
    </div>
    <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Add Members
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
        <DialogContent dividers>
          <AlertBox/>
        </DialogContent>
       
      </BootstrapDialog>
    </ PremiumStyle>

    
  )
}
