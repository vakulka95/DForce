import React from 'react';
import itseems from '../../json/itseems.json';
import './style.scss'
import technologies from '../../json/technologies.json';
import Button from '../../components/Button';

function ItSeems() {
    const color = {
        background: 'linear-gradient(264.93deg, #DB6948 -48.98%, #D4487D 100%)'
    }

    const renderLoop = () => {
        const loop = (itseems) => {
            return (<div className='container' key='container'>
                <h2 className='detail-title' key='title1'>{itseems.title1}</h2>
                <div className='intro-wrap' key={'paragraph1-wrap'} >
                    <p className='detail-text' key='paragraph1'>
                        {itseems.paragraph1}
                    </p>
                    <Button to={itseems.to} directly message={'Перейти на сайт'} >
                        <img src={'./images/fontImages/tosite.svg'} alt={'ref'}
                            key={'./images/fontImages/tosite.svg'} />
                    </Button>
                </div>

                <figure className='detail-figure' style={color} key={itseems.group1}>
                    <img className='detail-figure-img' alt={itseems.title1} src={itseems.group1}  />
                </figure>
                <div className='detail-wrap' key={`${itseems.title2}-wrap`}>
                    <h3 className='detail-sub-title' key={itseems.title2} >{itseems.title2}</h3>
                    <p className='detail-text' key={itseems.paragraph2} >
                        {itseems.paragraph2}
                    </p>
                </div>
                <figure className='detail-figure mob-group fleX' style={color} key={`${itseems.group2}-wrap`}>
                     <img className='mob-group-map' alt={itseems.title} src={itseems.group2} key={itseems.group2} />
                </figure>
                <div className='detail-wrap right' key={`${itseems.title3}-wrap`}>
                    <h3 className='detail-sub-title right-title' key={itseems.title3}>{itseems.title3}</h3>
                    <p className='detail-text right-text' key={itseems.paragraph3}>
                        {itseems.paragraph3}
                    </p>
                </div>
                <div className='detail-block-all-figures' key={`${itseems.group3}-wrap`}>
                    <figure className='detail-figure dark' key={itseems.group3}>
                     <img className='detail-figure-img big-image' alt={itseems.title} src={itseems.group3}  />
                    </figure>
                    <div className='detail-block-figures fleX' key={`${itseems.group4}-wrap`}>
                        <figure className='detail-figure dark' key={itseems.group4}>
                         <img className='detail-figure-itseems' alt={itseems.title} src={itseems.group4}  />
                        </figure>
                        <figure className='detail-figure dark' key={itseems.group5}>
                            <img className='detail-figure-itseems' alt={itseems.title} src={itseems.group5}  />
                        </figure>
                    </div>   
                </div>
                <div key='group4-wrap' className='detail-wrap'>
                    <h3 className='detail-sub-title' key={itseems.title4}>{itseems.title4}</h3>
                    <p className='detail-text' key={itseems.paragraph4}>
                        {itseems.paragraph4}
                    </p>
                </div>
                <div className='detail-block-all-figures' key={`${itseems.group6}-wrap`}>
                        <figure className='detail-figure' style={color} key={itseems.group6}>
                            <img className='detail-figure-img' alt={itseems.title6} src={itseems.group6} />
                        </figure>
                </div>
                <div className='right' key={`${itseems.title}-wrap`}>
                    <h3 className='detail-sub-title right-title' key={itseems.title5}>{itseems.title5}</h3>
                    <p className='detail-text right-text' key='paragraph4'>
                        {itseems.paragraph5}
                    </p>
                </div>
                <div className='detail-block-all-figures last' key='group-last-wrap'>

                    <figure className='detail-figure dark' key={itseems.group7}>
                        <img className='detail-figure-itseems mob-group-map' alt={itseems.title} src={itseems.group7}/>
                    </figure>                     
                     <figure className='detail-figure' style={color} key={itseems.group8}>
                        <img className='detail-figure-img' alt={itseems.title} src={itseems.group8} />
                    </figure>  
                </div>
                <div className='detail-about' key='bottom-div'>
                    <div className='icons' key={technologies}>
                    {technologies.map(icon => <img src={Object.values(icon).join('')} title={Object.keys(icon).join('')} id={Object.keys(icon).join('')} alt={Object.keys(icon).join('')} key={Object.keys(icon).join('')}/>)}
                    </div>
                    <div className='detail-wrap' key='bottom-div-wrap'>
                        <h3 className='detail-sub-title' key='bottom-title'>Використанні технології</h3>
                        <p className='detail-text ' key='bottom-text'>
                            Для реалізації кожного проекту ми добираємо найактуальніші й найефективніші технології, що відображається в позитивному результаті після релізу продукту.
                        </p>
                    </div>
                </div>
            </div>);

        };
        return itseems.map(loop);

    };
    return (
        <section className='detail'>
            { renderLoop()}
        </section>
    );
}



export default ItSeems;