import React from "react";
import Home from "./Home";
import { Route , Routes} from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Contact from "./Contact";
import Registration from "./Registration";
import Sports from "./Sports";
import Mytrips from "./mytrips";
import Placedetail from "./Placedetail"
import Login from "./Login";
import Book from "./Book";


function App(){

    const path= window.location.pathname;

    let Alldata=[
        {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjSYZTSnFxW1v8wWGb2_MxbrQRMqszpuNMk0dSxeHcD2uFkNBu33-dxeAN&s=10",
            place:"Kedarnath",
              rating:"4",
              discription:"Kedarnath temple is one of the sacred pilgrimage centre in Northern India, located on the bank of Mandakini river at an altitude of 3584 meters above sea level.",
              holediscription:"Kedarnath is a holy Hindu town located in Rudraprayag district of Uttarakhand in India. It is one of the Char Dhams located in the Himalayas. Kedarnath is situated at an astonishing height of 3584 meters above sea level near the head of Mandakini River. The Kedarnath temple lies amidst the majestic snow-capped Garhwal Himalayan ranges and is thronged by thousands of tourists each year.",
              district:"Rudraprayag / Uttarakhand"
            },
            {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo6LYWiiWK-qtGF-L1gh9jOTX0QLEA-AGBPY2MTt20BXY4mj6PNpJByOQ&s=10",
               place:"Badrinath",
              rating:"4",
              discription:"Badarinath is one of the holy shrines for Vaishnavites among the 108 divya desams incarnation of Lord Vishnu.",
              holediscription: "The famed town of Badrinath is among the four dominant Char Dham pilgrimage sites of India as well as the Chota Char Dham. It is perched at an average elevation of 3,300 metres (10827 feet) above sea level on the banks of Alaknanda River This holy town is named after the Badrinath temple dedicated to the preserver, Lord Vishnu. Many Hindu devotees are smitten by the charm of this holy shrine as it showcases the traditional Garhwali wooden architecture",
              district:"Chamoli/ Uttarakhand",
            },

            {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrhMnrWc5z4UI_U96Fj0TcDgTVw-OFJnzMpPRTS1Y0R-RZZEuoly6zvx0&s=10",
               place:"Gangotri",
              rating:"4",
              discription:"One of the char dhams (the most sacred pilgrimage circuits in northern India with four holy destinations), Gangotri, in Uttarkashi, is a small town with the temple of Goddess Ganga at its heart",
               holediscription:"Gangotri is a small town centered around the temple of Gangotri temple and is one of the holy places among the four Char Dhams. It is the highest and the most important temple of river Ganga which is worshiped as a Goddess in India. The origin of the holy river is at Gaumukh, set in the Gangotri glacier that can be accessed by a short 19 km trek from Gangotri. But according to Hindu mythology, Gangotri is the place where river Ganga descended from heaven when Lord Shiva released the mighty river from his luscious locks",
              district:"Uttarkashi / Uttarakhand"
            },
            {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRroSFJxlr3UB80Dhmg48YX5NAnaDnc3aqQwg&usqp=CAU" ,
              place:"Yamunotri" ,
              rating:"4",
              discription:"Yamunotri is the source of the Yamuna River and the seat of the Goddess Yamuna in Hinduism. It is situated at an altitude of 3,293 metres (10,804 ft) in the Garhwal Himalayas in District Uttarkashi.",
               holediscription:"The source of River Yamuna, Yamunotri is also one of the four sites of Char Dham pilgrimage. Yamunotri is located at a height of 3293 mts above sea level and located in Uttarkashi district. It is surrounded by mountains on all sides and lies in close proximity of the Indo-China border. It is known for offering peace and tranquillity to its visitors.The Bandarpunch Mountain is at a height of 6315 mts and lies north of Yamunotri. Yamunotri is at a distance of 236 km from Rishikesh, 21 km from Sanya Chatti 278 km from Dehradun, and 176 km from Chamba",
              district:"Uttarkashi / Uttarakhand"
            },
         {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS53SCD7sbbps2A2ssXsGwYSqxwQTXSBnf9yMyzlLBXikvdDD5x5BMrJEo&s=10" ,
          place:"RISHIKESH" ,
          rating:"4.1",
          discription:"Rishikesh is a city in India’s northern state of Uttarakhand, in the Himalayan foothills beside the Ganges River. ",
           holediscription:"Rishikesh, also spelt as Hrishikesh, is a city near Dehradun in the Indian state Uttarakhand. The northern part of Rishikesh is in the Dehradun district while the southern part is in the Tehri Garhwal district. It is situated on the right bank of the Ganges River and is a pilgrimage town for Hindus, with ancient sages and saints meditating there in search of higher knowledge.There are numerous temples and ashrams built along the banks of the river",
              district:"Dehradun and Tehri Garhwal / Uttarakhand"
        },
        {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdfN3W_dhtPntpLQ1Be1bnhEfkzncr1YrCX0PUfz7HkA&s" ,
          place:"DEHRADUN" ,
          rating:"2.4",
          discription:"Dehradun is the capital of the Indian state of Uttarakhand, near the Himalayan foothills.",
           holediscription:"Dehradun also known as Dehra Doon, is the winter capital[13] and the most populous city of the Indian state of Uttarakhand. It is the administrative headquarters of the eponymous district and is governed by the Dehradun Municipal Corporation, with the Uttarakhand Legislative Assembly holding its winter sessions in the city as its winter capital.[13] Part of the Garhwal region, and housing the headquarters of its Divisional Commissioner, Dehradun is one of the 'Counter Magnets' of the National Capital Region (NCR) being developed as an alternative centre of growth to help ease the migration and population explosion in the Delhi metropolitan area and to establish a smart city in theH imalayas",
              district:" Dehradun / Uttarakhand"
        },
        {image:"https://cdn.britannica.com/43/155643-050-E9989FB0/bathing-ghat-Har-ki-pauri-Haridwar-India-Uttarakhand.jpg" ,
          place:"HARIDWAR" ,
          rating:"4.4",
          discription:"Haridwar is an ancient city and important Hindu pilgrimage site in North India's Uttarakhand state.",
           holediscription:"Haridwar is district of Uttarakhand state in India. Haridwar is place where the river Ganges enters in plain areas north India after flowing 250 km from its origin Gaumukh (Gangotri Glacier).Haridwar is the destination where people from across the India visit for pilgrimage and to take a holy dip into the holy river Ganges. Haridwar city is an ancient and it is one of the most sacred cities in India. The diverse nature of the Hindu religion has attracted foreign visitors from all around the world. Foreigners always attracted to Haridwar because here they can closely experience India's complex culture, various Hindu rituals and the ancient civilization",
              district:" haridwar/ Uttarakhand"
        },
        {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdRVTdQ9xZDuZ352O4kP1Z37EQvmANzyA9xA&usqp=CAU" ,
          place:"NANITAL" ,
          rating:"3.5",
          discription:"Nainital is a Himalayan resort town in the Kumaon region of India’s Uttarakhand state, at an elevation of roughly 2,000m.",
           holediscription:"Nainital, the charming Himalayan lake town, is a picture-postcard perfect hill-station and one of the most popular in Northern India. Commonly known as the ‘Lake District’, Nainital is nestled high up in the Kumaon Himalayas at an altitude of around 2,000 m above sea level. This beautiful town in surrounded by seven hills, popularly known as ‘Sapta-Shring’  Ayarpata, Deopata, Handi-Bandi, Naina, Alma, Lariya-Kanta and Sher-Ka-Danda. The majestic mountains and the sparkling waters of the lake add an immense lot to the beauty of the town.  The town is centred around the emerald mountain lake Naini, which on most days is dotted with colourful sailboats. According to mythology, the lake is believed to have been formed when the eyes of goddess “Sati” fell at this spot while her body was being carried by Lord Shiva after her death",
              district:"Nainital / Uttarakhand"
        },
        {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEtIFiLRfhMemR9y8ozlFG5QnReYWw2Nbpw86IsaI5wA&s" ,
          place:"MUSSOORIE" ,
          rating:"2.4",
          discription:"Mussoorie is a hill station and a municipal board, in Dehradun city in the Dehradun district of the Indian state Uttarakhand.",
           holediscription:"38 Kms from Dehradun is Mussoorie with its green hills and varied flora and fauna, is a fascinating hill station. It offers a wonderful view of the Himalayan snow ranges to the north-east and the Doon Valley., Roorkee, Saharanpur and Haridwar to the South, creating an almost serene atmosphere for the tourists. Mussoorie was discovered by Captain Young, an adventurous military officer in 1827. He was lured by the extraordinarily beautiful ridge and laid the foundation of it. Mussoorie is also a Gateway to the “Gangotri” and the “Yamunotri” shrines",
              district:"Dehradun / Uttarakhand"
        },
        {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP8CCMnzeZjA-DIWpSc4KGQxaVaLBnDhvKH81o5jhWgA&s" ,
          place:"RUDRAPRAYAG" ,
          rating:"4.3",
          discription:" Rudraprayag is one of the Panch Prayag of Alaknanda River, the point of confluence of rivers Alaknanda and Mandakini.",
           holediscription:"Named after Lord Shiva's Rudra avatar (incarnation), Rudraprayag is an ancient holy town situated at the confluence of Alaknanda and Mandakini rivers, at a distance of 34 km from Srinagar in the Garhwal region. Rudraprayag marks the fourth confluence between Alaknanda and Mandakini rivers. The fifth and final union takes place at Devprayag where the Alaknanda river joins Bhagirathi to form the Ganga and flow down to the plains. While the town is known for revered temples and pristine natural beauty, the presence of two separate routes for Badrinath (around 150 km away) and Kedarnath Dham (around 50 km away) from Rudraprayag make it an important destination for religious tourism",
              district:"RUDRAPRAYAG / Uttarakhand"
        },
        {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbo6k6HGpC-wPjqBpx1-HzRwFgnWNyEATTZMU19kXQkA&s" ,
          place:"UTTARAKASHI" ,
          rating:"5",
          discription:" Uttarkashi is also known as Somya Kashi. Uttarkashi is a Hindu religious place for spiritual and adventurous tourism. ",
           holediscription:"Uttarkashi, the headquarters of the eponymous district, is an ancient land with rich cultural heritage and a picture-postcard-like appeal with sweeping mountain views. It is famous for an ancient temple dedicated to Lord Shiva, which is visited by thousands throughout the year. As the name suggests, it's considered to be the Kashi (another name for Varanasi in Uttar Pradesh, which is home to one of the most renowned Lord Shiva temples) of the north (uttar",
              district:"Uttarkashi / Uttarakhand"
        },
        {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3k6IUmye3P4sW22wDV-agmj7JITOoGKNaJ2EHe28RjQ&s" ,
          place:"CHOPTA" ,
          rating:"3.2",
          discription:"Chopta is a small region of meadows and evergreen forest area, a part of Kedarnath wildlife sanctuary located in Uttarakhand",
           holediscription:"Popularly referred to as the ‘mini Switzerland’ of Uttarakhand, Chopta (at an approximate altitude of 2,608 m) is a slice of paradise tucked away in the Garhwal Himalayas. Surrounded by bugyals or velvety meadows and pristine snow-capped peaks, Chopta is an all-year holiday destination: pleasant in summer, rain-fresh in monsoon and a snow-clad fairyland in winter. Chopta is at the epicentre of the Panch Kedar – the five most sacred Shiva temples in the state. On its left are located Kedarnath and Madmaheshwar shrines and on the right, Rudranath and Kalpeshwar, and just above it, the Tungnath temple.",
              district:"RUDRAPRAYAG / Uttarakhand"
        },
        {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlFT_Zkd4vwaOy1BkgAiMUU7JahLPiEcZUxUZ8ETrOsg&s" ,
          place:"DHANAULTI" ,
          rating:"4.2",
          discription:"it offers panoramic views of the lofty Himalayas. Situated in the foothills of the Garhwal Himalayan range ",
           holediscription:"The tinsel town of Dhanaulti is emerging as a popular winter destination because of its tranquil vistas and its proximity to Delhi and various other cities of Uttarakhand. This magical hill station is perched at an elevation of 2286 meters above sea level and offers panoramic views of the lofty Himalayas. Dhanaulti is located in the proximity of the popular hill stations of Uttarakhand such as Mussoorie, Tehri, Kanatal, and Chamba. This hilly town is enveloped by the velvety rhododendrons, deodar, and tall oak forests. Since the hill station heavy snowfall during winters, many tourists flock here in huge numbers",
              district:"Tehri garhwal/ Uttarakhand"
        },
        {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHiN3XoCZ2TBpzRyvyjvEo5YeBQtc5mvitdgexWaPxmw&s" ,
          place:"CHAKRATA" ,
          rating:"3.4",
          discription:"Chakrata is a cantonment town and also a sub district/tehsil, in Dehradun district in the state of Uttarakhand.",
           holediscription:"Embellished by the sun-kissed Himalayan ranges, the beauteous hill station of Chakrata is seated at an elevation of 2,118 metres above sea level. This secluded hilly town is cradled in the Dehradun district and is an ideal weekend getaway for the backpackers. Dotted by the coniferous forests, Chakrata is a loner’s delight as it is far away from the hustle and bustle of the city life. It is only 90 kms from Dehradun, the capital city of Uttarakhand.",
            district:"/ Uttarakhand"
        },
        {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs4v92dv3jBwCes8yXuWHvojAkhYKVBDDV7wVGtRbe3w&s" ,
          place:"BHIMTAL" ,
          rating:"2.5",
          discription:"The major attraction in Bhimtal is the Bhimtal Lake, which has an island at its centre.",
           holediscription:"The pride of Bhimtal is a beautiful lake which offers magnificent vistas for tourists. The lake is larger than Naini lake. Tourist enjoys here boating in lake. There is an island amid lake having beautiful aquarium . Tourist visit here by boats. The distance of island from lake shore is 91 mts. There is a 17th century Bhimeshwar temple complex along the 40 feet high dam . The local bus stand and taxi stand is situated near it. One road from Bhimtal leaves for Naukuchiatal & Janglia Gaon while the another one goes to Kathgodam 21 Kms from here.",
              district:"Nainital / Uttarakhand"
        },
        {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy0U38M1ssgldIEPAwgIwIaVKsR06IjNq2WSS35CyxiQ&s" ,
          place:"TAPKESHWAR" ,
          rating:"3.5",
          discription:" The temple is on the bank of the Tons River, built on top of a natural cave, which holds the temple's main shivalinga.",
           holediscription:"Dehradun, the capital of Uttarakhand, is known for its beautiful tourist spots and gorgeous landscape. From the scenic Doon valley to the gorgeous waterfalls of Sahastradhara, from the hidden Robbers cave to the Tapovan temple, Dehradun is replete with tourist attractions beyond words. The vibrant cityscape beckons tourists to explore every nook and cranny. One such gorgeous and spiritual tourist destination in Dehradun is the Tapkeshwar Mahadev Mandir. Known for its famous Shiv-ling, it is a direct reflection and symbol of Lord Shiva, which attracts tourists and locals alike.",
              district:"Dehradun / Uttarakhand"
        },
        {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqzqzeP4FEm5VVx_xYeTRn8sJOZgy7k5qGkaLs3dmMTw&s" ,
          place:"DHARCHULA" ,
          rating:"4",
          discription:"Dharchula was an ancient trading town on the Trans-Himalayan trade routes.",
           holediscription:"Known for its rich culture and vivid traditions, the bijou town of Dharchula is located in the heart of the Pithoragarh district of Uttarakhand. It is perched at an elevation of 915 meters and is a major destination of the Kumaon region, lying on the Kailash Mansarovar and Chota Kailash route. The quaint town of Dharchula is encircled by the towering peaks and is situated in a pristine valley located on the banks of Kali River. One can also have a panoramic view of the mighty Panchachuli peak located in the west of Dharchula. ",
              district:"Pithoragarh / Uttarakhand"
        },
        {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1K_ambPD4Jh__ernQzEIq2RPvlsG5f8KLfSLAtYTFHA&s" ,
          place:"HARSIL" ,
          rating:"4",
          discription:"Harsil is a village, tourist hill station and army area located on the banks of the Bhagirathi River, on the way to Gangotri.",
           holediscription:"Harsil is an unspoiled and hidden jewel of Uttarakhand state offering ample scope for people seeking peace and serenity in the lap of Himalayas. It is situated on the banks of Bhagirathi River at an elevation of 2620 mts above sea level. This quaint hamlet has become popular in recent years among travel enthusiasts and nature lovers. There are several adventurous trekking routes that you can do in the vicinity of Harsil. A holiday at Harsil is a rejuvenating experience where you can do meditation and yoga.",
              district:"uttarkashi / Uttarakhand"
        },
        {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ8cse3duGMYzZ112SyUbrgqagNaMcD0T3pocEoB6LxA&s" ,
          place:"BHADRAJ" ,
          rating:"4",
          discription:" Bhadraj in the western region of Mussoorie, Bhadraj Temple is a quaint temple dedicated to Lord Bal Bhadra (also known as Balram).",
           holediscription:"Located at Bhadraj in the western region of Mussoorie, Bhadraj Temple is a quaint temple dedicated to Lord Bal Bhadra (also known as Balram), brother of Sri Krishna. Bhadraj Temple is situated at the hilltop and the air and the atmosphere of the place feels calm and peaceful",
              district:" Dehradun / Uttarakhand"
        },
        {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDTcoBPeM7aR-I9hXVBeYkKXkX-v_fL6tMONJGIAcZEA&s" ,
          place:"TEHRI" ,
          rating:"4",
          discription:"This place is famous for water sports like speed boats , water scooter , banana boats and water skiing etc .",
           holediscription:"Tehri Garhwal stretches from the snow clad Himalayan peaks of Thalaiya Sagar, Jonli and the Gangotri group all the way to the foothills near Rishikesh. The gushing Bhagirathi which runs through seems to divide the district into two, while the Bhilangna, Alaknanda, Ganga and Yamuna rivers border it on the east and west. Tehri Garhwal is surrounded by Uttarkashi district in the north, Pauri Garhwal district in the south, Rudraprayag district in the east, and Dehradun district in the west.",
              district:"Tehri garhwal/ Uttarakhand"
        }
      ]

    return(
        <div>
        <Navbar/>
        <Routes>
            <Route index element= {<Home Alldata={Alldata}/>} />
            <Route path="/contact" element= {<Contact/>} />
            <Route path="/registration" element= {<Registration/>} />
            <Route path="/mytrips" element= {<Mytrips/>} />
            <Route path="/sports" element= {<Sports/>} />
            <Route path="/place/:name" element= {<Placedetail Alldata={Alldata}/>} />
            <Route path="/login" element= {<Login/>} />
            <Route path="/Book" element= {<Book/>} />
        </Routes>
        <Footer/>
        </div>
    )
}

export default App;