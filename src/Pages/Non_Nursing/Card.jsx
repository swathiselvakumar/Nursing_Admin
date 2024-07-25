import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Aptitude from "../../assets/images/Aptitude.jpg";
import Reasoning from "../../assets/images/reasoning.png";
import English from "../../assets/images/english.png";
import GK from "../../assets/images/gk.webp";
import { Typography,Button } from "@mui/material";
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
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
const categoryImages = {
  Aptitude,
  Reasoning,
  English,
  GK,
};

export default function NonNursingCard() {

  const {file,setFile} = useContext(navContext);
  const handleFileChange = (event) => {
    // Get the selected file from the input
    const file = event.target.files[0];
    const newName = file.name.replaceAll(" ", "-");
    const newFile = new File([file], newName, { type: file.type });
    setFile(newFile);
    
  
  };
  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });
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
    const formData = new FormData();
      
    // Append the file to the FormData object
    formData.append('file', file);
  
    // Append other form data fields
    formData.append('admin_id', email);
    formData.append('name', name);
    formData.append('instruction', instruction);
    formData.append('desc', description);
    try {
      await axios.post(
        `${Endpoint}admin/post/A_InsertNonNursingCategory.php`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data' // Set content type to multipart/form-data
          }
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
        img: `https://vebbox.in/Nursing_Check/controllers/api/admin/upload/${item.img}`,
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
            <div >
                  <label htmlFor="description" className="pass-lab" >
                    Image :{" "}
                  </label>
                  <br/>
                  <input
                    type="file"
                    id="file"
                    accept=".jpg, .jpeg, .png"
                   
                    style={{ display: "none" }}
                  />
                  <label htmlFor="file">
                    <Button
                      component="label"
                      role={undefined}
                      variant="contained"
                      tabIndex={-1}
                      startIcon={<CloudUploadIcon />}
                      style={{
                        height: "50px",
                        width: "340px",
                        marginTop: "5px",
                        backgroundColor: "white",
                        color: "black",
                        border: "1px dashed black",
                        boxShadow: "none",
                      }}
                    >
                      Upload file
                      <VisuallyHiddenInput type="file"  onChange={handleFileChange}/>
                    </Button>
                  </label>
                </div>
            <button autoFocus onClick={handleAddCategory} className="subjectBtn">
              Submit
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
