import React from 'react';
import tellme from '../../json/tellme.json';
import './style.scss'
import technologies from '../../json/technologies.json';
import Button from '../../components/Button';

function TellMe() {
    
const color = {
    backgroundColor:'#329AE5'
}

    const renderLoop = () => {
        const loop = (tellme) => {
            return (<div className='container' key={tellme.title1}>
                <h2 className='detail-title' key='title1'>{tellme.title1}</h2>
                <div className='intro-wrap'>
                    <p className='detail-text' key='paragraph1'>
                        {tellme.paragraph1}
                    </p>
                    <Button to={tellme.to} directly message={'перейти на сайт'} >
                        <img src={'./images/fontImages/tosite.svg'} alt={'ref'}
                            key={'./images/fontImages/tosite.svg'} />
                    </Button>
                </div>

                <figure className='detail-figure' style={color} key={tellme.group1}>
                    <img className='detail-figure-img' alt={tellme.title1} src={tellme.group1} key={tellme.group1} />
                </figure>
                <div className='detail-wrap' key={`${tellme.title2}-wrap`}>
                    <h3 className='detail-sub-title ' key={tellme.title2}>{tellme.title2}</h3>
                    <p className='detail-text ' key={tellme.paragraph2}>
                        {tellme.paragraph2}
                    </p>
                </div>
                <figure className='detail-figure mob-group fleX' style={color} key={tellme.group2}>
                     <img className='mob-group-map' alt={tellme.title} src={tellme.group2} key={tellme.group2} />
                </figure>
                <div className='detail-wrap right' key='paragraph3-wrap'>
                    <h3 className='detail-sub-title right-title' key={tellme.title3}>{tellme.title3}</h3>
                   <p className='detail-text right-text' key={tellme.paragraph3}>
                        {tellme.paragraph3}
                    </p>
                </div>
                <div className='detail-block-all-figures' key='group3'>
                    <figure className='detail-figure dark' key={tellme.group3}>
                     <img className='detail-figure-img' alt={tellme.title} src={tellme.group3} key={tellme.group3} />
                    </figure>
                    <div className='detail-block-figures fleX' key='group6'>
                        <figure className='detail-figure dark' key={tellme.group4}>
                         <img className='detail-figure-tellme' alt={tellme.title} src={tellme.group4} key={tellme.group4} />
                        </figure>
                        <figure className='detail-figure dark' key={tellme.group5}>
                            <img className='detail-figure-tellme' alt={tellme.title} src={tellme.group5} key={tellme.group5} />
                        </figure>
                    </div>   
                </div>
                <div key='group4-wrap' className='detail-wrap'>
                    <h3 className='detail-sub-title' key='title4'>{tellme.title4}</h3>
                    <p className='detail-text' key='paragraph4'>
                        {tellme.paragraph4}
                    </p>
                </div>
                <div className='detail-block-all-figures' key='group1-wrap'>
                        <figure className='detail-figure' style={color} key={tellme.group6}>
                            <img className='detail-figure-img' alt={tellme.title6} src={tellme.group6} key={tellme.group6} />
                        </figure>
                    <figure className='detail-figure dark' key={tellme.group7}>
                        <img className='detail-figure-img' alt={tellme.title} src={tellme.group7} key={tellme.group7} />
                    </figure>
                    <figure className='detail-figure mob-group fleX' style={color} key={tellme.group8}>
                        <img className='mob-group-map' alt={tellme.title} src={tellme.group8} key={tellme.group8} />
                    </figure> 
                </div>
                <div className='right' key='right-paragraph'>
                    <h3 className='detail-sub-title right-title' key='title5'>{tellme.title5}</h3>
                    <p className='detail-text right-text' key='paragraph4'>
                        {tellme.paragraph5}
                    </p>
                </div>
                <div className='detail-block-all-figures last' key='last-group'>
                    <div className='detail-block-figures fleX' key='darkGroup'>
                        <figure className='detail-figure dark' key={tellme.group10}>
                            <img className='detail-figure-tellme' alt={tellme.title} src={tellme.group10} key={tellme.group10} />
                        </figure>
                        <figure className='detail-figure dark' key={tellme.group11}>
                            <img className='detail-figure-tellme' alt={tellme.title} src={tellme.group11} key={tellme.group11} />
                        </figure>
                    </div>  
                     <figure className='detail-figure' style={color} key={tellme.group9}>
                         <img className='detail-figure-img' alt={tellme.title} src={tellme.group9} key={tellme.group9} />
                    </figure> 
                </div>
                <div className='detail-about'>
                    <div className='icons'>
                    {technologies.map(icon => <img src={Object.values(icon).join('')} title={Object.keys(icon).join('')} alt={Object.keys(icon).join('')} key={Object.keys(icon).join('')}/>)}
                    </div>
                    <div className='detail-wrap' key={`${tellme.title2}-wrap`}>
                        <h3 className='detail-sub-title ' key={tellme.title2}>Використанні технології</h3>
                        <p className='detail-text ' key={tellme.paragraph1}>
                            Для реалізації кожного проекту ми підбираємо найбільш актуальні та ефективні
                            технології, що дає позитивний результат після релізу продукту
                        </p>
                    </div>
                </div>
            </div>);

        };
        return tellme.map(loop);

    };
    return (
        <section className='detail'>
            { renderLoop()}
        </section>
    );
}

export default TellMe;

