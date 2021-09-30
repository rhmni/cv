import React from 'react';
import PropTypes from "prop-types";

const FormError = props => {
    return (
        <p className='text-red text-xs mr-2 mt-2 ltr:font-semibold'>
            {props.children}
        </p>
    );
};

FormError.propType = {
    children: PropTypes.string.isRequired,
}

export default FormError;