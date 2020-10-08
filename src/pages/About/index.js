import React from 'react';
import './style.scss';
import SpecItem from '../../components/SpecItem/SpecItem';
import about from '../../json/aboutItems.json';

const About = () => {
    console.log(about.map((item)=>item.image))
    return (
        <section className = 'about'>
            <h2 className = 'about-title'>Наші цінності</h2>
            <p className = 'about-content'>Ми створюємо тільки ті цифрові продукти, які приносять користь людям та допомагають компаніями бути більш ефективними. Наша команда зацікавлена у рості вашого бізнесу та довготривалій співпраці!</p>
            <div className = 'about-items'>{
               about.map((item) => <div className='about-items-one'>
                <SpecItem
                 key = {item.id}
                title = {item.title}
                id = {item.id}
                image = {item.image}
                alt = {item.alt}
                text = {item.text}
                /></div>
               )}</div>
        </section>
    )
}

export default About;