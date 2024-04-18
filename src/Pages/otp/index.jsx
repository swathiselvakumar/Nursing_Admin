import React from 'react'
import EmailIcon from "@mui/icons-material/Email";
import {
    Grid,
    Paper,
    Typography,
    TextField,
    Button,
    ListItemIcon,
  } from "@mui/material";
  import Image from '../../assets/images/login img.png'
  import { useState } from "react";
  import { NavLink } from 'react-router-dom';


  const styles = {
    buttonContainer: {
      display: "flex",
      justifyContent: "center",
      width:"100%"
    },
    signInButton: {
      width: "100%",
      height: "40px",
      backgroundColor: "#183A1D",
      color: "#fff",
      marginTop: "10px",
    },
    
  };
  
  
export default function Otp() {
    const [email,setemail]=useState("");

  return (
    <Grid container component="main" style={{ height: "100vh",overflow:"hidden"}}>
      <Grid item xs={12} sm={6}>
        <Paper
          
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "16px",
            height:"100vh"
          }}
        >
          <Typography
            component="h1"
            variant="h5"
            style={{
              marginBottom: "15px",
              color: "#183A1D",
              marginTop:"50px",
              fontWeight:600
              
            }}
          >
            
          </Typography>
          <form style={{ width: "100%", marginTop: "8px", padding: "10px" }}>
           
            <Typography style={{ color: "#183A1D",fontWeight:600 }}>
              Email <EmailIcon style={{ color: "#183A1D",fontSize:"14px",marginTop:"1px" }} />
            </Typography>
            <TextField variant="outlined" fullWidth
              id="email"
              style={{ marginBottom: "8px" }}
              onChange={(e)=>{setemail(e.target.value)}}
              value={email}
              />
           

            
         
            <NavLink to="/forget" style={{textDecoration:"none"}}>
            <div style={styles.buttonContainer}>
              <Button variant="contained" style={styles.signInButton}>
                Get Otp
              </Button>
            </div>
            </NavLink>
          </form>
          <div style={{marginTop:"30px",textAlign:"center"}}>
                <input type="text" maxLength="1" style={{outline:"none",border:"none",width:"50px",paddingLeft:"20px",borderBottom:"1px solid #183A1D"}}/>&nbsp;&nbsp;
                <input type="text" maxLength="1" style={{outline:"none",border:"none",width:"50px",paddingLeft:"20px",borderBottom:"1px solid #183A1D"}}/>&nbsp;&nbsp;
                <input type="text" maxLength="1" style={{outline:"none",border:"none",width:"50px",paddingLeft:"20px",borderBottom:"1px solid #183A1D"}}/>&nbsp;&nbsp;
                <input type="text" maxLength="1" style={{outline:"none",border:"none",width:"50px",paddingLeft:"20px",borderBottom:"1px solid #183A1D"}}/>
            </div>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} style={{ background: "#fefbe9" }}>
        <img
          src={Image}
          alt="Your Image"
          style={{
            width: "100%",
            height: "90%",
            objectFit: "cover",
            padding: "10px",
            
          }}
        />
      </Grid>
    </Grid>
  )
}
