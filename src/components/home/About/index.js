import React,{useState} from 'react';
import './style.scss';
import SpecItem from '../../../components/SpecItem/SpecItem';
import {useHistory,useLocation }from 'react-router-dom';
import I18n from '../../../i18n/I18n';
import { aboutItem } from '../../../json/index';


const About = () => {
    let history = useHistory()
    let locate = useLocation()

    const [position,setPosition] = useState({ y: null })

    const handleMouseMove = (e)=> {
        setPosition({
          y: e.clientY
        });
        if(position.y){ 
            locate.hash = '#about'
            history.replace(locate.hash)
            }
    }
     
    return (
        <section className='about main-padding' id='about' onMouseOver={handleMouseMove}>
            <div className='container'>
                <h2 className='title-of-block'>{I18n.t('aboutTitle')}</h2>
                <p className='about-content text'>{I18n.t('aboutDescription')}</p>
                <div className='about-items'>{
                    aboutItem.map((item) => <div className='about-one' key={item.alt}>
                        <SpecItem
                            keys={item.id}
                            title={item.title}
                            id={item.id}
                            image={item.image}
                            alt={item.alt}
                            text={item.text}

                            classItem='value-item'
                            classImage='value-image'
                            classTitle='value-title sub-title'
                            classText='value-text text'
                        />
                    </div>
                    )}</div>
            </div>
        </section>
    )
}

export default About;