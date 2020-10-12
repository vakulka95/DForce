import React from 'react';
import ForCustomer from '../../components/home/ForCustomer';
import itseems from '../../json/itseems.json';

function ItSeems() {
    const renderLoop = () => {
        const loop = (item) => {

            return (<div className='container' key={item.title}>

                <h2 className='title-of-block'>{item.title1}</h2>
                <figure className='case-image itseems-background padding-cases'>
                    <img alt='image' src={item.group1} key={item.group1} />
                </figure>
                <div className='right'>
                    <h2 className='title-of-block '>{item.title2}</h2>
                    <p className='text'>
                        {item.paragraph1}
                    </p>
                </div>
                <figure className='case-image itseems-background padding-cases'>
                    {item.group2.map((img) => <img alt={item.title} src={img} key={img} />)}
                </figure>
                <div>
                    <h2 className='title-of-block'>{item.title2}</h2>
                    <p className='text'>
                        {item.paragraph2}
                    </p>
                </div>
                <figure className='case-image indifferent-background padding-cases'>
                    {item.group3.map((img) => <img alt={item.title} src={img} key={img} />)}
                </figure>
                <figure className='case-image indifferent-background padding-cases'>
                    {item.group4.map((img) => <img alt={item.title} src={img} key={img} />)}
                </figure>
                <div>
                    <h2 className='title-of-block'>{item.title2}</h2>
                    <p className='text'>
                        {item.paragraph2}
                    </p>
                </div>
                <figure className='case-image itseems-background padding-cases'>
                    {item.group5.map((img) => <img alt={item.title} src={img} key={img} />)}
                </figure>
                <div className='right'>
                    <h2 className='title-of-block '>{item.title2}</h2>
                    <p className='text'>
                        {item.paragraph1}
                    </p>
                </div>
                <div className='flex'>
                    <figure className='case-image indifferent-background padding-cases'>
                        {item.group6.map((img) => <img alt={item.title} src={img} key={img} />)}
                    </figure>
                    <figure className='case-image indifferent-background padding-cases'>
                        {item.group7.map((img) => <img alt={item.title} src={img} key={img} />)}
                    </figure>
                </div>
                <figure className='case-image itseems-background padding-cases'>
                    {item.group8.map((img) => <img alt={item.title} src={img} key={img} />)}
                </figure>
                
                 <ForCustomer /> 

            </div>);

        };
        return itseems.map(loop);

    };
    return (
        <section className='product-page main-padding'>
            { renderLoop()}
        </section>
    );
}


export default ItSeems;