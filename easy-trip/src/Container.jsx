import React from "react";
import Slideimage from "./Slideimage";
import "./Container.css"

function Container(){

    return(
<div class="container">
        <div class="row">
<Slideimage image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjSYZTSnFxW1v8wWGb2_MxbrQRMqszpuNMk0dSxeHcD2uFkNBu33-dxeAN&s=10" place="Kedarnath" />
<Slideimage image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo6LYWiiWK-qtGF-L1gh9jOTX0QLEA-AGBPY2MTt20BXY4mj6PNpJByOQ&s=10" place="Badrinath"  />
<Slideimage image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrhMnrWc5z4UI_U96Fj0TcDgTVw-OFJnzMpPRTS1Y0R-RZZEuoly6zvx0&s=10" place="Gangotri"/>
<Slideimage image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRroSFJxlr3UB80Dhmg48YX5NAnaDnc3aqQwg&usqp=CAU" place="Yamunotri"  />
        </div>
        </div>
    )
}

export default Container;
