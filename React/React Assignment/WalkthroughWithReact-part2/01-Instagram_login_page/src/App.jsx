import instagramImages from "./assets/instagram.svg"
import "./App.css"
import Signup from "./Signup.jsx"
import { useState } from "react"
import Button from "./Button"
import InputTag from "./InputTag"
function App() {
  const [showSignup, setShowSignup]=useState(false)
  const handleSignupClick = () => {
    setShowSignup(true); 
  };
    return (
      showSignup ? <Signup/> :
        <div id="login-page">
        <img className="instagram-image" src={instagramImages} alt="Instagram Image" />
        <InputTag id="username" placeholder={"phone number, username or email"} type={"text"}/>
        <InputTag id="userpassword" placeholder={"password"} type="password"/>
        <Button id="sign-in-button" props="Sign In"/>
        <p>Don't have account? <span onClick={handleSignupClick} >Sign Up</span></p>
        </div>
    )
    
}

export default App