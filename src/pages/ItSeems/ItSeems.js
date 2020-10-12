import React from 'react';
//import ForCustomer from '../../components/home/ForCustomer';
import itseems from '../../json/itseems.json';
import ProjectPage from '../../components/ProjectPage';

function ItSeems() {
    return(
        <div>
            <ProjectPage item={itseems} />
        </div>

    )
}



export default ItSeems;