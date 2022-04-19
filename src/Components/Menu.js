import React from 'react';
import logo from '../sfclogo.svg'
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div className='menu'>
            <Link to="/">
                <div className="logo-wrapper">
                <img className="sfc-logo" src={logo} alt="Skills for Care" />
                </div>
            </Link>
            <ul className='menu-list'>
                <li className='menu-item'>Home</li>
                <li className='menu-item'>News and events</li>
                <li className='menu-item'><Link to="/">Book an appointment</Link></li>
                <li className='menu-item'><Link to="/calendar">View appointments</Link></li>
            </ul>

            
        </div>
    );
};

export default Menu;