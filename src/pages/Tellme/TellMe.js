import React, { Fragment } from 'react';
import './style.scss'
import tellme from '../../json/tellme.json';
import ProjectPage from '../../components/ProjectPage';

function TellMe() {
    return (
        <Fragment>
            <ProjectPage item={tellme} />
        </Fragment>
    )
}

export default TellMe;