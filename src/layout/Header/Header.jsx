import React from 'react';
import './Header.scss';

const Header = () => {
    return (
        <div className="header">
            <img 
                src={'images/logo.png'} 
                alt="Myndlift logo" 
                className="header__logo" />
        </div>
    );   
}

export default Header;