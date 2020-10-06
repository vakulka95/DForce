import React from 'react';

function Logo({logoClass}) {
    return (
        <div className={logoClass}>
            <img src='./images/logo.svg' alt='Logo'/>
        </div>
    )
}

export default Logo
