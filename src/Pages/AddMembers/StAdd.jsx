import React, { useState, useContext } from "react";
import { Typography } from "@mui/material";
import { Container, Row, Col } from "react-bootstrap";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { PATH } from '../../constants/routeConstants';
import CustomBreadCrumbs from '../../components/Common/CustomBreadcrumbs';
import axios from "axios";
import { navContext } from "../../context/navContext";
import { AlertBoxStyle } from "./style";

function StAdd() {
  const BreadcrumbItems = [
    { label: "Dashboard", path: PATH.DASHBOARD },
    { label: "Standard", path: PATH.STANDARD },
    { label: "Add Members", path: PATH.STADD }
  ];

  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const { Endpoint } = useContext(navContext);

  const validateInputs = () => {
    let isValid = true;
    if (!name.trim()) {
      setNameError('Name is required');
      isValid = false;
    } else {
      setNameError('');
    }

    if (!email.trim()) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Email is invalid');
      isValid = false;
    } else {
      setEmailError('');
    }

    return isValid;
  };

  const handleClickOpen = async () => {
    if (!validateInputs()) {
      return;
    }

    try {
      const response = await axios.post(
        `${Endpoint}admin/post/A_InsertStudentSt.php`,
        {
          username: name,
          email: email,
        }
      );

      console.log("Success:", response.data);

      // Clear input fields
      setName("");
      setEmail("");

      // Open dialog box
      setOpen(true);
    } catch (error) {
      console.error("Error:", error);
      // Handle error here if needed
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const Btn = {
    border: "none",
    height: "40px",
    width: "80px",
    backgroundColor: "#1b4242",
    color: "white"
  };

  return (
    <AlertBoxStyle>
      <div style={{ padding: "25px" }}>
        <CustomBreadCrumbs items={BreadcrumbItems} />
      </div>

      <Typography style={{ textAlign: "center" }}>ADD MEMBERS</Typography>
      <Container>
        <Row>
          <Col>
            <div className="TotalBox">
              <div className="alt-box">
                <div>
                  <label htmlFor="name">Name </label>
                  <br />
                  <input
                    type="text"
                    className="textB"
                    value={name}
                    onChange={handleChangeName}
                  />
                  {nameError && <Typography style={{ color: 'red' }}>{nameError}</Typography>}
                </div>
                <div>
                  <label htmlFor="email">Email </label>
                  <br />
                  <input
                    type="email"
                    className="textB"
                    value={email}
                    onChange={handleChangeEmail}
                  />
                  {emailError && <Typography style={{ color: 'red' }}>{emailError}</Typography>}
                </div>

                <button onClick={handleClickOpen}>Submit</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent
          dividers
          style={{
            height: "200px",
            width: "400px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography style={{ paddingBottom: "20px" }}>
            Successfully Completed
          </Typography>
          <button style={Btn} onClick={handleClose}>Done</button>
        </DialogContent>
      </Dialog>
    </AlertBoxStyle>
  );
}

export default StAdd;
