import React from 'react';
import PropTypes from "prop-types";

const Hr = ({isCenetr}) => {
    let classes = [
        'flex', 'flex-row', 'items-center',
        'py-0.5', 'px-2.5',
        'shadow-light-inner', 'dark:shadow-dark-inner', 'rounded-full',
        'w-16', 'h-2',
    ];

    if(isCenetr) classes.push('mx-auto', 'justify-center');

    return (
        <div className={classes.join(' ')}>
            <div className='bg-red h-1 w-7 rounded-full'/>
        </div>
    );
};

Hr.propTypes = {
    isCenetr: PropTypes.bool.isRequired,
};

Hr.defaultProps = {
    isCenetr: false,
};

export default Hr;