import React, { useState, useEffect,useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Model from "../../assets/images/model.png";
import { Typography } from "@mui/material";
import Plus from "../../assets/icons/plus b.png";
import { NavLink } from "react-router-dom";
import "../YearMCQ/CardStyle.css";
import Delete from "../../assets/icons/delete.jpeg";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import { navContext } from "../../context/navContext";

export default function ModelMockCard() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [instruction, setInstruction] = useState("");
  const [data, setData] = useState([]);
const email=localStorage.getItem("userMail");
const {Endpoint}=useContext(navContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handlechangename = (event) => {
    setName(event.target.value);
  };

  const handlechangedescription = (event) => {
    setDescription(event.target.value);
  };

  const handleChangeinstruction = (event) => {
    setInstruction(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddInstitution = async () => {
    try {
      const response = await axios.post(
        `${Endpoint}admin/post/A_InsertModelMockInstitution.php`,
        {
          adminId:email,
          name: name,
          desc: description,
          instruction: instruction,
        }
      );
      console.log("New institution added:", response.data);
      setName("");
      setDescription("");
      setInstruction("");
      fetchData();
      handleClose();
    } catch (error) {
      console.error("Error adding new institution:", error);
    }
  };
 
  const fetchData = async () => {
    try {
      const res = await axios.post(
        `${Endpoint}admin/get/A_ViewModelMockInstitution.php`,
        {
          adminId:email,
        }
      );
      const fetchedData = res.data.map((item) => ({
        img: Model,
        name: item.institution_name,
        path: `/modelinstitution/${item.sno}`,
        sno:item.sno
      }));
      fetchedData.push({
        img: Plus,
        name: "Add Institution",
        onClick: handleClickOpen,
      });
      setData(fetchedData);
    } catch (error) {
      console.error("Error fetching institution data:", error);
    }
  };

  const CardDelete = async (sno) => {
    try {
      const res = await axios.delete(
        `${Endpoint}admin/delete/A_deleteModelMockCategory.php`,
        {
          data: {
            adminId:email,
            institutionId: sno,
          },
        }
      );
      fetchData();
    } catch (error) {
      console.error("Error fetching course data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Container fluid>
        <Row style={{ marginTop: "20px", justifyContent: "center" }}>
          {data.map((d, index) => (
            <Col
              key={index}
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
                <div className="Div" onClick={d.onClick}>
                {
                    d.name!="Add Institution" && <button onClick={() => CardDelete(d.sno)} className="del" style={{border:"none",backgroundColor:"white"}}><DeleteIcon/></button>
                  }
                 <NavLink to={d.path}
                style={{ color: "black", textDecoration: "none" }}>
                 <div style={{display:"flex",justifyContent:"center"}}>
                    <img src={d.img} height="70px" alt="model" />
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
          sx={{
            m: 0,
            p: 2,
            width: "420px",
            textAlign: "center",
            backgroundColor: "#f6f6f6",
          }}
          id="customized-dialog-title"
        >
          Add Institution
        </DialogTitle>
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
          style={{ padding: "20px", backgroundColor: "#f6f6f6" }}
        >
          <div style={{ margin: "20px" }}>
            <Typography>Institution Name :</Typography>
            <input
              type="text"
              className="textbox"
              onChange={handlechangename}
              value={name}
            />
            <Typography>Institution Description :</Typography>
            <textarea
              rows={4}
              cols={40}
              placeholder="Add Description"
              className="textarea"
              onChange={handlechangedescription}
              value={description}
            />
            <Typography>Instruction :</Typography>
            <textarea
              rows={4}
              cols={40}
              placeholder="Add Instruction"
              className="textarea"
              onChange={handleChangeinstruction}
              value={instruction}
            />
            <br />
            <button
              autoFocus
              onClick={handleAddInstitution}
              className="subjectBtn"
            >
              Submit
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
