import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import logo from './images/logo.png';

const Navbar = () => {
    const [clickList, setClickList] = useState(false);
    const [tab, setTab] = useState('');

    const handleClickList = () => setClickList(!clickList);
    const closeList = (tab) => {
        console.log(tab);
        setTab(tab);
        setClickList(false);
    };

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
                        <a name="home" className={tab === 'home' ? 'nav-link active' : 'nav-link'} href="#home" onClick={(e) => closeList(e.target.name)}>
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className={tab === 'about' ? 'nav-link active' : 'nav-link'} href="#about" name="about" onClick={(e) => closeList(e.target.name)}>
                            About
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#home" className={tab === 'projects' ? 'nav-link active' : 'nav-link'} name="projects" onClick={(e) => closeList(e.target.name)}>
                            Projects
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className={tab === 'contact' ? 'nav-link active' : 'nav-link'} name="contact" onClick={(e) => closeList(e.target.name)}>
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
