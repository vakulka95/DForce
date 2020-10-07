import React from 'react';
//import { Link, useLocation } from "react-router-dom";
import './style.scss';

const Header = () =>{
    return(
        <div className = 'header'>
            {/* <Link className = 'header-logo' to = '/'>
                <img src = '../../../public/images/Logo.svg' alt = 'logo' />
            </Link> */}
             <img className = 'header-logo' src='./images/Logo.svg' alt = 'logo' />
            <div className = 'header-wrap'>
                <ul className = 'header-container'>
                    <li className = 'header-container-item'>Головна</li>
                    <li className = 'header-container-item'>Послуги</li>
                    <li className = 'header-container-item'>Портфоліо</li>
                    <li className = 'header-container-item'>Про нас</li>
                    <li className = 'header-container-item'>Контакти</li>
                </ul>
            </div>
            <div className = 'header-media'><div className = 'header-media-button'></div></div>
        </div>
    )
}

export default Header;