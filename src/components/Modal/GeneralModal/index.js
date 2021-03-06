import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { Link } from "react-router-dom";

const GeneralModal = ({ title, children, onClose, onButtonPress, link, img, alt }) => {

    return (
        <div className = 'generalModal' >{
            onClose?
                <div className = 'generalModal__close-wrap' >
                    <button className = 'generalModal__close' onClick = { onClose }></button>
                </div>: null}
                <div className='generalModal__container'>
                {img&&<div className='generalModal__image'><img src={img} alt={alt} /></div>}
            <div className = 'generalModal__title'><h3>{title}</h3></div>
            <div className = 'text'>{children}</div>
            { (onButtonPress || link)?
                <div className = 'generalModal__btn-wrap'>
                    {link && <Link className = 'generalModal__btn' to = { link }>ОК</Link>}
                    {onButtonPress && <button className = 'generalModal__btn' onClick = { onButtonPress }>ОК</button>}
                </div>: null }
                </div>
        </div>
    );

};

GeneralModal.propTypes = {
    onClose:      PropTypes.func,
    onButtonPress: PropTypes.func,
    title:        PropTypes.string,
    link:         PropTypes.string,
    img:          PropTypes.string,
    alt:          PropTypes.string,
};

export default GeneralModal;
