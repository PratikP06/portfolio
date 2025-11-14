import React from "react";
import MenuIcon from "../assets/hamburger-menu.svg"
import close from "../assets/close.svg"


function Navbar (){
    return(
        <div className="container">
            <div className="logo">
                PRATIK<span>.</span>dev
            </div>

            <div className="nav">
                <ul>
                    <li><a href="#heroo">Home</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                    

                </ul>
            </div>
        
        </div>
    )

}

export default Navbar;