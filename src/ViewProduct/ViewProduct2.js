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
    "20230314034130-00000010-screenshot20230314at15.32.07.png",
    "20230314034128-00000010-portentax8-cropped.png",
    "20230314034129-00000010-screenshot20230314at15.32.17.png",
    "20230314034129-00000010-screenshot20230314at15.32.10.png",
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

          <div className="im_gContainer" >
            <img src={arr1[count]} alt="#" className="scrollImage"></img>
          </div>
        </section>
        <section className="childFirstRight"  >
          <div ClassName="TextContentVewProductDiv">
           
            <div style={{display:"flex",justifyContent:'space-around',marginTop:'30px'}}>
            <div>
            <h3 className="headerOfCard marginBottom0">Portenta X8</h3>
            <p className="headerOfCard marginTop0">
              By <span style={{ color:"lightcoral"}}>Arduino IoT</span>
            </p>
            </div>
            
              <GoogleTranslate/>
              </div>

            <hr></hr>
            <div  className="TextContentVewProductChildDiv_Parent">
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
                Introducing the Arduino Portenta H7 - the ultimate solution for high-performance IoT applications.The Portenta H7 board packs a powerful punch, with an Arm Cortex-M7 and Cortex-M4 dual-core microcontroller, 2MB of RAM, and 16MB of flash memory. Its rich set of features, combined with a compact form factor, make it an ideal choice for advanced IoT applications.With its built-in wireless connectivity, the Portenta H7 lets you connect to the internet and control your devices remotely. It supports a wide range of communication protocols, including WiFi, Bluetooth, Ethernet, and LoRaWAN, making it easy to integrate with other devices and sensors.The Portenta H7 is also incredibly versatile, with a range of input and output options, including digital and analog pins, UART, SPI, I2C, and USB. It can be programmed using a variety of software tools, including the popular Arduino IDE and Arm's Mbed OS.Whether you're building smart agriculture systems, industrial automation solutions, or cutting-edge AI projects, the Portenta H7 is the perfect board for the job. Get yours today and experience the power of high-performance IoT.
                </p>
                <h6>Key benefits include:</h6>
               <ul>
               <li className="ulList">Two industrial products in one, combining Arduino’s availability of libraries/skills with container-based Linux distribution</li>
               <li className="ulList">Outstanding computational density - a total of 9 cores within a compact form factor </li>
               <li className="ulList">Multi-processor architecture allowing power-optimized processing</li>
               <li className="ulList">Leverage popular programming languages like Python, Java and Ruby among others</li>
               <li className="ulList">Real-time I/O and fieldbus/control on a dedicated core</li>
               <li className="ulList">Deploy powerful AI algorithms and machine learning on the edge</li>
               <li className="ulList">Secure OS/applications updates over-the-air</li>
               <li className="ulList">Industrial-grade security at the hardware level, thanks to its crypto chip on dedicated bus</li>
               <li className="ulList">Leverage the Arduino ecosystem to expand Portenta capabilities</li>
               <li className="ulList">Implement multi-protocol routing with a single module</li>
               <li className="ulList">Compatible with other Arduino Portenta products</li>
               </ul>
              </div>
              <div className="">
                <img src="hero-banner.png" alt="#" className="descImg hero_banner"></img>
              </div>
              {/********************************description Component end***************************** */}
            </div>
          ) : item === 2 ? (
            <div className="PRODUCTSPECIFICATIONbox">
              {/******************************************* Product Features End ******************************************************************* */}
              <h1>Device Specifications</h1>
              <div style={{ display: "flex", width: "100%", justifyContent: "space-around" }}>
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
                  <img src="20230314034129-00000010-screenshot20230314at15.32.10.png" alt="#" className="CompanyInfoImage"></img>
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
          <div className="childBox_bgImg2Container" id="bgcolorPinkColorBlack" >
            <div className="inputfield_bgImg2Container">
              <h2 style={{ marginLeft: "10px" }}>Stay in touch</h2>
              <input type="text" placeholder="Please enter your email" className="input-inputfield"></input>
              <br></br>
              <button className="suscribeButton-bgImg2Container">Suscribe</button>
            </div>
            <div className="bgImg2Container-para">
              <p className="fontSizeSmall"id="lineheight"   style={{color:'white'}}>
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
