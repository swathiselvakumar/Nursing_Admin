

function TableNav() {
  return (
    <div>
      <div
        className="nav-header"
        style={{
          display: "flex",
          padding:'20px'
        }}
      >
        <div className="col1" style={{ flex: "2" }}>
          <h3>Report</h3>
        </div>
        <div
          className="col2"
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flex: "1",
            textAlign: "right",
            // backgroundColor: "red",
          }}
        >
          <h3>Stander : 100</h3>
          <h3>Premimum : 100</h3>
        </div>
      </div>
    </div>
  );
}

export default TableNav;
