import React, { useState } from "react";
import wys_app from "../../public/Assets/images/logo-wys-app.png";
import logo from "../../public/Assets/images/colorLogo.svg";

function Navigation(){
    const [displayNav, setDisplayNav] = useState(false);
    return(
        <div className="navBar">
            <img src={wys_app} alt="image_home" className="WYSLogo"></img>
            <hr className="menuSlice"></hr>
            <div className="toggleMenu" onClick={() => setDisplayNav(!displayNav)}></div>
            {displayNav ? 
            <div className="subMenu">
                <p className="closeMenu" onClick={() => setDisplayNav(!displayNav)}>&#9587;</p>
                 <img src={logo} alt="WYS Logo" className="subLogo"></img>
                <a href="/profil">Mon profil</a>
                <a href="https://winyourstar.com/">winyourstar.com</a>
            </div> 
            : null}
        </div>
    )
}

export default Navigation