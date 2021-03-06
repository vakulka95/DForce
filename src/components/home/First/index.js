import React from 'react';
import './style.scss';
import useHeight from '../../../utils/useHeight';
//import {useHistory,useLocation }from 'react-router-dom';
import I18n from '../../../i18n/I18n';


const First = ({collectHeight}) => {

    const [rect, ref] = useHeight()
    const block = {id:'home', height:rect}
        if(rect){
        collectHeight(block)
    } 
                
    return (
        <section ref={ref} className = 'home' id='home'>
            <div className='container'>
                <div className = 'home-wrap'>
                    <div className='home-intro'>
                        <div className = 'home-header'>
                            <h1 className = 'home-header-first'>{I18n.t('firstTitleWe')} <span className='animation-one'>{I18n.t('firstTitleAnimationOne')}</span></h1> 
                            <span className='animation-two'>{I18n.t('firstTitleAnimationTwo')}</span>
                            <span className='animation-three'>{I18n.t('firstTitleAnimationThree')}</span>
                        </div>

                        <p className = 'home-paragraph'>{I18n.t('firstDescription')}</p>
                    </div>                                 
                    <div className='home-animation'>
                        {/* {animation ?  */}
                        {/* // <img src='images/animation/mirror-cube.svg' className='home-lego' alt='home-lego'/>:<img src='images/animation/animation.svg' className='home-lego' alt='home-lego'/>} */}
                         <img src='../images/animation/animation.svg' className='home-lego' alt='DForce animation - Анімація DForce'/> 
                        <img src='../images/animation/Block.svg' className='block block-first' alt='' />
                        <img src='../images/animation/Block.svg' className='block block-third' alt='' />
                        <img src='../images/animation/Block.svg' className='block block-second' alt='' />

                    </div>
                </div>
            </div>
        </section>
    )
}

export default First;