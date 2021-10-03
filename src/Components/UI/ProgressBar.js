import React from 'react';
import PropTypes from "prop-types";

const ProgressBar = props => {

    const width = widthPercent => {
        const widths = {
            0:'w-0%',
            5:'w-5%',
            10:'w-10%',
            15:'w-15%',
            20:'w-20%',
            25:'w-25%',
            30:'w-30%',
            35:'w-35%',
            40:'w-40%',
            45:'w-45%',
            50:'w-50%',
            55:'w-55%',
            60:'w-60%',
            65:'w-65%',
            70:'w-70%',
            75:'w-75%',
            80:'w-80%',
            85:'w-85%',
            90:'w-90%',
            95:'w-95%',
            100:'w-100%',
        }
    }

    const color = colorName => {
        const colors = {
            'red':'bg-red',
            'gray':'bg-gray-600',
            'yellow':'bg-yellow-600',
            'green':'bg-green-600',
            'blue':'bg-blue-600',
            'indigo':'bg-indigo-600',
            'purple':'bg-purple-600',
            'pink':'bg-pink-600',
        }
        return colors[colorName]
    }

    return (
        <React.Fragment>
            <p className='uppercase dark:text-gray-100 text-gray-700 mb-1.5 cursor-default font-en font-semibold'>{props.name}</p>
            <div className='flex flex-row items-center justify-start mb-5 py-1 px-2 shadow-light-inner dark:shadow-dark-inner rounded-full w-full h-4'>
                <div className={`${color(props.color)} h-1.5 rounded-full ${width}`} />
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
    color: PropTypes.oneOf([
        'gray',
        'yellow',
        'red',
        'green',
        'blue',
        'indigo',
        'purple',
        'pink',
    ]).isRequired,
};

export default ProgressBar;