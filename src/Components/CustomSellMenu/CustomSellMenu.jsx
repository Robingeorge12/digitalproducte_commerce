import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./CustomSellMenu.css"

function CustomSellMenu() {
    const [showhover, setShowhover] = useState(false);
    const [showhovercolor, setShowhovercolor] = useState(false);
  
    return (
      <div className="customsell-container">
        <div className="customsell-container-main">
          <Link className="customsell-container-main-link1">
            <div
              className="customsell-container-main-text1"
              onMouseEnter={() => setShowhovercolor(true)}
              onMouseLeave={()=>setShowhover(false)}
            >
              Sell Code
            </div>
          </Link>
          <hr className="customsell-container-main-hr" />
  
          <Link className="customsell-container-main-link1">
            <div className="customsell-container-main-text1">Sell OSS Plans</div>
          </Link>
          <hr className="customsell-container-main-hr" />
  
          <Link className="customsell-container-main-link1">
            <div className="customsell-container-main-text1">Sell IoT Codes</div>
          </Link>
          <hr className="customsell-container-main-hr" />
  
          <Link className="customsell-container-main-link1">
            <div className="customsell-container-main-text1">Sell IoT Hardware</div>
          </Link>
          {/* <hr className='customsell-container-main-hr' /> */}
        </div>
      </div>
    )
}

export default CustomSellMenu