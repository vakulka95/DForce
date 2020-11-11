import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './style.scss';

function Logo({logoClass, parentClass, mobile}) {
    return (
        <div className={parentClass}>
            <Link to='/' onClick={mobile}>
                <img src='./images/logo.svg'  className={logoClass} alt='DForce logo / Логотип DForce'/>
            </Link>
        </div>
    )
}

Logo.propTypes = {
    logoClass: PropTypes.string,
    parentClass: PropTypes.string.isRequired,
    mobile: PropTypes.func

}

export default Logo;
