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
          y: e.clientY
        });
        if(position.y){
            console.log(locate, window.pageYOffset,'cho');  
            locate.hash = '#Sheet'
            history.replace(locate.hash)
            }
    }

    useEffect(()=>{
        window.addEventListener('scroll', handleMouseMove)
        return ()=> window.removeEventListener('scroll', handleMouseMove)
    } ) 
    return (
        <section className='specialization main-padding' id='specialization' onMouseEnter={handleMouseMove}>
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
