import React from 'react';
import {Field, ErrorMessage} from "formik";
import FormError from "./FormError";
import PropTypes from "prop-types";

const TextInput = ({isLarge, type, ...props}) => {
    return (
        <div className={isLarge ? 'lg:col-span-2' : undefined}>
            <Field
                className={`resize-none w-full px-4 py-2.5 rounded-xl bg-light shadow-light-outer focus:shadow-light-inner dark:shadow-dark-outer dark:focus:shadow-dark-inner dark:bg-dark`}
                {...props}
                type={type}
                autoComplete='off'
            />
            <ErrorMessage name={props.name} component={FormError}/>
        </div>
    );
};

TextInput.propTypes = {
    name:PropTypes.string.isRequired,
    isLarge:PropTypes.bool,
    type:PropTypes.string,
}

TextInput.defaultProps = {
    isLarge: false,
    type: 'text',
}

export default TextInput;