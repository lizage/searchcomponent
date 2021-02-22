import React from 'react';
import Chip from '../chip/Chip';
import './ChipsList.scss';

const ChipsList = ({ list }) => {

    return (
        <div className="chips_list">
            {list.map((item, i) => <Chip key={`chip_${i}`} title={item} />)}
        </div>
    );
}

export default ChipsList;