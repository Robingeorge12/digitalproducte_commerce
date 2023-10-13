import React,{useState,useEffect} from "react";
import "../Style/Login.css";
import { Facebook, GitHub } from "@material-ui/icons";
import { Link,useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from 'axios';
// import { login } from "../redux/authslices";
// import GoogleTranslate from "../GoogleTranslate";
function LoginPage() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const handleSignIn = async (e) =>{
  //   e.preventDefault();

  //   try {
  //     await axios
  //       .post("/api/session/login", {
  //         email,
  //         password,
  //       })
  //       .then((response) => {
  //         dispatch(login(response.data.user));
  //       })
  //       .catch((err) => console.log(err));
  //     setEmail("");
  //     setPassword("");
  //      navigate("/dashboard");
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <div className="loginPageMainContainer">
   {/**language translator component start */}
      <div className="selectCountryBox">
     
  {/* <GoogleTranslate/> */}

      </div>
       {/**language translator component  end */}
     {/**<form onSubmit={handleSignIn}> */} 
     
      <div className="mainBoxForBothChild">
        <div className="loginFirstChildBox">
          <h1 className="loginHeader">Login</h1>
          <button className="loginWithGoogle inputBox">
            <img src="google.png" alt="google" className="google"></img>Login with Google
          </button>
          <br></br>
          <button className="loginWithFacebook inputBox">
            <Facebook className="facebook" />
            Login with Facebook
          </button>
          <br></br>
          <button className="loginWithGithub inputBox">
            <GitHub className="github" />
            Login with Github
          </button>
          <div>
            <p className="or">OR</p>
          </div>
          <p className="label">Email</p>
          <input type="email" className="email inputBox" placeholder="Email Address"></input>
          <br></br>
          <p className="label">Password</p>
          <input type="password" className="password inputBox" placeholder="Password"></input>
          <br></br>
          <div className="checkboxContainer">
            <input type="checkbox"></input>
            <span className="rememberMe text_new">Remember Me</span>
          </div>

          <div className="loginbtnAndForgotpassword" style={{ display: "flex" }}>
            <button type="submit" className="login" >Login</button>
            <p className="forgotpassword fontSizeSmall">Forgot Password</p>
          </div>
          <div className="newToGTMandSignupLink" >
            <p style={{ marginRight: "5%" }} className="fontSizeSmall">New to GTMx ?</p>

            <Link to="/signup" className="linkInlogin">
              <span  className="fontSizeSmall">Sign Up</span>
            </Link>
          </div>

          <div className="loginFooter">
            <p></p>
          </div>
        </div>

        <div className="loginSecondChildBox">
          <h1 className="gtmx">
            GTM <span className="x">X</span>{" "}
          </h1>
          <div className="contentBox1">
            <div className="imgContainer">
              <img src="affiliate.png" alt="affiliate" className="affiliate"></img>
            </div>
            <div className="textBox">
              <h3 style={{ marginBottom: "5px" }}>Become a PieceX</h3>
              <h3 style={{ marginTop: "0" }}>Affiliate</h3>

              <p className="fontSizeSmall">Get paid for your connections: Refer someone to PieceX and earn 5% on the first order made by your referral link.</p>
              <button className="textBoxButton">Become affiliate</button>
            </div>
          </div>
          <div className="contentBox2">
            <div className="imgContainer">
              <img src="sales_agency.png" alt="affiliate" className="sales_agencyImg"></img>
            </div>
            <div className="textBox">
              <h3 style={{ marginBottom: "5px" }}>Become a GTMx Sales Agency</h3>
              <h3 style={{ marginTop: "0" }}>Affiliate</h3>

              <p className="fontSizeSmall">Get paid for your connections: Refer someone to PieceX and earn 5% on the first order made by your referral link.</p>
              <button className="textBoxButton">Become Sales agency</button>
            </div>
          </div>
        </div>
      </div>
    {/**</form> */}  
    </div>
  );
}

export default LoginPage;
