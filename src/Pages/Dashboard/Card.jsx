import React, { useEffect, useState } from "react";
import StuIcon from "../../assets/icons/student.png";
import { Grid, Typography } from "@mui/material";
import axios from "axios";


export default function Card() {
  const [cards, setCards] = useState([]);
  const email=localStorage.getItem("userMail");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://vebbox.in/Nursing/controllers/api/admin/get/A_ViewCount.php",
          {
            adminId:email
        }
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
    
  };

  return (
    
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
        
    </div>

  );
}
