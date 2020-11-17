import React, {useState,useEffect,useRef} from 'react';
import './style.scss';

const First = (props) => {

    const ownRef = useRef();
    const [refForFirst, setrefForFirst] = useState({id:'',height:0})
    const handleScroll = ()=>{
        setrefForFirst({id:ownRef.current.id,height:ownRef.current.clientHeight})
        props.myRef(refForFirst)
    }

    useEffect(()=>{
        document.addEventListener('scroll',handleScroll )
        return ()=>{document.removeEventListener('scroll',handleScroll )}
    })

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
                
    return (
        <section ref={ownRef} className = 'home' id='home'>
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