import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { SiParamountplus } from "react-icons/si";

function Navbar(){
      
return(
<div id="header">
    <div id="menu">
    <Link className="navbara" to="/">HOME</Link>
    <Link className="navbara" to="/sports">ADVENTURE</Link>
    <Link className="navbara" to="/contact">CONTACT</Link>
    <Link className="navbara" to="/registration">REGISTRATION/LOGIN</Link>
    <Link className="navbara" to="/mytrips">MY TRIPS</Link>
    </div>
    <div id="navbarimage">
         <SiParamountplus />
    </div>
</div>
)
}

export default Navbar;