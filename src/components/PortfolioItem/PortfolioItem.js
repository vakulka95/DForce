import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import technologies from '../../json/technologies.json'
import './style.scss';



function PortfolioItem({ id, image, alt, backgroundCLass, description, to }) {
    return (
        <div className='case'>
            <div className={backgroundCLass}>
                <img src={image} alt={alt} key={image}/>
            </div>
            <div className='case-description'>
                <p className='case-title sub-title'>{description}</p>
                <div className='icons'>
                    {technologies.map((icon)=><img src={Object.values(icon).join('')} alt={Object.keys(icon).join('')} title={Object.keys(icon).join('')} key={Object.keys(icon).join('')} />)}
                </div>
                <div className='case-link'>
                    <Link to={`${to}`} className='case-link-item'>Подивитися проект</Link> 
                    <Link to={`${to}`} className='case-link-item'>
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
