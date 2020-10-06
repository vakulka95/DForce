import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';


function SpecItem({image, alt, title, text}) {
    return (
        <div className='spec-item'>
            <div className='spec-image'>
                <img src={image} alt={alt} />
            </div>
            <div className='spec-title'>
                <h3>{title}</h3>
            </div>
            <div className='spec-text'>
                <p>{text}</p>
            </div>
        </div>
    )
}

SpecItem.propTypes = {
    image: PropTypes.string.isRequired,
    alt: PropTypes.string,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default SpecItem
