import React from 'react';
import PropTypes from 'prop-types';


function PortfolioItem({id, image, alt, description}) {
    return (
        <div className='portfolio-item'>
            <div className='portfolio-image'>
                <img src={image} alt={alt}/>
            </div>
            <div className='portfolio-description'>
                {description}
            </div>
            <div className='portfolio-link'>
                <p>Подивитися проект</p>
            </div>
        </div>
    )
}

PortfolioItem.propTypes = {
    image: PropTypes.string.isRequired,
    alt: PropTypes.string,
    description: PropTypes.string.isRequired
}

export default PortfolioItem
