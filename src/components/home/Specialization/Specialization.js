import React, {useState,useEffect} from 'react';
import './style.scss';
import {useHistory,useLocation }from 'react-router-dom';
import SpecItem from '../../SpecItem/SpecItem';
import I18n from '../../../i18n/I18n';
import { specItem } from '../../../json/index';
function Specialization() {
    let history = useHistory()
    let locate = useLocation()


    const [position,setPosition] = useState({ y: null })

    const handleMouseMove = (e)=> {
        setPosition({
          y: e.clientY
        });
        if(position.y){ 
            locate.hash = '#specialization'
            history.replace(locate.hash)
            }
    }

    useEffect(()=>{
        window.addEventListener('mouseOver', handleMouseMove)
        return ()=> window.removeEventListener('mouseOver', handleMouseMove)
    } ) 
    return (
        <section className='specialization main-padding' id='specialization' onMouseOver={handleMouseMove}>
            <div className='container'>
            <h2 className='title-of-block'>{I18n.t('specTitle')}</h2>
                <div className='spec-section'>
                    {
                    specItem.map(({ 
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
