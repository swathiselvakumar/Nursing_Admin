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
function Btn() {
  var a = [1, 2, 3, 4, 5];
  return (
    <>
    
    
      {a.map((val,index) => (
        <button key={index}
          style={btnStyle}
        >
          {val}
        </button>
      ))}
    
    </>
  );
}

export default Btn;
