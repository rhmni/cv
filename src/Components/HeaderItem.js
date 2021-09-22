import React from 'react';
import {withRouter} from "react-router-dom";

const HeaderItem = props => {

    const handleClicked = () => {
        props.history.push(props.path);
    };

    let classes = [
        'flex', 'flex-row', 'justify-between', 'items-center',
        'dark:text-gray-300', 'dark:hover:shadow-dark-inner',
        'rounded-full', 'hover:shadow-light-inner',
        'w-full', 'px-5', 'py-2',
        'transition', 'duration-300',
    ];

    if (props.match.path === props.path) classes.push('shadow-light-inner', 'dark:shadow-dark-inner');
    else classes.push('shadow-light-outer', 'dark:shadow-dark-outer');

        return (
        <li className='w-full'>
            <button onClick={handleClicked} className={classes.join(' ')}>
                <span>{props.text}</span>
                <i className='text-red'>{props.children}</i>
            </button>
        </li>
    );
};

export default withRouter(HeaderItem);