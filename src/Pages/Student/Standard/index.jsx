import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { StandardStyle } from './style';
import SearchIcon from '@mui/icons-material/Search';
import { styled} from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Container,Row,Col } from 'react-bootstrap';
import UpdateIcon from '@mui/icons-material/Update';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import StdTb from '../../StudentTable/StdTb';
import Dialog from '@mui/material/Dialog';
import BreadcrumbsComp from '../../../components/Common/BreadCrumbs';
import Pagination from '@mui/material/Pagination';
import Block from '../../../assets/icons/block.png'
import { NavLink } from 'react-router-dom';
import CustomBreadCrumbs from '../../../components/Common/CustomBreadcrumbs';
import { getLocalStorage } from '../../../utils/helperFunc';
import { PATH } from '../../../constants/routeConstants';
import SearchAppBar from '../../../components/Common/Searchinput/Search';
export default function Standard() {
  const languageName = getLocalStorage("languageName");

  const BreadcrumbItems = [
    { label: "Dashboard", path: PATH.DASHBOARD },
    { label: "Standard List", path: PATH.STANDARD },
  ];
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = useState(""); // State variable to store search input

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Function to handle change event of the search field
  // Function to handle change event of the search field
  const handleChange = (event) => {
    const { value } = event.target;
    setSearch(value);
    console.log("Search input:", value); // Log the search input value
  };

  const Btn1 = {
    backgroundColor: "#fefbe9",
    width: "200px",
    fontWeight: "bold",
    color: "black",
    textTransform: "capitalize",
    boxShadow:
      " rgba(0, 0, 0.15, 0.15) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 3px -3px",
  };
  const Btn2 = {
    backgroundColor: "white",
    color: "black",
    fontWeight: "bold",
    textTransform: "capitalize",
    boxShadow:
      "rgba(0, 0, 0.15, 0.15) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 3px -3px",
    width: "200px",
  };
  return (
    <StandardStyle>
      <div className="bodystyle">
        <div style={{ padding: "25px" }}>
          <CustomBreadCrumbs items={BreadcrumbItems} />
        </div>

        <Container fluid style={{ marginTop: "20px" }}>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12} xl={12} className="MainCol">
              <div className="title">
                <Typography sx={{ fontWeight: "bold", fontSize: "18px" }}>
                  Standard List{" "}
                </Typography>
              </div>
              <div className="search">
                <SearchAppBar onChange={handleChange} value={search} />
              </div>

              <div>
                <NavLink to="/unblock">
                  <Button style={Btn1}>
                    <img src={Block} height="20px" /> &nbsp; Block List
                  </Button>
                </NavLink>
              </div>
              <div>
                <NavLink to="/stadd">
                  <Button style={Btn2} onClick={handleClickOpen}>
                    <AddCircleOutlineIcon style={{ height: "20px" }} />
                    &nbsp; Add Members
                  </Button>
                </NavLink>
              </div>
            </Col>
          </Row>
        </Container>
        <div style={{ marginTop: "25px", padding: "10px" }}>
          <StdTb />
        </div>
        <div>
          <Pagination count={10} shape="rounded" />
        </div>
      </div>
      {/* <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2, fontFamily: "Roboto, sans-serif" }} id="customized-dialog-title">
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
       
      </BootstrapDialog> */}
    </StandardStyle>
  );
}
