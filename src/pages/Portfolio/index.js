import React from 'react';
import PortfolioItem from '../../components/PortfolioItem/PortfolioItem';
import './style.scss';

const Portfolio = ({portfolioItems}) => {
    return (
        <section className='portfolio main-padding'>
            <div className='container'>
            <h2 className='title-of-block'>Наші кейси</h2>
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
            </div>
        </section>
    )
}

export default Portfolio;