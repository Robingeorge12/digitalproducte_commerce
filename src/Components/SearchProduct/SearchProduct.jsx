import React from "react";
import "./SearchProduct.css";
import { FaLaptopCode } from "react-icons/fa";
import { MdAccountTree } from "react-icons/md";
import { AiFillDatabase } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";
import SearchFilterSideBar from "../SearchFilterSideBar/SearchFilterSideBar";
import FilterHeader from "../FilterHeader/FilterHeader";
import Header from "../Header/Header";

const data = [
  {
    name: "Android Crypto Portfolio App",
    desc: "A fully-functional working portfolio app",
    lan: "Java",
    tech: "Cryptocurrency,Finance,Mobile",
    area: "FinTech,Template,Crypto",
    add: "LeapardWare",
    price: 789,
  },
  {
    name: "VPN Mobile Number Location",
    desc: "Mobile App for Piksera LMS",
    lan: "Java,Dart",
    tech: "EdTech,Mobile",
    area: "Web System,Website,App,System",
    add: "Pedro",
    price: 897,
  },
  {
    name: "Cosmonaut News App",
    desc: "Modern news app built on top of the Spaceflight API",
    lan: "Dart,JQuery",
    tech: "Professional Services,Software Services",
    area: "News,Flutter,Mobile",
    add: "LeapardWare",
    price: 1145,
  },
  {
    name: "Uber Clone Taxi Booking System with Panels",
    desc: "An advanced platform that enables businesses to start their ride-hailing business online",
    lan: "HTML,CSS,JQuery",
    tech: "Software Services",
    area: "News,Flutter,Mobile",
    add: "LeapardWare",
    price: 1145,
  },
];

function SearchProduct() {
  return (
    <div className="searchprod-container">
      <div className="searchprod-container-append1"> 
      <Header />
      <FilterHeader />
      </div>

      <div className="searchprod-container-append2">
        <div className="searchprod-container-div1">
          <SearchFilterSideBar />
        </div>
        <div className="searchprod-container-div2">
          <div className="searchprod_grid-container">
            {data.map((el, index) => (
              // <div className="searchprod_grid-item" key={index}>
              <div
                className="searchprod-container-div3-swiper-slide"
                key={index}
              >
                <div className="searchprod-container-div3-swiper-slide-children1">
                  {" "}
                  <img
                    src="https://www.sovereignconsult.com/wp-content/uploads/2019/07/blockchain-development.gif"
                    className="searchprod-container-div3-swiper-slide-children1-img"
                    alt=""
                  />
                </div>
                {/* <div className="searchprod-container-div3-swiper-slide-children2">
      <div className="searchprod-container-div3-swiper-slide-children2-icondiv">
          <BsHeart className="searchprod-container-div3-swiper-slide-children2-icon"/>
      </div>
      <p className="searchprod-container-div3-swiper-slide-children2-p1">
       Buy
      </p>
    </div> */}
                <div className="searchprod-container-div3-swiper-slide-children3">
                  <p className="searchprod-container-div3-swiper-slide-children3-p1">
                    {el.name}
                    {/* <Trans i18nKey="userMessagesUnread"  > <strong title={t('nameTitle')}>{el.name}</strong></Trans> */}
                  </p>
                </div>
                <div className="searchprod-container-div3-swiper-slide-children4">
                  <p className="searchprod-container-div3-swiper-slide-children4-p1">
                    {/* This is fully completed project built from Laravel framework VueJS.  */}
                    {el.desc}
                  </p>
                </div>

                <div className="searchprod-container-div3-swiper-slide-children5">
                  <div className="searchprod-container-div3-swiper-slide-children5-icondiv">
                    <FaLaptopCode className="searchprod-container-div3-swiper-slide-children5-icon" />
                  </div>
                  <div className="searchprod-container-div3-swiper-slide-children5-lang">
                    <p className="searchprod-container-div3-swiper-slide-children5-lang-p1">
                      {el.lan}
                    </p>
                  </div>
                </div>

                <div className="searchprod-container-div3-swiper-slide-children6">
                  <div className="searchprod-container-div3-swiper-slide-children6-icondiv">
                    <MdAccountTree className="searchprod-container-div3-swiper-slide-children6-icon" />
                  </div>
                  <div className="searchprod-container-div3-swiper-slide-children6-lang">
                    <p className="searchprod-container-div3-swiper-slide-children6-lang-p1">
                      {/* Blockchain,Criptocurrency */}
                      {el.tech}
                    </p>
                  </div>
                </div>
                <div className="searchprod-container-div3-swiper-slide-children7">
                  <div className="searchprod-container-div3-swiper-slide-children7-icondiv">
                    <AiFillDatabase className="searchprod-container-div3-swiper-slide-children7-icon" />
                  </div>
                  <div className="searchprod-container-div3-swiper-slide-children7-lang">
                    <p className="searchprod-container-div3-swiper-slide-children7-lang-p1">
                      {/* Content,Data,Technology,Telecommunication,Tools */}
                      {el.area}
                    </p>
                  </div>
                </div>
                <div className="searchprod-container-div3-swiper-slide-children8">
                  <p className="searchprod-container-div3-swiper-slide-children8-p1">
                    added by
                  </p>
                  <span className="searchprod-container-div3-swiper-slide-children8-p1-s1">
                    {/* Hangsharaj1888 */}
                    {el.add}
                  </span>
                </div>
                <div className="searchprod-container-div3-swiper-slide-children9">
                  <button className="searchprod-container-div3-swiper-slide-children9-btn">
                    {" "}
                    Download{" "}
                  </button>
                  <div className="searchprod-container-div3-swiper-slide-children9-box2">
                    $ {el.price}
                  </div>
                </div>
              </div>
              // </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchProduct;
