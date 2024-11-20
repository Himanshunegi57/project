import React, { useState } from "react";
import Sportscard from "./Sportscard";
import "./Sportscardbox.css"

function Sportscardbox({Alldata}){
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
        <div>
     <div class="searchbar1">
        <h1 className="placecardboxh2">Select the Adventure you want.</h1>
        <div class="searchdiv1">
        
        <select name="travel1" id="travel1" class="options1" 
        onChange={Sortchange} value={sort}>
        <option value="default">Default sort</option>
        <option value="name">Sort by Name</option>
        <option value="rating">Sort by rating</option>
        </select>
        
        <input value={query }placeholder="search the adventure" class="search1" onChange={queryChange}/>
        </div>
    </div>
        <div class="destination1">
        <h1 className="placecardboxh1">Popular Adventure</h1>
        <div class="destinationimg1">
            {data.map((item)=><Sportscard key={item.place} image={item.image} place={item.place} places={item.places} rating={item.rating} prise={item.prise}/>)}
         </div>
        </div>
        </div>
    )
}

export default Sportscardbox;