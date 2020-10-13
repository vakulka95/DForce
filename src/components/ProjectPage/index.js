import React from 'react';
//import itseems from '../../json/itseems.json';

function ProjectPage({item}) {
    console.log(item)
    const renderLoop = () => {
        const loop = (item) => {

            return (<div className='container' key={item.title}>

                <h2 className='detail-sub-title'>{item.title1}</h2>
                <figure className='detail-figure color'>
                    <img alt='image' src={item.group1} key={item.group1} />
                </figure>
                <div className='right'>
                    <h2 className='detail-sub-title '>{item.title2}</h2>
                    <p className='detail-text'>
                        {item.paragraph1}
                    </p>
                </div>
                <figure className='detail-figure color flex'>
                    {item.group2.map((img) => <img alt={item.title} src={img} key={img} />)}
                </figure>
                <div>
                    <h2 className='detail-sub-title'>{item.title2}</h2>
                    <p className='detail-text'>
                        {item.paragraph2}
                    </p>
                </div>
                <div className='detail-block-desktop-figures'>
                    <figure className='detail-figure dark'>
                        {item.group3.map((img) => <img alt={item.title} src={img} key={img} />)}
                    </figure>
                    <figure className='detail-figure dark'>
                        {item.group4.map((img) => <img alt={item.title} src={img} key={img} />)}
                    </figure>
                </div>
                <div>
                    <h2 className='detail-sub-title'>{item.title2}</h2>
                    <p className='detail-text'>
                        {item.paragraph2}
                    </p>
                </div>
                <figure className='detail-figure color flex'>
                    {item.group5.map((img) => <img alt={item.title} src={img} key={img} />)}
                </figure>
                <div className='right'>
                    <h2 className='detail-sub-title '>{item.title2}</h2>
                    <p className='detail-text'>
                        {item.paragraph1}
                    </p>
                </div>
                <div className='detail-block-figures flex'>
                    <figure className='detail-figure dark'>
                        {item.group6.map((img) => <img alt={item.title} src={img} key={img} />)}
                    </figure>
                    <figure className='detail-figure dark'>
                        {item.group7.map((img) => <img alt={item.title} src={img} key={img} />)}
                    </figure>
                </div>
                <figure className='detail-figure color'>
                    {item.group8.map((img) => <img alt={item.title} src={img} key={img} />)}
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