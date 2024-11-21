// import React from "react";

const btnStyle={
    backgroundColor: "white",
    border: "none",
    borderRadius: "100%",
    fontWeight: 600,
    boxShadow: "0px 0px 2px black",
    width: " 35px",
    height: "35px",
}
function Btn({num1,num2,num3,num4,num5}) {
  // var a = [1, 2, 3, 4, 5];
  const val=[
    {
      n:num1
    },
    {
      n:num2
    },
    {
      n:num3
    },
    {
      n:num4
    },
    {
      n:num5
    },
  ]
  return (
    <>
    
    
      {val.map((val,index) => (
        <button key={index}
          style={btnStyle}
        >
          {val.n}
        </button>
      ))}
    
    </>
  );
}

export default Btn;
