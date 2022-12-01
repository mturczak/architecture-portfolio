import React from 'react';
import './About.css';
import interior1 from './images/interior1.webp';
const About = () => {
    return (
        <div className="about" id="about">
            <div className="container">
                {/* <img src={interior1} alt="interior1" /> */}
                <h2>About</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed eleifend enim. Pellentesque blandit aliquet erat, nec commodo massa feugiat non. Class aptent taciti sociosqu
                    ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris pellentesque fringilla egestas. Aliquam maximus turpis quis aliquet fringilla. Praesent cursus mi ac sem
                    accumsan, ut placerat est vehicula. Pellentesque convallis nulla vitae finibus finibus.
                </p>
            </div>
        </div>
    );
};

export default About;
