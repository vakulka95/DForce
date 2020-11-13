import React from 'react';
import './style.scss';
import {Link} from 'react-router-dom';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import PropTypes from 'prop-types';


const Button = ({ submit=false, scroll, onClick, to, toForm, message, directly, innerRef, children, disable}) => {
    return (
        <div className={`btn-wrap${(submit || to)? '':'-active'}`}>
            {submit && <button type='button' className='btn-btn' onClick={onClick}>{message}</button>}
            {disable && <button type='button' className='btn-btn-disabled' onClick={onClick}>{message}</button>}
            {toForm && <NavLink to='/#forcustomer' scroll={scroll} onClick={onClick} style={{textDecoration:'none'}}><span className='btn-btn'>{message}</span></NavLink>}
            {directly &&<a href={to} className='btn-link' target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}><span>{message}<span style={{marginLeft:'10px'}}>{children}</span></span></a>}
            {innerRef&&<Link to ={to} className='btn-link' style={{textDecoration:'none'}}><span>{message}<span style={{marginLeft:'10px'}}>{children}</span></span></Link>}
        </div>
    )
};

Button.propTypes = {
    submit: PropTypes.bool,
    directly: PropTypes.bool,
    innerRef: PropTypes.bool,
    message: PropTypes.string,
    disable: PropTypes.bool
}

export default Button;