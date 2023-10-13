import React from "react";
import "./LandingPage.css";

import { useTranslation } from "react-i18next";

function LandingPage() {
  const { t } = useTranslation();

  return (
    <div className="landing-container">
      <div className="landing-container-div1">
        <div className="landing-container-div1-box1">
          <p className="landing-container-div1-box1-p1">
            {t("The Best Markert Place for Buying")}{" "}
            <span className="landing-container-div1-box1-p1-cs1">
              & {t("Selling Source Code")}
            </span>
          </p>
          <p className="landing-container-div1-box1-p2"></p>
        </div>
        <div className="landing-container-div1-box2">
          <p className="landing-container-div1-box2-p1">
            {t("Accelerate software development with ready-to-use source code")}
            <span style={{ color: "#17a2b8" }}>.</span>
          </p>
          <p className="landing-container-div1-box2-p2">
            {t("Earn recurrent revenue by selling your own source code")}{" "}
            <span style={{ color: "#17a2b8" }}>.</span>
          </p>
        </div>
        <div className="landing-container-div1-box3">
          <div className="landing-container-div1-box3-seldiv">
            <select name="" id="" className="landing-container-div1-box3-sel">
              <option value="">{t("Code")}</option>
              <option value="">{t("IoT")}</option>
              <option value="">{t("OSS")}</option>
              <option value=""></option>
            </select>
          </div>
          <div className="landing-container-div1-box3-ipdiv">
           
            <input
              type="text"
              className="landing-container-div1-box3-ip"
              placeholder={t("Find The Souce Code You Need")}
            />
          </div>
        </div>

        <div className="landing-container-div1-box4">
          <div className="landing-container-div1-box4-btndiv">
            <button className="landing-container-div1-box4-btndiv-btn1">
              <span className="landing-container-div1-box4-btndiv-btn1-s1">
                {t("BUY CODE")}
              </span>
            </button>
            <button className="landing-container-div1-box4-btndiv-btn2">
              {" "}
              <span className="landing-container-div1-box4-btndiv-btn1-s2">
                {t("SELL CODE")}
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="landing-container-div2">
        <div className="landing-container-div2-imgdiv">
          <div className="landing-container-div2-img1">
            <img
              src="https://fasset.id/blog/wp-content/uploads/2020/12/1080-Blog-featured-Crypto-vs-2.gif"
              className="landing-container-div2-img1"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
