import React from "react";
import"./Placedetail.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Placedetail({Alldata}){

    let Param= useParams();
    let name= Param.name;

    let place;

    for(let i=0; i<Alldata.length; i++){
        const p = Alldata[i];
        if (name == p.place) {
            place = p;
            break;
        }
    }
    return(
        <div className="card">
        <img className="cardimage" src={place.image} alt=""/>
        <div className="detail">
            <h1 className="detailheading">{place.place}</h1>
            <h1 className="district">{place.district}</h1>
            <p className="detailpara">{place.holediscription}</p>
            <div className="bookingdiv">
            <Link  to="/Book"><button className="linkbtn">book now</button></Link>
            </div>
        </div>
</div>
    )
}

export default Placedetail;