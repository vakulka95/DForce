import React, { Fragment } from 'react';
import './style.scss'
// import vote from '../../json/vote.json';
// import ProjectPage from '../../components/ProjectPage';

function Vote() {

    return(
        <Fragment>
            <div className='detailVote'>
                <div className='detailVote-width'>
                    <h2 className='detailVote-title'>В процесі…</h2> 
                    <p className='detailVote-text'>Сервіс голосування в раду для МКІП повинен забезпечити ефективну та зручну взаємодію в процесі голосування за вибір кандидатів</p>
                    <div className='detailVote-figure'>
                        <span className='detailVote-item-img'>
                            <span className='detailVote-item-inner'></span>
                        </span>
                    </div>
                </div>
           </div>
        </Fragment>

    )
}



export default Vote;