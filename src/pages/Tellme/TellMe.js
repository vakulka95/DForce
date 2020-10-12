import React from 'react';
import tellme from '../../json/tellme.json';
import ProjectPage from '../../components/ProjectPage';

function TellMe() {
    return (
        <div>
            <ProjectPage item={tellme} />
        </div>
    )
}

export default TellMe;