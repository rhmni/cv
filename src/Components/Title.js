import React from 'react';
import Hr from "./UI/Hr";
import PropTypes from "prop-types";

const Title = ({marginTop, title}) => {
    return (
        <React.Fragment>
            <p className={`capitalize text-lg dark:text-gray-100 text-gray-700 mt-${marginTop} mb-1.5 ltr:font-en rtl:font-fa`}>
                {title}
            </p>
            <Hr/>
        </React.Fragment>
    );
};

Title.propTypes = {
    title: PropTypes.string.isRequired,
    marginTop: PropTypes.number,
}

Title.defaultProps = {
    marginTop: 0,
}

export default React.memo(Title);