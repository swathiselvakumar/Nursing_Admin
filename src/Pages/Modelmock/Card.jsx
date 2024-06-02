import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Model from "../../assets/images/model.png";
import { Typography,Button } from "@mui/material";
import Plus from "../../assets/icons/plus b.png";
import { NavLink } from "react-router-dom";
import "../YearMCQ/CardStyle.css";
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
export default function ModelMockCard() {

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
  const [data, setData] = useState([]);
  const email = localStorage.getItem("userMail");
  const { Endpoint } = useContext(navContext);

 
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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

  const handleAddInstitution = async () => {
    const formData = new FormData();
    formData.append('file', file);
  
    // Append other form data fields
    formData.append('admin_id', email);
    formData.append('name', name);
    formData.append('instruction', instruction);
    formData.append('desc', description);
    try {
      const response = await axios.post(
        `${Endpoint}admin/post/A_InsertModelMockInstitution.php`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data' // Set content type to multipart/form-data
          }
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
          adminId: email,
        }
      );
      if (res.data.message === "no details found") {
        setData([]);
      } else {
        const fetchedData = res.data.map((item) => ({
          img: `https://vebbox.in/Nursing/controllers/api/admin/upload/${item.img}`,
          name: item.institution_name,
          path: `/modelinstitution/${item.sno}`,
          sno: item.sno,
        }));
        setData(fetchedData);
      }
    } catch (error) {
      console.error("Error fetching institution data:", error);
      setData([]);
    }
  };

  const CardDelete = async (sno) => {
    try {
      await axios.delete(
        `${Endpoint}admin/delete/A_deleteModelMockCategory.php`,
        {
          data: {
            adminId: email,
            institutionId: sno,
          },
        }
      );
      fetchData();
    } catch (error) {
      console.error("Error deleting institution:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Container fluid>
        <Row style={{ marginTop: "20px", justifyContent: "center" }}>
          {/* Always show the "Add Institution" card */}
          <Col
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
            className="order-last"
          > 
            <div className="Div" onClick={handleClickOpen} >
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img src={Plus} height="70px" alt="Add Institution" />
              </div>
              <div style={{ paddingTop: "10px", textAlign: "center" }}>
                <Typography style={{ fontWeight: 600 }}>Add Institution</Typography>
              </div>
            </div>
          </Col>
          {/* Display existing institution cards */}
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
              <div className="Div">
                <button
                  onClick={() => CardDelete(d.sno)}
                  className="del"
                  style={{ border: "none", backgroundColor: "white" }}
                >
                  <DeleteIcon />
                </button>
                <NavLink to={d.path} style={{ color: "black", textDecoration: "none" }}>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <img src={d.img} height="70px" alt="model" />
                  </div>
                  <div style={{ paddingTop: "10px", textAlign: "center" }}>
                    <Typography style={{ fontWeight: 600 }}>{d.name}</Typography>
                  </div>
                </NavLink>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
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
        <DialogContent dividers style={{ padding: "20px", backgroundColor: "#f6f6f6" }}>
          <div style={{ margin: "20px" }}>
            <Typography>Institution Name :</Typography>
            <input type="text" className="textbox" onChange={handlechangename} value={name} />
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
            <button autoFocus onClick={handleAddInstitution} className="subjectBtn">
              Submit
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
