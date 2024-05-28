import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Aptitude from "../../assets/images/Aptitude.jpg";
import Reasoning from "../../assets/images/reasoning.png";
import English from "../../assets/images/english.png";
import GK from "../../assets/images/gk.webp";
import { Typography } from "@mui/material";
import Plus from "../../assets/icons/plus b.png";
import { NavLink } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import { navContext } from "../../context/navContext";

const categoryImages = {
  Aptitude,
  Reasoning,
  English,
  GK,
};

export default function NonNursingCard() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [instruction, setInstruction] = useState("");
  const [datas, setDatas] = useState([]);
  const email = localStorage.getItem("userMail");
  const { Endpoint } = useContext(navContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddCategory = async () => {
    try {
      await axios.post(
        `${Endpoint}admin/post/A_InsertNonNursingCategory.php`,
        {
          adminId: email,
          name: name,
          desc: description,
          instruction: instruction,
        }
      );
      setName("");
      setDescription("");
      setInstruction("");
      handleClose();
      getCourses();
    } catch (error) {
      console.error("Error adding new item:", error);
    }
  };

  const getCourses = async () => {
    try {
      const res = await axios.post(
        `${Endpoint}admin/get/A_ViewNonNursingCategory.php`,
        {
          adminId: email,
        }
      );
      const data = res.data;
      const newData = data.map((item) => ({
        img: categoryImages[item.category_name] || Aptitude,
        name: item.category_name,
        path: `/noninstitution/${item.sno}`,
        sno: item.sno,
      }));
      if (newData.length === 0) {
        setDatas([
          {
            img: Plus,
            name: "Add Category",
            onClick: handleClickOpen,
          },
        ]);
      } else {
        newData.push({
          img: Plus,
          name: "Add Category",
          onClick: handleClickOpen,
        });
        setDatas(newData);
      }
    } catch (error) {
      console.error("Error fetching course data:", error);
      setDatas([
        {
          img: Plus,
          name: "Add Category",
          onClick: handleClickOpen,
        },
      ]);
    }
  };

  const CardDelete = async (sno) => {
    try {
      await axios.delete(
        `${Endpoint}admin/delete/A_deleteNonNursingCategory.php`,
        {
          data: {
            adminId: email,
            categoryId: sno,
          },
        }
      );
      getCourses();
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  useEffect(() => {
    getCourses();
  }, []);

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
                height:"150px"
              }}
            >
              <div
                className="Div d-flex flex-column p-3 service-div shadow w-100 h-100"
                onClick={d.onClick}
              >
                {d.name !== "Add Category" && (
                  <button
                    onClick={() => CardDelete(d.sno)}
                    className="del"
                    style={{ border: "none", backgroundColor: "white" }}
                  >
                    <DeleteIcon />
                  </button>
                )}
                {d.name === "Add Category" ? (
                  <div style={{ textAlign: "center" }}>
                    <img src={d.img} height="70px" alt="Add Category" />
                    <div>
                    <Typography style={{ fontWeight: 600, textAlign: "center",paddingTop:"20px" }}>
                        {d.name}
                      </Typography>
                    </div>
                  </div>
                ) : (
                  <NavLink to={d.path} style={{ color: "black", textDecoration: "none" }}>
                    <div style={{ textAlign: "center" }}>
                      <img src={d.img} height="70px" alt={d.name} />
                    </div>
                    <div style={{ paddingTop: "10px" }}>
                      <Typography style={{ fontWeight: 600, textAlign: "center" }}>
                        {d.name}
                      </Typography>
                    </div>
                  </NavLink>
                )}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle
          sx={{
            m: 0,
            p: 2,
            width: "420px",
            textAlign: "center",
            backgroundColor: "#f6f6f6",
          }}
        >
          Add Category
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
        </DialogTitle>
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
            <button autoFocus onClick={handleAddCategory} className="subjectBtn">
              Submit
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
