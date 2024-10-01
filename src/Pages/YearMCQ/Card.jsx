import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import { navContext } from "../../context/navContext";
import Plus from "../../assets/icons/plus b.png";
import UpdateIcon from '@mui/icons-material/Update';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
export default function YearCard() {
  const [name, setName] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [data,setData]=useState([])
  const email = localStorage.getItem("userMail");
  const [institution,setInstitution]=useState('');
  const [desc,setDesc]=useState('');
  const [instruction,setInstruction]=useState('');
  const { Endpoint } = useContext(navContext);
  const [sno,setSno]=useState();
  const navigate = useNavigate(); // Use useNavigate hook from React Router

  const getCourses = async () => {
    try {
      const res = await axios.post(
        `${Endpoint}admin/get/A_ViewPmcqInstitution.php`,
        {
          adminId: email,
        }
      );
      if (res.data.length > 0) {
        const obj = res.data.map((item) => ({
          img: `https://nursingupdate.in/Nursing/controllers/api/admin/upload/${item.img}`,
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
      } else {
        setName([
          {
            img: Plus,
            name: "Add institution",
            path: "/addmcq",
          },
        ]);
      }
    } catch (error) {
      console.error("Error fetching course data:", error);
      setName([
        {
          img: Plus,
          name: "Add institution",
          path: "/addmcq",
        },
      ]);
    }
  };

  const TextB={
    backgroundColor:"#DEE2DF",
    border:"none",
    borderRadius:"5px",
    outline:"none",
    paddingLeft:"10px",
    height:"30px",
    width:"230px",fontSize:"12px"
  }
  const CardUpdate = (id) => {
    setOpen(true);
    updateView(id);
    setSno(id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const updateView = async (sno) => {
    try {
      const response = await axios.post(
        `${Endpoint}admin/get/A_ViewPmcqInstitutionDetails.php`,
        {
          adminId: email,
          id: sno,
        }
      );
      const Datas=response.data[0];
      setData(Datas);
      setInstitution(Datas.institution_name);
      setDesc(Datas.institution_desc);
      setInstruction(Datas.institution_instruction);
    
    } catch (error) {
      console.error("Error fetching achievement data:", error);
    }
  };

  const handleClickOpen = async () => {
    try {
      await axios.post(
        `${Endpoint}admin/put/A_updatePmcqInstitution.php`,
        {
          admin_id: email,
          id:sno,
          name:institution,
          desc:desc,
          instruction:instruction
        }
      );
      setOpen(false);
      getCourses();
    } catch (error) {
      console.error("Error updating course:", error);
    }
  };

  const handleChange = (setter) => (event) => {
    setter(event.target.value);
  };
  const CardDelete = async (sno) => {
    try {
      await axios.delete(
        `${Endpoint}admin/delete/A_deletePMCQInstitution.php`,
        {
          data: {
            adminId: email,
            institutionId: sno,
          },
        }
      );
      getCourses();
    } catch (error) {
      console.error("Error deleting institution:", error);
    }
  };

  useEffect(() => {
    getCourses();
  }, []);

  const handleCardClick = (d) => {
    if (d.name !== "Add institution") {
      navigate(d.path, { state: { institutionName: d.name } });
    } else {
      navigate(d.path);
    }
  };

  return (
    <div>
      <Container fluid>
        <Row style={{ marginTop: "20px", justifyContent: "center" }}>
          {name.map((d) => (
            <Col
              key={d.sno1 || d.name}
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
                {d.name !== "Add institution" && (     
                  <div>
                    <button
                    onClick={() => CardUpdate(d.sno1)}
                    className="up"
                    style={{ border: "none", backgroundColor: "white" }}
                  >
                    <UpdateIcon />
                  </button>
                    <button
                    onClick={() => CardDelete(d.sno1)}
                    className="del"
                    style={{ border: "none", backgroundColor: "white" }}
                  >
                    <DeleteIcon />
                  </button>
                  </div>
                )}
                <div
                  onClick={() => handleCardClick(d)}
                  style={{ color: "black", textDecoration: "none", cursor: "pointer" }}
                >
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <img src={d.img} alt="institution" height="70px" />
                  </div>
                  <div style={{ paddingTop: "10px", textAlign: "center" }}>
                    <Typography style={{ fontWeight: 600 }}>{d.name}</Typography>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <Dialog
  open={open}
  onClose={handleClose}
  aria-labelledby="alert-dialog-title"
  aria-describedby="alert-dialog-description"
  fullWidth={true}
  maxWidth={false}
  PaperProps={{
    style: {
      width: "50%",
      textAlign: "center",
      maxWidth: "100%", // Ensure it doesn't exceed screen width
    },
  }}
>
  <DialogTitle id="alert-dialog-title">{"Update Institution"}</DialogTitle>
  <DialogContent>
    <div
      style={{
        marginTop: "15px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%", // Responsive width
      }}
    >
      {/* Institution Name Input */}
      <div style={{ width: "100%", maxWidth: "600px", marginBottom: "15px" }}>
        <label style={{textAlign:"left",width:'100%'}}>Institution Name</label>
        <input
          type="text"
          style={{
            ...TextB,
            width: "100%", // Full width for responsive design
          }}
          onChange={handleChange(setInstitution)}
          value={institution}
        />
      </div>

      {/* Institution Description Textarea */}
      <div style={{ width: "100%", maxWidth: "600px", marginBottom: "15px" }}>
        <label style={{textAlign:"left",width:'100%'}}>Institution Description</label>
        <textarea
          rows={4}
          style={{
            ...TextB,
            width: "100%", // Full width for responsive design
            height: "100px", // Fixed height for consistent design
            resize: "vertical", // Allow resizing vertically only
          }}
          placeholder="Add Description"
          onChange={handleChange(setDesc)}
          value={desc}
        ></textarea>
      </div>

      {/* Instruction Textarea */}
      <div style={{ width: "100%", maxWidth: "600px", marginBottom: "15px" }}>
        <label style={{textAlign:"left",width:'100%'}}>Instruction</label>
        <textarea
          rows={4}
          style={{
            ...TextB,
            width: "100%", // Full width for responsive design
            height: "100px", // Fixed height for consistent design
            resize: "vertical", // Allow resizing vertically only
          }}
          placeholder="Add Instruction"
          onChange={handleChange(setInstruction)}
          value={instruction}
        ></textarea>
      </div>
    </div>
  </DialogContent>
  <DialogActions>
    <Button onClick={handleClickOpen}>Submit</Button>
    <Button onClick={handleClose} autoFocus>
      Cancel
    </Button>
  </DialogActions>
</Dialog>


    </div>
  );
}
