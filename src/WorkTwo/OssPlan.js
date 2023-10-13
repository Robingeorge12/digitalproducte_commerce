import React from "react";
import "../Style/OssPlan.css";

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
function OssPlan() {
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

  const dataX = [
    {
      img: "online-shopping-store-on-website-260nw-2019701981.webp",
      h3: "microvm.nix",
      mainpara: "A full-fledged package to build an e-commerce application for iOS and Android similar to...",
      p1: "Artificial Intelligence , Automation",
      p2: "JavaScript ,Python",
      p3: "Ecommerce , Food & Beverages",
      authorName: "HMStech",
    },
    {
      img: "images.png",
      h3: "school management system",
      mainpara: "This is an School Management Software. Open source code and premium support..",
      p1: "JavaScript, Solidity",
      p2: "Blockchain , Cryptocurrency",
      p3: "Crypto , Blockchain , Enterprise Finance",
      authorName: "AstraKode",
    },
    {
      img: "174-6b8636c4-1576-5d8b-bd23-a269fbf9501a_preview.jpg",
      h3: "microvm.nix",
      mainpara: "NixOS MicroVMS.Open source code and premium support and plans avaliable at Piece..",
      p1: "JavaScript,Python",
      p2: "Artificial Intelligence , Automation",
      p3: "Django,SAAS,OPenai",
      authorName: "NCORP",
    },
  ];

  const dataY = [
    {
      img: "174-6b8636c4-1576-5d8b-bd23-a269fbf9501a_preview.jpg",
      h3: "microvm.nix",
      mainpara: "NixOS MicroVMS.Open source code and premium support and plans avaliable at Piece..",
      p1: "JavaScript,Python",
      p2: "Django , SAAS , Openai",
      p3: "Artificial Intelligence , Automation",
      authorName: "HMStech",
    },
    {
      img: "download.png",
      h3: "Laravel_E-commerce",
      mainpara: "eCommerce project built with Laravel offers a mobile-responsive website with a simple 3-...",
      p1: "PHP",
      p2: "Consumer Goods , Ecommerce",
      p3: "Web System , HTML , Website",
      authorName: "AstraKode",
    },
    {
      img: "thumbnail-crypton.png",
      h3: "crypton",
      mainpara: "A peer to peer cryptocurrencies trading site similar to localbitcoins,paxful and remitano.",
      p1: "JavaScript,CSS",
      p2: "Blockchain , Cryptocurrency",
      p3: "HTML , JavaScript , CSS",
      authorName: "NCORP",
    },
  ];

  const dataZ = [
    {
      img: "download.jpg",
      h3: "sqlitebiter",
      mainpara: "A CLI tool to convert CSV / Excel / HTML / JSON / Jupyter Notebook / LDJSON / LTSV /...",
      p1: "TypeScript , JavaScript",
      p2: "Sqlite , Csv , Excel",
      p3: "Hacktoberfest , React-native , Chat",
      authorName: "HMStech",
    },
    {
      img: "akaunting-laravel-news-post.jpg",
      h3: "akaunting",
      mainpara: "Free and Online Accounting Software. Open source code and premium support and plans..",
      p1: "Python ,JavaScript",
      p2: "Content Web",
      p3: "Python , Django , Platform",
      authorName: "AstraKode",
    },
    {
      img: "thumbnail-Activiti.png",
      h3: "Activity",
      mainpara: "Activiti is a light-weight workflow and Business Process Management (BPM) Platform..",
      p1: "JavaScript,HTML",
      p2: "Technology",
      p3: "Java , Bpm , Spring",
      authorName: "NCORP",
    },
  ];

  const dataw = [
    {
      img: "images (1).png",
      h3: "Rocket.Chat.ReactNative",
      mainpara: "Rocket.Chat mobile clients. Open source code and premium support and plans available at...",
      p1: "Python , PowerShell",
      p2: "Utilities , Web",
      p3: "Andriod,Smart Phone Applications",
      authorName: "HMStech",
    },
    {
      img: "download (1).png",
      h3: "mezzanine",
      mainpara: " CMS framework for Django. Open source code and premium support and plans available at GTMx for OSS...",
      p1: "HTM,PHP",
      p2: "Accounting , Business Essentials",
      p3: "PHP , Laravel , Accounting",
      authorName: "AstraKode",
    },
    {
      img: "thumbnail-snowplow.png",
      h3: "Snowplow",
      mainpara: "The enterprise-grade behavioral data engine (web, mobile, server-side, webhooks), running.",
      p1: "Python ,JavaScript",
      p2: "Automation , Utilities",
      p3: "Snowplow , Analytics , Data",
      authorName: "NCORP",
    },
  ];
  const dataU=[
    {img:'uiEditor.jpg',h3:"Ui-eDitor",mainPara:"The project aims to bring web development team members into a single interface. This is...",p1:"JavaScript , CSS,React js",p2:"Computer Graphics Design",p3:"Drag-and-drop , React , JavaScript",authoeName:"SoftReliance"}
  ]



  return (
    <div className="ossPlanMainContainer">
      <div className="SourceCodeBoxHeader" id="SourceCodeBoxHeaderID">
        <div className="fileDirectoryBox">
          <p>
            <b> Top </b>
            <span className="anglebracket"><b style={{color:'black'}}>&gt;</b></span> <b> Open sources</b> <span className="anglebracket"><b style={{color:'black'}}>&gt;</b></span> <span className="white"> Open sources</span>
          </p>
        </div>
        {""}
        {/* <GoogleTranslate/> */}
        {""}
        <select className="sourceFileHeaderSelector" id="sourceFileHeaderSelector_" style={{marginLeft:"0",}}>
          {/**Map Method for Select options start   *****/}
          {SelectoptionArr.map((item) => {
            return <option>{item}</option>;
          })}
          {/**Map Method for Select options end  *****/}
        </select>
      </div>
      <div className="cardContainer">
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
            <h3 className="industries">Tags</h3>
            <input type="text" placeholder="Filter tags" className="filterInputBox"></input>
            <br></br>
            <section className="checkInputBoxMain">
              <div className="scrollableBox">
                {/********************************** Tag Mapping ********** */}

                {TagCheckBoxSpanArr.map((item) => {
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
        </div>
        <section className="rightSideCardSection">
          <div className="displayFlux_justifyContent_spaceround">
            {/********************************************************************************* */}
            {dataX.map((item) => {
              return (
                <div className="card_Div">
                  <img src={item.img} alt="#" className="CardPageImg1 shopping_cartImg"></img>
                  <br></br>
                  <h3  className="headerOfCard">{item.h3}</h3>
                  <p className="fontSizeSmall">{item.mainpara}</p>
                  <div className="iconContainer">
                    <Laptop className="cardIcon" />
                    <p  className="fontSizeSmall">{item.p1}</p>
                  </div>
                  <div className="iconContainer">
                    <Business className="cardIcon" />
                    <p  className="fontSizeSmall">{item.p2}</p>
                  </div>
                  <div className="iconContainer">
                    <LocalOffer className="cardIcon" />
                    <p  className="fontSizeSmall">{item.p3}</p>
                  </div>
                  <br></br>
                  <p className="fontSizeSmall">
                    added by <b>{item.authorName}</b>
                  </p>
                  <div className="buy_button_div" style={{ display: "flex", alignItems: "center" }}>
                    <button className="Buy_Button">Buy Now</button>
                    <h4>$127.45</h4>
                  </div>
                </div>
              );
            })}
          </div>
          {/******************************************************************************************************** */}

          <div className="displayFlux_justifyContent_spaceround">
            {dataY.map((item) => {
              return (
                <div className="card_Div">
                  <img src={item.img} alt="#" className="CardPageImg1 laravelImg"></img>
                  <br></br>
                  <h3 className="headerOfCard">{item.h3}</h3>
                  <p className="fontSizeSmall">{item.mainpara}</p>
                  <div className="iconContainer">
                    <Laptop className="cardIcon" />
                    <p  className="fontSizeSmall">{item.p1}</p>
                  </div>
                  <div className="iconContainer">
                    <Business className="cardIcon" />
                    <p  className="fontSizeSmall">{item.p2}</p>
                  </div>
                  <div className="iconContainer">
                    <LocalOffer className="cardIcon" />
                    <p  className="fontSizeSmall">{item.p3}</p>
                  </div>
                  <br></br>
                  <p className="fontSizeSmall">
                    added by <b>{item.authorName}</b>
                  </p>
                  <div className="buy_button_div"style={{display:"flex",alignItems:"center"}}>
                    <button className="Buy_Button">Buy Now</button>
                    <h4>$127.45</h4>
                  </div>
                </div>
              );
            })}
          </div>
          {/************************************************************************************************* */}
          <div className="displayFlux_justifyContent_spaceround">
            {dataZ.map((item) => {
              return (
                <div className="card_Div">
                  <img src={item.img} alt="#" className="CardPageImg1"></img>
                  <br></br>
                  <h3 className="headerOfCard">{item.h3}</h3>
                  <p className="fontSizeSmall">{item.mainpara}</p>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Laptop className="cardIcon" />
                    <p  className="fontSizeSmall">{item.p1}</p>
                  </div>
                  <div className="iconContainer">
                    <Business className="cardIcon" />
                    <p  className="fontSizeSmall">{item.p2}</p>
                  </div>
                  <div style={{ display: "flex" }}>
                    <LocalOffer className="cardIcon" />
                    <p  className="fontSizeSmall">{item.p3}</p>
                  </div>
                  <br></br>
                  <p className="fontSizeSmall">
                    added by <b>{item.authorName}</b>
                  </p>
                  <div className="buy_button_div"style={{display:"flex",alignItems:"center"}}>
                    <button className="Buy_Button">Buy Now</button>
                    <h4>$127.45</h4>
                  </div>
                </div>
              );
            })}
          </div>
          {/**********************************************************************************/}

          <div className="displayFlux_justifyContent_spaceround">
            {dataw.map((item) => {
              return (
                <div className="card_Div">
                  <img src={item.img} alt="#" className="CardPageImg1 mezzanine"></img>
                  <br></br>
                  <h3 className="headerOfCard">{item.h3}</h3>
                  <p className="fontSizeSmall">{item.mainpara}</p>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Laptop className="cardIcon" />
                    <p  className="fontSizeSmall">{item.p1}</p>
                  </div>
                  <div className="iconContainer">
                    <Business className="cardIcon" />
                    <p  className="fontSizeSmall">{item.p2}</p>
                  </div>
                  <div className="iconContainer">
                    <LocalOffer className="cardIcon" />
                    <p  className="fontSizeSmall">{item.p3}</p>
                  </div>
                  <br></br>
                  <p className="fontSizeSmall">
                    added by <b>{item.authorName}</b>
                  </p>
                  <div className="buy_button_div"style={{display:"flex",alignItems:"center"}}>
                    <button className="Buy_Button">Buy Now</button>
                    <h4>$127.45</h4>
                  </div>
                </div>
              );
            })}
          </div>

          {/***************************************************************************************************/}
          <div className="displayFlux_justifyContent_spaceround">



          {

            dataU.map((item)=>{
              return (
                <div className="card_Div">
                <img src={item.img} alt="#" className="CardPageImg1 ui-editor"></img>
                <br></br>
                <h3 className="headerOfCard">{item.h3}</h3>
                <p className="fontSizeSmall">{item.mainPara}</p>
                <div className="iconContainer">
                  <Laptop className="cardIcon" />
                  <p  className="fontSizeSmall">{item.p1}</p>
                </div>
                <div className="iconContainer">
                  <Business className="cardIcon" />
                  <p  className="fontSizeSmall">{item.p2}</p>
                </div>
                <div className="iconContainer">
                  <LocalOffer className="cardIcon" />
                  <p  className="fontSizeSmall">{item.p3}</p>
                </div>
                <br></br>
                <p className="fontSizeSmall">
                  added by <b>{item.authoeName}</b>
                </p>
                <div className="buy_button_div" style={{display:"flex",alignItems:"center"}}>
                  <button className="Buy_Button">Buy Now</button>
                  <h4>$127.45</h4>
                </div>
              </div>
              )
            })

          }
           
          </div>
          <div className="loadmoreDiv">
            <button className="load_more" id="load_moreId">Load More</button>
          </div>
        </section>
      </div>

      {/******************************************************************** */}

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

            <div></div>
          </div>
        </div>
       

        <div className="sourceCode-Footer-icons-box">
          <div style={{ marginLeft: "5%" }}>
            <h1 className="footer_header">
              GTM<span className="blue">x</span>
            </h1>
            <p  className="blue" id="contact">Contact Us</p>
            <p className="marginTop0">supportcenter@GTMx.com</p>
          </div>
          <div className="flex_AlignItemCenter_MarginR4">
            <div className="iconBox"  id="iconBoxId">
              <MusicNote className="MusicNoteIcon" />
            </div>
            <div className="iconBox fbIconIcon"  id="iconBoxId">
              <Facebook className="icOn" />
            </div>
            <div className="iconBox TwitterIcon"  id="iconBoxId">
              <Twitter className="icOn" />
            </div>
            <div className="iconBox instagramIcon"  id="iconBoxId">
              <Instagram className="icOn" />
            </div>
            <div className="iconBox linkedInIcon"  id="iconBoxId">
              <LinkedIn className="icOn" />
            </div>
            <div className="iconBox YouTubeIcon"  id="iconBoxId">
              <YouTube className="icOn" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OssPlan;
