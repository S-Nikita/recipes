import React, { useRef, Com } from "react";
import PageLinks from "../constants/links"
import Logo from "../assets/logo.svg"
//import "../css/main.css"

const Navbar = () => {
    const navbar = useRef();
    return (
        <nav className="navbar" ref={navbar}>
            <div className="nav-center">
                <div className="nav-header">
                    <Logo height="4rem" width="4rem" />
                </div>
                <PageLinks styleClass="nav-links"></PageLinks>
            </div>
        </nav>
    )
}
export default Navbar