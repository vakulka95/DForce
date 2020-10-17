import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';


function SpecItem({image, alt, title, text, classItem, classImage, classTitle, classText, keys}) {
    return (
        <div className={classItem} key={keys}>
            <div className={classImage}>
                <img src={image} alt={alt} />
            </div>
            <div className={classTitle}>
                <h3>{title}</h3>
            </div>
            <div className={classText}>
                <p>{text}</p>
            </div>
        </div>
    )
}

SpecItem.propTypes = {
    image: PropTypes.string.isRequired,
    alt: PropTypes.string,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    classItem: PropTypes.string.isRequired,
    classImage: PropTypes.string.isRequired,
    classTitle: PropTypes.string.isRequired,
    classText: PropTypes.string.isRequired,
}

export default SpecItem
