import React from 'react';
import { Link } from "react-scroll";
import Logo from '../../components/Logo/Logo';
import './style.scss';

const Header = () =>{
    return(
        <div className = 'header'>
            <div className='container header-container'>
            {/* <Link to="home" 
                        spy={true} 
                        hashSpy={true}
                        smooth={true} 
                        duration={1000}> */}
                <Logo parentClass='logo' logoClass='header-logo'/>
            {/* </Link> */}
            <div className = 'header-navigation'>
                <ul className = 'header-navigation-list'>
                    <li className = 'header-navigation-item'>
                        <Link className = 'header-navigation-link'
                        activeClass="active" to="home" 
                        spy={true} 
                        hashSpy={true}
                        smooth={true} 
                        duration={1000}><span>Головна</span>
                        </Link></li>
                    <li className = 'header-navigation-item'>
                        <Link className = 'header-navigation-link' 
                        activeClass="active" 
                        to="specialization" 
                        spy={true} 
                        smooth={true}
                        hashSpy={true} 
                        duration={1000}><span>Послуги</span>
                        </Link></li>
                    <li className = 'header-navigation-item'>
                        <Link className = 'header-navigation-link'
                        activeClass="active" 
                        to="portfolio" 
                        spy={true} 
                        hashSpy={true}
                        smooth={true} 
                        duration={1000}><span>Портфоліо</span>
                        </Link></li>
                    <li className = 'header-navigation-item'>
                        <Link className = 'header-navigation-link' 
                        activeClass="active" 
                        to="about" 
                        spy={true} 
                        hashSpy={true}
                        smooth={true} 
                        duration={1000}><span>Про нас</span>
                        </Link></li>
                    <li className = 'header-navigation-item'>
                        <Link className = 'header-navigation-link' 
                        activeClass="active" 
                        to="forcustomer" 
                        spy={true} 
                        hashSpy={true}
                        offset={-90}
                        smooth={true} 
                        duration={1000}><span>Контакти</span>
                        </Link></li>
                </ul>
            </div>
            <div className = 'header-media'><div className = 'header-media-button'></div></div>
            </div>
        </div>
    )
}

export default Header;