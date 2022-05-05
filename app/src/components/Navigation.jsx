import React, { useState } from "react";
import wys_app from "../../public/Assets/images/logo-wys-app.png";

function Navigation(){
    const [displayNav, setDisplayNav] = useState(false);
    return(
        <div className="navBar">
            <img src={wys_app} alt="image_home" className="WYSLogo"></img>
            <hr className="menuSlice"></hr>
            <div className="toggleMenu" onClick={() => setDisplayNav(!displayNav)}></div>
            {displayNav ? <div className="nav">Menu</div> : null}
        </div>
    )
}

export default Navigation