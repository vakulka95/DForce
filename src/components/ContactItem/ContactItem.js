import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function ContactItem({ image, alt, info, data }) {
    return (
        <div className='contact-item'>
            <div className='contact-image'>
                <img src={image} alt={alt} />
            </div>
            <div className='contact-info'>
                <div className='contact-service'>
                    <p>{info}</p>
                </div>
                <div className='contact-data'>
                    <a href={data}>{data === 'tel: +380631348154' ? '+380631348154' : 'a.bakhtalovskyi@dforce.com'}</a>
                </div>
            </div>
        </div>
    )
}

ContactItem.propTypes = {
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
    data: PropTypes.string.isRequired,
}

export default ContactItem
