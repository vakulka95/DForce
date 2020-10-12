import React from 'react';
import Specialization from '../../components/home/Specialization/Specialization';
import First from '../../components/home/First';
import About from '../../components/home/About';
import Portfolio from '../../components/home/Portfolio';
import specItems from '../../json/specItems';
import portfolioItems from '../../json/portfolioItems';
import './style.scss';

function Home() {
    return (


        <main>
            <First id='home'/>
            <Specialization specItems={specItems} id='specialization' />
            <Portfolio portfolioItems={portfolioItems} id='portfolio' />
            <About id='about' />
        </main>


    )
}

export default Home;