import React from 'react';
import {useHistory} from "react-router-dom";
import PropTypes from "prop-types";

const HeaderItem = props => {

    const history = useHistory();

    const handleClicked = () => {
        history.push(props.path);
    };

    let classes = [
        'flex', 'flex-row', 'justify-between', 'items-center',
        'dark:text-gray-300', 'dark:hover:shadow-dark-inner',
        'rounded-full', 'hover:shadow-light-inner',
        'w-full', 'px-5', 'py-2',
        'transition', 'duration-300',
    ];

    if (history.location.pathname === props.path) classes.push('shadow-light-inner', 'dark:shadow-dark-inner');
    else classes.push('shadow-light-outer', 'dark:shadow-dark-outer');

    return (
        <li className='w-full ltr:font-en rtl:font-fa'>
            <button onClick={handleClicked} className={classes.join(' ')}>
                <span>{props.text}</span>
                <i className='text-red'>{props.children}</i>
            </button>
        </li>
    );
};

HeaderItem.propTypes = {
    path: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
};

export default React.memo(HeaderItem);