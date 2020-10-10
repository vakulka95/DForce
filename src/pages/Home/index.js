import React from 'react';
import './style.scss';

const Home = () => {
    return (
        <section className = 'home'>
            <div className = 'container'>
                <div className='introduce'>
                    <h1 className = 'home-header'><span className = 'home-header-first'>Ми</span> створюємо майбутнє!</h1>
                    <p className = 'home-paragraph text'>Dforce - це провідна ІТ-компанія, яка створює цифрові продукти для покращення життя  та досвіду людей.Dforce - це провідна ІТ-компанія, яка створює цифрові продукти для покращення життя  та досвіду людей.</p>
              </div>
              <div>
                  <img src='images/Home.svg' alt='home'/>
              </div>
            </div>
        </section>
    )
}

export default Home;