import React from 'react';
import '../About/About.css'
import team from '../../team.jpg';
import woman from '../../woman.jpg';

const About = () => {
    return (
        <div>
            <div className="about-us">
                <div className="woman">
                    <div>
                        <img src={woman} alt="" />
                    </div>
                    <div>
                        <h2>Emilie Jonathon</h2>
                        <h3>CEO of Skill.Grow</h3>
                    </div>
                </div>
                <div className="mission">
                    <h1 className="mission-heading">Our mission: </h1>
                    <h2 className="mission-details">to help people learn to code, digital marketing, web design, graphics design and so on. We accomplish this by creating thousands of videos, articles, and interactive lessons - all available to the public by very reasonable price. We also have thousands of study groups around the world. We try to teach our students sincerely, cooperate with them and give our best.</h2>
                </div>
            </div>
            <img src={team} alt="" />
        </div>
    );
};

export default About;