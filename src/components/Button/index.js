import React from 'react';
import './style.scss';

import PropTypes from 'prop-types';
import { NavHashLink as NavLink } from 'react-router-hash-link';

const Button = ({submit=false, scroll,onClick}) => {
    return (
        <div className={`btn-wrap${submit? '':'-active'}`}>
         { submit? <button type='button' className='btn-btn' onClick={onClick}>Заказать консультацию</button>:
         <NavLink to='/#forcustomer' scroll={scroll} onClick={onClick} style={{textDecoration:'none'}}><span className='btn-btn'>Заказать консультацию</span></NavLink>}
        </div>
    )
};

Button.propTypes = {
    submit: PropTypes.bool
}

export default Button;