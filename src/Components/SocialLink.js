import React from 'react';
import PropTypes from "prop-types";

const SocialLink = ({title, children, link, isShow}) => {

    if (!isShow){
        return <></>
    }

    return (
        <li
            title={title}
            className='
                flex flex-row items-center justify-center
                rounded-full w-10 h-10 text-gray-500 cursor-pointer
                shadow-light-outer hover:shadow-light-inner hover:text-red
                dark:shadow-dark-outer dark:hover:shadow-dark-inner dark:text-gray-400 dark:hover:text-red
                transition duration-300
            '
        >
            <a href={link} target='_blank'>
                {children}
            </a>
        </li>
    );
};


SocialLink.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
    link: PropTypes.string.isRequired,
    isShow: PropTypes.bool.isRequired,
};


export default SocialLink;