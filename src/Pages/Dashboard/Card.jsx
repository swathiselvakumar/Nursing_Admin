import React, { useEffect, useState } from "react";
import StuIcon from "../../assets/icons/student.png";
import { Grid, Typography } from "@mui/material";
import axios from "axios";

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
    marginRight: "20px", // Adjust spacing between cards
  };
   
  const Box1 = {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
  };
   
  const containerStyle = {
    // min-width: "100%", // Adjust width of the container
    padding: "20px 0", // Add padding to improve aesthetics
    overflowX: "auto", // Enable horizontal scrolling
    whiteSpace: "nowrap", // Ensure cards stay on one line
    display: "flex", // Ensure flex behavior
    // backgroundColor:'red',
    minwidth:50
  };
  
  return (
    <div style={containerStyle}>
      {/* <Grid container spacing={1}> */}
        {cards.map((data, index) => (
          // <Grid item key={index} xs={12} sm={4} md={6} lg={2} xl={2}>
            <div style={Box}>
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
          // </Grid>
        ))}
      {/* </Grid> */}
    </div>
  );
}
