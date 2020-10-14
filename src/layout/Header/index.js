import React,{useState} from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import Logo from '../../components/Logo/Logo';
import {useLocation} from 'react-router-dom';
import './style.scss';

const Header = () =>{
   const [mobileNav, setMobileNav] = useState(false)
   const activateMobileNav = () => {
       setMobileNav((prev)=>!prev)
   }

    const scrollWidthOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -150; 
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
        <header className = {`header${!opasity? '': '-opasity'}${mobileNav? '-active': ''}`}>
            <div className={`container header-container${mobileNav? '-active':''}`}>
                <Logo parentClass='logo' logoClass='header-logo' mobile={activateMobileNav}/>
            <div className = {`header-navigation${mobileNav? '-active': ''}`}>
                <ul className = 'header-navigation-list'>
                    <li className = {`header-navigation-item${mobileNav? '-active': ''}`}>
                        <NavLink className = 'header-navigation-link'
                        onClick={mobileNav? activateMobileNav:null}
                        smooth activeClassName = { 'header-navigation-link-active' }
                        to="/" ><span>Головна</span>
                        </NavLink></li>
                    <li className = {`header-navigation-item${mobileNav? '-active': ''}`}>
                        <NavLink className = 'header-navigation-link'
                        onClick={mobileNav? activateMobileNav:null} 
                        smooth activeClassName = { 'header-navigation-link-active' }
                        to="/#specialization" ><span>Послуги</span>
                        </NavLink></li>
                    <li className = {`header-navigation-item${mobileNav? '-active': ''}`}>
                        <NavLink className = 'header-navigation-link'
                        onClick={mobileNav? activateMobileNav:null}
                        smooth activeClassName = { 'header-navigation-link-active' }
                        to="/#portfolio" ><span>Портфоліо</span>
                        </NavLink></li>
                    <li className = {`header-navigation-item${mobileNav? '-active': ''}`}>
                        <NavLink className = 'header-navigation-link'
                        onClick={mobileNav? activateMobileNav:null} 
                        smooth activeClassName = { 'header-navigation-link-active' }
                        to="/#about" ><span>Про нас</span>
                        </NavLink></li>
                    <li className = {`header-navigation-item${mobileNav? '-active': ''}`}>
                        <NavLink className = 'header-navigation-link'
                        onClick={mobileNav? activateMobileNav:null} 
                        activeClassName = { 'header-navigation-link-active' }
                        scroll={el => scrollWidthOffset(el)}
                        to="#forcustomer" ><span>Контакти</span>
                        </NavLink></li>
                </ul>
            </div>
            <div className = 'header-media'><div className = 'header-media-button' onClick={activateMobileNav}><img src={mobileNav?'./images/mobileClose.svg':'./images/mobileNav.svg'} alt="button" /></div></div>
            </div>
        </header>
    )
}

export default Header;