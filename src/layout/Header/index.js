import React from 'react';
import { Link } from "react-scroll";
import Logo from '../../components/Logo/Logo';
//import { NavHashLink as NavLink } from 'react-router-hash-link';
import './style.scss';

const Header = () =>{
    return(
        <div className = 'header'>
            <Link to = '/'>
                <Logo parentClass='logo' logoClass='header-logo'/>
            </Link>
            <div className = 'header-wrap'>
                <ul className = 'header-container'>
                    <li className = 'header-container-item'>
                        <Link className = 'header-container-link'
                        activeClass="active" to="home" 
                        spy={true} smooth={true} 
                        duration={1000}><span>Головна</span>
                        </Link></li>
                    <li className = 'header-container-item'>
                        <Link className = 'header-container-link' 
                        activeClass="active" 
                        to="specialization" 
                        spy={true} 
                        smooth={true} 
                        duration={1000}><span>Послуги</span>
                        </Link></li>
                    <li className = 'header-container-item'>
                        <Link className = 'header-container-link'
                        activeClass="active" 
                        to="portfolio" 
                        spy={true} 
                        smooth={true} 
                        duration={1000}><span>Портфоліо</span>
                        </Link></li>
                    <li className = 'header-container-item'>
                        <Link className = 'header-container-link' 
                        activeClass="active" 
                        to="about" 
                        spy={true} 
                        smooth={true} 
                        duration={1000}><span>Про нас</span>
                        </Link></li>
                    <li className = 'header-container-item'>
                        <Link className = 'header-container-link' 
                        activeClass="active" 
                        to="forcustomers" 
                        spy={true} 
                        smooth={true} 
                        duration={1000}><span>Контакти</span>
                        </Link></li>
                </ul>
            </div>
            <div className = 'header-media'><div className = 'header-media-button'></div></div>
        </div>
    )
}

export default Header;