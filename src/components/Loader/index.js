import React from 'react';
import './style.scss';

const Loader = ({classStyle}) => {
    return (
        <div className={classStyle}>
            <div className='load'><span className="loader-5"></span></div>
        </div>
 
    )
};

export default Loader;