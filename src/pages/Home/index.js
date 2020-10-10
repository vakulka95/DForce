import React from 'react';
import Specialization from '../../components/home/Specialization/Specialization';
import First from '../../components/home/First';
import About from '../../components/home/About';
import Portfolio from '../../components/home/Portfolio';
import ForCustomer from '../../components/home/ForCustomer';
import specItems from '../../json/specItems';
import portfolioItems from '../../json/portfolioItems';
import { animateScroll } from 'react-scroll';
import './style.scss';
import contactItem from '../../json/contactItem';

function Home(props) {
    const scroll = animateScroll;
    const scrollToTop = () => {
        scroll.scrollToTop();
      }
    return (
        <main>
            <First id='home'/>
            <Specialization specItems={specItems} id='specialization' />
            <Portfolio portfolioItems={portfolioItems} id='portfolio' />
            <About id='about' />
            <ForCustomer  contactItem={contactItem} id='forcustomer' />
            <div className='scrolling' onClick={scrollToTop}>Up</div>
        </main>
    )
}

export default Home;