import React, {useState,useEffect,useRef} from 'react';
import './style.scss';
import {useHistory,useLocation }from 'react-router-dom';
import SpecItem from '../../SpecItem/SpecItem';


function Specialization({myRef,specItems}) {
    const ownRef = useRef();
    const [refForHeight, setRefForHeight] = useState({id:'',height:0})
    const handleScroll = ()=>{
        setRefForHeight({id:ownRef.current.id,height:ownRef.current.clientHeight})
        myRef(refForHeight)
    }

    useEffect(()=>{
        document.addEventListener('scroll',handleScroll )
        return ()=>{document.removeEventListener('scroll',handleScroll )}
    })
    
   // console.log(refForHeight);
    let history = useHistory(),
     locate = useLocation();
     //myRef = React.createRef();
    //  myRefHeight = myRef.current.offsetHeight,
    //  myRefWidth = myRef.current.offsetTop;

    // const funcRef = () =>{
    //     console.log(myRef.current.offsetHeight);
    //     console.log(myRef.current.offsetTop);
    // }

    const [position,setPosition] = useState({ y: null })

    const handleMouseMove = (e)=> {
        // console.log(myRef.current.offsetHeight);
        // console.log(myRef.current.offsetTop);
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
        <section className='specialization main-padding' ref={ownRef} id='specialization' onMouseOver={handleMouseMove}>
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
