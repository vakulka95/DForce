import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function Logo({logoClass, parentClass}) {
    return (
        <div className={parentClass}>
            <img src='./images/logo.svg'  className={logoClass} alt='Logo'/>
        </div>
    )
}

Logo.propTypes = {
    logoClass: PropTypes.string.isRequired,
    parentClass: PropTypes.string.isRequired

}

Logo.defaultProps = {
    logoClass: 'logo'
}
export default Logo
