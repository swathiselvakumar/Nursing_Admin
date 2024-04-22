import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Aptitude from "../../assets/images/Aptitude.jpg";
import Reasoning from "../../assets/images/reasoning.png";
import English from "../../assets/images/english.png";
import GK from "../../assets/images/gk.webp";
import { Typography } from "@mui/material";
import Plus from "../../assets/icons/plus b.png";
import { NavLink } from "react-router-dom";
import Delete from "../../assets/icons/delete.jpeg";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";

export default function NonNursingCard() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [instruction, setInstruction] = useState("");
  const [datas, setDatas] = useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddCategory = async () => {
    try {
      const response = await axios.post(
        "https://vebbox.in/Nursing/controllers/api/admin/post/A_InsertNonNursingCategory.php",
        {
          adminId: "nandinivebbox@gmail.com",
          name: name,
          desc: description,
          instruction: instruction,
        }
      );
      console.log("New item added:", response.data);
      setName("");
      setDescription("");
      setInstruction("");
      handleClose();
    // setOpen(false);

      getCourses();
    } catch (error) {
      console.error("Error adding new item:", error);
    }
  };

  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = async () => {
    try {
      const res = await axios.post(
        "https://vebbox.in/Nursing/controllers/api/admin/get/A_ViewNonNursingCategory.php",
        {
          adminId: "nandinivebbox@gmail.com",
        }
      );
      const data = res.data;
      const newData = data.map((item) => ({
        img:Aptitude,Reasoning,English,
          // item.subject_name === "Aptitude"
          //   ? Aptitude
          //   : item.subject_name === "Reasoning"
          //   ? Reasoning
          //   : item.subject_name === "GK"
          //   ? GK
          //   : item.subject_name === "English"
          //   ? English
          //   : null,
        name: item.category_name,
        path: `/noninstitution/${item.sno}`,
      }));
      newData.push({
        img: Plus,
        name: "Add Category",
        onClick: handleClickOpen,
      });
      setDatas(newData);
    } catch (error) {
      console.error("Error fetching course data:", error);
    }
  };

  return (
    <div>
      <Container fluid>
        <Row style={{ marginTop: "20px", justifyContent: "center" }}>
          {datas.map((d, index) => (
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
              <NavLink
                to={d.path}
                style={{ color: "black", textDecoration: "none" }}
              >
                <div className="Div" onClick={d.onClick}>
                  <img src={Delete} className="del" />
                  <div>
                    <img src={d.img} height="70px" />
                  </div>
                  <div style={{ paddingTop: "10px" }}>
                    <Typography style={{ fontWeight: 600 }}>
                      {d.name}
                    </Typography>
                  </div>
                </div>
              </NavLink>
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
          Add Category
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
            <Typography>Category Name :</Typography>
            <input
              type="text"
              className="textbox"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Typography>Category Description :</Typography>
            <textarea
              rows={4}
              cols={40}
              placeholder="Add Description"
              className="textarea"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <Typography>Instruction :</Typography>
            <textarea
              rows={4}
              cols={40}
              placeholder="Add Instruction"
              className="textarea"
              value={instruction}
              onChange={(e) => setInstruction(e.target.value)}
            />
            <br />
            <button
              autoFocus
              onClick={handleAddCategory}
              className="subjectBtn"
              // onClick={handleClose}
            >
              Submit
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
