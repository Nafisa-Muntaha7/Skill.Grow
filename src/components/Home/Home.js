import React from 'react';
import '../Home/Home.css'
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <div className="discover">
                <h1>What Will You Discover?</h1>
                <div className="skills">
                    <div>
                        <h2 className="title">Practical Skills</h2>
                        <h3>Learn proven methods, processes, and best practices and apply them to your work immediately.</h3>
                    </div>
                    <div>
                        <h2 className="title">Communication Skills</h2>
                        <h3>Improve your problem-solving skills,
                            improve your teamwork and communication skills.</h3>
                    </div>
                    <div>
                        <h2 className="title">Understanding</h2>
                        <h3>Increase your knowledge of programming concepts and languages,focusing on writing clean efficient code.</h3>
                    </div>
                </div>
            </div>
            <Services></Services>
        </div>
    );
};

export default Home;