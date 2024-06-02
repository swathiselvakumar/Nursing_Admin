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
  import { navContext } from '../../context/navContext';
  import { useContext } from 'react';
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
  const Navigate=useNavigate();
 const {email,setemail}=useContext(navContext);
 const {Endpoint}=useContext(navContext);
    const [showPassword, setShowPassword] = useState(false);
    const [pass,setPass]=useState("");
    const [error, setError] = useState("");
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
    const handleChange = (event) => {
      setPass(event.target.value);
    };
    localStorage.setItem("userMail", email);
    const handleClickOpen = async () => {
      validateEmail();
      try {
        const response = await axios.post(
          `${Endpoint}admin/put/A_login.php`,
          {
            gmailId: localStorage.getItem("userMail"),
            password:pass, 
          }
        ).then(function (response) {
          if (response.data.message === "success") {
              Navigate("/dashboard");
            }  else {
              alert("Username or Password is Invalid");
            }
        })
        .catch(function (error) {
          alert("Enter Valid Credentials");
          // console.error(error);
          // if()
          
        });
        
        
  
      } catch (error) {
        console.error("Error check email or password:", error);
        setError("Error checking email or password");
      }
    };
  
    const validateEmail = (email) => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
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
              type='email'
              id="email"
              style={{ marginBottom: "8px" }}
              onChange={(e)=>{setemail(e.target.value)}}
              value={email}
              required
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
            required
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
              Forgot Password?
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
