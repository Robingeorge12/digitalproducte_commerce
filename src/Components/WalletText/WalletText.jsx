import React from "react";
import "./WalletText.css";
import { FaRegHandPointRight } from "react-icons/fa";

function WalletText() {
  return (
    <div className="wallet-container">
      <div className="wallet-container-main">
        <p className="wallet-container-main-h1">
          GTM <span className="wallet-container-main-h1-s1">Wallet</span>{" "}
        </p>
        <p className="wallet-container-main-p1">
          The first tech-friendly Pre-Payment option to expedite the process of
          purchasing source code!
        </p>

        <div className="wallet-container-main-div1">
          <div className="wallet-container-main-div1-icondiv">
            <FaRegHandPointRight className="wallet-container-main-div1-icon" />
          </div>
          <p className="wallet-container-main-div1-p1">
            <span className="wallet-container-main-div1-p1-s1">Pre-pay </span>
            your Wallet budget with your teammates and colleagues
          </p>
        </div>

        <div className="wallet-container-main-div2">
          <div className="wallet-container-main-div2-icondiv">
            <FaRegHandPointRight className="wallet-container-main-div2-icon" />
          </div>
          <p className="wallet-container-main-div2-p1">
            <span className="wallet-container-main-div2-p1-s1">Share</span>
            the amount you want into your PieceX Wallet
          </p>
        </div>

        <div className="wallet-container-main-div3">
          <div className="wallet-container-main-div3-icondiv">
            <FaRegHandPointRight className="wallet-container-main-div3-icon" />
          </div>
          <p className="wallet-container-main-div3-p1">
            <span className="wallet-container-main-div3-p1-s1">Earn </span>
            bonus points per wallet charge | i.e. $250 points for $5,000 charge
          </p>
        </div>

        <div className="wallet-container-main-div4">
          <div className="wallet-container-main-div4-icondiv">
            <FaRegHandPointRight className="wallet-container-main-div4-icon" />
          </div>
          <p className="wallet-container-main-div4-p1">
            <span className="wallet-container-main-div4-p1-s1">Make </span>
            purchases easier and faster
          </p>
        </div>

        <div className="wallet-container-main-div5">
          <button className="wallet-container-main-div5-btn">Learn More</button>
        </div>
      </div>

<div  className="wallet-container-main2">
<div className="wallet-container-main2-box1">
  <img src="https://thumbs.gfycat.com/PreciousTalkativeHarvestmouse-max-1mb.gif" className="wallet-container-main2-box1-img"  alt="" />
</div>

</div>



{/* // "https://www.mkgifs.com/wp-content/uploads/2022/04/credit-card-gif-1.gif"
// "https://img.money.com/2020/03/2-many-credit-cards-2.gif"
https://cdn.dribbble.com/users/942597/screenshots/10621106/media/aee896a99909937d6dd202d478fc5eff.gif
// "https://cliply.co/wp-content/uploads/2019/08/371908930_CREDIT_CARD_400px.gif" */}
    </div>
  );
}

export default WalletText;
