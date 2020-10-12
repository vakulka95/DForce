import React from 'react';
import './style.scss';

import SpecItem from '../../SpecItem/SpecItem';
// import TitleOfBlock from '../../TitleOfBlock/TitleOfBlock';


function Specialization({specItems}) {
    return (
        <section className='specialization main-padding' id='specialization'>
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
