import React from "react";
import "./Testimony.css";

import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

const data = [
  {
    img: "https://www.piecex.com/assets/img/common/home/silexlog.png",
    comt: "PieceX is a great marketplace to sell B2B software Source Code.The Request and Customization features are amazing ways to connect directly with buyers and understand their requirements. We are looking forward to sell more Business Apps on PieceX.",
    name: "Nsikak Joseph Nelson, CEO",
    comp: "Silex Secure",
  },
  {
    img: "https://www.piecex.com/assets/img/common/home/elveeInfo.png",
    comt: "Source Code bought from PieceX can be extremely helpful in accelerating project development, specially when your client is not willing to provide a high budget.Ready-to-use Source Code bought from PieceX helps reduce the overall time and cost of development.",
    name: "Mitul Moradiya, CEO",
    comp: "Elvee Infotech",
  },
  {
    img: "https://www.piecex.com/assets/img/common/home/ssrsofttech.png",
    comt: "PieceX is the best marketplace for selling Source Code, specially with its unique dynamic pricing catered for by PieceX’s AI.This AI helps sellers earn more revenue and also relieves the burden from the team to constantly monitor the price and update it as per market demand. All pricing is completely taken care by the AI mechanism of PieceX.",
    name: "Sharath M, CEO",
    comp: "SSR Softech",
  },

  // {
  //     "img":"",
  //     "comt":""
  // },
];

function Testimony() {
  return (
    <div className="testimony-container">
      <div className="testimony-container-div1">
        <p className="testimony-container-div1-head">
          Testimoni
          <span className="testimony-container-div1-head-s1">als</span>{" "}
        </p>

        <div className="testimony-container-div1-text">
          <p className="testimony-container-div1-text-p">
            What our clients say about us
          </p>
        </div>
      </div>

      <div className="testimony-container-div2">
        <Carousel>
          {data?.map((el, i) => (
            <Paper key={i}>
              <div className="testimony-container-div2-card">
                <div className="testimony-container-div2-imgdiv">
                  <img
                    className="testimony-container-div2-img"
                    src={el.img}
                    alt="pic"
                  />

                  {/* <div className="testimony-container-div2-namediv">
                    <p className="testimony-container-div2-md-name">
                      {el.name}
                    </p>
                  </div> */}
                  {/* <div className="testimony-container-div2-company">
                    <p className="testimony-container-div2-company-name">
                      {el.comp}
                    </p>
                  </div> */}
                </div>
                <div className="testimony-container-div2-textdiv">
                  <p className="testimony-container-div2-text-p">{el.comt}</p>
                </div>
                <div className="testimony-container-div2-namediv">
                  <p className="testimony-container-div2-md-name">{el.name}</p>
                </div>
                <div className="testimony-container-div2-company">
                  <p className="testimony-container-div2-company-name">{el.comp}</p>
                </div>

                <Button className="CheckButton"></Button>
              </div>
            </Paper>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Testimony;
