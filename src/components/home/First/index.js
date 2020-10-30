import React, {useState} from 'react';
import './style.scss';
import {useHistory,useLocation }from 'react-router-dom';

const First = () => {
    let history = useHistory()
    let locate = useLocation()

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
                        <h1 className = 'home-header'><span className = 'home-header-first'>Ми </span> 
                            <span className='animation-one'>створюємо майбутнє!</span>
                            <span className='animation-two'>інженери</span>
                            <span className='animation-three'>= відмінний результат</span>
                        </h1>

                        <p className = 'home-paragraph'>Dforce - це провідна ІТ-компанія, яка створює цифрові продукти для покращення життя та досвіду людей. Ми допомагаємо нашим клієнтам ефективно реалізувати найамбітніші ідеї!</p>
                    </div>                                 
                    <div className='home-animation'>
                        <img src='images/animation/animation.svg' className='home-lego' alt='home-lego'/>
                        {/* <div className='cube'>
                            <div className='side front'>front</div>
                            <div className='side back'>back</div>
                            <div className='side right'>right</div>
                            <div className='side left'>left</div>
                            <div className='side top'>top</div>
                            <div className='side bottom'>bottom</div>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default First;