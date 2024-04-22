import React from "react";

export default function Btn({ v1, v2, v3, v4, v5, handleQuestionChange }) {
  const handleClick = (questionId) => {
    // Call the handleQuestionChange function with the new question id
    handleQuestionChange(questionId);
  };

  const btnStyle = {
    height: "50px",
    width: "50px",
    borderRadius: "50%",
    border: "none",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    marginLeft: "35px",
    marginRight: "30px",
    marginTop: "10px",
    backgroundColor: "white",
  };

  return (
    <div style={{ padding: "10px" }}>
      <div>
        <button style={btnStyle} onClick={() => handleClick(v1)}>
          {v1}
        </button>
        <button style={btnStyle} onClick={() => handleClick(v2)}>
          {v2}
        </button>
        <button style={btnStyle} onClick={() => handleClick(v3)}>
          {v3}
        </button>
        <button style={btnStyle} onClick={() => handleClick(v4)}>
          {v4}
        </button>
        <button style={btnStyle} onClick={() => handleClick(v5)}>
          {v5}
        </button>
      </div>
    </div>
  );
}
