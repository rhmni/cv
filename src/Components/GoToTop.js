import React from 'react';
import {IoArrowUpCircleOutline} from "react-icons/io5";

const GoToTop = props => {

    const handleGoToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <button
            onClick={handleGoToTop}
            className='
                flex flex-row justify-center items-center
                fixed bottom-10 left-10 sm:bottom-16 sm:left-16
                transition duration-300
                dark:bg-dark dark:shadow-dark-outer dark:hover:shadow-dark-inner
                text-red bg-light hover:shadow-light-inner shadow-light-outer
                h-12 w-12 rounded-full
            '
        >
            <IoArrowUpCircleOutline size={25}/>
        </button>
    );
};

export default GoToTop;