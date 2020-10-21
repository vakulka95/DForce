import React, { Fragment } from 'react';
import tellme from '../../json/tellme.json';
import ProjectPage from '../../components/ProjectPage';

function TellMe() {
    const color = {
        backgroundColor:'#329AE5'
    }
    return (
        <Fragment>
            <ProjectPage item={tellme} color={color} />
        </Fragment>
    )
}

export default TellMe;