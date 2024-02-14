

function TableButton() {
  return (
    <div>
      <div className="btn-wrapper" style={{padding:'20px'}}>
        <div
          className="btn-1"
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <button
            style={{
              padding: "15px 230px 15px 230px",
              fontWeight: "600",
              border: "none",
              color: "white",
              fontSize: "18px",
              backgroundColor: "#f0a04b",
            }}
          >
            Student
          </button>
          <button
            style={{
              padding: "15px 230px 15px 230px",
              fontWeight: "600",
              border: "none",
              color: "black",
              fontSize: "18px",
              backgroundColor: "white",
            }}
          >
            Test
          </button>
        </div>
      </div>
    </div>
  );
}

export default TableButton;
