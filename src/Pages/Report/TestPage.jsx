// import React from "react";
import "./TestPage.css";
import { Container,Row,Col } from "react-bootstrap";
import Btn from "./Btn";

function TestPage() {
  return (
    <div
      style={{ backgroundColor: "#E1EEDD", height: "120vh", }}
    >
      <Container fluid>
      <div className="parentt-wrap">
        <Row>
          <Col>
          <div className="left-wrapper ">
          <div className="sm-nav">
            <span>Upload Test Questions</span>
            <span>
              <button className="common-btn">Edit</button>
            </span>
          </div>
          <div className="c1 ">
            <div className="q1">
              <p className="ques">Questions</p>
              <div className="viewQues">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. A
                  tempore quis quia aperiam illo.
                </p>
              </div>
              <div className="option">
                {/* <ul> */}
                <p>Option</p>
                <li>a)lorem</li>
                <li>a)lorem</li>
                <li>a)lorem</li>
                <li>a)lorem</li>
                {/* </ul> */}
              </div>
              <div className="answer">
                <p>Answer</p>
                {/* <ul> */}
                <li>a)lorem</li>
                {/* </ul> */}
              </div>
            </div>
            <div className="ft">
              <button className="common-btn">Save</button>
              <button className="common-btn">Remove</button>
            </div>
          </div>
        </div>
          </Col>
          <Col>
          <div className="rigth-wrapper">
          <div className="sm-nav2">
            <div className="boxGreen"></div>
            <span style={{ fontSize: "12px", fontWeight: "500" }}>Active</span>
            <div className="boxGreen" style={{backgroundColor:'yellow'}}></div>
            <span style={{ fontSize: "12px", fontWeight: "500" }}>Edit</span>
            <div className="boxGreen" style={{backgroundColor:'red'}}></div>
            <span style={{ fontSize: "12px", fontWeight: "500" }}>Remove</span>
          </div>
          <div className="select-num">
            <div className="r1">
              <Btn num1="1" num2="2" num3="3" num4="4" num5="5"/>
            </div>
            <div className="r1">
              <Btn num1="6" num2="7" num3="8" num4="9" num5="10"/>
            </div>
            <div className="r1">
              <Btn num1="11" num2="12" num3="13" num4="14" num5="15"/>
            </div>
            <div className="r1">
              <Btn num1="16" num2="17" num3="18" num4="19" num5="20"/>
            </div>
            <div className="r1">
              <Btn num1="21" num2="22" num3="23" num4="24" num5="25"/>
            </div>
            <div className="r1">
              <Btn num1="26" num2="27" num3="28" num4="29" num5="30"/>
            </div>
            <div className="r1">
              <Btn num1="31" num2="32" num3="33" num4="34" num5="35"/>
            </div>
            <div className="r1">
              <Btn num1="36" num2="37" num3="38" num4="39" num5="40"/>
            </div>
            <div className="r1">
              <Btn num1="41" num2="42" num3="43" num4="44" num5="45"/>
            </div>
          </div>
        </div>
          </Col>
        </Row>
        </div>
      </Container>
      
        
        
      
    </div>
  );
}

export default TestPage;
