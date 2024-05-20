import React from "react";

export default function MicroBtn({ v1, v2, v3, v4, v5, handleQuestionChange,fetchQuestions  }) {
  const handleClick = (index) => {
    // Call the handleQuestionChange function with the new question id
    handleQuestionChange(index);
    fetchQuestions(index);
  };

  const btnStyle = {
    height: "50px",
    width: "50px",
    borderRadius: "50%",
    border: "none",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    marginLeft: "15px",
    marginRight: "20px",
    marginTop: "10px",
    backgroundColor: "white",
  };

  return (
    <div style={{ padding: "10px",marginLeft:"30px" }}>
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
