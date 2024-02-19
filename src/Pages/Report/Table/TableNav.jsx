

function TableNav() {
  return (
    <div style={{display:'flex',justifyContent:'center'}}>
      <div
        className="nav-header"
        style={{
        
          // backgroundColor:'red',
          display: "flex",
          width:"100%",
          padding:'20px 50px'
        }}
      >
        <div className="col1" style={{ flex: "1.2" }}>
          <h3>Report</h3>
        </div>
        <div
          className="col2"
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flex: "1",
            textAlign: "right",
            
          }}
        >
          <h5>Stander : 100</h5>
          <h5>Premimum : 100</h5>
        </div>
      </div>
    </div>
  );
}

export default TableNav;
