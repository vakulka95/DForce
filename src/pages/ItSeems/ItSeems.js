import React, { Fragment } from 'react';
import './style.scss';
import itseems from '../../json/itseems.json';
import ProjectPage from '../../components/ProjectPage';

function ItSeems() {
    return(
        <Fragment>
            <ProjectPage item={itseems} />
        </Fragment>

    )
}



export default ItSeems;