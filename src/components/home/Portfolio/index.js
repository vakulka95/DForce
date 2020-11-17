import React,{useState,useEffect,useRef} from 'react';
import PortfolioItems from '../../../components/PortfolioItem/PortfolioItem';
import Button from '../../Button';
import './style.scss';
import portfolioItemsDisabled from '../../../json/portfolioItemsDisabled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Portfolio = ({myRef,portfolioItems}) => {

    const ownRef = useRef();
    const [refForPortfolio, setRefForPortfolio] = useState({id:'',height:0})
    const handleScroll = ()=>{
        setRefForPortfolio({id:ownRef.current.id,height:ownRef.current.clientHeight})
        myRef(refForPortfolio)
    }

    useEffect(()=>{
        document.addEventListener('scroll',handleScroll )
        return ()=>{document.removeEventListener('scroll',handleScroll )}
    })

    return (
        <section ref={ownRef} className='portfolio main-padding' id='portfolio'>
            <div className='container'>
            <h2 className='portfolio-title'>Наші кейси</h2>
                <div className='portfolio-list'>
                    {portfolioItems.map(({
                        id,
                        backgroundCLass,
                        description,
                        to
                    })=><PortfolioItems key={id}
                        id={id}
                        backgroundCLass={backgroundCLass}
                        description={description}
                        to={to}
                    />)
                    }

                    {portfolioItemsDisabled.map(({
                         id,
                         imageDis,
                         altDis,
                         backgroundCLassDis,
                         descriptionDis
                    })=><PortfolioItems key={id}
                        disable={true}
                        id={id}
                        backgroundCLassDis={backgroundCLassDis}
                        descriptionDis={descriptionDis}
                    />)

                    }
                    
                </div>
                <div className='button'>
                    <Button to={'/allprojects'} innerRef message={`Всі проекти`} ><FontAwesomeIcon className='icon' icon={faAngleRight} size='sm'/></Button>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;