
import "../Style/IoTHardWare.css";
import { Facebook } from "@material-ui/icons";
import { Twitter } from "@material-ui/icons";
import { Instagram } from "@material-ui/icons";
import { LinkedIn } from "@material-ui/icons";
import { YouTube } from "@material-ui/icons";
// import GoogleTranslate from "../GoogleTranslate";
import { MusicNote } from "@material-ui/icons";
function IoTHardWare() {
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

  return (
    <div className="IoTHardWareContainer">
      <div className="SourceCodeBoxHeader">
        <div className="fileDirectoryBox" id="fileDirectoryBoxId">
          <p>
            <b> Top </b>
            <span className="anglebracket"><b style={{color:'black'}}>&gt;</b></span> <b>IoT Hardware</b> <span className="anglebracket"><b style={{color:"black"}}>&gt;</b></span> <span className="white">IoT</span>
          </p>
        </div>
        {""}
        {/* <GoogleTranslate/> */}
        {""}
        <select className="sourceFileHeaderSelector"  id="sourceFileHeaderSelector_">
          {/**Map Method for Select options start   *****/}
          {SelectoptionArr.map((item) => {
            return <option>{item}</option>;
          })}
          {/**Map Method for Select options end  *****/}
        </select>
      </div>
      <div className="cardContainer" >
        <div  className="cardInnerContainer">
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
                    <span  className="spanFontSize">{item}</span>
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
                    <span  className="spanFontSize">{item}</span>
                  </div>
                );
              })}
            </div>
          </section>
          </div>
        </div>
        <section className="rightSideCardSection">
          <div className="displayFlux_justifyContent_spaceround">
            <div className="card_Div"  id="card_DivId">
              <img src="WisGate Edge PRO.jpg" alt="#" className="CardPageImg1 shopping_cartImg"></img>
              <br></br>
              <h3 className="headerOfCard">WisGate Edge PRO</h3>
              <p className="fontSizeSmall">The WisGate Edge Pro, powered by RAKwireless™, is an IoT hardware device that delivers secure and re..</p>

              <div className="buy_button_div">
                <button className="Buy_Button viewProductBtn">View Product</button>
              </div>
              <hr></hr>
              <br></br>
              <div className="cardFooterNavText">Industrial Automation</div>
              <div className="cardFooterNavText">Fleet Management</div>
              <div className="cardFooterNavText">Agriculture</div>
            </div>
            {/****************************************************************************/}
            <div className="card_Div" id="card_DivId">
              <img src="Portentax8.png" alt="#" className="CardPageImg1 Portentax8"></img>
              <br></br>
              <h3 className="headerOfCard">Portenta X8</h3>
              <p className="fontSizeSmall">Introducing the Arduino Portenta H7 - the ultimate solution for high-performance IoT applications.Th..</p>

              <div className="buy_button_div">
                <button className="Buy_Button viewProductBtn">View Product</button>
              </div>
              <hr></hr>
              <br></br>
              <div className="cardFooterNavText">Artificial Intelligence</div>
            </div>
            {/************************************************************************************/}
            <div className="card_Div"  id="card_DivId">
              <img src="thumbnail-20230314033006-00000009-arduinounorev3.png" alt="#" className="CardPageImg1 Arduino"></img>
              <br></br>
              {""}
              <h3 className="headerOfCard">Arduino Uno Rev3</h3>
              <p className="fontSizeSmall">Introducing the Arduino Uno Rev3 - the latest version of the world's most popular microcontroller bo..</p>
              {/**********************************************************************************************/}
              <div className="buy_button_div">
                <button className="Buy_Button viewProductBtn">View Product</button>
              </div>
              <hr></hr>
              <br></br>
              <div className="cardFooterNavText">Appliances</div>

              <div className="cardFooterNavText">Application</div>

              <div className="cardFooterNavText">Hardware</div>
            </div>
            {""}
          </div>
          {""}

          <div className="displayFlux_justifyContent_spaceround">
            <div className="card_Div">
              <img src="Cactusphere 150 RS485 model.jpg" alt="#" className="CardPageImg1 Cactusphere"></img>
              <br></br>
              <h3 className="headerOfCard">Cactusphere 150 RS485 model</h3>
              <p className="fontSizeSmall">IoT adapter that connects existing facilities and equipment with the cloud. Cactusphere is an IoT ad...</p>

              <div className="buy_button_div">
                <button className="Buy_Button viewProductBtn">View Product</button>
              </div>
              <hr></hr>
              <br></br>
              <div className="cardFooterNavText">Remote Monitoring</div>

              <div className="cardFooterNavText">Manufacturing</div>

              <div className="cardFooterNavText">HealthCare</div>
            </div>
            {/****************************************************************************************/}
            <div className="card_Div">
              <img src="Raspberry Pi 3 Model Bx.jpg" alt="#" className="CardPageImg1 RaspberryPi"></img>
              <br></br>
              <h3 className="headerOfCard">Raspberry Pi 3 Model B</h3>
              <p className="fontSizeSmall">The Raspberry Pi 3 Model B+ is the latest product in the Raspberry Pi 3 range, boasting a 64-bit qu...</p>

              <div className="buy_button_div">
                <button className="Buy_Button viewProductBtn">View Product</button>
              </div>
              <hr></hr>
              <br></br>
              <div className="cardFooterNavText">Application</div>

              <div className="cardFooterNavText">AMR</div>

              <div className="cardFooterNavText">Hardware</div>
            </div>
            {/*********************************************************************************************/}
            <div className="card_Div">
              <img src="61B+KyXZvHL._AC_UF894,1000_QL80_.jpg" alt="#" className="CardPageImg1 RaspberryPi"></img>
              <br></br>
              <h3 className="headerOfCard">Raspberry Pi Zero 2 W</h3>
              <p className="fontSizeSmall">Just as small. Five times as fast.At the heart of Raspberry Pi Zero 2 W is RP3A0, a custom-built sys...</p>
              {/******************************************************************************************************/}
              <div className="buy_button_div">
                <button className="Buy_Button viewProductBtn">View Product</button>
              </div>
              <hr></hr>
              <br></br>
              <div className="cardFooterNavText">Point-of-Sale</div>

              <div className="cardFooterNavText">Logistics</div>

             
            </div>
          </div>

          <div className="displayFlux_justifyContent_spaceround">
            <div className="card_Div">
              <img src="Armadillo IoT A6.jpg" alt="#" className="CardPageImg1 iotG4"></img>
              <br></br>
              <h3 className="headerOfCard">Armadillo IoT A6</h3>
              <p className="fontSizeSmall">Main features of the productPower-saving cloud communication with cellular LPWA (LTE-M)Armadillo-IoT..</p>

              <div className="buy_button_div">
                <button className="Buy_Button viewProductBtn"style={{marginTop:"20px"}}>View Product</button>
              </div>
              <hr></hr>
              <br></br>
              <div className="cardFooterNavText">Building Automation</div>

              <div className="cardFooterNavText">Connected Vehicles</div>
              <div className="cardFooterNavText">Engineering</div>
            </div>
            {/************************************************************************************************/}
            <div className="card_Div">
              <img src="iotG4.webp" alt="#" className="CardPageImg1 iotG4"></img>
              <br></br>
              <h3 className="headerOfCard">Armadillo IoT G4 LTE model</h3>
              <p className="fontSizeSmall">High-performance IoT gateway equipped with NPU and compatible with edge AI processingArmadillo-IoT G...</p>
              {/***************************************************************************************/}
              <div className="buy_button_div">
                <button className="Buy_Button viewProductBtn" >View Product</button>
              </div>
              <hr></hr>
              <br></br>
              <div className="cardFooterNavText">Building Automation</div>

              <div className="cardFooterNavText">Connected Vehicles</div>

              <div className="cardFooterNavText">Artificial Intelligence</div>
            </div>
            <div className="card_Div">
              <img src="Raspberry Pi Pico.jpg" alt="#" className="CardPageImg1 Pico"></img>
              <br></br>
              <h3 className="headerOfCard">Raspberry Pi Pico</h3>
              <p className="fontSizeSmall">Raspberry Pi Pico is the debut microcontroller-class board from Raspberry Pi. Built around our RP20...</p>
              {/***************************************************************************************************/}
              <div className="buy_button_div">
                <button className="Buy_Button viewProductBtn" style={{marginTop:"25px"}}>View Product</button>
              </div>
              <hr></hr>
              <br></br>
              <div className="cardFooterNavText">AMR</div>

              <div className="cardFooterNavText">Application</div>

              <div className="cardFooterNavText">Hardware</div>
            </div>
          </div>
          {""}

          <div className="displayFlux_justifyContent_spaceround">
            <div className="card_Div">
              <img src="arduino-rp2040-labels.png" alt="#" className="CardPageImg1 RP2040"></img>
              <br></br>
              <h3 className="headerOfCard">RP2040</h3>
              <p className="fontSizeSmall">A microcontroller chip designed by Raspberry PiHigh performance. Low cost. Small package.Flexible I/...</p>
              {/*****************************************************************************************/}
              <div className="buy_button_div">
                <button className="Buy_Button viewProductBtn" >View Product</button>
              </div>
              <hr></hr>
              <br></br>
              <div className="cardFooterNavText">Application</div>

              <div className="cardFooterNavText">AMR</div>

              <div className="cardFooterNavText">Artificial Intelligence</div>
            </div>

            <div className="card_Div">
              <img src="maxresdefault.jpg" alt="#" className="CardPageImg1 maxresdefault"></img>
              <br></br>
              <h3 className="headerOfCard">Indoor air quality IOT Data Logger Sensor</h3>
              <p className="fontSizeSmall">Smarter and safer indoorsNanoenvi IAQ Data Logger it is very easy to understand and manage indoor ...</p>

              <div className="buy_button_div">
                <button className="Buy_Button viewProductBtn">View Product</button>
              </div>
              <hr></hr>
              <br></br>
              <div className="cardFooterNavText">Building Automation</div>

              <div className="cardFooterNavText">Data Logging</div>

              <div className="cardFooterNavText">Consumer Goods</div>
            </div>
          </div>
          {/***********************************************************************************************8*/}
          <div className="loadmoreDiv">
            <button className="load_more">Load More</button>
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

            <div></div>
          </div>
        </div>
      

        <div className="sourceCode-Footer-icons-box">
          <div style={{ marginLeft: "5%" }}>
            <h1 className="footer_header">
              GTM<span className="blue">x</span>
            </h1>
            <p className="blue" id="contact">Contact Us</p>
            <p  className="marginTop0" >supportcenter@GTMx.com</p>
          </div>
          <div className="IconBoxParentDiv">
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

export default IoTHardWare;
