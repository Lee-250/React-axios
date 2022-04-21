import React from 'react';
import logo from '../sfclogo.svg'
import { Link, useMatch } from 'react-router-dom';



const Menu = () => {
    let viewing_calendar = useMatch({ path: "/calendar", end: true })
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
                <li className={`menu-item ${viewing_calendar ? '' : 'active'}`}><Link to="/">Book an appointment</Link></li>
                <li className={`menu-item ${viewing_calendar ? 'active' : ''}`}><Link to="/calendar">View appointments</Link></li>
            </ul>

            
        </div>
    );
};

export default Menu;