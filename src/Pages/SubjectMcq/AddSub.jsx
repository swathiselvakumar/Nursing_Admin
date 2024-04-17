// import React, { useState } from 'react'
// import BreadcrumbsComp from '../../components/Common/BreadCrumbs'
// import './style.css'
// import { Typography } from '@mui/material'
// import { Container,Row,Col } from 'react-bootstrap'
// import { NavLink } from 'react-router-dom'
// import Dialog from '@mui/material/Dialog';
// import DialogTitle from '@mui/material/DialogTitle';
// import DialogContent from '@mui/material/DialogContent';
// import DialogActions from '@mui/material/DialogActions';
// import IconButton from '@mui/material/IconButton';
// import CloseIcon from '@mui/icons-material/Close';
// import { PATH } from '../../constants/routeConstants'
// import CustomBreadCrumbs from '../../components/Common/CustomBreadcrumbs'
// import { useContext } from 'react'
// import { navContext } from '../../context/navContext'
// export default function AddSub() {
//   const[input,setInput]=useState('');
//   // const { setInput: setNavInput } = useContext(navContext);
//   //  const { input, setInput } = useContext(navContext);
//   const BreadcrumbItems = [
//     { label: "Dashboard", path: PATH.DASHBOARD },
    
//     { label: "SubjectMCQ", path: PATH.SUBJECTMCQ },
//     { label: "Subject", path: PATH.SUBINSTITUTION },
//     { label: "Add Subject", path: PATH.ADDSUB },

//   ];
//   const [openBtn, setOpenBtn] = React.useState(false);
//   const handleClickOpenBtn = () => {

//     setOpenBtn(true);
//     console.log(input);
//   };
//   // const inputs =(event)=>
//   // {
//   //   setInput(event.target.value)
//   //   setNavInput(event.target.value);

//   // }
//   // const handleCloseBtn = () => {
//   //   setOpenBtn(false);
//   // };
//   return (
//     <div style={{backgroundColor:"white",height:"90vh"}}>
//       <div style={{padding:"25px"}}>
//       <CustomBreadCrumbs items={BreadcrumbItems} />
//       </div>
//       <Container className='Main'>
//         <Row>
//           <Col>
//           <div className='Sub'>
//           <Typography style={{fontWeight:600,textAlign:"center",paddingTop:"10px"}}>Add Questions</Typography>
//           <hr style={{border:"1px solid black"}}/>
//           <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100px"}}>
//             <Typography>Model MCQ</Typography>
//             <input type='number' className='Number' onChange={inputs} value={input}/>
//           </div>
//           <div style={{display:"flex",flexDirection:"column",marginLeft:"200px"}}>
//             <button className='SubBtn' onClick={handleClickOpenBtn}>SUBMIT</button>
//             <NavLink to="/subinstitution">
//             <button className='SubBtn1'>CANCEL</button>
//             </NavLink>
//           </div>
//         </div>
//           </Col>
//         </Row>
//       </Container>
//       <Dialog
//         // onClose={handleClose}
//         aria-labelledby="customized-dialog-title"
//         open={openBtn}
//       >
        
//         <IconButton
//           aria-label="close"
//           // onClick={handleCloseBtn}
//           sx={{
//             position: 'absolute',
//             right: 8,
//             top: 8,
//             color: (theme) => theme.palette.grey[500],
//           }}
//         >
//           <CloseIcon />
//         </IconButton>
//         <DialogContent dividers style={{display:"flex",justifyContent:"space-between"}}>
//           <button className='Submit1'>Download Template</button>
//           <NavLink to="/testpage">
//           <button className='Submit1'>Upload Questions</button>
//           </NavLink>
//         </DialogContent>
//       </Dialog>
//     </div>
//   )
// }
