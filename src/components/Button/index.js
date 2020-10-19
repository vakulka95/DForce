import React from 'react';
import './style.scss';
import {Link} from 'react-router-dom';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import PropTypes from 'prop-types';


const Button = ({ submit=false, scroll, onClick, to, toForm, message}) => {
    return (
        <div className={`btn-wrap${(submit || to)? '':'-active'}`}>
            { submit && <button type='button' className='btn-btn' onClick={onClick}>{message}</button>}
            {toForm && <NavLink to='/#forcustomer' scroll={scroll} onClick={onClick} style={{textDecoration:'none'}}><span className='btn-btn'>{message}</span></NavLink>}
            {to && <Link to ={to} className='btn-btn' style={{textDecoration:'none'}}><span>{message}</span></Link>}
        </div>
    )
};

Button.propTypes = {
    submit: PropTypes.bool
}

export default Button;