import React from 'react';
import itseems from '../../json/itseems.json';

function ItSeems() {
    const renderLoop = () => {
    const loop = (item) => {
        
        return (<div key = { item.title }>
            
                <h2 className='title-of-block'>{item.title}</h2>
                <figure className = 'case-image itseems-background padding-cases'>
                    <img alt = 'image' src ={item.group1} key = { item.group1 } />
                </figure>
                <div>
                    <p>
                        { item.paragraph1 }
                    </p>
                </div>
                <figure className = 'partner__img-wrap'>
                { item.group2.map((img)=><img alt = { item.title } src ={img} key = { img } />)}
                </figure>
                <div>
                    <p>
                        { item.paragraph2 }
                    </p>
                </div>   <figure className = 'partner__img-wrap'>
                { item.group3.map((img)=><img alt = { item.title } src ={img} key = { img } />)}
                </figure>
                <div>
                    <p>
                        { item.paragraph3 }
                    </p>
                </div>
                
        </div>);
    
    };
    return itseems.map(loop);

};
return (
    <section className='product-page main-padding'>
       <div className='container'>
            { renderLoop() }
        </div>
    </section>
);
}


export default ItSeems;