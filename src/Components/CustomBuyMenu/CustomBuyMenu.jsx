import React, { useState } from "react";
import "./CustomBuyMenu.css";
import { Link } from "react-router-dom";

function CustomBuyMenu() {
  const [showhover, setShowhover] = useState(false);
  const [showhovercolor, setShowhovercolor] = useState(false);

  return (
    <div className="custommenu-container">
      <div className="custommenu-container-main">
        <Link className="custommenu-container-main-link1">
          <div
            className="custommenu-container-main-text1"
            onMouseEnter={() => setShowhovercolor(true)}
            onMouseLeave={()=>setShowhover(false)}
          >
            Souce Codes
          </div>
        </Link>
        <hr className="custommenu-container-main-hr" />

        <Link className="custommenu-container-main-link1">
          <div className="custommenu-container-main-text1">OSS Plans</div>
        </Link>
        <hr className="custommenu-container-main-hr" />

        <Link className="custommenu-container-main-link1">
          <div className="custommenu-container-main-text1">IoT Codes</div>
        </Link>
        <hr className="custommenu-container-main-hr" />

        <Link className="custommenu-container-main-link1">
          <div className="custommenu-container-main-text1">IoT Hardware</div>
        </Link>
        {/* <hr className='custommenu-container-main-hr' /> */}
      </div>
    </div>
  );
}

export default CustomBuyMenu;
