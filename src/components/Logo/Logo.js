import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import './style.scss';

function Logo({logoClass, parentClass}) {
    return (
        <div className={parentClass}>
            <Link to='/'>
            <img src='./images/logo.svg'  className={logoClass} alt='Logo'/>
            </Link>
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
