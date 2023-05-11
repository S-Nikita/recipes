import React, { useState } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Sidebar from "./Sidebar"
import Loader from "../components/Loader"

const Layout = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    };

    const url = typeof window !== "undefined" ? window.location.pathname : '';

    return (
        <>
            {url === '/' ?  <Loader /> : ''}
            <Navbar toggleSidebar={toggleSidebar} />
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
            {children}
            <Footer />
        </>
    )
}

export default Layout