import React, { useState } from "react";
import "../Style/SignUpPage.css";
import { Facebook, GitHub } from "@material-ui/icons";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";

// import GoogleTranslate from "../GoogleTranslate";

  
function SignUpPage() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [repassword, setRePassword] = useState("");
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const handleSignUp = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await axios
  //       .post("/api/session/register", {
  //         name,
  //         email,
  //         password,
  //         repassword,
  //       })
  //       .then(({ data }) => dispatch(setUser(data.user)))
  //       .catch((error) => console.log(error));
  //     setName("");
  //     setEmail("");
  //     setPassword("");
  //     setRePassword("");
  //     console.log(response);
  //     navigate("/signin");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div className="signupContainer" >
      {/* <div className="selectCountryBox"> */}
      {/* <GoogleTranslate/> */}
      {/* </div> */}

      <section className="signupBox">
        <div className="signUpInnerBox">
       {/**  <form onSubmit={handleSignUp}> */} 
            <p className="signupheader">Sign up As an Individual</p>
            <p className="corporateuser">Or sign up as a corporate user</p>
            <hr></hr>
            <br></br>
            <button className="loginWithGoogle_ inputBox_">
              <img src="google.png" alt="google" className="google_"></img>Login with Google
            </button>
            <br></br>
            <button className="loginWithFacebook_ inputBox_">
              <Facebook className="facebook_" />
              Login with Facebook
            </button>
            <br></br>
            <button className="loginWithGithub_ inputBox_">
              <GitHub className="github_" />
              Login with Github
            </button>

            <p style={{ textAlign: "center" }}>Or</p>

            <input type="text" className="userName inputBox_" placeholder="User Name"></input>
            <br></br>
            <input type="email" className="emailAddress inputBox_" placeholder="Email Address"></input>
            <br></br>
            <input type="password" className="password_ inputBox_" placeholder="Password"></input>
            <br></br>
            <input type="text" className="websiteUrl inputBox_" placeholder="Website URL (Optional)"></input>

            <p style={{ marginLeft: "12%" }}>
              Date of Birth<sup className="star">*</sup>
            </p>
            <div className="deteBox">
              <select className="selectMonth">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
              </select>
              <select className="selectDate">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
                <option>16</option>
                <option>17</option>
                <option>18</option>
                <option>19</option>
                <option>20</option>
                <option>21</option>
                <option>22</option>
                <option>23</option>
                <option>24</option>
                <option>25</option>
                <option>26</option>
                <option>27</option>
                <option>28</option>
                <option>29</option>
                <option>30</option>
                <option>31</option>
              </select>
              <select className="selectyear">
                <option>1999</option>
                <option>2000</option>
                <option>2001</option>
                <option>2002</option>
                <option>2003</option>
                <option>2004</option>
                <option>2005</option>
                <option>2006</option>
                <option>2007</option>
                <option>2008</option>
                <option>2009</option>
                <option>2010</option>
                <option>2011</option>
                <option>2012</option>
                <option>2013</option>
                <option>2014</option>
                <option>2015</option>
                <option>2016</option>
                <option>2017</option>
                <option>2018</option>
                <option>2019</option>
                <option>2020</option>
                <option>2021</option>
                <option>2022</option>
                <option>2023</option>
                <option>2024</option>
                <option>2025</option>
              </select>
            </div>
            <br></br>
            <div className="checkBoxAndSuscribeBox">
              <input type="checkbox"></input>
              <span className="suscribe" style={{ color: "rgb(100, 100, 100);" }}>
                Subscribe to our news letters and stay updated on latest items on GTM_X.
              </span>
            </div>
            <br></br>

            <div className="createAccountBtnBox">
              <button type="submit" className="createAccount">
                SignUp Account
              </button>
            </div>
            <div className="alreadyAccountLogin" style={{ marginBottom: "0", paddingBottom: "0" }}>
              <p>Already have an account?</p>
              <Link to="/signin" className="linkInsignIn">
                <p className="sign_in">Sign In</p>
              </Link>
            </div>
            <div className="signupFooter">
              <p className="clickingCreateAccount">
                By clicking Create Account you agree to our <span style={{ color: "aqua" }}> terms of service</span> including our <span style={{ color: "aqua" }}>Privacy Policy</span> and Cookie{" "}
                <span style={{ color: "rgb(140, 224, 196)" }}>Policy</span>.
              </p>
            </div>
       {/**  </form> */} 
        </div>

        <div className="signuptextContent">
          <h1 className="gtmHeaderINSignUp">
            GTM <span style={{ color: "blue" }}>X</span>
          </h1>
          <div className="imgBoxInSignUp">
            <img src="what-can-you.png" alt="" className="image1"></img>
          </div>
          <p style={{ textAlign: "center", marginTop: "20px" }}>
            <b>What can you do on PieceX?</b>
          </p>
          <div style={{ display: "flex", marginBottom: "0" }}>
            <div className="desc_ruption">
              <ul>
                <li className="listSignUp">
                  <b className="boldColor">Marketplace</b> - Buy/Sell Source Code in any Programming Language
                </li>
                <br></br>
                <li className="listSignUp">
                  <b className="boldColor">PieceX OSS </b> - Get/Provide Support for your Open Source Code
                </li>
                <br></br>
                <li className="listSignUp">
                  <b className="boldColor">PieceX IoT </b> - List your IoT Hardware/Software and increase your customer base
                </li>
                <br></br>
              </ul>
            </div>
            <div className="desc_ruption">
              <ul>
                <li className="listSignUp">
                  <b className="boldColor">Request</b> - Request the source code you want from tens of thousands of users
                </li>
                <br></br>
                <li className="listSignUp">
                  <b className="boldColor">Write Articles</b> - Post your tech articles to grow your fan base
                </li>
                <br></br>
                <li className="listSignUp">
                  <b className="boldColor">Global network</b>- Expand your Network overseas and Increase your Standing in the Market
                </li>
              </ul>
            </div>
          </div>
          <hr className="hr" style={{ marginLeft: "10px", marginTop: "0" }}></hr>
          <div className="signUpFooterText">
            <div className="footerNav">
              <p className="nav_Link">Privacy Policy</p>
              <p className="nav_Link">Terms of Service</p>
              <p className="nav_Link">Contact Us</p>
            </div>
            <div className="allRightReserveBox">
              <p className="allrightResevetext">© 2023 Piecex.com All Right Reserved</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignUpPage;
