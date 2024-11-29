import React, { useState } from 'react';
import '../css/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <header className="header">
                <div className="logo">
                    <img src="/media/me.jpg" alt="Logo" />
                    <span className="brand-name">KARABULUT MOTORS</span>
                </div>
                <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
                    <ul>
                        <li><Link className="link" to="/">Home</Link></li>
                        <li><Link className="link" to="/service">Our Services</Link></li>
                    </ul>
                </nav>
                <div className="hamburger" onClick={toggleMenu}>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
            </header>
        </>
    );
};

export default Header;
