import React from "react";
import "./mytrip.css";
import { Link } from "react-router-dom";
import Book from "./Book";

function Mytrips(){

    return(
        <div className="card">
        <img className="cardimage" src="" alt=""/>
        <div className="detail">
        <p className="detailpara">name:</p>
        <p className="detailpara">date:</p>
        <p className="detailpara">timing:</p>
            <p className="detailheading">place:</p>
            <p className="district">district:</p>
            <p className="detailpara">amount:</p>
            <p className="detailpara">people:</p>
            
            <div className="bookingdiv">
         </div>
        </div>
</div>
    )
}

export default Mytrips;