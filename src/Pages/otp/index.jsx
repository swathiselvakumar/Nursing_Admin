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
  import { MuiOtpInput } from 'mui-one-time-password-input'
  import Image from '../../assets/images/login img.png'
  import { useState } from "react";
  import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { useContext } from 'react';
import { navContext } from '../../context/navContext';
import { useNavigate } from 'react-router-dom';

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
    submitInButton: {
      width: "40%",
      height: "40px",
      backgroundColor: "#183A1D",
      color: "#fff",
      marginTop: "30px",
    },
    
  };
  
  
export default function Otp() {
    const [email,setemail]=useState("");
    const [otp, setOtp] = React.useState('');
    const Navigate=useNavigate();
    const {Endpoint}=useContext(navContext);
    const handleChange = (newValue) => {
      setOtp(newValue)
    } 
    localStorage.setItem("admin", email);
    const admin=localStorage.getItem("admin");
    const handleClickOpen = async () => {
      try {
        const response = await axios.post(
          `${Endpoint}admin/put/A_updateOTP.php`,
          {
            gmailId: admin,
          }
        ).then(function (response) {
          if (response.data.message === "success") {
              alert("OTP Sent.");
            }  else {
              alert("EmailId is Invalid");
            }
        })
        .catch(function (error) {
          alert("Enter Valid Credentials");
          
          
        });
        
        console.log("Success:", response.data);
       
      } catch (error) {
        console.error("Error check email or password:", error);
      }
    };

    const handleOTP = async () => {
      try {
        const response = await axios.post(
          `${Endpoint}admin/post/A_ValidateOtp_Token.php`,
          {
            gmailId: email,
            otp:otp
          }
        );
        
        console.log("Success:", response.data);
        if (response.data.message === "Success") {
          Navigate("/forget");
        } else {
          alert("Invalid Otp");
          console.error("Error in response:", response.data);
        }
       
      } catch (error) {
        console.error("Error check email or password:", error);
      }
    };


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
              required
              />
           

            
         
           
            <div style={styles.buttonContainer}>
              <Button variant="contained" style={styles.signInButton} onClick={handleClickOpen}>
                Get Otp
              </Button>
            </div>
           
          </form>
          <MuiOtpInput value={otp} onChange={handleChange} style={{width:"250px",marginTop:"50px"}} />
          <Button variant="contained" style={styles.submitInButton} onClick={handleOTP}>
                Submit
              </Button>
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
