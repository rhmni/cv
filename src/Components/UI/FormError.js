import React from 'react';

const FormError = props => {
    return (
        <p className='text-red text-xs mr-2 mt-2'>
            {props.children}
        </p>
    );
};

export default FormError;