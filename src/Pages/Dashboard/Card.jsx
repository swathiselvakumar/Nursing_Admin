import React from 'react'
import StuIcon from '../../assets/icons/student.png'
import { Typography } from '@mui/material'
import Icon from '../../assets/icons/ICON.png'
import Bank from '../../assets/icons/bank.png'
import Book from '../../assets/icons/book.png'
export default function Card() {
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
      <div style={Box}>
      <div style={Box1}>
          <div>
          <img src={StuIcon}/>
          </div>
          <div>
            <Typography style={{fontSize:"30px",color:"#e4a45a"}}>20</Typography>
          </div>
        </div>
        <div style={{textAlign:"center",paddingBottom:"20px"}}>
          <Typography>Premium</Typography>
        </div>
      </div>

      <div style={Box}>
      <div style={Box1}>
          <div>
          <img src={StuIcon}/>
          </div>
          <div>
            <Typography style={{fontSize:"30px",color:"#e4a45a"}}>15</Typography>
          </div>
        </div>
        <div style={{textAlign:"center",paddingBottom:"20px"}}>
          <Typography>Standard</Typography>
        </div>
      </div>

      <div style={Box}>
      <div style={Box1}>
          <div>
          <img src={Icon}/>
          </div>
          <div>
            <Typography style={{fontSize:"30px",color:"#e4a45a"}}>5</Typography>
          </div>
        </div>
        <div style={{textAlign:"center",paddingBottom:"20px"}}>
          <Typography>Courses</Typography>
        </div>
      </div>

      <div style={Box}>
      <div style={Box1}>
          <div>
          <img src={Bank}/>
          </div>
          <div>
            <Typography style={{fontSize:"30px",color:"#e4a45a"}}>20</Typography>
          </div>
        </div>
        <div style={{textAlign:"center",paddingBottom:"20px"}}>
          <Typography>PMCQ'S</Typography>
        </div>
      </div>

      <div style={Box}>
      <div style={Box1}>
          <div>
          <img src={Book}/>
          </div>
          <div>
            <Typography style={{fontSize:"30px",color:"#e4a45a"}}>20</Typography>
          </div>
        </div>
        <div style={{textAlign:"center",paddingBottom:"20px"}}>
          <Typography>Subjects</Typography>
        </div>
      </div>
        
    </div>
  )
}
