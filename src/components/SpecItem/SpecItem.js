import React from 'react';
import PropTypes from 'prop-types';


function SpecItem({images, alt, title, text}) {
    return (
        <div className='spec-item'>
            <div className='spec-image'>
                <img src={images} alt={alt} />
            </div>
            <div className='spec-title'>
                {title}
            </div>
            <div className='spec-text'>
                {text}
            </div>
        </div>
    )
}

export default SpecItem
