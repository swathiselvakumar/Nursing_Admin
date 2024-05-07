import React, { useEffect, useState } from "react";
import StuIcon from "../../assets/icons/student.png";
import { Grid, Typography } from "@mui/material";
import axios from "axios";
import { Container,Row,Col } from "react-bootstrap";

export default function Card() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://vebbox.in/Nursing/controllers/api/admin/get/A_ViewCount.php"
        );
        const responseData = response.data;
        const transformedData = Object.keys(responseData).map((key) => ({
          text: key,
          numbercard: responseData[key],
        }));
        setCards(transformedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const Box = {
    backgroundColor: "#e7f6f2",
    width: "170px",
    borderRadius: "10px",
    // overflowX: "auto", // Enable horizontal scrolling
    // flexShrink: 0,
    marginRight: "20px", // Adjust spacing between cards
  };

  const Box1 = {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
  };

  const containerStyle = {
    padding: "20px 0", // Add padding to improve aesthetics
    // display: "flex", // Ensure flex behavior
    // flexDirection:"row"
    // flexShrink: 0,
    // justifyContent: "center", // Center the cards horizontally
  };

  return (
    // <Container fluid >
     
    // <Row style={{overflow:"auto",flexDirection:"row",display:'flex',backgroundColor:'red'}}>
    <div style={{maxWidth:'80vw',display:'flex',overflow:'auto'}}>
        { 
          cards.map((data,index)=>(
            <div  style={containerStyle}>
              <div key={index} style={Box}>
              <div style={Box1}>
              <div>
              <img src={StuIcon} alt="Student Icon" />
            </div>
            <div>
              <Typography style={{ fontSize: "30px", color: "#e4a45a" }}>
                {data.numbercard}
              </Typography>
            </div>
            
              </div>
              <div style={{ textAlign: "center", paddingBottom: "20px" }}>
            <Typography>{data.text}</Typography>
          </div>
              </div>
            </div>
          ))
        }
        {/* <Col> */}
        {/* <div style={containerStyle}>
      {cards.map((data, index) => (
        <div key={index} style={Box}>
          <div style={Box1}>
            <div>
              <img src={StuIcon} alt="Student Icon" />
            </div>
            <div>
              <Typography style={{ fontSize: "30px", color: "#e4a45a" }}>
                {data.numbercard}
              </Typography>
            </div>
          </div>
          <div style={{ textAlign: "center", paddingBottom: "20px" }}>
            <Typography>{data.text}</Typography>
          </div>
        </div>
      ))}
    </div> */}
        {/* </Col> */}
      {/* // </Row> */}
    {/* // </Container> */}
    </div>

  );
}
