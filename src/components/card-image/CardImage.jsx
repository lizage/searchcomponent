import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import './CardImage.scss';

const CardImage = () => {
    return (
        <div className="card_row__img">
            <FontAwesomeIcon icon={faCamera} size="8x" />
        </div>
    );
}

export default CardImage;