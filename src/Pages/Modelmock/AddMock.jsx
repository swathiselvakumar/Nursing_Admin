import React, { useState } from 'react'
import { YEARMCQStyle } from '../YearMCQ/style'
import { Button, Typography } from '@mui/material'
import CustomBreadCrumbs from '../../components/Common/CustomBreadcrumbs'
import { PATH } from '../../constants/routeConstants'
import AlertIcon from '../../assets/icons/alert.png'
import { NavLink } from 'react-router-dom'
import { useContext } from "react";
import { navContext } from "../../context/navContext";

export default function AddMock() {
  const[mcq,setMcq]=useState('')
  const [stage, setStage] = useState("");
  const { setMcq: setNavMcq } = useContext(navContext);
  const { setStage: setNavStage } = useContext(navContext);


    const BreadcrumbItems = [
        { label: "Dashboard", path: PATH.DASHBOARD },
        
        { label: "Model Mock", path: PATH.MODELMOCK },
        { label: "Institution", path: PATH.MODELINSTITUTION },
        { label: "Add Question", path: PATH.ADDMOCK },


      ];
      const handlechange =(event)=>
      {
setStage(event.target.value);
        setNavMcq(event.target.value);
      }
      const handlechanged = (event) => {
      

        setMcq(event.target.value);
        setNavStage(event.target.value);
      };
      const MainBox={
        backgroundColor:"#f6f6f6",
        width:"50vw",
        height:"90vh",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        margin:"30px"
      }
      const bodystyle={
        display:"flex",
        justifyContent:"center"
      }
      const second={
        backgroundColor:"#707070",
        height:"50px",
        width:"50px",
        borderRadius:"50%",
        marginLeft:"10px"
    }
   const div1={
      display:"flex",
      justifyContent:"center",
      marginTop:"30px",
      
  }
  const step={
      paddingTop:"3px",
      width:"210px",
      display:"flex",
      justifyContent:"space-between"
  }
  const MainText={
    display:"flex",
   justifyContent:"center",
   alignItems:"center",
   flexDirection:"column",
   paddingTop:"50px",
  }
  const TextB={
    backgroundColor:"#DEE2DF",
    border:"none",
    borderRadius:"5px",
    outline:"none",
    paddingLeft:"10px",
    height:"30px",
    width:"230px",fontSize:"12px"
  }
  const btn1={
    border:"none",
    backgroundColor:"#183A1D",
    color:"white",
    height:"35px",
    width:"230px",
    borderRadius:"5px"
  }
  const btn2={
    border:"none",
    backgroundColor:"white",
    color:"black",
    height:"35px",
    width:"230px",
    borderRadius:"5px",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
  }
  return (
    <div>
        <YEARMCQStyle>
        <div style={{padding:"20px"}}>
              <CustomBreadCrumbs items={BreadcrumbItems} />
            </div>
            <div style={bodystyle}>    
            <div style={MainBox}>
              <Typography style={{fontWeight:700,paddingTop:"10px",textAlign:"center"}}>Add Question</Typography>
              <hr style={{border:"1px solid black"}}/>
              <div style={div1}>
                        <div className='circle'>
                          <div className='inner-circle'>

                          </div>
                        </div>
                        <div className='line'></div>
                        <div style={second}></div>
              </div>
              <div style={{display:'flex',justifyContent:"center"}}>
              <div style={step}>
              <Typography style={{fontSize:"12px"}}>Step 1</Typography>
              <Typography style={{fontSize:"12px"}}>Step 2</Typography>
              </div>
              </div>
              <div style={{display:'flex',justifyContent:"center"}}>
              <div style={step}>
              <Typography style={{fontSize:"12px"}}>In Progress</Typography>
              <Typography style={{fontSize:"12px"}}>Pending</Typography>
              </div>
              </div>

              <div style={MainText}>
              <div style={{marginTop:"15px",display:"flex",justifyContent:"space-between",width:"380px"}}>
                <div><label>Choose Stages</label></div>
                {/* <div><img src={AlertIcon}/></div> */}
                <div><input type='number' style={TextB} value={stage} onChange={handlechange}/></div>
              </div>
              <div style={{marginTop:"15px",display:"flex",justifyContent:"space-between",width:"380px"}}>
                <div><label>Model MCQ</label></div>
                {/* <div><img src={AlertIcon}/></div> */}
                <div><input type='text' style={TextB} value={mcq} onChange={handlechanged}/></div>
              </div>
             
              
              
            </div>
            <div>
              <div style={{marginTop:"30px",display:"flex",justifyContent:"end",width:"530px"}}>
               <NavLink to="/addmock1">
               <button style={btn1}>NEXT</button>
               </NavLink>
              </div>
            </div>
            <div>
              <div style={{marginTop:"10px",display:"flex",justifyContent:"end",width:"530px"}}>
                <NavLink to="/modelinstitution">
                <button style={btn2}>CANCEL</button>
                </NavLink>
              </div>
            </div>
            </div>
            
                
            </div>
        </YEARMCQStyle>
    </div>
  )
}
