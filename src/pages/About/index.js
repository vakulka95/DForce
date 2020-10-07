import React from 'react';
import './style.scss';
import SpecItem from '../../components/SpecItem/SpecItem';
import about from '../../json/aboutItems.json';

const About = () => {
    console.log(about)
    return (
        <section className = 'about'>
            <h2>Наші цінності</h2>
            <p>Ми створюємо тільки ті цифрові продукти, які приносять користь людям та допомагають компаніями бути більш ефективними. Наша команда зацікавлена у рості вашого бізнесу та довготривалій співпраці!</p>
            <div>{
               about.map((item) => 
                <SpecItem key = {item.id}
                title = {item.title}
                id = {item.id}
                image = {item.image}
                alt = {item.alt}
                text = {item.text}
                />
               ) 
                
                }

            </div>
        </section>
    )
}

export default About;