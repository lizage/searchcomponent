import React from 'react';
import { Collapse } from 'react-collapse';
import ChipsList from '../chips-list/ChipsList';
import './CardSpecialties.scss';

const CardSpecialties = ({isOpen, topSpecialties, otherSpecialties, languages}) => {
    return (
        <div className="card_row__specialties">
            <div>
                <div className="title">Specialties:</div>
                <ChipsList list={topSpecialties} />
            </div>
            <Collapse isOpened={isOpen}>
                <div className="title">More Specialties:</div>
                <ChipsList list={otherSpecialties} />
            </Collapse>
            <Collapse isOpened={isOpen}>
                <div className="title">Languages:</div>
                <ChipsList list={languages} />
            </Collapse>
        </div>
    );
}

export default CardSpecialties;