import React from 'react';
import PropTypes from "prop-types";

const ProgressBar = props => {

    const width = `w-${props.width}%`

    return (
        <React.Fragment>
            <p className='uppercase dark:text-gray-100 text-gray-700 mb-1.5 cursor-default'>{props.name}</p>
            <div className='flex flex-row items-center justify-start mb-5 py-1 px-2 shadow-light-inner dark:shadow-dark-inner rounded-full w-full h-4'>
                <div className={`bg-red h-1.5 rounded-full ${width}`}/>
            </div>
        </React.Fragment>
    );
};

ProgressBar.propTypes = {
    name: PropTypes.string.isRequired,
    width: PropTypes.oneOf([
        0,
        5,
        10,
        15,
        20,
        25,
        30,
        35,
        40,
        45,
        50,
        55,
        60,
        65,
        70,
        75,
        80,
        85,
        90,
        95,
        100,
    ]).isRequired,
};

export default ProgressBar;