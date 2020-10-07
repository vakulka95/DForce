import React from 'react';
import PropTypes from 'prop-types';

function Logo({logoClass}) {
    return (
        <div>
            <img src='./images/logo.svg'  className={logoClass} alt='Logo'/>
        </div>
    )
}

Logo.propTypes = {
    logoClass: PropTypes.string.isRequired
}

Logo.defaultProps = {
    logoClass: 'logo'
}
export default Logo
