import React from "react";
import "./SoftwareCard.css";
import { FaLaptopCode } from "react-icons/fa";
import { MdAccountTree } from "react-icons/md";
import { AiFillDatabase } from "react-icons/ai";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import "swiper/css";
import "swiper/css/bundle";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';



const data = [
  {
     name: "Android Crypto Portfolio App",
  desc:"A fully-functional working portfolio app",
  lan:"Java",
  tech:"Cryptocurrency,Finance,Mobile",
  area:"FinTech,Template,Crypto",
  add:"LeapardWare",
  price:789
 },
 {
   name: "VPN Mobile Number Location",
 desc:"Mobile App for Piksera LMS",
 lan:"Java,Dart",
 tech:"EdTech,Mobile",
 area:"Web System,Website,App,System",
 add:"Pedro",
 price:897

 },
 {
  name: "Cosmonaut News App",
desc:"Modern news app built on top of the Spaceflight API",
lan:"Dart,JQuery",
tech:"Professional Services,Software Services",
area:"News,Flutter,Mobile",
add:"LeapardWare",
price:1145.67
},
{
  name: "Uber Clone Taxi Booking System with Panels",
desc:"An advanced platform that enables businesses to start their ride-hailing business online",
lan:"HTML,CSS,JQuery",
tech:"Software Services",
area:"News,Flutter,Mobile",
add:"LeapardWare",
price:1145.67
},
  ];

function SoftwareCard() {


  const len = data.length
  // console.log(len)
  const handleClick = ()=>{
    // console.log("len")
  }
  
  return (
    <div className="softwarecard-container">
      <div className="softwarecard-container-div1">
        <p className="softwarecard-container-div1-p1">
          Weekly
          <span className="softwarecard-container-div1-p1-s1">
            Free Source Codes
          </span>
        </p>
      </div>
      <div className="softwarecard-container-div2">
        <p className="softwarecard-container-div2-p1">
          {" "}
          <span className="softwarecard-container-div2-p1-s1">
            Download
          </span>{" "}
          amazing weekly free products.
        </p>
      </div>

      {/* {  cards.....} */}
      <div className="softwarecard-container-div3">
        <Swiper

breakpoints={{
  425: {
    slidesPerView: 1,
    spaceBetween: 0,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 40,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 0,
  },
  1440: {
    slidesPerView: 4,
    spaceBetween: 20,
  },
}}


          spaceBetween={20}
          slidesPerView={4}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          {data?.map((el, i) => (
            <SwiperSlide
              key={i}
              className="softwarecard-container-div3-swiper-parent"
              onClick={handleClick}
            >
              <div className="softwarecard-container-div3-swiper-slide">
                <div className="softwarecard-container-div3-swiper-slide-children1">
                  {" "}
                  <img
                    src="https://i.gifer.com/5VsC.gif"
                    className="softwarecard-container-div3-swiper-slide-children1-img"
                    alt=""
                  />
                </div>
                <div className="softwarecard-container-div3-swiper-slide-children2">
                  <p className="softwarecard-container-div3-swiper-slide-children2-p1">
                    weekly free
                  </p>
                </div>
                <div className="softwarecard-container-div3-swiper-slide-children3">
                  <p className="softwarecard-container-div3-swiper-slide-children3-p1">
                  Architecture and Interiors Website Template
                  </p>
                </div>
                <div className="softwarecard-container-div3-swiper-slide-children4">
                  <p className="softwarecard-container-div3-swiper-slide-children4-p1">
                  This is fully completed project built from Laravel framework VueJS. 
                  </p>
                </div>

                <div className="softwarecard-container-div3-swiper-slide-children5">
                  <div className="softwarecard-container-div3-swiper-slide-children5-icondiv">
                    <FaLaptopCode className="softwarecard-container-div3-swiper-slide-children5-icon" />
                  </div>
                  <div className="softwarecard-container-div3-swiper-slide-children5-lang">
                    <p className="softwarecard-container-div3-swiper-slide-children5-lang-p1">
                    el.lan
                    </p>
                  </div>
                </div>

                <div className="softwarecard-container-div3-swiper-slide-children6">
                  <div className="softwarecard-container-div3-swiper-slide-children6-icondiv">
                    <MdAccountTree className="softwarecard-container-div3-swiper-slide-children6-icon" />
                  </div>
                  <div className="softwarecard-container-div3-swiper-slide-children6-lang">
                    <p className="softwarecard-container-div3-swiper-slide-children6-lang-p1">
                   Blockchain,Criptocurrency
                    </p>
                  </div>
                </div>
                <div className="softwarecard-container-div3-swiper-slide-children7">
                  <div className="softwarecard-container-div3-swiper-slide-children7-icondiv">
                    <AiFillDatabase className="softwarecard-container-div3-swiper-slide-children7-icon" />
                  </div>
                  <div className="softwarecard-container-div3-swiper-slide-children7-lang">
                    <p className="softwarecard-container-div3-swiper-slide-children7-lang-p1">
                    Content,Data,Technology,Telecommunication,Tools
                    </p>
                  </div>
                </div>
                <div className="softwarecard-container-div3-swiper-slide-children8">
                  <p className="softwarecard-container-div3-swiper-slide-children8-p1">
                    added by
                  </p>
                  <span className="softwarecard-container-div3-swiper-slide-children8-p1-s1">
                  Hangsharaj1888
                  </span>
                </div>
                <div className="softwarecard-container-div3-swiper-slide-children9">
                  <button className="softwarecard-container-div3-swiper-slide-children9-btn">
                    {" "}
                    Download{" "}
                  </button>
                </div>
                <div className="softwarecard-container-div3-swiper-slide-children10">

<div className="softwarecard-container-div3-swiper-slide-children10-box1"><span className="softwarecard-container-div3-swiper-slide-children10-box1-s1">$99.00</span></div>       
<div className="softwarecard-container-div3-swiper-slide-children10-box2">$00.0</div>            
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default SoftwareCard;
