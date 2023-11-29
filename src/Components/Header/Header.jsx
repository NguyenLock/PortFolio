import React from "react";
import { Link } from 'react-router-dom';
import './Header.scss';

function Header() {
    return (
       <header className="header">
        <a href="#home" className="mylogo">My <span>Portfolio</span></a>
        <nav className="navbar">
            <a href="#home">HOME</a>
            <a href="#about-me">ABOUT ME</a>
            <a href="#Service">SERVICE</a>
            <a href="#Contact">CONTACT</a>
        </nav>
       </header>
    )
}
export default Header;