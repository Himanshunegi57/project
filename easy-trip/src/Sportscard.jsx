import React from 'react'
import "./Sportscard.css"
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Sportscard(data){

     const [sort, setSort]= useState("7-8");

     function Sortchange(event){
        let newSort= event.target.value;

        setSort(newSort);
    }
         return(
        <div class="pro1">
                <img class="image1" src={data.image} alt=""/>
                <div class="country1">
                    <h1>{data.place}</h1>
                    <h2>{data.places}</h2>
                    <h3>price for single person:{data.prise}</h3>
                   <p class="btn3">rating:{data.rating}</p>
             <div className="bookingsport">
                
                <Link to="/Book" className="booklink">book now</Link>
            </div>
                </div>
        </div>
    )
}

export default Sportscard;