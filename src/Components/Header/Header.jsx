import React from "react";
import "./Header.css";
import { AiFillCaretDown, AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);

  return (
    <div className="header-container">
      <div className="header-container-main-div">
        

        <div
            className="header-div1-box2-select1"
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
          >
            <p className="header-div1-box2-select1-buy">Web source code</p>
            <div className="header-div1-box2-select1-icondiv">
              {" "}
              <AiFillCaretDown className="header-div1-box2-select1-icon" />
            </div>
            {show && (
              <div className="header-div1-box2-select1-hover"></div>
            )}
          </div>
        
          <div
            className="header-div1-box2-select2"
            onMouseEnter={() => setShow2(true)}
            onMouseLeave={() => setShow2(false)}
          >
            <p className="header-div1-box2-select2-buy">Mobile apps</p>
            <div className="header-div1-box2-select2-icondiv">
              {" "}
              <AiFillCaretDown className="header-div1-box2-select2-icon" />
            </div>
            {show2 && (
              <div className="header-div1-box2-select2-hover"></div>
            )}
          </div>


          <div
            className="header-div1-box2-select3"
            onMouseEnter={() => setShow3(true)}
            onMouseLeave={() => setShow3(false)}
          >
            <p className="header-div1-box2-select3-buy">Enterprise</p>
            <div className="header-div1-box2-select3-icondiv">
              {" "}
              <AiFillCaretDown className="header-div1-box2-select3-icon" />
            </div>
            {show3 && (
              <div className="header-div1-box2-select3-hover"></div>
            )}
          </div>

          <div
            className="header-div1-box2-select4"
            onMouseEnter={() => setShow4(true)}
            onMouseLeave={() => setShow4(false)}
          >
            <p className="header-div1-box2-select4-buy">GTM IoT</p>
            <div className="header-div1-box2-select4-icondiv">
              {" "}
              <AiFillCaretDown className="header-div1-box2-select4-icon" />
            </div>
            {show4 && (
              <div className="header-div1-box2-select4-hover"></div>
            )}
          </div>


          <Link to="" className="header-container-div2-osslink">
          {" "}
          <div className="header-container-div2-ossdiv">GTM OSS</div>
        </Link>

        <Link to="" className="header-container-div2-ftlink">
          {" "}
          <div className="header-container-div2-ftdiv">Featured</div>
        </Link>

        <Link to="" className="header-container-div2-communitylink">
          {" "}
          <div className="header-container-div2-communitydiv">Community codes</div>
        </Link>
       
      </div>
    </div>
  );
}

export default Header;
