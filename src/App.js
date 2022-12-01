import React from 'react';
import './App.css';
import About from './components/About';
import MainInfo from './components/MainInfo';
import Navbar from './components/Navbar';

function App() {
    return (
        <div className="App">
            <Navbar />
            <MainInfo />
            <About />
        </div>
    );
}

export default App;
