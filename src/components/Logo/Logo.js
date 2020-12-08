import React from 'react';
import PropTypes from 'prop-types';
//import {Link} from 'react-router-dom';
import './style.scss';
import { NavHashLink as NavLink } from 'react-router-hash-link';
//import I18n from '../../i18n/I18n';

function Logo({logoClass, parentClass, mobile}) {
    return (
        <div className={parentClass}>
            <NavLink to='/#home' onClick={mobile}>
                <img src='../images/logo.svg'  className={logoClass} alt='DForce logo - Логотип DForce'/>
            </NavLink>
        </div>
    )
}

Logo.propTypes = {
    logoClass: PropTypes.string,
    parentClass: PropTypes.string.isRequired,
    mobile: PropTypes.func

}

export default Logo;
