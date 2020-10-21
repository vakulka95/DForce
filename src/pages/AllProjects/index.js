import React from 'react';
import './style.scss';

// import tellmeProject from '../../json/tellmeProject.json';
// import itSeemsProject from '../../json/itSeemsProject.json';

const AllProjects = () => {
    // function renderPhoto (item) {
    // const loop = (item) => {
    //     return(
    //         <div className='allProjectsWrap' key={item}>
    //         {item.src.map((photo)=><img className='allProjectsItem' src={photo} alt={photo} key={photo} />)}
    //         </div>
    //     )
    // }
    // return item.map(loop);
    // }
    return (
        <section className='allContainer'>
            <h2 className='allProjects-title'>Наші кейси</h2>
            <div className='mainProjects'>
                {/* {renderPhoto(tellmeProject)}  */}

                <div className='mainProjects-item'>
                    <a href='#'>
                        <img src='./images/cases/itSeems/Rectangle-1372.png' alt='ItSeems' />
                    </a>
                </div>
                <div className='mainProjects-item'>
                    <a href='https://tellme.com.ua/'>
                        <img src='./images/cases/TellMe/tellme1.png' alt='TellMe' />
                    </a>
                </div>
                <div className='mainProjects-item'>
                    <a href='#'>
                        <img src='./images/cases/itSeems/Rectangle-1372.png' alt='ItSeems' />
                    </a>
                </div>
                <div className='mainProjects-item'>
                    <a href='https://tellme.com.ua/'>
                        <img src='./images/cases/TellMe/tellme1.png' alt='TellMe' />
                    </a>
                </div>
            </div>
            <h2 className='allProjects-title'>Наші кейси</h2>
            <div className='secondaryProjects'>
                {/* {renderPhoto(itSeemsProject)} */}

                <div className='secondaryProjects-item'>
                    <a href='#'>
                        <img src='./images/cases/itSeems/Group-609.png' alt='ItSeems' />
                    </a>
                </div>
                <div className='secondaryProjects-item'>
                    <a href='https://tellme.com.ua/'>
                        <img src='./images/cases/TellMe/Group-949.png' alt='TellMe' />
                    </a>
                </div>
                <div className='secondaryProjects-item'>
                    <a href='#'>
                        <img src='./images/cases/itSeems/Group-609.png' alt='ItSeems' />
                    </a>
                </div>
                <div className='secondaryProjects-item'>
                    <a href='https://tellme.com.ua/'>
                        <img src='./images/cases/TellMe/Group-949.png' alt='TellMe' />
                    </a>
                </div>
                <div className='secondaryProjects-item'>
                    <a href='#'>
                        <img src='./images/cases/itSeems/Group-609.png' alt='ItSeems' />
                    </a>
                </div>
                <div className='secondaryProjects-item'>
                    <a href='https://tellme.com.ua/'>
                        <img src='./images/cases/TellMe/Group-949.png' alt='TellMe' />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default AllProjects;