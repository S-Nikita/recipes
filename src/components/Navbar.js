import React from "react";
import pageLinks from "../constants/links"
import Logo from "../assets/logo_final.svg"
import { FaAlignRight } from "react-icons/fa"
import TransitionLink from 'gatsby-plugin-transition-link';

const Navbar = ({ toggleSidebar}) => {
    const url = typeof window !== "undefined" ? window.location.pathname : ''
    return (
        <nav className={`${url === '/home' || url === '/' ? "navbar" : "navbar navbar-color"}`} >
            {/* <div className="nav-center"> */}
                <div className="nav-header">
                    <Logo 
                        height={`4.5625rem`} 
                        width={`4.5625rem`} 
                    />
                </div>
                <button type="button" className={`${url === '/home' || url === '/' ? "toggle-btn" : "toggle-btn toggle-btn-color"}`} onClick={toggleSidebar}>
                    <FaAlignRight />
                </button>
                <div className={`${url === '/home' || url === '/' ? "nav-links" : "nav-links nav-links-color"}`}>
                {pageLinks.map(link => {
                    return (
                    <TransitionLink key={link.id} to={link.url}>
                        {link.text}
                    </TransitionLink>
                    )
                })}
                </div>
            {/* </div> */}
        </nav>
    )
}
export default Navbar