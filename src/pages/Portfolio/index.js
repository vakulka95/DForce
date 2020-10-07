import React from 'react';
import PortfolioItem from '../../components/PortfolioItem/PortfolioItem';
import TitleOfBlock from '../../components/TitleOfBlock/TitleOfBlock';
import './style.scss';

const Portfolio = ({portfolioItems}) => {
    return (
        <section className='portfolio'>
            <div className='portfolio-wrap'>
                <TitleOfBlock title='Наші кейси' />
                <div className='portfolio-list'>
                    {portfolioItems.map(({
                        id,
                        image, 
                        alt,
                        description 
                    })=><PortfolioItem key={id}
                        id={id}
                        image={image}
                        alt={alt}
                        description={description}

                    />)
                    }
                    
                </div>
            </div>
        </section>
    )
}

export default Portfolio;