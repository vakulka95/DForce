import React, {useState,useEffect} from 'react';
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
            locate.hash = '#'
            history.replace(locate.hash)
            }
    }

    useEffect(()=>{
        window.addEventListener('scroll', handleMouseMove)
        return ()=> window.removeEventListener('scroll', handleMouseMove)
    } ) 
    return (
        <section className = 'home' id='home' onMouseMove={handleMouseMove}>
            <div className='container'>
            <div className = 'home-wrap'>
              <h1 className = 'home-header'><span className = 'home-header-first'>Ми</span> створюємо майбутнє!</h1>
              <p className = 'home-paragraph'>Dforce - це провідна ІТ-компанія, яка створює цифрові продукти для покращення життя  та досвіду людей.Dforce - це провідна ІТ-компанія, яка створює цифрові продукти для покращення життя  та досвіду людей.</p>
            </div>
            </div>
        </section>
    )
}

export default First;