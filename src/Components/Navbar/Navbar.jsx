import React from "react";
import "./Navbar.css";
import { AiFillCaretDown, AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegBell, FaRegHeart, FaRegUserCircle } from "react-icons/fa";

import GoogleTranslate from '../GoogleTranslate/GoogleTranslate';

import { useState } from "react";
import { Link } from "react-router-dom";
import NavbarLang from "../NavbarLang/NavbarLang";
import NavbarMenu from "../NavbarMenu/NavbarMenu";
import Language from "../Language/Language";


import CustomBuyMenu from "../CustomBuyMenu/CustomBuyMenu";
import CustomSellMenu from "../CustomSellMenu/CustomSellMenu";
import SearchPage from "../SearchPage/SearchPage";

function Navbar() {

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [login, setLogin] = useState(false);
  const [logout, setLogout] = useState(true);
  const [customBuy, setCustomBuy] = useState(false);
  const [customSell, setCustomSell] = useState(false);

  const [search,setSearch] = useState("")

  const handleSearch = (e)=>{
    // console.log(e.target.value);
    setSearch(e.target.value)
  }
  const handleName = (value)=>{
    // setSearch("")
    setSearch(value)
  }

  const handleBuy = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="navbar-container">
      <div className="navbar-container-div1">
        <div className="navbarcontainer-div1-box1">
          <div className="navbarcontainer-div1-box1-menu">
            <div>
              <NavbarMenu />
            </div>{" "}
          </div>
          <Link to=""> 
            {" "}
            <div className="navbarcontainer-div1-box1-icon">
              <img
                className="navbarcontainer-div1-box1-icon-img"
                src="data:image/jpeg;base64,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"
                alt=""
              />
            </div>
          </Link>
        </div>
        <div className="navbarcontainer-div1-box2">
          <div
            className="navbarcontainer-div1-box2-select1"
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
            onClick={() => setCustomBuy(!customBuy)}
          >
            <p className="navbarcontainer-div1-box2-select1-buy">
              Buy
              {customBuy && (
                <div>
                  <CustomBuyMenu />
                </div>
              )}
            </p>
            <div className="navbarcontainer-div1-box2-select1-icondiv">
              {" "}
              <AiFillCaretDown className="navbarcontainer-div1-box2-select1-icon" />
            </div>
            {show && (
              <div className="navbarcontainer-div1-box2-select1-hover"></div>
            )}
          </div>

          <div
            className="navbarcontainer-div1-box2-select2"
            onMouseEnter={() => setShow2(true)}
            onMouseLeave={() => setShow2(false)}
            onClick={() => setCustomSell(!customSell)}
          >
            <p className="navbarcontainer-div1-box2-select2-sell">
              Sell
              {customSell && (
                <div>
                  {" "}
                  <CustomSellMenu />{" "}
                </div>
              )}
            </p>
            <div className="navbarcontainer-div1-box2-select2-icondiv">
              {" "}
              <AiFillCaretDown className="navbarcontainer-div1-box2-select2-icon" />
            </div>
            {show2 && (
              <div className="navbarcontainer-div1-box2-select2-hover"></div>
            )}
          </div>

          <div
            className="navbarcontainer-div1-box2-name1"
            onMouseEnter={() => setShow3(true)}
            onMouseLeave={() => setShow3(false)}
          >
            {" "}
            <Link to="" className="navbarcontainer-div1-box2-name1-link1">
              {" "}
              Post Requests
            </Link>
            {show3 && (
              <div className="navbarcontainer-div1-box2-name1-hover3"></div>
            )}
          </div>
          <div
            className="navbarcontainer-div1-box2-name2"
            onMouseEnter={() => setShow4(true)}
            onMouseLeave={() => setShow4(false)}
          >
            {" "}
            <Link to="" className="navbarcontainer-div1-box2-name1-link2">
              Corporate Solutions
            </Link>
            {show4 && (
              <div className="navbarcontainer-div1-box2-name2-hove4"></div>
            )}
          </div>
        </div>
      </div>

      <div className="navbar-container-div2">
        <div className="navbar-container-div2-search">
          <input
            type="text"
            value={search}
            onChange={handleSearch}
            className="navbar-container-div2-search-ip"
            placeholder="Search..."
           
          />
        </div>
        { search && <SearchPage search = {search}  handleSearch={handleName} /> }
        {/* {belll icon..................} */}

        {login && (
          <Link to="" className="navbar-container-div2-belllink">
            {" "}
            <div className="navbar-container-div2-belldiv">
              <div className="navbar-container-div2-bell-icondiv">
                <FaRegBell className="navbar-container-div2-bell-icon" />
              </div>
              <div className="navbar-container-div2-bell-rect">
                {" "}
                <p className="navbar-container-div2-bell-rect-count">{0}</p>
              </div>
            </div>{" "}
          </Link>
        )}

        {/* { heart  icon..................................} */}

        {login && (
          <Link to="" className="navbar-container-div2-heartlink">
            {" "}
            <div className="navbar-container-div2-heartdiv">
              <div className="navbar-container-div2-heart-icondiv">
                <FaRegHeart className="navbar-container-div2-heart-icon" />
              </div>
              <div className="navbar-container-div2-heart-rect">
                {" "}
                <p className="navbar-container-div2-heart-rect-count">{0}</p>
              </div>
            </div>{" "}
          </Link>
        )}

        {/* {cart icon...............................} */}

        <Link to="" className="navbar-container-div2-cartlink">
          {" "}
          <div className="navbar-container-div2-cartdiv">
            <div className="navbar-container-div2-cart-icondiv">
              <AiOutlineShoppingCart className="navbar-container-div2-cart-icon" />
            </div>
            <div className="navbar-container-div2-cart-rect">
              {" "}
              <p className="navbar-container-div2-cart-rect-count">{0}</p>
            </div>
          </div>{" "}
        </Link>

        {/* { use profile,..........................................................} */}

        {login && (
          <div className="navbar-container-div2-user">
            <FaRegUserCircle className="navbar-container-div2-user-icon" />
            {login && (
              <img src={""} className="navbar-container-div2-user-img" alt="" />
            )}
          </div>
        )}

        {/* {login..........................................} */}
        {logout && (
          <Link to="" className="navbar-container-div2-loginlink">
            {" "}
            <div className="navbar-container-div2-logindiv">Log In</div>
          </Link>
        )}
        {/* { signup.....................................................} */}
        {logout && (
          <Link to="" className="navbar-container-div2-signuplink">
            {" "}
            <div className="navbar-container-div2-signupdiv">
              Sign Up
            </div>
          </Link>
        )}

        {/* {},.........................,....../////////////////////// */}

        <div className="navbar-container-div2-lang">
          <div className="navbar-container-div2-lang-drope">
            <GoogleTranslate />
         
            {/* <NavbarLang /> */}
            {/* <Language /> */} 
            {/* <LanguageSel /> */}
          </div>
        
   
          <div className="navbar-container-div2-lang-icondiv">
            <AiFillCaretDown className="navbar-container-div2-lang-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
