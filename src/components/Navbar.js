import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import logo from './images/logo.png';

const Navbar = () => {
    const [clickList, setClickList] = useState(false);

    const handleClickList = () => setClickList(!clickList);
    const closeList = () => setClickList(false);
    return (
        <div className="header">
            <nav className="navbar">
                <a href="/" className="logo">
                    <img src={logo} alt="logo" />
                </a>
                <div className={!clickList ? 'list-icon' : 'list-icon active'} onClick={handleClickList}>
                    {clickList ? <FaTimes size={30} transi /> : <FaBars size={30} />}
                </div>

                <ul className={clickList ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <a href="#home" onClick={closeList}>
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#about" onClick={closeList}>
                            About
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#home" onClick={closeList}>
                            Projects
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" onClick={closeList}>
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
