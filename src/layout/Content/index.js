import React from 'react'
import Specialization from '../../pages/Specialization/Specialization';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Portfolio from '../../pages/Portfolio';
import ForCustomer from '../../pages/ForCustomer';
import specItems from '../../json/specItems';


function Content(props) {
    return (
        <div>
            <Home />
            <Specialization specItems={specItems} />
            <Portfolio />
            <About />
            <ForCustomer />
        </div>
    )
}

export default Content
