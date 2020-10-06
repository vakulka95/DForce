import React from 'react';
import Logo from '../../components/Logo/Logo';
import './style.scss';

function Footer() {
    return (
        <footer className='footer'>
            <div className='container'>
                <Logo logoClass='footer-logo'/>
            </div>
        </footer>
    )
}

export default Footer
