import React from 'react';
import './style.scss';
import tellmeProject from '../../json/tellmeProject.json';
import itSeemsProject from '../../json/itSeemsProject.json';

const AllProjects = () => {
    function renderPhoto (item) {
        const loop = (item) => {
            return(
                <div className='allProjectsWrap' key={item}>
                {item.src.map((photo)=><img className='allProjectsItem' src={photo} alt={photo} key={photo} />)}
                </div>
            )
        }
        return item.map(loop);
    }
    return (
        <section className='allContainer'>
            <h2>Наші кейси</h2>
            <div className='allProjectsWrap'>
               {renderPhoto(tellmeProject)} 
            </div>
            <h2>Наші кейси</h2>
            <div className='allProjectsWrap'>
                {renderPhoto(itSeemsProject)}
            </div>
        </section>
    )
}

export default AllProjects;