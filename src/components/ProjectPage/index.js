import React from 'react';
import './style.scss';
//import itseems from '../../json/itseems.json';

function ProjectPage({item}) {
    
    const renderLoop = () => {
        const loop = (item) => {

            return (<div className='container'>
                <h2 className='detail-sub-title' key={item.title1}>{item.title1}</h2>
                <figure className='detail-figure color' key={item.group1}>
                    <img className='detail-figure-img' alt={item.title1} src={item.group1} key={item.group1} />
                </figure>
                <div className='right' key={`${item.title2}-wrap`}>
                    <h2 className='detail-sub-title ' key={item.title2}>{item.title2}</h2>
                    <p className='detail-text' key={item.paragraph1}>
                        {item.paragraph1}
                    </p>
                </div>
                <figure className='detail-figure mob-group color flex' key={item.group2}>
                    {item.group2.map((img) => <img className='mob-group-map' alt={item.title} src={img} key={img} />)}
                    {console.log(item.group2.map((img) => <img className='mob-group-map' alt={item.title} src={img} key={img} />))}
                </figure>
                <div key={`${item}-wrap2`}>
                    <h2 className='detail-sub-title' key={item.title2}>{item.title2}</h2>
                    <p className='detail-text' key={item.paragraph2}>
                        {item.paragraph2}
                    </p>
                </div>
                <div className='detail-block-desktop-figures' key={`${item}-wrap3`}>
                    <figure className='detail-figure dark' key={item.group3}>
                        {item.group3.map((img) => <img className='detail-figure-img' alt={item.title} src={img} key={img} />)}
                    </figure>
                    <figure className='detail-figure dark' key={item.group4}>
                        {item.group4.map((img) => <img className='detail-figure-img' alt={item.title} src={img} key={img} />)}
                    </figure>
                </div>
                <div key={`${item}-wrap4`}>
                    <h2 className='detail-sub-title' key='title4'>{item.title2}</h2>
                    <p className='detail-text' key='paragraph3'>
                        {item.paragraph2}
                    </p>
                </div>
                <figure className='detail-figure color mob-group flex' key={item.group5}>
                    {item.group5.map((img) => <img className='mob-group-map' alt={item.title} src={img} key={img} />)}
                </figure>
                <div className='right'key={`${item}-wrap5`}>
                    <h2 className='detail-sub-title ' key='title5'>{item.title2}</h2>
                    <p className='detail-text' key='paragraph4'>
                        {item.paragraph1}
                    </p>
                </div>
                <div className='detail-block-figures flex' key={`${item}-wrap6`}>
                    <figure className='detail-figure dark' key={item.group6}>
                        {item.group6.map((img) => <img className='detail-figure-item' alt={item.title} src={img} key={img} />)}
                    </figure>
                    <figure className='detail-figure dark' key={item.group7}>
                        {item.group7.map((img) => <img className='detail-figure-item' alt={item.title} src={img} key={img} />)}
                    </figure>
                </div>
                <figure className='detail-figure color' key={item.group8}>
                    {item.group8.map((img) => <img className='detail-figure-img' alt={item.title} src={img} key={img} />)}
                </figure>
            </div>);
           
        };
        return item.map(loop);

    };
    return (
        <section className='detail'>
            { renderLoop()}
        </section>
    );
}


export default ProjectPage;