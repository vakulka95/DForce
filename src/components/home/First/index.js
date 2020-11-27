import React, {useState} from 'react';
import './style.scss';
import {useHistory,useLocation }from 'react-router-dom';
import I18n from '../../../i18n/I18n';

const First = () => {
    let history = useHistory()
    let locate = useLocation()

    // const [animation, setAnimation] = useState(false)

    

    
    // const changeAnimation = (e) => {
    //     console.log(window.innerWidth);
    //     if(window.innerWidth > 319 && window.innerWidth < 1025){
    //         setAnimation(true)
    //     }
    //     else{
    //         setAnimation(false)
    //     }
    // }
    // useEffect(() => {
    //     window.addEventListener('resize', changeAnimation());
    //   });
        

    const [position,setPosition] = useState({ y: null })

    const handleMouseMove = (e)=> {
        setPosition({
          y: e.clientY
        });
        if(position.y){ 
            locate.hash = '#home'
            history.replace(locate.hash)
            }
    }
          
    return (
        <section className = 'home' id='home' onMouseEnter={handleMouseMove}>
            <div className='container'>
                <div className = 'home-wrap'>
                    <div className='home-intro'>
                        <div className = 'home-header'>
                            <h1 className = 'home-header-first'>{I18n.t('firstTitleWe')} <span className='animation-one'>{I18n.t('firstTitleAnimationOne')}</span></h1> 
                            <span className='animation-two'>{I18n.t('firstTitleAnimationTwo')}</span>
                            {/* {console.log(window.location.pathname === '/en')} */}
                            <span className={window.location.pathname === '/en' ? "animation-three-en" : 'animation-three'}>{I18n.t('firstTitleAnimationThree')}</span>
                        </div>

                        <p className = 'home-paragraph'>{I18n.t('firstDescription')}</p>
                    </div>                                 
                    <div className='home-animation'>
                        {/* {animation ?  */}
                        {/* // <img src='images/animation/mirror-cube.svg' className='home-lego' alt='home-lego'/>:<img src='images/animation/animation.svg' className='home-lego' alt='home-lego'/>} */}
                         <img src='images/animation/animation.svg' className='home-lego' alt='DForce animation - Анімація DForce'/> 
                        <img src='images/animation/Block.svg' className='block block-first' alt='' />
                        <img src='images/animation/Block.svg' className='block block-third' alt='' />
                        <img src='images/animation/Block.svg' className='block block-second' alt='' />

                    </div>
                </div>
            </div>
        </section>
    )
}

export default First;