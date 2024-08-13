import React, { useContext, useEffect, useState } from "react";
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import DescriptionIcon from '@mui/icons-material/Description';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import ModelTrainingIcon from '@mui/icons-material/ModelTraining';
import { Grid, Typography } from "@mui/material";
import axios from "axios";
import { navContext } from "../../context/navContext";

export default function Card() {
  const [cards, setCards] = useState([]);
  const email = localStorage.getItem("userMail");
  const { Endpoint } = useContext(navContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          `${Endpoint}admin/get/A_ViewCount.php`,
          {
            adminId: email,
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

  const icons = [<ContactPageIcon style={{fontSize:"40px",color:"#1B4242"}}/>,<WorkspacePremiumIcon style={{fontSize:"40px",color:"#1B4242"}}/>,<AutoStoriesIcon style={{fontSize:"40px",color:"#1B4242"}} />,<LibraryBooksIcon style={{fontSize:"40px",color:"#1B4242"}}/>,<DescriptionIcon style={{fontSize:"40px",color:"#1B4242"}}/>,< VaccinesIcon style={{fontSize:"40px",color:"#1B4242"}}/>,<ModelTrainingIcon style={{fontSize:"40px",color:"#1B4242"}}/>];

  return (
    <div style={{ maxWidth: '80vw', display: 'flex', overflow: 'auto' }}>
      {Array.isArray(cards) && cards.length > 0 ? (
        cards.map((data, index) => (
          <div style={containerStyle} key={index}>
            <div style={Box}>
              <div style={Box1}>
                <div>
                  {icons[index % icons.length]}
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
      ) : (
        <p>No data available</p> // Fallback message or component
      )}

    </div>
  );
}
