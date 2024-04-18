import React from 'react'
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import axios from 'axios';
import {
    Grid,
    Paper,
    Typography,
    TextField,
    IconButton,
    OutlinedInput,
    InputAdornment,
    FormControl,
    Radio,
    RadioGroup,
    FormControlLabel,
    Button,
    ListItemIcon,
  } from "@mui/material";
  import { useEffect } from 'react';
  import Image from '../../assets/images/login img.png'
  import { useState } from "react";
  import { NavLink } from 'react-router-dom';
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
    
  };
  
  
export default function Signin() {
    const [showPassword, setShowPassword] = useState(false);
    const [email,setemail]=useState("");
    const [pass,setPass]=useState("");
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
    const handleChange = (event) => {
      setPass(event.target.value);
    };


    const handleClickOpen = async () => {
      try {
        const response = await axios.post(
          'https://vebbox.in/Nursing/controllers/api/admin/put/A_updateOTP.php',
          {
            gmailId: email,
            password:pass, // Pass description as value, not as a function
          }
        );
        
        console.log("Success:", response.data);
       
      } catch (error) {
        console.error("Error check email or password:", error);
      }
    };
  return (
    <>
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
            Sign in
          </Typography>
          <form style={{ width: "100%", marginTop: "8px", padding: "10px" }}>
           
            <Typography style={{ color: "#183A1D",fontWeight:600 }}>
              Email <EmailIcon style={{ color: "#183A1D",fontSize:"14px",marginTop:"-2px" }} />
            </Typography>
            <TextField variant="outlined" fullWidth
              id="email"
              style={{ marginBottom: "8px" }}
              onChange={(e)=>{setemail(e.target.value)}}
              value={email}
              />
           

            <Grid container spacing={2}>
            <Grid item xs={12}>
        <Typography style={{ color: "#183A1D",fontWeight:600 }}>
          Password <LockIcon style={{ color: "#183A1D",fontSize:"14px",marginTop:"-3px" }} />
        </Typography>
        <FormControl sx={{ width: "100%", marginBottom: "8px" }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            onChange={handleChange}
            value={pass}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  // aria-label={`toggle ${label.toLowerCase()} password visibility`}
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? (
                    <VisibilityOff style={{ color: "#183A1D" }} />
                  ) : (
                    <Visibility style={{ color: "#183A1D" }} />
                  )}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </Grid>
             
              
            </Grid>
           <NavLink to="/otp">
           <Typography
              style={{
                // textDecoration: "underline",
                alignSelf: "flex-end",
                textAlign: "right",
              }}
            >
              Forget Password?
            </Typography>
           </NavLink>
            
            <div style={styles.buttonContainer}>
              <Button variant="contained" style={styles.signInButton} onClick={handleClickOpen}>
                Sign in
              </Button>
            </div>
            
          </form>
         
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
    </>
    
  )
}
