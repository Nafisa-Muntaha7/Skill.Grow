import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Header/Header.css'


const Header = () => {
    const activeStyle = {
        color: 'white',
        textDecoration: 'none',
        margin: '15px',
        fontWeight: 'bold'
    }
    return (
        <div className="header">
            <NavLink style={activeStyle} to="/home">
                Home
            </NavLink>
            <NavLink style={activeStyle} to="/services">
                Services
            </NavLink>
            <NavLink style={activeStyle} to="/about">
                About
            </NavLink>
            <NavLink style={activeStyle} to="/review">
                Students Review
            </NavLink>
        </div>
    );
};

export default Header;