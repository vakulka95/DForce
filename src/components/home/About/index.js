import React from 'react';
import './style.scss';
import SpecItem from '../../../components/SpecItem/SpecItem';
import about from '../../../json/aboutItems.js';

const About = () => {
    return (
        <section className = 'about'>
            <h2 className = 'about-title'>Наші цінності</h2>
            <p className = 'about-content'>Ми створюємо тільки ті цифрові продукти, які приносять користь людям та допомагають компаніями бути більш ефективними. Наша команда зацікавлена у рості вашого бізнесу та довготривалій співпраці!</p>
            <div className = 'about-items'>{
               about.map((item) => <div className='about-one' key={item.id}>
                <SpecItem
                 key = {item.id}
                title = {item.title}
                id = {item.id}
                image = {item.image}
                alt = {item.alt}
                text = {item.text}

                classItem='value-item'
                classImage='value-image'
                classTitle='value-title'
                classText='value-text'
                />
                </div>
               )}</div>
        </section>
    )
}

export default About;