import React from 'react';
import { Collapse } from 'react-collapse';
import './CardBio.scss';

const CardBio = ({firstName, lastName, clinicName, isOpen, biography}) => {
    return (
        <div className="card_row__bio">
            <div className="bio_name">{`${firstName} ${lastName}`}</div>
            <div className="bio_clinic">{clinicName}</div>
            <Collapse isOpened={isOpen} initialStyle={{minHeight: 60, overflow: 'hidden'}}>
                <div className="bio_text">{biography}</div>
            </Collapse>
        </div>
    );
}

export default CardBio;