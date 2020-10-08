import React from 'react'
import Specialization from '../../pages/Specialization/Specialization';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Portfolio from '../../pages/Portfolio';
import ForCustomer from '../../pages/ForCustomer';
import specItems from '../../json/specItems';
import portfolioItems from '../../json/portfolioItems';
import { animateScroll } from 'react-scroll';
import './style.scss';
import contactItem from '../../json/contactItem';



function Content(props) {
    const scroll = animateScroll;
    const scrollToTop = () => {
        scroll.scrollToTop();
      }
    return (
        <main>
            <Home id='home'/>
            <Specialization specItems={specItems} id='specialization' />
            <Portfolio portfolioItems={portfolioItems} id='portfolio' />
            <About id='about' />
            <ForCustomer  contactItem={contactItem} id='forcustomer' />
            <div className='scrolling' onClick={scrollToTop}>Up</div>
        </main>
    )
}

export default Content
