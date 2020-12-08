import React, { useState } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import Logo from '../../components/Logo/Logo';
import { useLocation } from 'react-router-dom';
import './style.scss';
import Button from '../../components/Button';

import {useOnScroll} from '../../utils/useOnScroll';
import useHeight from '../../utils/useHeight';
import I18n from '../../i18n/I18n';
import { LANG } from "../../utils/constants";


const Header = () => {
    const [mobileNav, setMobileNav] = useState(false);
    const usingScrolling = useOnScroll();
    const [activeLang, setActiveLang] = useState(false);
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
        window.scrollTo({ top: yCoordinate + yOffset}); 
    }

    let pathName = useLocation().pathname;
    const opasityHeader = () => {

        if (pathName === '/' || pathName === '/en/' || pathName === '/ru/') {
            return true
        } else {
            return false
        }
    };
    let opasity = opasityHeader();


    const onChangeLang = (event) => {
        const lg = event?.target?.lang;

        if (LANG === lg) {
            return null;
        }

        window.localStorage.setItem('lg', lg);
        window.location = lg === 'uk' ? '/' : `/${lg}`;
        // console.log(lg)
    };
    const chooseLanguage = () => {
        setActiveLang(!activeLang)
    }

    return(
        <header ref={ref} style={usingScrolling?{background:"#0D0E12",zIndex:"500"}:null} className = {`header${!opasity? '': '-opasity'}${mobileNav? '-active': ''}`}>
            <div className={`container header-container${mobileNav? '-active':''}`}>
                <Logo parentClass={`header-logo${mobileNav?'-active':''}`} logoClass='header-logo-inner ' mobile={mobileNav?activateMobileNav:null}/>

            <div className = {`header-navigation${mobileNav? '-active': ''}`}>
                <ul className = 'header-navigation-list'>
                    <li className = {`header-navigation-item${mobileNav? '-active': ''}`}>
                        <NavLink className = 'header-navigation-link'
                        onClick={mobileNav? activateMobileNav:null}
                         activeClassName = { 'header-navigation-link-active' }
                        to="#home" ><span>{I18n.t('headerLinkHome')}</span>
                        </NavLink></li>
                    <li className = {`header-navigation-item${mobileNav? '-active': ''}`}>
                        <NavLink className = 'header-navigation-link'
                        onClick={mobileNav? activateMobileNav:null} 
                         activeClassName = { 'header-navigation-link-active' }
                        scroll={mobileNav? el => scrollWidthOffset(el):null}
                        to="#specialization" ><span>{I18n.t('headerLinkServices')}</span>
                        </NavLink></li>
                    <li className = {`header-navigation-item${mobileNav? '-active': ''}`}>
                        <NavLink className = 'header-navigation-link'
                        onClick={mobileNav? activateMobileNav:null}
                         activeClassName = { 'header-navigation-link-active' }
                        scroll={mobileNav? el => scrollWidthOffset(el):null}
                        to="#portfolio" ><span>{I18n.t('headerLinkPortfolio')}</span>
                        </NavLink></li>
                    <li className = {`header-navigation-item${mobileNav? '-active': ''}`}>
                        <NavLink className = 'header-navigation-link'
                        onClick={mobileNav? activateMobileNav:null} 
                         activeClassName = { 'header-navigation-link-active' }
                        scroll={mobileNav? el => scrollWidthOffset(el):null}
                        to="#about" ><span>{I18n.t('headerLinkAbout')}</span>
                        </NavLink></li>
                    <li className = {`header-navigation-item${mobileNav? '-active': ''}`}>
                        <NavLink className = 'header-navigation-link'
                        onClick={mobileNav? activateMobileNav:null} 
                        activeClassName = { 'header-navigation-link-active' }
                        scroll={el => scrollWidthOffset(el)}
                        to="#forcustomer" ><span>{I18n.t('headerLinkContact')}</span>
                        </NavLink></li>
                    <li className = {`header-navigation-item${mobileNav? '-active': ''}`}>
                        {mobileNav && <Button scroll={scrollWidthOffset} onClick={activateMobileNav} toForm message={I18n.t('buttonModal')}/>}
                        </li>
                    </ul>
                    <div className='lang-wrapper'>
                        <div className={activeLang ? "icon-language active-lang" : "icon-language"} onClick={chooseLanguage}></div>
                        <div className="lang-list" style={activeLang || mobileNav ? {display: 'flex'} : {display: 'none'}}>
                            <button lang = 'en' onClick={onChangeLang} className={window.location.pathname === '/en/' ? 'lang-link __active' : 'lang-link'}>EN</button>
                            <button lang = 'ru' onClick={onChangeLang} className={window.location.pathname === '/ru/' ? 'lang-link __active' : 'lang-link'}>RU</button>
                            <button lang = 'uk' onClick={onChangeLang} className={window.location.pathname === '/' ? 'lang-link __active' : 'lang-link'}>UK</button>
                        </div>
                    </div>
                </div>
                <div className='header-media'><button className={mobileNav ? 'header-media-x' : 'header-media-button'} onClick={activateMobileNav}><img src={mobileNav ? './images/X.png' : './images/mobileNav.svg'} alt="button" /></button></div></div>
        </header>
    )
}

export default Header;