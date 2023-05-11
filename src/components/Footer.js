import React from 'react'
import socialLinks from '../constants/social_links'
import Logo from "../assets/logo_final.svg"

const Footer = () => {
        return (
                <footer className="footer">
                        <div className='footer-container'>
                                <div className="footer-logo">
                                        <Logo height={`min(4.5625rem, 5.07vw)`} width={`min(4.5625rem, 4.23vw)`} />
                                </div>
                                <h4>
                                &copy;{new Date().getFullYear()}
                                <span> Shred Kitchen</span> <br /> All rights reserved
                        </h4>
                                <div className="footer-links social-links">
                                        {socialLinks.map(link => {
                                                return (
                                                        <a href={link.url} key={link.id} className="social-link">
                                                                {link.icon}
                                                        </a>
                                                )
                                        })}
                                </div>
                               
                        </div>
                        
                </footer>
        )
}

export default Footer
