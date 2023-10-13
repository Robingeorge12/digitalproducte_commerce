import React, { useState } from "react";
import "../ViewProductStyle/ViewProduct1.css";
import { Facebook } from "@material-ui/icons";
import { Twitter } from "@material-ui/icons";
import { Instagram } from "@material-ui/icons";
import { LinkedIn } from "@material-ui/icons";
import { YouTube } from "@material-ui/icons";
import { MusicNote } from "@material-ui/icons";
import { ArrowForwardIos } from "@material-ui/icons";
import { ArrowBackIos } from "@material-ui/icons";
import GoogleTranslate from "../GoogleTranslate";
function ViewProduct2() {
  let [count, setCount] = useState(0);
  let [item, setItem] = useState(1);
  let arr1 = [
    "20230314033006-00000009-arduinounorev3-cropped.png",
    "20230314033007-00000009-screenshot20230314at15.25.53.png",
    "20230314033008-00000009-screenshot20230314at15.25.49.png",
    "20230314033009-00000009-screenshot20230314at15.25.45.png",
  ];
  function myFunc() {
    if (count < arr1.length) {
      setCount(prev=>prev+1);
    } else {
      setCount(0);
    }
  }

  function myFunc2() {
    if (count < 0) {
      setCount(arr1.length - 1);
    } else {
      setCount(prev=>prev-1);
    }
  }
  return (
    <div className="viewProduct1MainContainer">
      <br></br>

      {/**************************************************************************************************** */}
      <div className="ViewProductInnerContainer">
        <section className="childFirstLeft">
          <button className="angleBracketButton2" onClick={() => myFunc2()}>
            <ArrowBackIos />
          </button>
          <button className="angleBracketButton" onClick={() => myFunc()}>
            <ArrowForwardIos />
          </button>

          <div className="im_gContainer">
            <img src={arr1[count]} alt="#" className="scrollImage"></img>
          </div>
        </section>
        <section className="childFirstRight">
          <div ClassName="TextContentVewProductDiv">
          <div style={{display:"flex",justifyContent:'space-around',marginTop:'30px'}}>
          <div>
          <h3 className="headerOfCard marginBottom0"> Arduino Uno Rev3 </h3>
          <p className="headerOfCard marginTop0">
            By <span style={{ color:"lightcoral"}}>Arduino IoT</span>
          </p>
          </div>
          
            <GoogleTranslate/>
            </div>
            <hr></hr>
            <div style={{ display: "flex", justifyContent: "space-around", marginTop: "20px" }}>
              <div className="TextContentVewProductChildDiv_">
                <div className="typeBoxes">Device Type</div>
                <br></br>
                <p className="hoverclassPurple fontweight">Development Kit</p>
              </div>
              <div className="TextContentVewProductChildDiv">
                <div className="typeBoxes">Application</div>
                <br></br>
                <p className="hoverclassPurple fontweight">AI </p>
               
              </div>
              <div className="TextContentVewProductChildDiv_">
                <div className="typeBoxes hardwareDiv">Hardware Architecture</div>
                <br></br>
                <p className="hoverclassPurple fontweight">ARM</p>
                <p className="hoverclassPurple fontweight">Multi-Core</p>
              </div>
            </div>
            <br></br>
            <hr></hr>
            <br></br>
            <div className="ProductAndDataSheetButonBox">
              <button className="productPagee">Product Page</button>
              <button className="dataSheet">Data Sheet</button>
            </div>
          </div>
        </section>
      </div>
      <div className="viewProductDiscruptionDiv">
        <div className="viewProductDiscruption_BuyNow_AddFavourite_btn">
          <button className="BUYNOWBtn">Buy Now</button>
          <button className="AddfavouritesBtn">Add to favourites</button>
        </div>
      </div>
      <div className="viewProductDiscruptionDiv">
        <div className="DiscruptionMainContainer">
          <div className="Product_Specification_CompanyInfoDiv">
            {""}
            <button className={item === 1 ? "buttonforProductDetails" : "buttonDeviceSpecification"} onClick={() => setItem(1)}>
              Products Details
            </button>
            <button className={item === 2 ? "buttonforProductDetails" : "buttonDeviceSpecification"} onClick={() => setItem(2)}>
              Devices Specifications
            </button>
            <button className={item === 3 ? "buttonforProductDetails" : "buttonDeviceSpecification"} onClick={() => setItem(3)}>
              Company Information
            </button>
          </div>
          <br></br>
          {/**CONDITIONAL RERENDERING *************************************/}
          {item === 1 ? (
            <div style={{ display: "flex", width: "100%" }}>
              {/********************************description Component start***************************** */}
              <div className="discBox">
                <h4>Description</h4>
                <p className="discPara">
                Introducing the Arduino Uno Rev3 - the latest version of the world's most popular microcontroller board. The Arduino Uno Rev3 is packed with features to help you bring your creative ideas to life. With its easy-to-use interface and powerful microcontroller, this board is perfect for anyone looking to get started with electronics or take their skills to the next level.The Arduino Uno Rev3 features 14 digital input/output pins, 6 analog inputs, a 16 MHz quartz crystal, a USB connection, a power jack, and an ICSP header. It is compatible with a wide range of sensors, modules, and shields, making it a versatile board for a range of applications.Whether you're a hobbyist, a student, or a professional, the Arduino Uno Rev3 is a must-have tool for your electronics toolbox. Start building your own DIY projects, create your own IoT solutions, or simply explore the world of electronics with this incredible board. Get yours today and start creating!
                </p>
                <p  className="discPara">Arduino Uno is a microcontroller board based on the ATmega328P. It has 14 digital input/output pins (of which 6 can be used as PWM outputs), 6 analog inputs, a 16 MHz ceramic resonator (CSTCE16M0V53-R0), a USB connection, a power jack, an ICSP header and a reset button. It contains everything needed to support the microcontroller; simply connect it to a computer with a USB cable or power it with a AC-to-DC adapter or battery to get started.</p>
                
             
              </div>
              <div className="">

                <img src="20230314033006-00000009-arduinounorev3-cropped.png" alt="#" className="descImg arduinounorev3cropped"></img>
              </div>
              {/********************************description Component end***************************** */}
            </div>
          ) : item === 2 ? (
            <div className="PRODUCTSPECIFICATIONbox">
              {/******************************************* Product Features End ******************************************************************* */}
              <h1>Device Specifications</h1>
              <div className="TextContentVewProductChildDiv_Parent">
                <div>
                  <h5 className="marginTop_marginBottom0 colorGrey">Hardware Architecture</h5>
                  <p className="marginTop_marginBottom0">2x SX1303 LoRa mPCIe cards</p>
                </div>
                <div>
                  <h5 className="marginTop_marginBottom0 colorGrey">I/O Interfaces</h5>
                  <p className="marginTop_marginBottom0">SD-CARD</p>
                  <p className="marginTop_marginBottom0">USB</p>
                  <p className="marginTop_marginBottom0">Audio Out</p>
                </div>
                <div>
                  <h5 className="marginTop_marginBottom0 colorGrey">Silicon Vendor</h5>
                  <p className="marginTop_marginBottom0">Other</p>
                </div>
                <div>
                  <h5 className="marginTop_marginBottom0 colorGrey">Power</h5>
                  <p className="marginTop_marginBottom0">1A</p>
                </div>
                <div>
                  <h5 className="marginTop_marginBottom0 colorGrey">Network Connectivity</h5>
                  <p className="marginTop_marginBottom0">GSM/EDGE: B3/B8</p>
                </div>
                <div>
                  <h5 className="marginTop_marginBottom0 colorGrey">Availability region</h5>
                  <p className="marginTop_marginBottom0">USA</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="CompanyINFORMATIONbOX">
              {/**Company Information Start********************************************* */}
              <div style={{ display: "flex", width: "100%", paddingLeft: "2%" }}>
                <div style={{ width: "50%" }}>
                  <h5 className="AlignLeft_marginLeft2">Arduino IoT</h5>
                  <p className="AlignLeft_marginLeft2">
                    Arduino is widely used for IoT applications, enabling users to connect their devices to the internet and control them remotely. Arduino IoT solutions range from home automation and
                    smart cities to industrial automation and agriculture.
                  </p>
                  <p className="AlignLeft_marginLeft2">Visit company’s website</p>
                </div>
                <div style={{ display: "flex", width: "50%", paddingLeft: "2%" }}>
                  <img src="large.gif" alt="#" className="CompanyInfoImage"></img>
                </div>
                <div></div>
              </div>
            </div>
          )}
          {/**Company Information End********************************************* */}
        </div>
      </div>
      <div className="bgImageContainer"  style={{border:'none'}}>
        <div className="bgImg2Container"  style={{border:'none'}}>
          <div className="childBox_bgImg2Container" id="bgcolorPinkColorBlack">
            <div className="inputfield_bgImg2Container">
              <h2 style={{ marginLeft: "10px" }}>Stay in touch</h2>
              <input type="text" placeholder="Please enter your email" className="input-inputfield"></input>
              <br></br>
              <button className="suscribeButton-bgImg2Container">Suscribe</button>
            </div>
            <div className="bgImg2Container-para">
              <p className="fontSizeSmall"  id="lineheight"  style={{color:'white'}}>
                Get Practical Tips For Business and Developers. Learn about PieceX Community Needs for Source Code Projects. Be the First to Know PieceX Newest Free Community Code Projects.
              </p>
            </div>

            <div></div>
          </div>
        </div>
       
        <div className="sourceCode-Footer-icons-box">
          <div style={{ marginLeft: "5%" }}>
            <h1>
              GTM<span className="blue">x</span>
            </h1>
            <p style={{ color: "purple", marginBottom: "0" }}>Contact Us</p>
            <p style={{ marginTop: "0" }}>supportcenter@GTMx.com</p>
          </div>
          <div className="IconBoxParentDiv">
            <div className="iconBox">
              <MusicNote className="MusicNoteIcon" />
            </div>
            <div className="iconBox fbIconIcon">
              <Facebook className="icOn" />
            </div>
            <div className="iconBox TwitterIcon">
              <Twitter className="icOn" />
            </div>
            <div className="iconBox instagramIcon">
              <Instagram className="icOn" />
            </div>
            <div className="iconBox linkedInIcon">
              <LinkedIn className="icOn" />
            </div>
            <div className="iconBox YouTubeIcon">
              <YouTube className="icOn" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewProduct2;
