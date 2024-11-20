import React from 'react'
import './Home.css';
import Container from './Container';
import Placecardbox from './Placecardbox';


function Home({Alldata}) {
 
 

  return (
    <div id='fullScreen'>
   <Container/>
   <Placecardbox Alldata={Alldata}/>
  
   

    </div>
  )
}

export default Home;
