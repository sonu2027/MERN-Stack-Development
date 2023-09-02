import React, { useState } from "react";
import App from "./App.jsx";
import instagramImages from "./assets/instagram.svg"
import Button from "./Button.jsx"
import InputTag from "./InputTag.jsx";
function Signup() {
    const [showSignin, setShowSignin] = useState(false)
    const handleSigninClick = () => {
        setShowSignin(true);
    };
    return (
        showSignin ? <App /> :
            <div id="login-page">
                <img className="instagram-image" src={instagramImages} alt="Instagram Image" />
                <InputTag id={"usercontact"} placeholder="Mobile Number or Email" type={"text"} />
                <InputTag id={"userfullname"} placeholder="Full Name" type="text" />
                <InputTag id="username" placeholder={"phone number, username or email"} type={"text"} />
                <InputTag id="userpassword" placeholder={"password"} type="password" />
                <Button id="sign-up-button" props={"Sign Up"} />
                <p>Have an account? <span onClick={handleSigninClick} >Log In</span></p>
            </div>
    )
}
export default Signup