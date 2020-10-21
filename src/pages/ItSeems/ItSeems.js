import React, { Fragment } from 'react';
import itseems from '../../json/itseems.json';
import ProjectPage from '../../components/ProjectPage';

function ItSeems() {
    const color = {
        background: 'linear-gradient(264.93deg, #DB6948 -48.98%, #D4487D 100%)'
    }
    return(
        <Fragment>
            <ProjectPage item={itseems} color={color} />
        </Fragment>

    )
}



export default ItSeems;