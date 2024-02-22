// import { Container } from "react-bootstrap";

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
          <h6>Stander : 100</h6>
          <h6>Premimum : 100</h6>
        </div>
      </div>
    </div>
  );
}

export default TableNav;
