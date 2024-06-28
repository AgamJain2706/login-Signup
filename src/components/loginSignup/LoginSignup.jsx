import React, { useState } from 'react'
import './loginSignup.css'

import person_icon from '../assets/person.png'
import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png'
export const LoginSignup = () => {
  const [action,setAction] = useState("Login");

    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                {action === "Login"?<div></div>:<div className='input'>
                    <img src={person_icon} alt="" />
                    <input type="text" placeholder='Enter your Name ' />
                </div>}
                
                <div className='input'>
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder='enter email ' />
                </div>
                <div className='input'>
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder='enter password ' />
                </div>
            </div>
            <div className="forgot-password">Lost Password? <span>Click Here </span></div>
            <div className="submit-container">
                <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => {setAction("sign up")}}>Sign Up</div>
                <div className={action === "sign up" ? "submit gray" : "submit"} onClick={() => {setAction("Login")}}>Login</div>
            </div>
        </div>
    )
}
export default LoginSignup