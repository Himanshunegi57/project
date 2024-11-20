import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { SiParamountplus } from "react-icons/si";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { firebaseapp } from './firebaseconfig'; // Ensure you import your Firebase configuration

function Navbar() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const auth = getAuth(firebaseapp);
    
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });

    // Clean up the listener on component unmount
    return () => unsubscribe();
  }, []);

  return (
    <div id="header">
         <style>
        {`
        

          #navbarimage .navbara {
            margin-left: 15px; 
          }
        `}
      </style>
      <div id="menu">
        <Link className="navbara" to="/">HOME</Link>
        <Link className="navbara" to="/sports">ADVENTURE</Link>
        <Link className="navbara" to="/contact">CONTACT</Link>
      
      </div>
      <div id="navbarimage">
        <SiParamountplus />
        {currentUser ? (
      
      <>
        <Link className="navbara" to="/mytrips">MY TRIPS</Link>
        <span className="navbara">Hello, {currentUser.displayName}</span>
      </>
    ) : (
  
      <Link className="navbara" to="/registration">REGISTRATION/LOGIN</Link>
    )}
      </div>
    </div>
  );
}

export default Navbar;
