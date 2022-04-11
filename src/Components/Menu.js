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
                <li className='menu-item'>Service 1</li>
                <li className='menu-item'>Service 2</li>
                <li className='menu-item'>Service 3</li>
                <li className='menu-item'>Service 4</li>
            </ul>

            
        </div>
    );
};

export default Menu;