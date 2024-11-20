import React from "react";
import "./Contact.css"
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";

function Contact(){

    return(
        <div className="Contactarea">
            <img  className="Contactimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjSYZTSnFxW1v8wWGb2_MxbrQRMqszpuNMk0dSxeHcD2uFkNBu33-dxeAN&s=10"/>
        <div className="Contacttext">
            <div className="Contactno">
              <IoCall className="contactlogo"/>
                <h1>PHONE</h1>
                <p>6397098201</p>
                <p>6397098201</p>
            </div>
          <div className="Contactaddress">
                <FaLocationDot className="contactlogo"/>
                <h1>ADDRESS</h1>
                <p>Govt. polytechnic narendra nagar</p>
                <p>(T.G.) UTTARAKHAND</p>
            </div>
            <div className="Contactmail">
            <IoMdMail className="contactlogo"/>
                <h1>E-MAIL</h1>
                <p>polytechnic@gmail.com</p>
                <p>ITnarendranagar@gmail.com</p>
            </div>
            </div>
        </div>
    )
}

export default Contact;