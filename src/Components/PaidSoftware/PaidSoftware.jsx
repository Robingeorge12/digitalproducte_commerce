import React from 'react'
import "./PaidSoftware.css"

import { FaLaptopCode } from "react-icons/fa";
import { MdAccountTree } from "react-icons/md";
import { AiFillDatabase } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";

import { Trans, useTranslation } from 'react-i18next';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const data = [
  {
     name: "Android Crypto Portfolio App",
     img:"",
  desc:"A fully-functional working portfolio app",
  lan:"Java,Dart",
  tech:"Cryptocurrency,Finance,Mobile",
  area:"FinTech,Template,Crypto",
  add:"LeapardWare",
  price:789
 },
 {
   name: "VPN Mobile Number Location",
   img:"",
 desc:"Mobile App for Piksera LMS",
 lan:"Javascript,PHP",
 tech:"EdTech,Mobile",
 area:"Web System,Website,App,System",
 add:"Pedro",
 price:897

 },
 {
  name: "Cosmonaut News App",
  img:"",
desc:"Modern news app built on top of the Spaceflight API",
lan:"Dart,JQuery",
tech:"Professional Services,Software Services",
area:"News,Flutter,Mobile",
add:"LeapardWare",
price:1145
},
{
  name: "Uber Clone Taxi Booking System with Panels",
  img:"",
desc:"An advanced platform that enables businesses to start their ride-hailing business online",
lan:"HTML,CSS,JQuery",
tech:"Software Services",
area:"News,Flutter,Mobile",
add:"Leo",
price:1145
},
  ];

  

function PaidSoftware() {
  const { t } = useTranslation();
  return (
    // <Trans i18nKey="userMessagesUnread" >
    <div className="paidsoftware-container">
    <div className="paidsoftware-container-div1">
    
      <p  className="paidsoftware-container-div1-p1">
 {"Featured"}
        <span className="paidsoftware-container-div1-p1-s1">
         Items
        </span>
      </p>
    </div>
    <div className="paidsoftware-container-div2">
      <p className="paidsoftware-container-div2-p1">
        {" "}
        <span className="paidsoftware-container-div2-p1-s1">
        Weekly{" "}
        </span>{" "}
         top-performing source codes from the community.
      </p>
    </div>

    {/* {  cards.....} */}
    <div className="paidsoftware-container-div3">
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
          spaceBetween: 20,
        },
        1440: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
      }}
        spaceBetween={20}
        slidesPerView={4}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {data?.map((el, i) => (
          <SwiperSlide
            key={i}
            className="paidsoftware-container-div3-swiper-parent"
          >
            <div className="paidsoftware-container-div3-swiper-slide">
              <div className="paidsoftware-container-div3-swiper-slide-children1">
                {" "}
                <img
                  src="https://www.sovereignconsult.com/wp-content/uploads/2019/07/blockchain-development.gif"
                  className="paidsoftware-container-div3-swiper-slide-children1-img"
                  alt=""
                />
              </div>
              <div className="paidsoftware-container-div3-swiper-slide-children2">
                <div className="paidsoftware-container-div3-swiper-slide-children2-icondiv">
                    <BsHeart className="paidsoftware-container-div3-swiper-slide-children2-icon"/>
                </div>
                <p className="paidsoftware-container-div3-swiper-slide-children2-p1">
                 Buy
                </p>
              </div>
              <div className="paidsoftware-container-div3-swiper-slide-children3">
                <p className="paidsoftware-container-div3-swiper-slide-children3-p1">
                {/* Architecture and Interiors Website Template */}
                <Trans i18nKey="userMessagesUnread"  > <strong title={t('nameTitle')}>{t(el.name)}</strong></Trans>
                </p>
              </div>
              <div className="paidsoftware-container-div3-swiper-slide-children4">
                <p className="paidsoftware-container-div3-swiper-slide-children4-p1">
                {/* This is fully completed project built from Laravel framework VueJS.  */}
                {t(el.desc)}
                </p>
              </div>

              <div className="paidsoftware-container-div3-swiper-slide-children5">
                <div className="paidsoftware-container-div3-swiper-slide-children5-icondiv">
                  <FaLaptopCode className="paidsoftware-container-div3-swiper-slide-children5-icon" />
                </div>
                <div className="paidsoftware-container-div3-swiper-slide-children5-lang">
                  <p className="paidsoftware-container-div3-swiper-slide-children5-lang-p1">
                  {/* C#, Lite,Java */}
                  {t(el.lan)}
                  </p>
                </div>
              </div>

              <div className="paidsoftware-container-div3-swiper-slide-children6">
                <div className="paidsoftware-container-div3-swiper-slide-children6-icondiv">
                  <MdAccountTree className="paidsoftware-container-div3-swiper-slide-children6-icon" />
                </div>
                <div className="paidsoftware-container-div3-swiper-slide-children6-lang">
                  <p className="paidsoftware-container-div3-swiper-slide-children6-lang-p1">
                 {/* Blockchain,Criptocurrency */}
                 {t(el.tech)}

                  </p>
                </div>
              </div>
              <div className="paidsoftware-container-div3-swiper-slide-children7">
                <div className="paidsoftware-container-div3-swiper-slide-children7-icondiv">
                  <AiFillDatabase className="paidsoftware-container-div3-swiper-slide-children7-icon" />
                </div>
                <div className="paidsoftware-container-div3-swiper-slide-children7-lang">
                  <p className="paidsoftware-container-div3-swiper-slide-children7-lang-p1">
                  {/* Content,Data,Technology,Telecommunication,Tools */}
                  {t(el.area)}
                  </p>
                </div>
              </div>
              <div className="paidsoftware-container-div3-swiper-slide-children8">
                <p className="paidsoftware-container-div3-swiper-slide-children8-p1">
                  added by
                </p>
                <span className="paidsoftware-container-div3-swiper-slide-children8-p1-s1">
                {/* Hangsharaj1888 */}
                {t(el.add)}
                </span>
              </div>
              <div className="paidsoftware-container-div3-swiper-slide-children9">
                <button className="paidsoftware-container-div3-swiper-slide-children9-btn">
                  {" "}
                  Download{" "}
                </button>
                <div className="paidsoftware-container-div3-swiper-slide-children9-box2">$  {t(el.price)}</div>   
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
  // </Trans>
  )
}

export default PaidSoftware