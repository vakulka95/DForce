import React from 'react';
import './style.scss';
import useHeight from '../../../utils/useHeight';


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
                            <h1 className = 'home-header-first'>Ми <span className='animation-one'>створюємо майбутнє!</span></h1> 
                            <span className='animation-two'>інженери</span>
                            <span className='animation-three'>досягаємо цілей</span>
                        </div>

                        <p className = 'home-paragraph'>Dforce — це провідна ІТ-компанія, яка створює цифрові продукти для покращення життя й досвіду людей. Ми допомагаємо нашим клієнтам ефективно реалізувати найамбітніші ідеї!</p>
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