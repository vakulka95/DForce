import React from 'react';
import './style.scss';
import Loader from '../../Loader';

const PreLoader = () => {
    return (
        <div className='preloader'>
            <Loader classStyle='anim-preloader' />
        </div>
    )
}

export default PreLoader;