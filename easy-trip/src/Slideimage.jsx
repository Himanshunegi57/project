import React from "react";
import "./Slideimage.css"

function Slideimage(data){

    return(
        <div class="slide">
                <div class="img">
                    <img src={data.image}alt=""/>
                </div>
                <div class="text">
                    <h1>{data.place}</h1>
                   </div>
            </div>
    )
}

export default Slideimage;