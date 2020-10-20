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
                <p className='case-title sub-title'>{description}</p>
                <div className='icons'>
                    <img src={'./images/fontImages/icon1.svg'} alt='icon'/>
                    <img src={'./images/fontImages/icon2.svg'} alt='icon'/>
                    <img src={'./images/fontImages/icon3.svg'} alt='icon'/>
                    <img src={'./images/fontImages/icon4.svg'} alt='icon'/>
                    <img src={'./images/fontImages/icon5.svg'} alt='icon'/>
                    <img src={'./images/fontImages/icon6.svg'} alt='icon'/>
                    <img src={'./images/fontImages/icon7.svg'} alt='icon'/>
                    <img src={'./images/fontImages/icon8.svg'} alt='icon'/>
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
