import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import './style.scss';



function PortfolioItem({ id, image, alt, backgroundCLass, description, to }) {
    return (
        <div className='case'>
            <div className={backgroundCLass}>
                <img src={image} alt={alt} />
            </div>
            <div className='case-description'>
                <div className='case-title sub-title'>
                    <h3>{description}</h3>
                </div>
                <div className='case-link'>
                    <Link to={`${to}`} >Подивитися проект</Link> 
                    <Link to={`${to}`} >
                        <div className='case-circle'>
                            <FontAwesomeIcon className='icon' icon={faAngleRight} size='lg'/>
                        </div>
                    </Link> 
                </div>
            </div>
        </div>
    )
}

PortfolioItem.propTypes = {
    image: PropTypes.string.isRequired,
    alt: PropTypes.string,
    backgroundCLass: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
}

export default PortfolioItem
