import React from 'react'
import Specialization from '../../pages/Specialization/Specialization';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Portfolio from '../../pages/Portfolio';
import ForCustomer from '../../pages/ForCustomer';
import specItems from '../../json/specItems';
import portfolioItems from '../../json/portfolioItems';
import contactItem from '../../json/contactItem';



function Content(props) {
    return (
        <main>
            <Home />
            <Specialization specItems={specItems} />
            <Portfolio portfolioItems={portfolioItems}/>
            <About />
            <ForCustomer contactItem={contactItem}/>
        </main>
    )
}

export default Content
