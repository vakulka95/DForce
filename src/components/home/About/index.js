import React from 'react';
import './style.scss';
import SpecItem from '../../../components/SpecItem/SpecItem';
import about from '../../../json/aboutItems.js';

const About = () => {
    return (
        <section className='about main-padding' id='about'>
            <div className='container'>
                <h2 className='title-of-block'>Наші цінності</h2>
                <p className='about-content text'>Ми створюємо тільки ті цифрові продукти, які приносять користь людям та допомагають компаніями бути більш ефективними. Наша команда зацікавлена у рості вашого бізнесу та довготривалій співпраці!</p>
                <div className='about-items'>{
                    about.map((item) => <div className='about-one' key={item.alt}>
                        <SpecItem
                            keys={item.id}
                            title={item.title}
                            id={item.id}
                            image={item.image}
                            alt={item.alt}
                            text={item.text}

                            classItem='value-item'
                            classImage='value-image'
                            classTitle='value-title sub-title'
                            classText='value-text text'
                        />
                    </div>
                    )}</div>
            </div>
        </section>
    )
}

export default About;