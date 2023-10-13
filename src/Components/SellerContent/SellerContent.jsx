import React from "react";
import "./SellerContent.css";

function SellerContent() {
  return (
    <div className="sell-container">
      <div className="sell-container-div1">
        <p className="sell-container-div1-head">Become <span className="sell-container-div1-head-s1">A Seller</span> </p>

        <div className="sell-container-div1-text">
          <p className="sell-container-div1-text-p"><span className="sell-container-div1-text-p-s1" >List your Software Source Code</span> for sale on the PieceX platform and generate passive income in just a few simple steps.</p>
        </div>
        <button className="sell-container-div1-btn">Start Selling</button>
      </div>

      <div className="sell-container-div2">
        <img src="https://www.mohitecommerce.com/wp-content/uploads/2020/02/How-to-Start-Ecommerce-Business-in-india.gif" className="sell-container-div2-img" alt="" />
      </div>
    </div>
  );
}

export default SellerContent;
