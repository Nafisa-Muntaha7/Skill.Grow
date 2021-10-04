import React from 'react';
import '../Services/Services.css'


const Services = (props) => {
    const { course, review, rating, details, price, students, img } = props.service;
    return (
        <div className="services">
            <img src={img} alt="" />
            <h1>Course:{course}</h1>
            <h3>Students:{students} , Price:{price}</h3>
            <h4><i className="fas fa-user"></i>{review} <i className="fas fa-star"></i>{rating}</h4>
            <p>{details}</p>
        </div>
    );
};

export default Services;