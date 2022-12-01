import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from './images/logo.png';
import './Navbar.css';

const Navbar = () => {
    const [clickList, setClickList] = useState(false);

    const handleClickList = () => setClickList(!clickList);
    return (
        <div className="header">
            <nav className="navbar">
                <a href="/" className="logo">
                    <img src={logo} alt="logo" />
                </a>
                <div className="list-icon" onClick={handleClickList}>
                    {clickList ? <FaTimes size={30} transi /> : <FaBars size={30} />}
                </div>

                <ul className={clickList ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <a href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a href="/">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a href="/">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
