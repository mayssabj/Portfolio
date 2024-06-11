import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">My Portfolio</div>
            </div>
            <div className="n-right">
               
                <a href="mailto:maissabenjoud@gmail.com">
                    <button className='button n-button'>Contact</button>
                </a>
            </div>
        </div>
    );
};

export default Navbar;
