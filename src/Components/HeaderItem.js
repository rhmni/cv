import React from 'react';

const HeaderItem = props => {
    let classes = [
        'flex', 'flex-row', 'justify-between', 'items-center',
        'dark:text-gray-300', 'dark:hover:shadow-dark-inner',
        'rounded-full', 'hover:shadow-light-inner',
        'w-full', 'px-5', 'py-2',
        'transition', 'duration-300',
    ];

    if (props.isActive) classes.push('shadow-light-inner', 'dark:shadow-dark-inner')
    else classes.push('shadow-light-outer', 'dark:shadow-dark-outer')

        return (
        <li className='w-full'>
            <button className={classes.join(' ')}>
                <span>{props.text}</span>
                <i className='text-red'>{props.children}</i>
            </button>
        </li>
    );
};

export default HeaderItem;