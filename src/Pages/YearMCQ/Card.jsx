import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Institution from "../../assets/images/vadakk.png";
import { Typography } from "@mui/material";
import Plus from "../../assets/icons/plus b.png";
import { NavLink } from "react-router-dom";
import "./CardStyle.css";
import Delete from "../../assets/icons/delete.jpeg";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import Rong from "../../assets/icons/rong.jpg";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { navContext } from "../../context/navContext";


export default function YearCard() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState([]);
  const[sno,setSno]=useState([])
  const [obj, setObj] = useState([]);
const email=localStorage.getItem("userMail");
const [click, setclick] = useState(false);
const {Endpoint}=useContext(navContext);


  const getCourses = async () => {
    try {
      const res = await axios.post(
        `${Endpoint}admin/get/A_ViewPmcqInstitution.php`,
        {
          adminId:email,
          
        }
      );
       const sno = res.data.sno;
       setSno(sno);
     

      const obj = res.data.map((item) => ({
        img: Institution,
        name: item.institution_name,
        path: `/yearinstitution/${item.sno}`,
        sno1: item.sno,
      }));
      
      obj.push({
        img: Plus,
        name: "Add institution",
        path: "/addmcq",
      });
      setName(obj);
      setObj(obj);
      // console.log(obj);
    } catch (error) {
      console.error("Error fetching course data:", error);
    }
  };
  const CardDelete = async (sno) => {
    setclick(true);
    try {
      const res = await axios.delete(
        `${Endpoint}admin/delete/A_deletePMCQInstitution.php`,
        {
          data: {
            adminId:email,
            institutionId: sno,
          },
        }
      );
      getCourses();
    } catch (error) {
      console.error("Error fetching course data:", error);
    }
  };

  useEffect(() => {
    getCourses();
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const Btn = {
    backgroundColor: "white",
    color: "black",
    border: "1px solid black",
    width: "100px",
    marginTop: "20px",
  };
  const Btn1 = {
    backgroundColor: "red",
    color: "white",
    marginLeft: "10px",
    width: "100px",
    marginTop: "20px",
  };

  return (
    <div>
      <Container fluid>
        <Row style={{ marginTop: "20px", justifyContent: "center" }}>
          {name.map((d) => (
            <Col
              key={d.name}
              xs={12}
              sm={12}
              md={6}
              lg={3}
              xl={3}
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
                <div className="Div">
                  {
                    d.name!="Add institution" && <button onClick={() => CardDelete(d.sno1)} className="del" style={{border:"none",backgroundColor:"white"}}><DeleteIcon/></button>
                  }
                  
                  <NavLink to={d.path}
                style={{ color: "black", textDecoration: "none" }}>
                  <div style={{display:"flex",justifyContent:"center"}}>
                    <img src={d.img} alt="institution" height="70px" />
                  </div>
                  <div style={{ paddingTop: "10px",textAlign:"center" }}>
                    <Typography style={{ fontWeight: 600 }}>
                      {d.name}
                    </Typography>
                  </div>
                  </NavLink>
                </div>
            </Col>
          ))}
        </Row>
      </Container>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle
          sx={{ m: 0, p: 2 }}
          id="customized-dialog-title"
        ></DialogTitle>
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
        <DialogContent sx={{ textAlign: "center" }}>
          <img
            src={Rong}
            alt="student"
            height="25px"
            style={{ marginTop: "-30px" }}
          />
          <br />
          Are You sure ?<br />
          you want to delete this student?
          <br />
          <Button onClick={handleClose} style={Btn}>
            Cancel
          </Button>
          <Button onClick={handleClose} style={Btn1}>
            Delete
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
