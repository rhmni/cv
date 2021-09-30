import React from 'react';
import PropTypes from "prop-types";

const Badge = ({text}) => {
    return (
        <span
            className='
                shadow-light-inner dark:shadow-dark-inner
                text-red ltr:font-en rtl:font-fa ltr:font-semibold text-xs text-gray-400
                py-1 px-4 rounded-full
            '
        >
            {text}
        </span>
    );
};

Badge.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Badge;