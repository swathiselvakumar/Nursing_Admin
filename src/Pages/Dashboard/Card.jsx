import React, { useState } from 'react'
import StuIcon from '../../assets/icons/student.png'
import { Typography } from '@mui/material'
import Icon from '../../assets/icons/ICON.png'
import Bank from '../../assets/icons/bank.png'
import Book from '../../assets/icons/book.png'
export default function Card() {

  const [card, setCard] = useState([
    {
      numbercard: 20,
      text: "Premium",
    },
    {
      numbercard: 15,
      text: "Standard",
    },
    {
      numbercard: 5,
      text: "Courses",
    },
    {
      numbercard: 20,
      text: "PMCA'S",
    },
    {
      numbercard: 20,
      text: "Subjects",
    },
  ]);
  const Box={
    backgroundColor:"#e7f6f2",
    width:"170px",
    borderRadius:"10px",
    
  }
  const Box1={
    display:"flex",
    justifyContent:"space-between",
    padding:"20px",
   
  }
  return (
    <div style={{display:"flex",justifyContent:"space-around"}}>
      {card.map((data,index)=>
    (
    <div style={Box} key={index}>
     <div style={Box1}>
     <div>
       <img src={StuIcon} />
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
     

     
        
    </div>
  )
}
