import React,{useState,useRef,useEffect} from 'react';
import './style.scss';
import SpecItem from '../../../components/SpecItem/SpecItem';
import about from '../../../json/aboutItems.js';
import {useHistory,useLocation }from 'react-router-dom';

const About = (props) => {
    const ownRef = useRef();
    const [refForAbout, setrefForAbout] = useState({id:'',height:0})
    const handleScroll = ()=>{
        setrefForAbout({id:ownRef.current.id,height:ownRef.current.clientHeight})
        props.myRef(refForAbout)
    }

    useEffect(()=>{
        document.addEventListener('scroll',handleScroll )
        return ()=>{document.removeEventListener('scroll',handleScroll )}
    })
    
    //console.log(refForHeight);
    
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
        <section ref={ownRef}  className='about main-padding' id='about' onMouseOver={handleMouseMove}>
            <div className='container'>
                <h2 className='title-of-block'>Наші цінності</h2>
                <p className='about-content text'>Ми створюємо тільки ті цифрові продукти, які приносять користь людям і допомагають компаніями ставати ефективнішими. Наша команда зацікавлена в розвитку вашого бізнесу й довготривалій співпраці!</p>
                <div className='about-items'>{
                    about.map((item) => <div className='about-one' key={item.alt}>
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