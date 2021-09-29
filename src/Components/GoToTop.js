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
                flex flex-row justify-center items-center z-50 lg:hover:animate-bounce
                fixed bottom-10 sm:bottom-16 rtl:left-10 sm:rtl:left-16 ltr:right-10 sm:ltr:right-16
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