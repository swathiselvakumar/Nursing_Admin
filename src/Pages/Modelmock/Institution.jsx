import React, { useState,useContext } from 'react'
import BreadcrumbsComp from '../../components/Common/BreadCrumbs'
import { Container,Row,Col } from 'react-bootstrap'
import {Typography } from '@mui/material'
import Delete from '../../assets/icons/delete.jpeg'
import { NavLink, useParams } from 'react-router-dom'
import Model from '../../assets/images/model.png'
import '../YearMCQ/CardStyle.css'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { PATH } from '../../constants/routeConstants';
import CustomBreadCrumbs from '../../components/Common/CustomBreadcrumbs';
import axios from 'axios'
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect } from 'react'
import '../YearMCQ/CardStyle.css'
import { navContext } from '../../context/navContext'

export default function ModelInstitution() {

  const BreadcrumbItems = [
    { label: "Dashboard", path: PATH.DASHBOARD },
    
    { label: "Model Mock", path: PATH.MODELMOCK },
    { label: "Institution", path: PATH.MODELINSTITUTION },
    
  ];
  const [open, setOpen] = React.useState(false);
  const[stage,setStage]=useState();
  const [data,setData]=useState([]);
  const [paper,setpaper]=useState([]);
  const [id,setId]=useState();
const email=localStorage.getItem("userMail");
const {Endpoint}=useContext(navContext);
const {sno}=useParams();
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = async() => {
    setOpen(false);

try{ 
const response = await axios.post(
      `${Endpoint}admin/post/A_InsertModelMockStage.php`,
      {
        adminId:email,
        institutionId: sno,
        stageName: stage,
      }
    );
    setStage(response.data.stageName);
}catch(error)
{
      console.error("Error fetching data:", error);

} 
    
  };
  const PaperData = async () => {
    try {
      const res = await axios.post(
        `${Endpoint}admin/get/A_ViewModelMockStagePaper.php`,
        {
          adminId: email,
          id: sno
        }
      );
  
      const papers = Object.values(res.data).flatMap(stageData => stageData);
      setpaper(papers); // Assuming `setpaper` is the state updater function
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  


  const fetchData=async()=>{
    try{ 
      const res= await axios.post(
            `${Endpoint}admin/get/A_viewStage.php`,
            {
              adminId:email,
              institution_id:sno
            }
          );
          const stageData = res.data;
         
          setData(stageData);
      }catch(error)
      {
            console.error("Error fetching data:", error);
      
      }
  }
  console.log("...",data);


  useEffect(()=>{
    fetchData();
    PaperData();
  },[])

  const CardDelete = async (id) => {
    // setclick(true);
    try {
      const res = await axios.delete(
        `${Endpoint}admin/delete/A_deleteModelMockPaper.php`,
        {
          data: {
            adminId:email,
            paperId: id,
          }, 
        }
      );

      console.log(data.paperId);
      PaperData();
    } catch (error) {
      console.error("Error fetching course data:", error);
    }
  };

  useEffect(() => {
    PaperData();
  }, []);


  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };


const handlestage = (event) => {
  setStage(event.target.value);
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
              <img src={Model} height="40px" />
            </div>
            &nbsp;&nbsp;
            <div>
              <Typography style={{ fontWeight: 700, paddingTop: "10px" }}>
                Institution 1
              </Typography>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="TotalBox">
        <Container className="MainBox">
          <Row>
          
    <Container className="MainBox">
    <Row>
            {Array.isArray(data) && data.length > 0 ? (
              data.map((d) => (
                <div>
                  <Col key={d.sno}  >
                  <div className="box" style={{ backgroundColor: "black",marginBottom:"10px" }}>
                    <button
                      style={{
                        backgroundColor: "black",
                        border: "none",
                        paddingTop: "5px",
                        color: "white",
                      }}
                    >
                      {d.stage_name}
                    </button>
                  </div>
                  
                </Col>
                {Array.isArray(paper) && paper.length > 0 && (paper[0].institution_id) ? (
                  console.log(paper),
                  paper
                    // .filter((r) => r.institution_id === d.sno)  // Filter papers by stage_id
                    .map((j,index) => (
                      <div  key={index}>
                        <NavLink to={`/mocktablepage/${j.sno}/${sno}/${d.sno}`}>
                        <button
                        className="box" 
                          style={{
                            backgroundColor: "white",
                            border: "none",
                           
                          }} 
                        >
                          {j.mcq_name}
                        </button>
                        </NavLink>
                        <button onClick={() => CardDelete(j.sno)} className="delete" style={{border:"none",backgroundColor:"white",height:"10px"}}><DeleteIcon/></button>
                        <NavLink
                  to={`/viewquestionsmodel/${j.sno}/${sno}/${d.sno}`}
                  style={{ textDecoration: "none", marginLeft: "20px" }}
                >
                  <div
                    style={{ display: "flex", marginLeft: 160, marginTop: 20 }}
                  >
                    View Questions
                  </div>
                </NavLink>
                      </div>
                    ))
                ) : null}
                </div>
                
              ))
            ) : (
              <Typography>No data available</Typography>
            )}
            
          </Row>
    </Container>
  

            
          </Row>
        </Container>
        <div className="BtnBox" style={{marginTop:"20px"}}>
          <button className="Btn" onClick={handleClickOpen}>
            Add Stage
          </button>
        </div>
        {
          data.map((s)=>(
            <div className="BtnBox">
          <NavLink to={`/addmock/${sno}/${s.sno}`}>
            <button className="Btn">Upload Questions</button>
          </NavLink>
        </div>
          ))
        }
        
      </div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle
          sx={{
            m: 0,
            p: 2,
            width: "400px",
            textAlign: "center",
            backgroundColor: "#f6f6f6",
          }}
          id="customized-dialog-title"
        >
          Add Stage
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
          style={{
            padding: "20px",
            backgroundColor: "#f6f6f6",
            width: "400px",
          }}
        >
          <div style={{ margin: "10px" }}>
            <Typography>Add Stage :</Typography>
            <input
              type="text"
              className="textbox"
              value={stage}
              onChange={handlestage}
            />

            <button autoFocus onClick={handleClose} className="subjectBtn">
              Submit
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
