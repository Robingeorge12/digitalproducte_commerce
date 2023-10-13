import React from "react";
import "../Style/ChatCard.css";
function ChatCard() {
  return (
    <div className="chatCardContainer">

      <div className="chatCardInnerContainer">
        <p className="chatheaderpara">
          Source Code Marketplace and we will get back to you.
          <span>
            {" "}
            <a href="xyz" style={{ color: "white" }}>
              {" "}
              Learn more about PieceX.
            </a>
          </span>{" "}
        </p>
        <div className="inputBoxField">
          <input type="text" placeholder="*Name" className="inpUt"></input>
          <br></br>
          <input type="text" placeholder="*Email" className="inpUt"></input>
          <h6 className="WhatareyoulookingText">* What are you looking for?</h6>
          <div className="CHECKBOXdiv">
            <input type="checkbox"></input>
            <br></br>
            <p className="checkPara">Sell Source Code (I am a devoper company or an I.T Professional with a source code product)</p>
          </div>
          <div className="CHECKBOXdiv">
            <input type="checkbox"></input>
            <br></br>
            <p className="checkPara">Sell Source Code (I am a devoper company or an I.T Professional with a source code product)</p>
          </div>
          <textarea cols="20" rows="4" placeholder="*Inquire" className="textArea"></textarea>
          <div className="submitButtonDiv">
            <button className="SUBMIT">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatCard;
