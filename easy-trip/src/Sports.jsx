import React from 'react'
import './Sports.css';
import Sportscardbox from './Sportscardbox';

function Home() {
 
  let Alldata=[
    {image:"https://www.adventurush.com/wp-content/uploads/2022/09/Copy-of-Copy-of-DSC_0702-1.jpg",
      place:"RAFTING" ,
      rating:"4.1",
     places:"RISHIKESH, TEHRI GARHWAL UTTARAKHAND",
     prise:"600",
    },

    {image:"https://www.adventurush.com/wp-content/uploads/2022/12/BUNGY-13Gallery.jpg",
      place:"BUNGEE JUMPING" ,
      rating:"2.4",
      places:"RISHIKESH, TEHRI GARHWAL UTTARAKHAND",
      prise: "2000",
    },
      

    {image:"https://www.adventurush.com/wp-content/uploads/2022/09/shutterstock_1238746210.jpg",
      place:"PARAGLIDING" ,
      rating:"4.4",
      places:"RISHIKESH, TEHRI GARHWAL UTTARAKHAND",
      prise: "2500",
    },
     
    {image:"https://www.adventurush.com/wp-content/uploads/2023/10/Skiing-1.jpg" ,
      place:"SKIING" ,
      rating:"3.5",
      places:" Chakrata, Uttarkashi  UTTARAKHAND",
      prise: "600",
    },
      
    {image:"https://www.adventurush.com/wp-content/uploads/2022/08/shutterstock_1011368053.jpg" ,
      place:"TREKKING" ,
      rating:"2.4",
      places:"RISHIKESH, TEHRI GARHWAL UTTARAKHAND",
      prise: "500",
    },
      
    {image:"https://www.adventurush.com/wp-content/uploads/2022/09/IMG20220518190702.jpg",
    place:"CAMPING" ,
      rating:"4.3",
      places:"RISHIKESH, TEHRI GARHWAL UTTARAKHAND",
      prise: "1000",
    },

    {image:"https://www.adventurush.com/wp-content/uploads/2024/05/RC-2-Gallery-1.jpg",
      place:"RAPPELLING" ,
      rating:"5",
      places:"RISHIKESH, TEHRI GARHWAL UTTARAKHAND" ,
      prise: "1500",
    },
   
  ]

  return (
    <div id='fullScreen1'>
  
   
   <Sportscardbox Alldata={Alldata}/>
  
   

    </div>
  )
}

export default Home;
