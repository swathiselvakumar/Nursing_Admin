import React from "react";
import BreadcrumbsComp from "../../components/Common/BreadCrumbs";
import { Container, Row, Col } from "react-bootstrap";
import Mini from '../../assets/images/minitest.webp';
import { Typography } from "@mui/material";
import Delete from "../../assets/icons/delete.jpeg";
import "../YearMCQ/CardStyle.css";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { PATH } from "../../constants/routeConstants";
import CustomBreadCrumbs from "../../components/Common/CustomBreadcrumbs";

export default function MiniInstitution() {
  const BreadcrumbItems = [
    // { label: "Dashboard", path: PATH.DASHBOARD },

    { label: "Hybrid", path: PATH.HYBRID },
    { label: "Institution", path: PATH.MINIINSTITUTION },
  ];
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [open, setOpen] = React.useState(false);
  const [openBtn, setOpenBtn] = React.useState(false);

  const handleClickOpenBtn = () => {
    setOpenBtn(true);
  };
  const handleCloseBtn = () => {
    setOpenBtn(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ backgroundColor: "white", padding: "10px" }}>
      <div style={{ padding: "25px" }}>
        <CustomBreadCrumbs items={BreadcrumbItems} />
      </div>
      <Container fluid style={{ paddingLeft: "27px", paddingRight: "27px" }}>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} className="title1">
            <div>
              <img src={Mini} height="40px" />
            </div>
            &nbsp;&nbsp;
            <div>
              <Typography style={{ fontWeight: 700, paddingTop: "10px" }}>
                Mini Test
              </Typography>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="TotalBox">
        <Container className="MainBox">
          <Row>
            <Col className="Col1">
              <div className="box">
                <NavLink
                  to="/miniupload"
                  style={{ textDecoration: "none" }}
                >
                  <button
                    style={{
                      backgroundColor: "white",
                      border: "none",
                      paddingTop: "5px",
                    }}
                  >
                    Test Name 1
                  </button>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <img src={Delete} className="delete" />
                </NavLink>
              </div>
            </Col>
          </Row>
        </Container>

        <div className='BtnBox'>
      <NavLink to="/hybridviewtest">
      <button className='Btn'>View Questions</button>
      </NavLink>
    </div>
      </div>
      {/* <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        style={{}}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title" style={{fontWeight:600,textAlign:"center",backgroundColor:"#f6f6f6"}}>
          Add Academic Year
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
        <DialogContent dividers style={{backgroundColor:"#f6f6f6",display:"flex",justifyContent:"center",flexDirection:"column"}}>
          <Typography>Choose Year</Typography>
          <div style={{display:"flex"}}>
          <FormControl sx={{ m: 1, minWidth: 150,backgroundColor:"white" }} size="small">
      <InputLabel id="demo-select-small-label">Year</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={age}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={2024}>2024</MenuItem>
        <MenuItem value={2025}>2025</MenuItem>
        <MenuItem value={2026}>2026</MenuItem>
      </Select>
    </FormControl>
    <FormControl sx={{ m: 1, minWidth: 150,backgroundColor:"white" }} size="small">
      <InputLabel id="demo-select-small-label">Month</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={age}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>01</MenuItem>
        <MenuItem value={2}>02</MenuItem>
        <MenuItem value={3}>03</MenuItem>
        <MenuItem value={4}>04</MenuItem>
        <MenuItem value={5}>05</MenuItem>
        <MenuItem value={6}>06</MenuItem>

      </Select>
    </FormControl>
          </div>
            <div style={{display:"flex",justifyContent:"center",marginTop:"20px"}}>
            <button className='Submit' autoFocus onClick={handleClickOpenBtn}>
            Submit
          </button>
            </div>
        </DialogContent>
        
      </Dialog> */}

      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={openBtn}
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
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <button className="Submit1">Download Template</button>
          <NavLink to="/testpage">
            <button className="Submit1">Upload Questions</button>
          </NavLink>
        </DialogContent>
      </Dialog>
    </div>
  );
}
