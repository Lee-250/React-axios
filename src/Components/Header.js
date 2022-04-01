import React from 'react';

function Header(props) {
    return (
        <div className="header-container">
            <div className='header-content-left'>Left</div>
            <div className='header-content-right'>
                <ul className='header-items'>
                    <li>Book Appointment</li>
                    <li>FAQs</li>
                    <li>About Us</li>
                    
                </ul>
            </div>
        </div>
    );
}

export default Header;


