import React,{useEffect} from "react";
import "../Style/SourceCode.css";
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


function SourceCode() {

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
  const data = [
    {
      img: "thumbnail-3399.webp",
      h3: "GoPOS Online Android Smart Point Of Sale System",
      mainpara: "Manage multiple shop employee / admin. Create product information with imag..",
      p1: "Java, JavaScript",
      p2: "Retail,Ecommerce",
      p3: "Andriod,Smart Phone Applications,JavaScript",
      authorName: "HMStech",
    },
    {
      img: "download (4).jpg",
      h3: "Full NFT Gaming Marketplace",
      mainpara: "Are you ready to revolutionize the world of NFT gaming? Look no further than our cutting-edge...",
      p1: "JavaScript, Solidity",
      p2: "Blockchain,Cryptocurrency",
      p3: "Crypto,Blockchain,Enterprise Finance",
      authorName: "AstraKode",
    },
    {
      img: "thumbnail-6175.webp",
      h3: "ProfitAi AI Content Generator SAAS OpenAI StabilityAI",
      mainpara: "Features Custom Image Generation: ProfitAi allows users to generate custom images based...",
      p1: "JavaScript,Python",
      p2: "Artificial Intelligence,Automation",
      p3: "Django,SAAS,OPenai",
      authorName: "NCORP",
    },
  ];

  const data2 = [
    {
      img: "thumbnail-3253.webp",
      h3: "Time HRM Cloud Suite",
      mainpara: "Multi Companies - Unlimited Project Management Task Management Payroll...",
      p1: "JavaScript ,PHP",
      p2: "Human Resources,Job",
      p3: "Web System,PHP,HTML",
      authorName: "Cholponizi",
    },
    {
      img: "download (5).jpg",
      h3: "Uber Clone Taxi Booking System with Panels",
      mainpara: "Check below to get like apps and web panel demo links. It will even help you to enhance the..",
      p1: "JavaScript ,Java",
      p2: "Mobile,Hospitality",
      p3: "Web System,Admin,Andriod",
      authorName: "Elluminati inc",
    },
    {
      img: "/download (3).jpg",
      h3: "MShopping 1Mall Shopping Full Flutter App E Commerce Multi",
      mainpara: "Features: 1. IntroScreen and Multi Select Categories Options. 3. Homepage, Slider,...",
      p1: "PHP,HTML",
      p2: "Smart Phone Application,PHP,Andriod",
      p3: "Andriod,Smart PhoneApplication,PHP,Andriod",
      authorName: "erhacorpdotcom",
    },
  ];

  const data3 = [
    {
      img: "thumbnail-1099.webp",
      h3: "Breathe Music Player Pro",
      mainpara: "For transfer of entire app. Edit Tracks.Fall asleep to your favorite music.",
      p1: "JavaScript ,PHP",
      p2: "Human Resources,Job",
      p3: "Web System,PHP,HTML",
      authorName: "Cholponizi",
    },
    {
      img: "thumbnail-1330.webp",
      h3: "HERMEX Crypto Currency Trading Bot",
      mainpara: "Enter course name, description and set course status. LearnPro support local videos, youtube...",
      p1: "JavaScript ,PHP",
      p2: "EdTech,Software Services",
      p3: "School,System,E-learning",
      authorName: "HmStack",
    },
    {
      img: "download (2).jpg",
      h3: "Delivera Online Food Ordering System",
      mainpara: "Intuitive, unique, user friendly & attractive design & navigation - Optimized & well-...",
      p1: "JavaScript , CSS",
      p2: "eCommerce,Food & Beverages",
      p3: "Delivery app,Food ,Restaurent",
      authorName: "Roasalinalu",
    },
  ];
  const data4 = [
    {
      img: "download (6).jpg",
      h3: "Money Management Android App",
      mainpara: "Contains a detailed PDF file with instructions to monetize the app with your data and get it..",
      p1: "JavaScript ,PHP",
      p2: "Human Resources,Job",
      p3: "Web System,PHP,HTML",
      authorName: "Cholponizi",
    },
    {
      img: "thumbnail-1330.webp",
      h3: "HERMEX Crypto Currency Trading Bot",
      mainpara: "HERMEX is a new crypto currency trading bot supporting numerous exchanges via API and all.",
      p1: "JavaScript ,HTML",
      p2: "Finance,Trading",
      p3: "Crypto,Bitcoin,Finance",
      authorName: "Smartify",
    },
    {
      img: "thumbnail-3139.webp",
      h3: "K Loans",
      mainpara: "FEATURES 1. Single click installation 2. AJAX based 3. Support bootstrap 3.x 4. Friendly User.",
      p1: "JavaScript ,PHP",
      p2: "Accounting,Banking",
      p3: "Web System,PHP,HTML",
      authorName: "SoftReliance",
    },
  ];

  const AnimationBoxCardArr1 = [
    { img: "thumbnail-6175.png", p1: "ProfitAi AI Content Grnerator SAAS Open.." },
    { img: "thumbnail-6084.png", p1: "Full NFT Gaming Marketplace" },
    { img: "thumbnail-6077.png", p1: "Customizable Note Taking App Flutter and.." },
  ];
  const AnimationBoxCardArr2 = [
    { img: "thumbnail-6075.png", p1: "Automated Web Creation System SaaS" },
    { img: "thumbnail-5754.png", p1: "Deliver Online Food Ordering System." },
  ];

  return (
    <div className="SourceCodeMainContainer"id="SourceCodeMainContainerID" >
      <div className="SourceCodeBoxHeader">
        <div className="fileDirectoryBox">
          <p>
            <b> Top </b>
            <span className="anglebracket">
              <b style={{ color: "black" }}>&gt;</b>
            </span>
            <b>Source Codes</b>
            <span className="anglebracket">
              <b style={{ color: "black" }}>&gt;</b>
            </span>
            <span className="newSourceCode"> New Source Codes</span>
          </p>
        </div>
            
            {/* <GoogleTranslate/> */}
        <select className="sourceFileHeaderSelector" id="sourceFileHeaderSelector_">
          {/**Map Method for Select options start   *****/}
          {SelectoptionArr.map((item) => {
            return <option>{item}</option>;
          })}
          {/**Map Method for Select options end  *****/}
        </select>
      </div>
      <div className="cardContainer" >
        <div className="cardInnerContainer">
          <div className="CardBox1">
            <h3 className="industries">Industries</h3>
            <input type="text" placeholder="Filter Industries" className="filterInputBox" id="filterInputBoxID"></input>
            <br></br>
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
            {/***************************************************************** */}
            {data.map((item) => {
              return (
                <div className="card_Div" id="card_DivId">
                  <img src={item.img} alt="#" className="CardPageImg1"></img>
                  <br></br>
                  <h3 className="headerOfCard">{item.h3}</h3>
                  <p className="fontSixeSmall">{item.mainpara}</p>
                  <div className="iconContainer">
                    <Laptop className="cardIcon" />
                    <p  className="spanFontSize">{item.p1}</p>
                  </div>
                  <div className="iconContainer">
                    <Business className="cardIcon" />
                    <p  className="spanFontSize">{item.p2}</p>
                  </div>
                  <div className="iconContainer">
                    <LocalOffer className="cardIcon" />
                    <p  className="spanFontSize">{item.p3}</p>
                  </div>
                  <br></br>
                  <p  className="spanFontSize">
                    added by <b>{item.authorName}</b>
                  </p>
                  <div className="buy_button_div" id="buy_button_divId">
                    <button className="Buy_Button">Buy Now</button>
                    <h4  className="spanFontSize">$127.45</h4>
                  </div>
                </div>
              );
            })}
          </div>
          {/************************************************************************************************* */}
          <div className="displayFlux_justifyContent_spaceround">
            {data2.map((item) => {
              return (
                <div className="card_Div" id="card_DivId">
                  <img src={item.img} alt="#" className="CardPageImg1"></img>
                  <br></br>
                  <h3 className="headerOfCard">{item.h3}</h3>
                  <p className="fontSixeSmall">{item.mainpara}</p>
                  <div className="iconContainer">
                    <Laptop className="cardIcon" />
                    <p  className="spanFontSize">{item.p1}</p>
                  </div>
                  <div className="iconContainer">
                    <Business className="cardIcon" />
                    <p  className="spanFontSize">{item.p2}</p>
                  </div>
                  <div className="iconContainer">
                    <LocalOffer className="cardIcon" />
                    <p  className="spanFontSize">{item.p3}</p>
                  </div>
                  <br></br>
                  <p  className="spanFontSize">
                    added by <b>{item.authorName}</b>
                  </p>
                  <div className="buy_button_div" id="buy_button_divId">
                    <button className="Buy_Button">Buy Now</button>
                    <h4  className="spanFontSize">$127.45</h4>
                  </div>
                </div>
              );
            })}
          </div>
          {/**************************************************************************************/}
          <div className="displayFlux_justifyContent_spaceround">
            {data3.map((item) => {
              return (
                <div className="card_Div">
                  <img src={item.img} alt="#" className="CardPageImg1"></img>
                  <br></br>
                  <h3 className="headerOfCard">{item.h3}</h3>
                  <p className="fontSixeSmall">{item.mainpara}</p>
                  <div className="iconContainer">
                    <Laptop className="cardIcon" />
                    <p  className="spanFontSize">{item.p1}</p>
                  </div>
                  <div className="iconContainer">
                    <Business className="cardIcon" />
                    <p  className="spanFontSize">{item.p2}</p>
                  </div>
                  <div className="iconContainer">
                    <LocalOffer className="cardIcon" />
                    <p  className="spanFontSize">{item.p3}</p>
                  </div>
                  <br></br>
                  <p  className="spanFontSize">
                    added by <b>{item.authorName}</b>
                  </p>
                  <div className="buy_button_div" id="buy_button_divId">
                    <button className="Buy_Button">Buy Now</button>
                    <h4  className="spanFontSize">$127.45</h4>
                  </div>
                </div>
              );
            })}
          </div>

          {/******************************************************************************************** */}
          {
            <div className="displayFlux_justifyContent_spaceround">
              {data4.map((item) => {
                return (
                  <div className="card_Div">
                    <img src={item.img} alt="#" className="CardPageImg1"></img>
                    <br></br>
                    <h3 className="headerOfCard">{item.h3}</h3>
                    <p className="fontSixeSmall">{item.mainpara}</p>
                    <div className="iconContainer">
                      <Laptop className="cardIcon" />
                      <p  className="spanFontSize">{item.p1}</p>
                    </div>
                    <div className="iconContainer">
                      <Business className="cardIcon" />
                      <p  className="spanFontSize">{item.p2}</p>
                    </div>
                    <div className="iconContainer">
                      <LocalOffer className="cardIcon" />
                      <p  className="spanFontSize">{item.p3}</p>
                    </div>
                    <br></br>
                    <p  className="spanFontSize">
                      added by <b>{item.authorName}</b>
                    </p>
                    <div className="buy_button_div" id="buy_button_divId">
                      <button className="Buy_Button">Buy Now</button>
                      <h4  className="spanFontSize">$127.45</h4>
                    </div>
                  </div>
                );
              })}
            </div>
          }
          {/********************************************************************************************* */}

          <div className="loadmoreDiv">
            <button className="load_more" id="load_moreId">
              Load More
            </button>
          </div>
        </section>
      </div>
      <div className="bgImageContainer">
        <div className="bgInnerContainer">
          <h1 className="featureProduct">Features Products</h1>

          {/************************************************************************************************ */}
          <div className="displayFlux_justifyContent_spaceround">
            {AnimationBoxCardArr1.map((item) => {
              return (
                <div className="BgChildImage">
                  <img src={item.img} alt="#" className="img13"></img>
                  <p className="textAlignCenter_MarginTopO_Bottom10">{item.p1}</p>
                </div>
              );
            })}
          </div>

          {/************************************************************************************************ */}

          <div className="BgChildImageBox">
            {AnimationBoxCardArr2.map((item) => {
              return (
                <div className="BgChildImage" id="marginR">
                  <img src={item.img} alt="#" className="img13"></img>
                  <p className="displayFlux_justifyContent_spaceround">{item.p1}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bgImg2Container" style={{border:'none'}}>
          <div className="childBox_bgImg2Container"  style={{border:'none'}}>
            <div className="inputfield_bgImg2Container">
              <h2 style={{ marginLeft: "10px" }}>Stay in touch</h2>
              <input type="text" placeholder="Please enter your email" className="input-inputfield"></input>
              <br></br>
              <button className="suscribeButton-bgImg2Container">Suscribe</button>
            </div>
            <div className="bgImg2Container-para">
              <p>Get Practical Tips For Business and Developers. Learn about PieceX Community Needs for Source Code Projects. Be the First to Know PieceX Newest Free Community Code Projects.</p>
            </div>

            <div></div>
          </div>
        </div>

        <div className="sourceCode-Footer-icons-box">
          <div style={{ marginLeft: "5%" }}>
            <h1 className="footer_header">
              GTM<span className="blue">x</span>
            </h1>
            <p className="blue" id="contact">
              Contact Us
            </p>
            <p className="marginTop0">supportcenter@GTMx.com</p>
          </div>
          <div className="icon_Main_Container">
            <div className="iconBox" id="iconBoxId">
              <MusicNote className="MusicNoteIcon" />
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

export default SourceCode;
