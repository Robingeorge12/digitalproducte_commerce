import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-div1">

        
        <div className="footer-div1-box1">
          <p className="footer-div1-box1-head">By Category</p>
          <Link to="" style={{ textDecoration: "none", color: "black" }}>
            <p className="footer-div1-box1-p">Web Source Codes</p>
          </Link>
          <Link to="" style={{ textDecoration: "none", color: "black" }}>
            <p className="footer-div1-box1-p">IOS</p>
          </Link>
          <Link to="" style={{ textDecoration: "none", color: "black" }}>
            <p className="footer-div1-box1-p">Android Apps</p>
          </Link>
          <Link to="" style={{ textDecoration: "none", color: "black" }}>
            <p className="footer-div1-box1-p">PHP Scripts and Website Source</p>
          </Link>
          <Link to="" style={{ textDecoration: "none", color: "black" }}>
            <p className="footer-div1-box1-p">Codes</p>
          </Link>
          <Link to="" style={{ textDecoration: "none", color: "black" }}>
            <p className="footer-div1-box1-p">FinTech</p>
          </Link>
        </div>

        <div className="footer-div1-box1">
          <p className="footer-div1-box1-head">More About GTM</p>
          <Link to="" style={{ textDecoration: "none", color: "black" }}>
            <p className="footer-div1-box1-p">Become an Affiliate</p>
          </Link>
          <Link to="" style={{ textDecoration: "none", color: "black" }}>
            <p className="footer-div1-box1-p">Become a Sales Agency</p>
          </Link>
          <Link to="" style={{ textDecoration: "none", color: "black" }}>
            <p className="footer-div1-box1-p">Code Consultancy for Resale</p>
          </Link>
          <Link to="" style={{ textDecoration: "none", color: "black" }}>
            <p className="footer-div1-box1-p">Rankings</p>
          </Link>
          <Link to="" style={{ textDecoration: "none", color: "black" }}>
            <p className="footer-div1-box1-p">How it Works</p>
          </Link>
          <Link to="" style={{ textDecoration: "none", color: "black" }}>
            <p className="footer-div1-box1-p">FAQs</p>
          </Link>
          <Link to="" style={{ textDecoration: "none", color: "black" }}>
            <p className="footer-div1-box1-p">Partners
</p>
          </Link>
        </div>

        <div className="footer-div1-box1">
          <p className="footer-div1-box1-head">Media</p>
          <Link to="" style={{ textDecoration: "none", color: "black" }}>
            <p className="footer-div1-box1-p">Articles</p>
          </Link>
          <Link to="" style={{ textDecoration: "none", color: "black" }}>
            <p className="footer-div1-box1-p">Blog</p>
          </Link>
        </div>



          <div className="footer-div1-box1">
          <p className="footer-div1-box1-head">License</p>
          <Link to="" style={{ textDecoration: "none", color: "black" }}>
            <p className="footer-div1-box1-p">License</p>
          </Link>
          <Link to="" style={{ textDecoration: "none", color: "black" }}>
            <p className="footer-div1-box1-p">Privacy Policy</p>
          </Link>
          <Link to="" style={{ textDecoration: "none", color: "black" }}>
            <p className="footer-div1-box1-p">Refund Policy</p>
          </Link>
          <Link to="" style={{ textDecoration: "none", color: "black" }}>
            <p className="footer-div1-box1-p">Management Company</p>
          </Link>
          <Link to="" style={{ textDecoration: "none", color: "black" }}>
            <p className="footer-div1-box1-p">Support</p>
          </Link>
        </div>
       




        
        <div className="footer-div1-box1">
          <p className="footer-div1-box1-head">Terms of Service</p>
          <Link to="" style={{ textDecoration: "none", color: "black" }}>
            <p className="footer-div1-box1-p"> Terms of Service</p>
          </Link>
          <Link to="" style={{ textDecoration: "none", color: "black" }}>
            <p className="footer-div1-box1-p">Wallet Terms of Service</p>
          </Link>
          <Link to="" style={{ textDecoration: "none", color: "black" }}>
            <p className="footer-div1-box1-p">Points Terms of Service</p>
          </Link>
          <Link to="" style={{ textDecoration: "none", color: "black" }}>
            <p className="footer-div1-box1-p">GTM OSS Terms of Service</p>
          </Link>
          <Link to="" style={{ textDecoration: "none", color: "black" }}>
            <p className="footer-div1-box1-p">GTM IoT Terms of Service</p>
          </Link>
        </div>


        {/* mediumspringgreen */}
      </div>

      <div className="footer-div2">
        <div className="footer-div2-box1">
        <p className="footer-div2-box1-p1"><span className="footer-div2-box1-ps1">G</span> <span className="footer-div2-box1-ps2">T</span><span className="footer-div2-box1-ps3">M</span></p>

        </div>
        <div className="footer-div2-box2">
        <img src="https://www.piecex.com/assets/img/common/footer/facebook.svg" className="footer-div2-box2-img" alt="" />
            <img src="https://www.piecex.com/assets/img/common/footer/twitter.svg" className="footer-div2-box2-img" alt="" />
            <img src="https://www.piecex.com/assets/img/common/footer/instagram.svg" className="footer-div2-box2-img" alt="" />
            <img src="https://www.piecex.com/assets/img/common/footer/linkedin.svg" className="footer-div2-box2-img" alt="" />
            <img src="https://www.piecex.com/assets/img/common/footer/youtube.svg" className="footer-div2-box2-img" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
