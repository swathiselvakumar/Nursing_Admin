import React, { useState, useContext, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Typography } from '@mui/material';
import { NavLink, useParams } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from "@mui/icons-material/Delete";
import axios from 'axios';
import { navContext } from '../../context/navContext';
import CustomBreadCrumbs from '../../components/Common/CustomBreadcrumbs';
import { PATH } from '../../constants/routeConstants';
import Model from '../../assets/images/model.png';
import '../YearMCQ/CardStyle.css';

export default function ModelInstitution() {
  const BreadcrumbItems = [
    { label: "Dashboard", path: PATH.DASHBOARD },
    { label: "Model Mock", path: PATH.MODELMOCK },
    { label: "Institution", path: PATH.MODELINSTITUTION },
  ];

  const [open, setOpen] = useState(false);
  const [stage, setStage] = useState('');
  const [stages, setStages] = useState([]);
  const [papers, setPapers] = useState({});
  const email = localStorage.getItem("userMail");
  const { Endpoint } = useContext(navContext);
  const { sno } = useParams();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = async () => {
    setOpen(false);

    try {
      const response = await axios.post(
        `${Endpoint}admin/post/A_InsertModelMockStage.php`,
        {
          adminId: email,
          institutionId: sno,
          stageName: stage,
        }
      );
      setStage('');
      fetchData(); // Refresh data after adding a stage
    } catch (error) {
      console.error("Error adding stage:", error);
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
      console.log("Papers:", res.data);
      setPapers(res.data);
    } catch (error) {
      console.error("Error fetching papers:", error);
    }
  };

  const fetchData = async () => {
    try {
      const res = await axios.post(
        `${Endpoint}admin/get/A_ViewStage.php`,
        {
          adminId: email,
          institution_id: sno
        }
      );
      console.log("Stages:", res.data);
      setStages(res.data);
    } catch (error) {
      console.error("Error fetching stages:", error);
    }
  };

  useEffect(() => {
    fetchData();
    PaperData();
  }, []);

  const CardDelete = async (id) => {
    try {
      await axios.delete(
        `${Endpoint}admin/delete/A_deleteModelMockPaper.php`,
        {
          data: {
            adminId: email,
            paperId: id,
          },
        }
      );
      PaperData(); // Refresh papers after deletion
    } catch (error) {
      console.error("Error deleting paper:", error);
    }
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
          <Col xs={12} className="title1" style={{ display: 'flex', alignItems: 'center' }}>
            <img src={Model} height="40px" alt="Model" />
            &nbsp;&nbsp;
            <Typography style={{ fontWeight: 700, paddingTop: "10px" }}>
              Institution 1
            </Typography>
          </Col>
        </Row>
      </Container>
      <div className="TotalBox">
        <Container className="MainBox">
          <Row>
            {stages.length > 0 ? (
              stages.map(stage => (
                <Col key={stage.sno} xs={12} sm={6} md={4} lg={3} className="mb-4">
                  <div className="box" style={{ backgroundColor: "black", marginBottom: "10px", width: "100%" }}>
                    <button
                      style={{
                        backgroundColor: "black",
                        border: "none",
                        paddingTop: "5px",
                        color: "white",
                        width: "100%",
                        textAlign: "center"
                      }}
                    >
                      {stage.stage_name}
                    </button>
                  </div>
                  {papers[stage.sno] && papers[stage.sno].length > 0 && (
                    papers[stage.sno].map((paper, index) => (
                      <div key={index}>
                        <NavLink to={`/mocktablepage/${paper.sno}/${sno}/${stage.sno}`}>
                          <button
                            className="box"
                            style={{
                              backgroundColor: "white",
                              border: "none",
                              width: "100%",
                              textAlign: "center",
                              marginBottom: "10px"
                            }}
                          >
                            {paper.mcq_name}
                          </button>
                        </NavLink>
                        <button onClick={() => CardDelete(paper.sno)} className="delete" style={{ border: "none", backgroundColor: "white", height: "10px" }}>
                          <DeleteIcon />
                        </button>
                        <NavLink
                          to={`/viewquestionsmodel/${paper.sno}/${sno}/${stage.sno}`}
                          style={{ textDecoration: "none", display: "block", marginTop: "10px" }}
                        >
                          <div style={{ textAlign: "center" }}>
                            View Questions
                          </div>
                        </NavLink>
                      </div>
                    ))
                  )}
                </Col>
              ))
            ) : (
              <Typography>No data available</Typography>
            )}
          </Row>
        </Container>
        <div className="BtnBox" style={{ marginTop: "20px" }}>
          <button className="Btn" onClick={handleClickOpen}>
            Add Stage
          </button>
        </div>
            <div className="BtnBox" key={sno}>
              <NavLink to={`/addmock/${sno}`}>
                <button className="Btn">Add Papers</button>
              </NavLink>
            </div>
          
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
