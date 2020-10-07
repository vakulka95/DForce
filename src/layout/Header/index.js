import React from 'react';
import { Link } from "react-router-dom";
import Logo from '../../components/Logo/Logo';
//import { NavHashLink as NavLink } from 'react-router-hash-link';
import './style.scss';

const Header = () =>{
    return(
        <div className = 'header'>
            <Link to = '/'>
                <Logo parentClass='logo' logoClass='header-logo'/>
            </Link>
            {/* 
             <img className = 'header-logo' src='./images/Logo.svg' alt = 'logo' />
             </Link> */}
            <div className = 'header-wrap'>
                <ul className = 'header-container'>
                    <li className = 'header-container-item'><Link className = 'header-container-link' to = '/'><span>Головна</span></Link></li>
                    <li className = 'header-container-item'><Link className = 'header-container-link' to = '/specialization'><span>Послуги</span></Link></li>
                    <li className = 'header-container-item'><Link className = 'header-container-link' to = '/portfolio'><span>Портфоліо</span></Link></li>
                    <li className = 'header-container-item'><Link className = 'header-container-link' to = '/about'><span>Про нас</span></Link></li>
                    <li className = 'header-container-item'><Link className = 'header-container-link' to = '/forcustomer'><span>Контакти</span></Link></li>
                </ul>
            </div>
            <div className = 'header-media'><div className = 'header-media-button'></div></div>
        </div>
    )
}

export default Header;