import React from 'react';
import '../Footer/Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-part">
                <h3><i className="fas fa-map-marker-alt"></i>  5957 Jeanne Mance Street Montreal Quebec</h3>
                <h3><i className="fas fa-phone"></i>  +1 800 957 2775</h3>
                <h3><i className="far fa-envelope"></i>  emiliejonas7@gmail.com</h3>
            </div>
            <div className="footer-part">
                <h3>Categories</h3>
                <p>All Courses</p>
                <p>Design and Branding</p>
                <p>Web and SEO</p>
                <p>Digital Marketing</p>
                <p>Web Development</p>
                <p>Programs</p>
            </div>
        </div>
    );
};

export default Footer;