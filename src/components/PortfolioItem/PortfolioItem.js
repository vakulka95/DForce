import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import technologies from '../../json/technologies.json'
import './style.scss';



function PortfolioItems({ id,backgroundCLass, description, to , backgroundCLassDis, descriptionDis, disable}) {
    return (
        <div className={disable ? 'case disable'  : 'case'}>
            <div className='image'>
                <div className='image-wrap'>
                    <span className={disable ? `image-wrap-img ${backgroundCLassDis}`: `image-wrap-img ${backgroundCLass}`}>
                        <span className='image-wrap-inner'></span>
                    </span>
                </div>
            </div>
            {disable ? 
            <div className='case-description'>
                <div className='in-progress'>In progress</div>
                <p className='case-title sub-title'>{descriptionDis}</p>
                <div className='icons'>
                    {technologies.map((icon)=><img src={Object.values(icon).join('')} alt={Object.keys(icon).join('')} id={Object.keys(icon).join('')} title={Object.keys(icon).join('')} key={Object.keys(icon).join('')} />)}
                </div>
            </div>
            :<Link to={`${to}`} className='case-description'>
                <p className='case-title sub-title'>{description}</p>
                <div className='icons'>
                    {technologies.map((icon)=><img src={Object.values(icon).join('')} alt={Object.keys(icon).join('')} id={Object.keys(icon).join('')} title={Object.keys(icon).join('')} key={Object.keys(icon).join('')} />)}
                </div>
                <div className='case-link'>
                    <p  className='case-link-item'>Подивитися проект</p> 
                    <span className='case-link-item'>
                        <div className='case-circle'>
                            <FontAwesomeIcon className='icon' icon={faAngleRight} size='lg'/>
                        </div>
                    </span> 
                </div>
            </Link>}
        </div>
    )
}

PortfolioItems.propTypes = {
    backgroundCLass: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
}

export default PortfolioItems
