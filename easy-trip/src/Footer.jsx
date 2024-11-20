import React from "react";
import "./Footer.css";
import { FaInstagram,FaFacebookSquare,FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";

function Footer(){
    return(
        <div class="footer">
           <div className="footerdetail">
            <div className="companydiv">
                <h1>EasyTrip</h1>
                <p>A mystical land of mountains and mythologies, exquiste landscapes and exhilarating
                    advanture, and wellness and yoga, Uttarakhand has something to offer every traveller.
                </p>
                <div className="idlogo">
                   <FaInstagram />
                     <FaFacebookSquare />
                    <FaLinkedin />
                </div>
            </div>
            <div className="companydetaildiv">
                <h1>Contact Detail</h1>
                <div className="footerlogo"> <FaLocationDot/> <p>Govt. polytehnic Narendra Nagar (T.G.), Uttarakhand.</p></div>
                <div className="footerlogo">  <IoCall/> <p>1234567891</p></div>
                <div className="footerlogo"> <IoMdMail/> <p>polytechnic@gmail.com</p></div>
            </div>
           </div>
           <h1>Copyright @2024 All rights reserved | This template is made by easytrip.</h1>
        </div>
    )
}

export default Footer;