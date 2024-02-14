// import React from "react";
import "./TestPage.css";

import Btn from "./Btn";

function TestPage() {
  return (
    <div
      style={{ backgroundColor: "#E1EEDD", height: "100vh", }}
    >
      <div className="parentt-wrap">
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
              <Btn />
            </div>
            <div className="r1">
              <Btn />
            </div>
            <div className="r1">
              <Btn />
            </div>
            <div className="r1">
              <Btn />
            </div>
            <div className="r1">
              <Btn />
            </div>
            <div className="r1">
              <Btn />
            </div>
            <div className="r1">
              <Btn />
            </div>
            <div className="r1">
              <Btn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestPage;
