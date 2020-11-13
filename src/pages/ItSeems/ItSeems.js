import React from 'react';
import itseems from '../../json/itseems.json';
import './style.scss'
import technologies from '../../json/technologies.json';
import Button from '../../components/Button';
import ScrollToTop from '../../utils/ScrollToTop';

function ItSeems() {
    const color = {
        background: 'linear-gradient(264.93deg, #DB6948 -48.98%, #D4487D 100%)'
    }
    const renderLoop = () => {
        const loop = (itseems) => {
            return (<div className='container' key='container'>
                <h2 className='detail2-title' key='title1'>{itseems.title1}</h2>
                <div className='intro-wrap' key={'paragraph1-wrap'} >
                    <p className='detail2-text' key='paragraph1'>
                        {itseems.paragraph1}
                    </p>
                    <Button to={itseems.to} directly message={'Перейти на сайт'} >
                        <img src={'./images/fontImages/tosite.svg'} alt={'ref'}
                            key={'./images/fontImages/tosite.svg'} className='tosite' />
                    </Button>
                </div>

                <figure className='detail2-figure' style={color} key={itseems.group1}>
                    <img className='detail2-figure-img' alt={itseems.alt1} src={itseems.group1} />
                </figure>
                <div className='detail2-wrap' key={`${itseems.title2}-wrap`}>
                    <h3 className='detail2-sub-title' key={itseems.title2} >{itseems.title2}</h3>
                    <p className='detail2-text' key={itseems.paragraph2} >
                        {itseems.paragraph2}
                    </p>
                </div>
                <figure className='detail2-figure-group' style={color} key={`${itseems.group2}-wrap`}>
                    <img className='mob-group-map' alt={itseems.alt2} src={itseems.group2} key={itseems.group2} />
                </figure>
                <div className='detail2-wrap right' key={`${itseems.title3}-wrap`}>
                    <h3 className='detail2-sub-title right-title' key={itseems.title3}>{itseems.title3}</h3>
                    <p className='detail2-text right-text' key={itseems.paragraph3}>
                        {itseems.paragraph3}
                    </p>
                </div>
                <div className='detail2-block-all-figures' key={`${itseems.group3}-wrap`}>
                    <figure className='detail2-big-image dark' key={itseems.group3}>
                        <img className='detail2-figure-img' alt={itseems.alt3} src={itseems.group3} />
                    </figure>
                    <div className='detail2-block-figures fleX' key={`${itseems.group4}-wrap`}>
                        <figure className='detail2-Figure dark' key={itseems.group4}>
                            <img className='detail2-figure-itseems' alt={itseems.alt4} src={itseems.group4} />
                        </figure>
                        <figure className='detail2-Figure dark' key={itseems.group5}>
                            <img className='detail2-figure-itseems' alt={itseems.alt5} src={itseems.group5} />
                        </figure>
                    </div>
                </div>
                <div key='group4-wrap' className='detail2-wrap'>
                    <h3 className='detail2-sub-title' key={itseems.title4}>{itseems.title4}</h3>
                    <p className='detail2-text' key={itseems.paragraph4}>
                        {itseems.paragraph4}
                    </p>
                </div>
                <div className='detail2-block-all-figures' key={`${itseems.group6}-wrap`}>
                    <figure className='detail2-figure' style={color} key={itseems.group6}>
                        <img className='detail2-figure-img' alt={itseems.alt6} src={itseems.group6} />
                    </figure>
                </div>
                <div className='right' key={`${itseems.title}-wrap`}>
                    <h3 className='detail2-sub-title right-title' key={itseems.title5}>{itseems.title5}</h3>
                    <p className='detail2-text right-text' key='paragraph4'>
                        {itseems.paragraph5}
                    </p>
                </div>
                <div className='detail2-block-all-figures last' key='group-last-wrap'>

                    <figure className='detail2-figure-group dark' key={itseems.group7}>
                        <img className='detail2-figure-itseems mob-group-map' alt={itseems.alt7} src={itseems.group7} />
                    </figure>
                    <figure className='detail2-figure' style={color} key={itseems.group8}>
                        <img className='detail2-figure-img' alt={itseems.alt8} src={itseems.group8} />
                    </figure>
                </div>
                <div className='detail2-about' key='bottom-div'>
                    <div className='icons' key={technologies}>
                        <p className='icon-react' title='react'></p>
                        <p className='icon-opera' title='opera'></p>
                        <p className='icon-webpack' title='webpack'></p>
                        <p className='icon-sass' title='sass'></p>
                        <p className='icon-go' title='go'></p>
                        <p className='icon-postgre-sql' title='postgreSQL'></p>
                        <p className='icon-docker' title='docker'></p>
                        <p className='icon-figma' title='figma'></p>
                        {/* {technologies.map(icon => <img src={Object.values(icon).join('')} title={Object.keys(icon).join('')} id={Object.keys(icon).join('')} alt={Object.keys(icon).join('')} key={Object.keys(icon).join('')}/>)} */}
                    </div>
                    <div className='detail2-wrap' key='bottom-div-wrap'>
                        <h3 className='detail2-sub-title' key='bottom-title'>Використанні технології</h3>
                        <p className='detail2-text ' key='bottom-text'>
                            Для реалізації кожного проекту ми добираємо найактуальніші й найефективніші технології, що відображається в позитивному результаті після релізу продукту.
                        </p>
                    </div>
                </div>
            </div>);

        };
        return itseems.map(loop);

    };
    return (
        <ScrollToTop>
        <section className='detail2'>
            { renderLoop()}
        </section>
        </ScrollToTop>
    );
}



export default ItSeems;