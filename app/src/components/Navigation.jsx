import React from "react";
import wys_app from "../../public/Assets/images/logo-wys-app.png";

function Navigation(){
    return(
        <div className="navBar">
            <img src={wys_app} alt="image_home" className="WYSLogo"></img>
            <hr className="menuSlice"></hr>
            <div className="toggleMenu"></div>
        </div>
    )
}

export default Navigation