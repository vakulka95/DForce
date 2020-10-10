import React from 'react';
import './style.scss';
import SpecItem from '../../SpecItem/SpecItem';
import TitleOfBlock from '../../TitleOfBlock/TitleOfBlock';


function Specialization({specItems}) {
    return (
        <section className='specialization'>
            <div className='container'>
                <TitleOfBlock title='Наша Спеціалізація'/>
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
                                classTitle='spec-title'
                                classText='spec-text'
                            /> 
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Specialization
