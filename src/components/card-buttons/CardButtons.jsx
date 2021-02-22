import React from 'react';
import './CardButtons.scss';

const CardButtons = ({isOpen, handleClick}) => {
    return (
        <div className="card_row__buttons">
            <div>
                <span>{isOpen ? "Hide Profile" : "View Profile"}</span>
                <button onClick={handleClick}>Send Message</button>
            </div>
        </div>
    );
}

export default CardButtons;