import React from 'react';
import './style.scss';
import SpecItem from '../../components/SpecItem/SpecItem';
import TitleOfBlock from '../../components/TitleOfBlock/TitleOfBlock';


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
                            /> 
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Specialization
