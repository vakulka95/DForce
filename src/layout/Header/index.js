import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import Logo from '../../components/Logo/Logo';
import './style.scss';

const Header = () =>{
    return(
        <div className = 'header'>
            <div className='container header-container'>
                <Logo parentClass='logo' logoClass='header-logo'/>
            <div className = 'header-navigation'>
                <ul className = 'header-navigation-list'>
                    <li className = 'header-navigation-item'>
                        <NavLink className = 'header-navigation-link'
                        activeClass="active"
                        to="/#home" ><span>Головна</span>
                        </NavLink></li>
                    <li className = 'header-navigation-item'>
                        <NavLink className = 'header-navigation-link' 
                        activeClass="active" 
                        to="/#specialization" ><span>Послуги</span>
                        </NavLink></li>
                    <li className = 'header-navigation-item'>
                        <NavLink className = 'header-navigation-link'
                        activeClass="active" 
                        to="/#portfolio" ><span>Портфоліо</span>
                        </NavLink></li>
                    <li className = 'header-navigation-item'>
                        <NavLink className = 'header-navigation-link' 
                        activeClass="active" 
                        to="/#about" ><span>Про нас</span>
                        </NavLink></li>
                    <li className = 'header-navigation-item'>
                        <NavLink className = 'header-navigation-link' 
                        activeClass="active" 
                        to="#forcustomer" ><span>Контакти</span>
                        </NavLink></li>
                </ul>
            </div>
            <div className = 'header-media'><div className = 'header-media-button'></div></div>
            </div>
        </div>
    )
}

export default Header;