import React from 'react';
import logo from '../sfclogo.png'
const Menu = () => {
    return (
        <div className='menu'>
            <img src = {logo} width = '210' height = '100' />
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