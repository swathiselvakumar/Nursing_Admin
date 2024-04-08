import React from 'react'

export default function Btn({v1,v2,v3,v4,v5}) {
  const btn={
    height:"50px",
    width:"50px",
    borderRadius:"50%",
    border:"none",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
   marginLeft:"35px",
   marginRight:"30px",
   marginTop:"10px",
   backgroundColor:"white"
  }
  return (
    <div style={{padding:"10px"}}>
        <div>
            <button style={btn}>{v1}</button>
            <button style={btn}>{v2}</button>
            <button style={btn}>{v3}</button>
            <button style={btn}>{v4}</button>
            <button style={btn}>{v5}</button>

        </div>
    </div>
  )
}
