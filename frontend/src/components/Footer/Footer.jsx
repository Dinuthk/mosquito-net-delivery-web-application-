import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logoo} alt="" />
                <p>At Tasty order, we are committed to bringing you the best food from your favorite local restaurants, right to your doorstep. Whether you're craving a gourmet meal or a quick bite, we've got you covered..</p>
                <div className="footer-social-icon">
                    <img src={assets.facebook_icon}alt="" />
                    <img src={assets.twitter_icon}alt="" />
                    <img src={assets.linkedin_icon}alt="" />
                </div>

            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+94-76-128-7599</li>
                    <li>contact@tastyorders.com</li>
                </ul>

            </div>
                
        </div>  
        <hr/>   
        <p className="footer-copyright">This site is protected by reCAPTCHA, and the Google Privacy Policy and Terms of Service apply.
        © 2024 Tharu Technologies Inc.</p>

    </div>
  )
}

export default Footer