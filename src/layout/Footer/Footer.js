import React from 'react';
import Logo from '../../components/Logo/Logo';
import './style.scss';

function Footer() {
    return (
        <footer className='footer'>
            <div className='container'>
                <Logo parentClass='footer-logo'/>
                <p>© 2020 Dforce. All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
