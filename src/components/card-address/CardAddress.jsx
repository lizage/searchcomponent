import React from 'react';
import './CardAddress.scss';

const CardAddress = ({address, city, state, zipCode, country}) => {
    return (
        <div className="card_row__address">
            {address}<br/>{`${city} ${state}`}<br/>{`${zipCode} ${country}`}
        </div>
    );
}

export default CardAddress;