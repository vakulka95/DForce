import React,{useState} from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import Logo from '../../components/Logo/Logo';
import {useLocation} from 'react-router-dom';
import './style.scss';
import Button from '../../components/Button';
import {useOnScroll} from '../../utils/useOnScroll';
import useHeight from '../../utils/useHeight';

const Header = () =>{
    const [mobileNav, setMobileNav] = useState(false);
    const usingScrolling = useOnScroll();
    const [rect, ref] = useHeight()


        if(rect!==null){
          localStorage.setItem('height',rect)
    }
    //console.log(rect,block);

    let num = 0;

    if (mobileNav){
        num=-88;
    } else num=-240

   const activateMobileNav = () => {
       setMobileNav((prev)=>!prev)
   }

    const scrollWidthOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = num; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior:'smooth'}); 
    }

    let pathName = useLocation().pathname;
    const opasityHeader = () => {
        
        if(pathName==='/'){
            
            return true
        } else {
            return false
        }
    };
    let opasity = opasityHeader();
    return(
        <header ref={ref} style={usingScrolling?{background:"#0D0E12",zIndex:"500"}:null} className = {`header${!opasity? '': '-opasity'}${mobileNav? '-active': ''}`}>
            <div className={`container header-container${mobileNav? '-active':''}`}>
                <Logo parentClass={`header-logo${mobileNav?'-active':''}`} logoClass='header-logo-inner ' mobile={mobileNav?activateMobileNav:null}/>
            <div className = {`header-navigation${mobileNav? '-active': ''}`}>
                <ul className = 'header-navigation-list'>
                    <li className = {`header-navigation-item${mobileNav? '-active': ''}`}>
                        <NavLink className = 'header-navigation-link'
                        onClick={mobileNav? activateMobileNav:null}
                        smooth activeClassName = { 'header-navigation-link-active' }
                        to="/#home" ><span>Головна</span>
                        </NavLink></li>
                    <li className = {`header-navigation-item${mobileNav? '-active': ''}`}>
                        <NavLink className = 'header-navigation-link'
                        onClick={mobileNav? activateMobileNav:null} 
                        smooth activeClassName = { 'header-navigation-link-active' }
                        scroll={mobileNav? el => scrollWidthOffset(el):null}
                        to="/#specialization" ><span>Послуги</span>
                        </NavLink></li>
                    <li className = {`header-navigation-item${mobileNav? '-active': ''}`}>
                        <NavLink className = 'header-navigation-link'
                        onClick={mobileNav? activateMobileNav:null}
                        smooth activeClassName = { 'header-navigation-link-active' }
                        scroll={mobileNav? el => scrollWidthOffset(el):null}
                        to="/#portfolio" ><span>Портфоліо</span>
                        </NavLink></li>
                    <li className = {`header-navigation-item${mobileNav? '-active': ''}`}>
                        <NavLink className = 'header-navigation-link'
                        onClick={mobileNav? activateMobileNav:null} 
                        smooth activeClassName = { 'header-navigation-link-active' }
                        scroll={mobileNav? el => scrollWidthOffset(el):null}
                        to="/#about" ><span>Про нас</span>
                        </NavLink></li>
                    <li className = {`header-navigation-item${mobileNav? '-active': ''}`}>
                        <NavLink className = 'header-navigation-link'
                        onClick={mobileNav? activateMobileNav:null} 
                        activeClassName = { 'header-navigation-link-active' }
                        scroll={el => scrollWidthOffset(el)}
                        to="#forcustomer" ><span>Контакти</span>
                        </NavLink></li>
                    <li className = {`header-navigation-item${mobileNav? '-active': ''}`}>
                        {mobileNav && <Button scroll={scrollWidthOffset} onClick={activateMobileNav} toForm message={'Замовити консультацію'}/>}
                        </li>
                </ul>
            </div>
            <div className = 'header-media'><button className={mobileNav? 'header-media-x':'header-media-button'} onClick={activateMobileNav}><img src={mobileNav?'./images/X.png':'./images/mobileNav.svg'} alt="button" /></button></div></div>
        </header>
    )
}

export default Header;