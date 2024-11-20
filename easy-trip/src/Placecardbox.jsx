import React, { useState } from "react";
import Placecard from "./Placecard";
import "./Placecardbox.css"

function Placecardbox({Alldata}){
    const [query, setQuery]= useState('');
    const [sort, setSort]= useState("default");

    const data= Alldata.filter(function (item) {
        return item.place.toLowerCase().indexOf(query.toLowerCase()) != -1;
    });
     
if(sort == "rating"){
    data.sort((x,y)=> y.rating-x.rating);
}else if(sort == "name"){
    data.sort((x,y)=> x.place < y.place? -1 : 1 );
}

    function Sortchange(event){
        let newSort= event.target.value;

        setSort(newSort);
    }
    
    function queryChange(event){
        let newQuery= event.target.value;

        setQuery(newQuery);
    }

    return(
        <>
     <div class="searchbar">
        <h1 className="placecardboxh1">Where do you want to go ?</h1>
        <div class="searchdiv">
        
        <select name="travel" id="travel" class="options" 
        onChange={Sortchange} value={sort}>
        <option value="default">Default sort</option>
        <option value="name">Sort by Name</option>
        {/* <option value="rating">Sort by rating</option> */}
        </select>
        
        <input value={query }placeholder="search the place" class="search" onChange={queryChange}/>
        </div>
    </div>
        <div class="destination">
        <h1 className="placecardboxh1">Popular Destination</h1>
        <div class="destinationimg">
            {data.map((item)=><Placecard key={item.place} image={item.image} place={item.place} discription={item.discription} />)}
         </div>
        </div>
        </>
    )
}

export default Placecardbox;