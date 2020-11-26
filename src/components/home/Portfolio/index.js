import React,{useState} from 'react';
import {useHistory,useLocation }from 'react-router-dom';
import PortfolioItems from '../../../components/PortfolioItem/PortfolioItem';
import Button from '../../Button';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import I18n from '../../../i18n/I18n';
import { portfolioItem, portfolioItemDisabled } from '../../../json/index';
import { URL_LANG } from '../../../utils/constants';
const Portfolio = () => {
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

    return (
        <section className='portfolio main-padding' id='portfolio' onMouseOver={handleMouseMove}>
            <div className='container'>
            <h2 className='portfolio-title'>{I18n.t('portfolioTitle')}</h2>
                <div className='portfolio-list'>
                    {portfolioItem.map(({
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

                    {portfolioItemDisabled.map(({
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
                    <Button to={`${URL_LANG}/allprojects`} innerRef message={I18n.t('buttonAllProjects')} ><FontAwesomeIcon className='icon' icon={faAngleRight} size='sm'/></Button>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;