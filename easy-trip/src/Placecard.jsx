import React from 'react';
import "./Placecard.css";
import { Link } from 'react-router-dom';

function Placecard(data){
    return(
        <div class="pro">
                <img class="image" src={data.image} alt=""/>
                <div class="country">
                    <h1>{data.place}</h1>
                    <Link to={"/place/"+ data.place} className="btn2">Explor now</Link>
                    <p className="placediscription">{data.discription}</p>
                </div>
        </div>
    )
}

export default Placecard;