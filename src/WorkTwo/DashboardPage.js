import React from "react";
import "../Style/DashboardPage.css";
import { Home } from "@material-ui/icons";
import { Person } from "@material-ui/icons";
import { Group } from "@material-ui/icons";
import { Shop } from "@material-ui/icons";
import {AccountCircle} from '@material-ui/icons'
// import GoogleTranslate from "../GoogleTranslate";
import {Menu} from '@material-ui/icons';
function DashboardPage() {
  return (
    <div className="dashboardContainer">
  
   
    <div className="DashboardHeader" >
 
   <Menu/>
    <p className="top_dashboard">Top  &nbsp;  <span style={{color:'blue'}}><b>&gt;   &nbsp; Dashboard</b></span></p>
    {/* <GoogleTranslate/> */}
    </div>
    <div style={{display:"flex"}}>
    
      <div className="dashboardcard">
        <div className="DashboardCardHeader">
          <Home className="marginTopMarginBottom10" /> <h3 className="marginTopMarginBottom10">Dashboard</h3>
        </div>
        <div className="accountDiv">
          <Person className="marginTopmarginBottom0" id="icon1" /> <h4 className="marginTopmarginBottom0">Account</h4>
        </div>
        <div className="AccountInnerText">
          <p className="cardParagraph">Person Details</p>
          <p className="cardParagraph">Sales</p>
          <p className="cardParagraph">Purchases</p>
          <p className="cardParagraph">Wallet</p>
          <p className="cardParagraph">My Points</p>
          <p className="cardParagraph">Affliated Program</p>
          <p className="cardParagraph">Referral Program</p>
        </div>
        <div className="accountDiv">
          <Shop className="marginTopmarginBottom0" id="icon2"  />
          <h4 className="marginTopmarginBottom0">Product</h4>
        </div>
        <div className="AccountInnerText" id="marginTopmarginBottom0ID">
          <p className="cardParagraph"> My Product</p>
          <p className="cardParagraph">My Customizations</p>
          <p className="cardParagraph">My Support Plans</p>
          <p className="cardParagraph">My OSS Plans</p>
        </div>
        <div className="accountDiv" style={{ marginTop: "0", marginBottom: "0" }}>
          <Group className="marginTopmarginBottom0"  id="icon3" /> <h4 className="marginTopmarginBottom0">Community</h4>
        </div>
        <div className="AccountInnerText" style={{ marginTop: "0", marginBottom: "0" }}>
          <p className="cardParagraph">My Requests</p>
          <p className="cardParagraph">My Comments</p>
          <p className="cardParagraph">My Messages</p>
          <p className="cardParagraph">My Articles</p>
        </div>
       
      </div>
            <div className="DashboardleftSideBox">
            <h2 className="activityOverview">Activity <span style={{color:'blue'}}>Overview</span></h2>
             <div className="chipboardMainContainer">
             <div className="dashboardChip">
                <p className="dashboardChipheader">My Products</p>
                <h4 className="digit">0</h4>
             </div>
             <div className="dashboardChip">
             <p className="dashboardChipheader">Completed Earnings</p>
             <h4 className="digit">$0.00</h4>
             </div>
             <div className="dashboardChip">
             <p className="dashboardChipheader">Pending Earnings</p>
             <h4 className="digit">$0.00</h4>
             </div>
             <div className="dashboardChip">
             <p className="dashboardChipheader">Sold Items</p>
             <h4 className="digit">0</h4>
             </div>
             <div className="dashboardChip">
             <p className="dashboardChipheader">My Points</p>
             <h4 className="digit">300pts</h4> 
             </div>
             </div>
               <div className="ProductInfoContainer">
                <p className="productinfoText">Product Information</p>
                   <div className="ProductInfoContainerText">
                   <br></br>
                   <div className="ProductInfoContainerDiv">
                   <p className="xPara">Period Jun 5,2023-Jul 5,2023</p>
                   <p className="xPara">To know more about our AI dynamic price system <span style={{color:"blue"}}> Click Here</span></p>
                   <p className="xPara">There are no recent price updates for your products.</p>
                   </div>
                   </div>

               </div>
               <div style={{display:"flex",width:"100%"}}>
                   <div className="profileCardDiv">
                    <p className="profileCardDiv_Header">&nbsp;</p>
                    <div  className="AccountCircleDiv" >
                    <AccountCircle className="AccountCircleIcons" style={{width:"70px",height:'70px', marginTop:'0'}}/>
                  
                    
                    </div>
                    <div className="displayFlexJustifyContentCenter" >
                    <h4>Ajinkyag @98922</h4>
                    
                    </div>
                    <div className="displayFlexJustifyContentCenter" >
                    <button className="Edit_Profile">Edit Profile</button>
                    </div>
                    <div  className="display_FlexJustifyContent_SpaceAround">
                       <div>
                       <h3  className="textAlignCenter">0</h3>
                       <p className="marginTop0">Articles</p>
                       </div>
                       <div>
                       <h3  className="textAlignCenter">0</h3>
                       <p className="marginTop0">My Requests</p>
                       </div>
                       <div>
                       <h3 className="textAlignCenter">0</h3>
                       <p className="marginTop0">Followers</p>
                       </div>
                      
                    </div>
                  <div className="displayFlexJustifyContentCenter">
                       <button className="referral_Program">Referral Program</button>

                  </div>
                   </div>
                      <div className="recent_Purchases">
                        <p  className="profileCardDiv_Header">Recent Purchases</p>
                        <p className="noRecentPurchase" >No Recent Purchases. Please check our <span style={{color:'blue'}}>select catalog of products.</span></p>
                      </div>
                     
               </div>
              
            </div>
      </div>
    </div>
  );
}

export default DashboardPage;
