import React from "react";
import PageLinks from "../constants/links"
import logo from "../assets/logo.svg"
//import "../css/main.css"

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo} alt="Digital anabolic recipes logo" />
                </div>
                <PageLinks styleClass="nav-links"></PageLinks>
            </div>
        </nav>
    )
}
export default Navbar