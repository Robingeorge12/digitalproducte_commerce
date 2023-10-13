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

function ViewProduct1() {
  let [count, setCount] = useState(0);
  let [item, setItem] = useState(1);
  let arr1 = [
    "20230331124352-00000011-screenshot20230331at12.36.21.png",
    "20230331124352-00000011-screenshot20230331at12.36.10.png",
    "20230331124351-00000011-screenshot20230331at12.36.28.png",
    "20230331124350-00000011-screenshot20230331at12.36.32.png",
  ];
  function myFunc() {
    if (count < arr1.length) {
      setCount(prev=> prev+1);
    } else {
      setCount(0);
    }
  }

  function myFunc2() {
    if (count < 0) {
      setCount(arr1.length - 1);
    } else {
      setCount(count--);
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
          <h3 className="headerOfCard marginBottom0">WisGate Edge PRO</h3>
          <p className="headerOfCard marginTop0">
            By <span style={{ color:"lightcoral"}}>Arduino IoT</span>
          </p>
          </div>
          
            <GoogleTranslate/>
            </div>
            <hr></hr>
            <div className="TextContentVewProductChildDiv_Parent">
              <div className="TextContentVewProductChildDiv_">
                <div className="typeBoxes">Device Type</div>
                <br></br>
                <p className="hoverclassPurple fontweight">Gateway/Router</p>
              </div>
              <div className="TextContentVewProductChildDiv">
                <div className="typeBoxes">Application</div>
                <br></br>
                <p className="hoverclassPurple fontweight">Industrial </p>
                <p className="hoverclassPurple fontweight">Automation</p>
                <p className="hoverclassPurple fontweight">Fleet Management</p>
                <p className="hoverclassPurple fontweight">Irrigation</p>
                <p className="hoverclassPurple fontweight">Warehouse</p>
                <p className="hoverclassPurple fontweight">Logistics</p>
              </div>
              <div className="TextContentVewProductChildDiv_">
                <div className="typeBoxes hardwareDiv">Hardware Architecture</div>
                <br></br>
                <p className="hoverclassPurple fontweight">2x SX1303 LoRa</p>
                <p className="hoverclassPurple fontweight">mPCIe cards</p>
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

          {/*******************************CONDITIONAL RERENDERING *************************************/}
          {item === 1 ? (
            <div style={{ display: "flex", width: "100%" }}>
              {/********************************description Component start***************************** */}
              <div className="discBox">
                <h4>Description</h4>
                <p className="discPara">
                  The WisGate Edge Pro, powered by RAKwireless™, is an IoT hardware device that delivers secure and reliable connectivity for a wide range of professional applications. It is designed
                  for medium-sized to wide area coverage in industrial environments and remote regions, making it perfect for IoT commercial outdoor deployment.
                </p>
                <p className="discPara">
                  The device comes equipped with high transmission power and 2x fiberglass antennas with 5dBi gain, providing extensive coverage in open environments. This makes it suitable for
                  various applications, such as parking sensors, remote fleet management, livestock tracking and geofencing, and soil monitoring solutions.The WisGate Edge Pro offers an intuitive
                  out-of-the-box user experience, making it easy to set up and diagnose.
                </p>
                <p className="discPara">
                  It comes with exhaustive tutorials and technical documentation, ensuring that you have all the information you need to get started. Additionally, it includes an on-pole and DIN-rail
                  installation kit, making installation hassle-free.
                </p>
               
              
              </div>
              <div className="">
                <img src="20230331124349-00000011-wisgateedgepro-cropped.png" alt="#" className="descImg"></img>
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
                  <img src="giphy.gif" alt="#" className="CompanyInfoImage"></img>
                </div>
                <div></div>
              </div>
            </div>
          )}

          {/**Company Information End********************************************* */}
         
        </div>
        
      </div>
      <div className="bgImageContainer" style={{border:'none'}} >
        <div className="bgImg2Container"  style={{border:'none'}}>
          <div className="childBox_bgImg2Container" id="bgcolorPinkColorBlack">
            <div className="inputfield_bgImg2Container">
              <h2 style={{ marginLeft: "10px" }}>Stay in touch</h2>
              <input type="text" placeholder="Please enter your email" className="input-inputfield"></input>
              <br></br>
              <button className="suscribeButton-bgImg2Container">Suscribe</button>
            </div>
            <div className="bgImg2Container-para">
              <p className="fontSize" style={{color:'white',fontSize:'15px'}}>
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

export default ViewProduct1;
