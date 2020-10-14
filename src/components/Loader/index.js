import React from 'react';
import './style.scss';

const Loader = ({classStyle}) => {
    return (
        <div className={classStyle}>
            <img height="100px" alt="loading" width="100px" src="./images/load.svg" />
        </div>
 
    )
};

export default Loader;