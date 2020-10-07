import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';


function PortfolioItem({ id, image, alt, backgroundCLass, description }) {
    return (
        <div className='case'>
            <div className={backgroundCLass}>
                <img src={image} alt={alt} />
            </div>
            <div className='case-description'>
                <div className='case-text'>
                    <h3>{description}</h3>
                </div>
                <div className='case-link'>
                    <p>Подивитися проект</p>
                </div>
            </div>
        </div>
    )
}

PortfolioItem.propTypes = {
    image: PropTypes.string.isRequired,
    alt: PropTypes.string,
    backgroundCLass: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default PortfolioItem
