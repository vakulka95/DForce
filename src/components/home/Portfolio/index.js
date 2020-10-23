import React,{useState,useEffect} from 'react';
import {useHistory,useLocation }from 'react-router-dom';
import PortfolioItem from '../../../components/PortfolioItem/PortfolioItem';
import Button from '../../Button';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Portfolio = ({portfolioItems}) => {
    let history = useHistory()
    let locate = useLocation()

    const [position,setPosition] = useState({ y: null })

    const handleMouseMove = (e)=> {
        setPosition({
          y: e.clientY
        });
        if(position.y){ 
            locate.hash = '#portfolio'
            history.replace(locate.hash)
            }
    }

    useEffect(()=>{
        window.addEventListener('mouseOver', handleMouseMove)
        return ()=> window.removeEventListener('mouseOver', handleMouseMove)
    } ) 
    return (
        <section className='portfolio main-padding' id='portfolio' onMouseOver={handleMouseMove}>
            <div className='container'>
            <h2 className='portfolio-title'>Наші кейси</h2>
                <div className='portfolio-list'>
                    {portfolioItems.map(({
                        id,
                        image, 
                        backgroundCLass,
                        alt,
                        description,
                        to
                    })=><PortfolioItem key={id}
                        id={id}
                        image={image}
                        backgroundCLass={backgroundCLass}
                        alt={alt}
                        description={description}
                        to={to}
                    />)
                    }
                    
                </div>
                <div className='button'>
                    <Button to={'/allprojects'} innerRef message={`всі проекти`} ><FontAwesomeIcon className='icon' icon={faAngleRight} size='lg'/></Button>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;