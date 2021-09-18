import React from 'react';

const Hr = ({dir}) => {
    let classes = [
        'flex', 'flex-row', 'items-center',
        'py-0.5', 'px-3',
        'shadow-light-inner', 'dark:shadow-dark-inner', 'rounded-full',
        'w-16', 'h-2',
    ];

    if (dir === 'center') {
        classes.push('mx-auto', 'justify-center')
    } else if (dir === 'rtl') {
        classes.push('ml-auto', 'justify-start')
    } else if (dir === 'ltr') {
        classes.push('mr-auto', 'justify-end')
    }

    return (
        <div className={classes.join(' ')}>
            <div className='bg-red h-1 w-7 rounded-full'/>
        </div>
    );
};

export default Hr;