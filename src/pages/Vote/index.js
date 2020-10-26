import React, { Fragment } from 'react';
import './style.scss'
// import vote from '../../json/vote.json';
// import ProjectPage from '../../components/ProjectPage';

function Vote() {

    return(
        <Fragment>
            <div className='detailVote'>
           <h2 className='deatilVote-title'>В процесі…</h2> 
           <p className='deatilVote-text'>Сервіс голосування в раду для МКІП повинен забезпечити ефективну та зручну взаємодію в процесі голосування за вибір кандидатів</p>
           <div className='detailVote-figure'><img className='deatilVote-figure-img' alt='vote' src='./images/logo.svg'/></div>
           </div>
        </Fragment>

    )
}



export default Vote;