import React,{useState} from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import Logo from '../../components/Logo/Logo';
import {useLocation} from 'react-router-dom';
import './style.scss';

const Header = () =>{
    // const [mobileNav, setMobileNav] = useState({
    //     display:'none'
    // });

    // const showMobileNav = () => {
    //     setMobileNav({
    //         display: 'Block'
    //     })
    // }

    const scrollWidthOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -90; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }

    let pathName = useLocation().pathname;

    const opasityHeader = () => {
        
        if(pathName==='/'){
            return true
        } else {
            return false
        }
    };
    console.log(opasityHeader())
    let opasity = opasityHeader();
    return(
        <header className = {opasity? 'header-opasity': 'header'}>
            <div className='container header-container'>
                <Logo parentClass='logo' logoClass='header-logo'/>
            <div className = 'header-navigation'>
                <ul className = 'header-navigation-list'>
                    <li className = 'header-navigation-item'>
                        <NavLink className = 'header-navigation-link'
                        smooth activeClassName = { 'header-navigation-link-active' }
                        to="/" ><span>Головна</span>
                        </NavLink></li>
                    <li className = 'header-navigation-item'>
                        <NavLink className = 'header-navigation-link' 
                        smooth activeClassName = { 'header-navigation-link-active' }
                        to="/#specialization" ><span>Послуги</span>
                        </NavLink></li>
                    <li className = 'header-navigation-item'>
                        <NavLink className = 'header-navigation-link'
                        smooth activeClassName = { 'header-navigation-link-active' }
                        to="/#portfolio" ><span>Портфоліо</span>
                        </NavLink></li>
                    <li className = 'header-navigation-item'>
                        <NavLink className = 'header-navigation-link' 
                        smooth activeClassName = { 'header-navigation-link-active' }
                        to="/#about" ><span>Про нас</span>
                        </NavLink></li>
                    <li className = 'header-navigation-item'>
                        <NavLink className = 'header-navigation-link' 
                        activeClassName = { 'header-navigation-link-active' }
                        scroll={el => scrollWidthOffset(el)}
                        to="#forcustomer" ><span>Контакти</span>
                        </NavLink></li>
                </ul>
            </div>
            <div className = 'header-media'><div className = 'header-media-button' onClick={showMobileNav}><img src="./images/mobileNav.svg" alt="button" /></div></div>
            </div>
        </header>
    )
}

export default Header;