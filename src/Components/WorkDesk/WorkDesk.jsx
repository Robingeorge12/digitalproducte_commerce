import React from "react";
import "./WorkDesk.css";

function WorkDesk() {
  return (
    <div className="work-container">
      <div className="work-container-div1">
        <p className="work-container-div1-head">
          How
          <span className="work-container-div1-head-s1">it works?</span>{" "}
        </p>

        <div className="work-container-div1-text">
          <p className="work-container-div1-text-p">
            Thousands of Apps in just 4 simple steps
          </p>
        </div>
      </div>

      <div className="work-container-div2">
        <div className="work-container-div2-w1">
          <div className="work-container-div2-box1">
            <img
              src="https://cdn.dribbble.com/users/2647467/screenshots/7895567/media/5068bb3d943a1eb5411d7f5ccb1be45a.gif"
              className="work-container-div2-box1-img"
              alt=""
            />
            <p className="work-container-div2-box1-p1">Browse & Pick</p>
          </div>

          <div className="work-container-div2-box2">
            <img
              src="https://astrobaltics.eu/wp-content/uploads/2021/06/Mobile-payments.gif"
              className="work-container-div2-box2-img"
              alt=""
            />
            <p className="work-container-div2-box2-p1">Complete Payment</p>
          </div>
        </div>

        <div className="work-container-div2-w2">
          <div className="work-container-div2-box3">
            <img
              src="https://camo.githubusercontent.com/7126894c136cfcea2ead9679838b0ca5b8bf50f64c0b76dc0e69e75d9fc57314/68747470733a2f2f7237713677397a362e726f636b657463646e2e6d652f6361726565722f77702d636f6e74656e742f75706c6f6164732f323032302f30332f68656c6c6f2e676966"
              className="work-container-div2-box3-img"
              alt=""
            />
            <p className="work-container-div2-box3-p1">Download Code</p>
          </div>

          <div className="work-container-div2-box4">
            <img
              src="https://images.prismic.io/smarttask/8ba97070-d140-4232-8695-1728b83f2ff0_Work+Breakdown+Structure.gif?auto=compress,format"
              className="work-container-div2-box4-img"
              alt=""
            />
            <p className="work-container-div2-box4-p1">Customize Project</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkDesk;
