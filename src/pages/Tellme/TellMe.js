import React from 'react';
import tellme from '../../json/itseems.json';

function TellMe() {
    const renderLoop = () => {
    const loop = (item) => {
        
        return (<div key = { item.title }>
                <h3>{item.title}</h3>
                <figure className = 'partner__img-wrap'>
                { item.group1.map((img)=><img alt = { item.title } src ={img} key = { img } />)}
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
    return tellme.map(loop);

};
return (
    <section>
       <div>
            { renderLoop() }
        </div>
    </section>
);
}

export default TellMe;