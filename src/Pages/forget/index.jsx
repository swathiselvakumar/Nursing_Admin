import React from 'react'
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
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
  import Image from '../../assets/images/login img.png'
  import { useState } from "react";
  import { NavLink } from 'react-router-dom';
const PasswordInput = ({
    label,
    id,
    showPassword,
    handleClickShowPassword,
    handleMouseDownPassword,
  }) => (
    <Grid item xs={12}>
      <Typography style={{ color: "#183A1D",fontWeight:600 }}>
        {label} <LockIcon style={{ color: "#183A1D",fontSize:"14px",marginTop:"-3px" }} />
      </Typography>
      <FormControl sx={{ width: "100%", marginBottom: "8px" }} variant="outlined">
        <OutlinedInput
          id={id}
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label={`toggle ${label.toLowerCase()} password visibility`}
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
  );

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
  
  
export default function Forget() {
    const [showPassword, setShowPassword] = useState(false);
    const [conpass,setconpass]=useState("");
    const [password,setpassword]=useState("");
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
      event.preventDefault();
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
           
          <PasswordInput
              fullWidth
                label="Password"
                id="outlined-adornment-password"
                showPassword={showPassword}
                handleClickShowPassword={handleClickShowPassword}
                handleMouseDownPassword={handleMouseDownPassword}
                onChange={(e)=>{setpassword(e.target.value)}}
                value={password}
              />
           

            <Grid container spacing={2}>
              
              <PasswordInput
              fullWidth
                label="Confirm Password"
                id="outlined-adornment-password"
                showPassword={showPassword}
                handleClickShowPassword={handleClickShowPassword}
                handleMouseDownPassword={handleMouseDownPassword}
                onChange={(e)=>{setconpass(e.target.value)}}
                value={conpass}
              />
              
            </Grid>
          
            <NavLink to="/dashboard" style={{textDecoration:"none"}}>
            <div style={styles.buttonContainer}>
              <Button variant="contained" style={styles.signInButton}>
                Done
              </Button>
            </div>
            </NavLink>
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
  )
}
