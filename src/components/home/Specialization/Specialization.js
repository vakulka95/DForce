import React, {useState,useEffect} from 'react';
import './style.scss';
import {useHistory,useLocation }from 'react-router-dom';
import SpecItem from '../../SpecItem/SpecItem';


function Specialization({specItems}) {
    let history = useHistory()
    let locate = useLocation()

    const [position,setPosition] = useState({ y: null })

    const handleMouseMove = (e)=> {
        console.log(position.y);
        setPosition({
          y: e.pageYOffset
        });
        if(position.y){
            console.log( window.pageYOffset,'cho');  
            locate.hash = '#Sheet'
            history.replace(locate.hash)
            }
    }

    window.onscroll = function() {
        let scrolled = window.pageYOffset;
        console.log( 'Позиция скрола: '+scrolled  );
    };
     const element = document.querySelector('section')
     console.log(element);
     element.onscroll= function(){
       let   intElemScrollTop = element.current.scrollTop;
        console.log('Позиция скрола у элемента: '+ intElemScrollTop)
    };

    useEffect(()=>{
        window.addEventListener('scroll', handleMouseMove)
        return ()=> window.removeEventListener('scroll', handleMouseMove)
    } ) 
    return (
        <section className='specialization main-padding' id='specialization' onScroll={handleMouseMove}>
            <div className='container'>
            <h2 className='title-of-block'>Наша спеціалізація</h2>
                <div className='spec-section'>
                    {
                    specItems.map(({ 
                        id,
                        image,
                        alt,
                        title,
                        text
                         }) => (
                            <SpecItem key={id}
                                id={id}
                                image={image}
                                alt={alt}
                                title={title}
                                text={text}

                                classItem='spec-item'
                                classImage='spec-image'
                                classTitle='spec-title sub-title'
                                classText='spec-text text'
                            /> 
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Specialization
