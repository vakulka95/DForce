import React from 'react';

import PortfolioItem from '../../PortfolioItem/PortfolioItem';
import Button from '../../Button'
import './style.scss';

const Portfolio = ({portfolioItems}) => {
    return (
        <section className='portfolio main-padding' id='portfolio'>
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
              <Button to={'/allprojects'} message={'подивитися всі проекти'} />
            </div>
        </section>
    )
}

export default Portfolio;