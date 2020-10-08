import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';


function SpecItem({image, alt, title, text}) {
    return (
        <div className='value-item'>
            <div className='value-image'>
                <img src={image} alt={alt} />
            </div>
            <div className='value-title'>
                <h3>{title}</h3>
            </div>
            <div className='value-text'>
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
