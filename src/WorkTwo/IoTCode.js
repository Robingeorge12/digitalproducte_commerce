import React, { useEffect } from "react";
import "../Style/IoTCode.css";
import { Laptop } from "@material-ui/icons";
import { Business } from "@material-ui/icons";
import { LocalOffer } from "@material-ui/icons";
import { Facebook } from "@material-ui/icons";
import { Twitter } from "@material-ui/icons";
import { Instagram } from "@material-ui/icons";
import { LinkedIn } from "@material-ui/icons";
import { YouTube } from "@material-ui/icons";
import { MusicNote } from "@material-ui/icons";
// import GoogleTranslate from "../GoogleTranslate";
function IoTCode() {
  const SelectoptionArr = ["Sort by", "Relevance", "New arrivals", "Popularity", "Price", "Evaluation"];
  const IndustriesCheckBoxSpanArr = [
    "Technology",
    "Web",
    "Software Services",
    "Content",
    "Data",
    "Web",
    "Mobile",
    "Professional Services",
    "Media",
    "Entertainment",
    "Game",
    "Social Media",
    "Accounting",
    "eCommerce",
    "Retail",
    "Telicommunication",
    "Engineering",
    "Computer Graphics",
    "Food & Beverage",
    "Finance",
    "Photography",
    "Hospitality",
    "Human Resources",
    "Automotion",
    "EdTech",
    "Mathematics",
    "Movie & video",
    "Security",
    "Rental",
    "Trading",
    "Health care",
    "Tools",
  ];
  const programmingLangCheckBoxSpanArr = [
    "HTML",
    "CSS",
    "JavaScript",
    "PHP",
    "React Js",
    "Node Js",
    "Java",
    "Professional",
    "C++",
    "C",
    "MySQL",
    "Python",
    "HTML5",
    "C#",
    "Express",
    "MOngoDb",
    "JQuery",
    "Unity",
    "O:XML",
    "Flutter",
    "App Invented by Andriod",
    "Draft",
    "Shift",
    "Firebase",
    "Angular Js",
    ".NET",
    "Django",
    "Type Script",
    "VB",
    "Wordpress",
    "T-SQL",
    "Bash",
    "Docker",
    "PowerShell",
    "Solidity",
    "Visual Basic.NET",
    "Andriod.java",
    "Batch file",
    "Visual Basic",
    "ASPX",
    "MATLAB",
    "PL SQL",
    "NoSQL",
    "Logo",
    "Hugo",
    "WPF",
  ];
  const TagCheckBoxSpanArr = [
    "System",
    "Andriod",
    "webSystem",
    "Java Script",
    "Unity",
    "Java",
    "CSS3",
    "J Query",
    "Blog",
    "User Interface",
    "Andriod",
    "Game",
    "TeenPatti",
    "2D Game",
    "Rummy",
    "React Native",
    "Plateform",
    "School Management",
    "Tracking",
    "Social Media",
    "Bot",
    "Hospatilitiy",
    "Automation",
    "Machine Learning ",
    "Flutter",
    "ChatBot",
    "React Redux",
    "Flutter",
    "Resume",
    "App ",
    "Education",
  ];

  const data1 = [
    {
      img: "automation2.jpg",
      h3: "IoT based Smart Home Automation System",
      mainpara: "This will be an Android Apps for control IoT based system for “Smart Home Automation..",
      p1: "JAVA,PHP",
      p2: "Ecommerce , Food & Beverages",
      p3: "Andriod,Smart Phone Applications,JavaScript",
      authorName: "HMStech",
    },
    {
      img: "AES.jpg",
      h3: "VPN Mobile Number Location",
      mainpara: "Features:- Vpn Mobile Number Location Tracker Vpn Find Sted Codes Vpn Find ISD Codes..",
      p1: "Java",
      p2: "IoT (Software) , Mobile",
      p3: "IoT , Android",
      authorName: "AstraKode",
    },
    {
      img: "digitalWallet.jpg",
      h3: "Mobile money wallet with NFC and QR payments enabled",
      mainpara: "PEER TO PEER MONEY TRANSFER • Send to other wallet accounts • Send to Bank account •..",
      p1: "JavaScript,Python",
      p2: "Data , Logistics",
      p3: "IoT , Smart Phone Applications , FinTech",
      authorName: "NCORP",
    },
  ];

  const data2 = [
    {
      img: "thumbnail-program_c++.webp",
      h3: "Pin probe for Arduino",
      mainpara: "Pin probe for Arduino This project can help you identify wires form a cable harness. All you will...",
      p1: "C++",
      p2: "Aerospace , Energy",
      p3: "System , User Interface , Arduino",
      authorName: "NCORP",
    },
    {
      img: "AES.jpg",
      h3: "AES encryption using VHDL using Xilinx ISE",
      mainpara: "The code has been written very accurately and has been tested on several different forms of.",
      p1: "VHDL",
      p2: "Construction , Cryptography",
      p3: "System , User Interface , Arduino",
      authorName: "Cholponizi",
    },
    {
      img: "Hyip.avif",
      h3: "HYIP PRO all in One solution for inverstment plateforms",
      mainpara: "Admin login deails https://hyip.phinelebtechcodes.xyz/admin.",
      p1: "JavaScript ,Java",
      p2: "Mobile,Hospitality",
      p3: "System , User Interface , Arduino",
      authorName: "Elluminati inc",
    },
  ];

  return (
    <div className="IotCodeContainer">
      <div className="SourceCodeBoxHeader" id="SourceCodeBoxHeaderID">
        <div className="fileDirectoryBox">
          <p>
            <b> Top </b>
            <span className="anglebracket">
              <b style={{ color: "black" }}>&gt;</b>
            </span>{" "}
            <b>Source Codes</b>{" "}
            <span className="anglebracket">
              <b style={{ color: "black" }}>&gt;</b>
            </span>{" "}
            <span className="white"> IoT [Software]</span>
          </p>
        </div>
        {""}
        {/* <GoogleTranslate/> */}
        {""}
        <select className="sourceFileHeaderSelector" id="sourceFileHeaderSelector_">
          {/**Map Method for Select options start   *****/}
          {SelectoptionArr.map((item) => {
            return <option>{item}</option>;
          })}
          {/**Map Method for Select options end  *****/}
        </select>
      </div>
      <div className="cardContainer" style={{ marginBottom: "0", marginTop: "0" }}>
        <div className="cardInnerContainer">
          <div className="CardBox1">
            <h3 className="industries">Industries</h3>
            <input type="text" placeholder="Filter Industries" className="filterInputBox"></input>
            <br></br>

            {""}
            {""}
            <section className="checkInputBoxMain">
              <div className="scrollableBox">
                {/************ for Industries maping */}
                {IndustriesCheckBoxSpanArr.map((item) => {
                  return (
                    <div className="checkBoxDiv">
                      <input type="checkbox" className="check"></input>
                      <span className="spanFontSize">{item}</span>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>

          <div className="CardBox1">
            <h3 className="industries">Programming Language</h3>
            <input type="text" placeholder="Filter P.L." className="filterInputBox"></input>
            <br></br>
            <section className="checkInputBoxMain">
              <div className="scrollableBox">
                {/********for Programming Language Mapping  ********/}
                {programmingLangCheckBoxSpanArr.map((item) => {
                  return (
                    <div className="checkBoxDiv" id="www">
                      <input type="checkbox" className="check"></input>
                      <span className="spanFontSize">{item}</span>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
          <div className="CardBox1">
            <h3 className="industries">Tags</h3>
            <input type="text" placeholder="Filter tags" className="filterInputBox"></input>
            <br></br>
            <section className="checkInputBoxMain">
              <div className="scrollableBox">
                {/********************************** Tag Mapping ********** */}

                {TagCheckBoxSpanArr.map((item) => {
                  return (
                    <div className="checkBoxDiv" id="www">
                      <input type="checkbox" className="check"></input>
                      <span className="spanFontSize">{item}</span>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        </div>

        {/****************************************************************************** */}
        <section className="rightSideCardSection">
          <div className="displayFlux_justifyContent_spaceround">
            {/************************************************************************************ */}
            {data1.map((item) => {
              return (
                <div className="card_Div" id="card_DivId">
                  <img src={item.img} alt="#" className="CardPageImg1 shopping_cartImg"></img>
                  <br></br>
                  <h3 className="headerOfCard">{item.h3}</h3>
                  <p className="fontSizeSmall">This will be an Android Apps for control IoT based system for “Smart Home Automation..</p>
                  <div className="iconContainer">
                    <Laptop className="cardIcon" />
                    <p className="spanFontSize">{item.p1}</p>
                  </div>
                  <div className="iconContainer">
                    <Business className="cardIcon" />
                    <p className="spanFontSize">{item.p2}</p>
                  </div>
                  <div className="iconContainer">
                    <LocalOffer className="cardIcon" />
                    <p className="spanFontSize">{item.p3}</p>
                  </div>
                  <br></br>
                  <p className="fontSizeSmall">
                    added by <b>{item.authorName}</b>
                  </p>
                  <div className="buy_button_div" id="www">
                    <button className="Buy_Button">Buy Now</button>
                    <h4 className="fontSizeSmall">$127.45</h4>
                  </div>
                </div>
              );
            })}

            {""}
          </div>
          {""}

          <div className="displayFlux_justifyContent_spaceround">
            {/******************************************************************************************* */}
            {data2.map((item) => {
              return (
                <div className="card_Div">
                  <img src={item.img} alt="#" className="CardPageImg1 laravelImg_"></img>
                  <br></br>
                  <h3 className="headerOfCard">{item.h3}</h3>
                  <p className="fontSizeSmall">{item.mainpara}.</p>
                  <div className="iconContainer">
                    <Laptop className="cardIcon" />
                    <p className="spanFontSize">{item.p1}</p>
                  </div>
                  <div className="iconContainer">
                    <Business className="cardIcon" />
                    <p className="spanFontSize">{item.p2}</p>
                  </div>
                  <div className="iconContainer">
                    <LocalOffer className="cardIcon" />
                    <p className="spanFontSize">{item.p3}</p>
                  </div>
                  <br></br>
                  <p className="fontSizeSmall">
                    added by <b>{item.authorName}</b>
                  </p>
                  <div className="buy_button_div" id="www">
                    <button className="Buy_Button">Buy Now</button>
                    <h4 className="fontSizeSmall">$127.45</h4>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="loadmoreDiv">
            <button className="load_more" id="load_moreId">
              Load More
            </button>
          </div>
        </section>
      </div>
      <div className="bgImageContainer"  style={{border:'none'}}>
        <div className="bgImg2Container"  style={{border:'none'}}>
          <div className="childBox_bgImg2Container">
            <div className="inputfield_bgImg2Container">
              <h2 style={{ marginLeft: "10px" }}>Stay in touch</h2>
              <input type="text" placeholder="Please enter your email" className="input-inputfield"></input>
              <br></br>
              <button className="suscribeButton-bgImg2Container">Suscribe</button>
            </div>
            <div className="bgImg2Container-para">
              <p className="fontSizeSmall">
                Get Practical Tips For Business and Developers. Learn about PieceX Community Needs for Source Code Projects. Be the First to Know PieceX Newest Free Community Code Projects.
              </p>
            </div>
          </div>
        </div>

        <div className="sourceCode-Footer-icons-box">
          <div style={{ marginLeft: "5%" }}>
            <h1 className="footer_header">
              GTM<span className="blue">x</span>
            </h1>
            <p className="blue marginBottom0" id="contact">
              Contact Us
            </p>
            <p className="marginTop0">supportcenter@GTMx.com</p>
          </div>
          <div className="icon_Main_Container">
            <div className="iconBox" id="iconBoxId">
              <MusicNote className="MusicNoteIcon" id="iconBoxId" />
            </div>
            <div className="iconBox fbIconIcon" id="iconBoxId">
              <Facebook className="icOn" />
            </div>
            <div className="iconBox TwitterIcon" id="iconBoxId">
              <Twitter className="icOn" />
            </div>
            <div className="iconBox instagramIcon" id="iconBoxId">
              <Instagram className="icOn" />
            </div>
            <div className="iconBox linkedInIcon" id="iconBoxId">
              <LinkedIn className="icOn" />
            </div>
            <div className="iconBox YouTubeIcon" id="iconBoxId">
              <YouTube className="icOn" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IoTCode;
