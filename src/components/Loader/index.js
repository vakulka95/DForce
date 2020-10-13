import React from 'react';
import './style.scss';

const Loader = () => {
    return (
        <div class="loader-container arc-rotate2">
            <div class="inner"><img height="100px" width="100px" alt="loading" src="./images/Ellipse.png"/></div>
            <div class="loader">
                <div class="arc"></div>
            </div>
        </div>
 
    )
};

export default Loader;