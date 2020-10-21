import React from 'react';
import './style.scss';
import Button from '../Button';

function ProjectPage({ item,color }) {

    const renderLoop = () => {
        const loop = (item) => {
            console.log(color);
            return (<div className='container' key={item.title1}>
                <h2 className='detail-title' key='title1'>{item.title1}</h2>
                <div className='intro-wrap'>
                    <p className='detail-text' key='paragraph2'>
                        {item.paragraph2}
                    </p>
                    <Button to={item.to} directly message={'перейти на сайт'} >
                        <img src={'./images/fontImages/tosite.svg'} alt={'ref'}
                            key={'./images/fontImages/tosite.svg'} />
                    </Button>
                </div>

                <figure className='detail-figure' style={color} key={item.group1}>
                    <img className='detail-figure-img' alt={item.title1} src={item.group1} key={item.group1} />
                </figure>
                <div className='detail-wrap' key={`${item.title2}-wrap`}>
                    <h3 className='detail-sub-title ' key={item.title2}>{item.title2}</h3>
                    <p className='detail-text ' key={item.paragraph1}>
                        {item.paragraph1}
                    </p>
                </div>
                <figure className='detail-figure mob-group fleX' style={color} key={item.group2}>
                    {item.group2.map((img) => <img className='mob-group-map' alt={item.title} src={img} key={img} />)}
                </figure>
                <div className='detail-wrap right' key='paragraph3-wrap'>
                    <h3 className='detail-sub-title right-title' key={item.title2}>{item.title2}</h3>
                    <p className='detail-text right-text' key={item.paragraph2}>
                        {item.paragraph2}
                    </p>
                </div>
                <div className='detail-block-all-figures' key='group3'>
                    <figure className='detail-figure dark' key={item.group3}>
                        {item.group3.map((img) => <img className='detail-figure-img' alt={item.title} src={img} key={img} />)}
                    </figure>
                    <div className='detail-block-figures fleX' key='group6'>
                        <figure className='detail-figure dark' key={item.group6}>
                            {item.group6.map((img) => <img className='detail-figure-item' alt={item.title} src={img} key={img} />)}
                        </figure>
                        <figure className='detail-figure dark' key={item.group7}>
                            {item.group7.map((img) => <img className='detail-figure-item' alt={item.title} src={img} key={img} />)}
                        </figure>
                    </div>   
                </div>
                <div key='group4-wrap'>
                    <h3 className='detail-sub-title' key='title4'>{item.title2}</h3>
                    <p className='detail-text' key='paragraph3'>
                        {item.paragraph2}
                    </p>
                </div>
                <div className='detail-block-all-figures' key='group1-wrap'>
                        <figure className='detail-figure' style={color} key={item.group1}>
                            <img className='detail-figure-img' alt={item.title1} src={item.group1} key={item.group1} />
                        </figure>
                    <figure className='detail-figure dark' key={item.group3}>
                        {item.group3.map((img) => <img className='detail-figure-img' alt={item.title} src={img} key={img} />)}
                    </figure>
                    <figure className='detail-figure mob-group fleX' style={color} key={item.group5}>
                        {item.group5.map((img) => <img className='mob-group-map' alt={item.title} src={img} key={img} />)}
                    </figure> 
                </div>
                {/* <figure className='detail-figure color mob-group fleX' key={item.group5}>
                    {item.group5.map((img) => <img className='mob-group-map' alt={item.title} src={img} key={img} />)}
                </figure> */}
                <div className='right' key='right-paragraph'>
                    <h3 className='detail-sub-title right-title' key='title5'>{item.title2}</h3>
                    <p className='detail-text right-text' key='paragraph4'>
                        {item.paragraph1}
                    </p>
                </div>
                <div className='detail-block-all-figures last' key='last-group'>
                    <figure className='detail-figure' style={color} key={item.group3}>
                        {item.group3.map((img) => <img className='detail-figure-img' alt={item.title} src={img} key={img} />)}
                    </figure>
                    <div className='detail-block-figures fleX' key='darkGroup'>
                        <figure className='detail-figure dark' key={item.group6}>
                            {item.group6.map((img) => <img className='detail-figure-item' alt={item.title} src={img} key={img} />)}
                        </figure>
                        <figure className='detail-figure dark' key={item.group7}>
                            {item.group7.map((img) => <img className='detail-figure-item' alt={item.title} src={img} key={img} />)}
                        </figure>
                    </div>   
                </div>
                <div className='detail-about'>
                    <div className='icons'>
                        <img src={'./images/fontImages/icon1.svg'} alt='icon'/>
                        <img src={'./images/fontImages/icon2.svg'} alt='icon'/>
                        <img src={'./images/fontImages/icon3.svg'} alt='icon'/>
                        <img src={'./images/fontImages/icon4.svg'} alt='icon'/>
                        <img src={'./images/fontImages/icon5.svg'} alt='icon'/>
                        <img src={'./images/fontImages/icon6.svg'} alt='icon'/>
                        <img src={'./images/fontImages/icon7.svg'} alt='icon'/>
                        <img src={'./images/fontImages/icon8.svg'} alt='icon'/>
                    </div>
                    <div className='detail-wrap' key={`${item.title2}-wrap`}>
                        <h3 className='detail-sub-title ' key={item.title2}>Волонтери проекту</h3>
                        <p className='detail-text ' key={item.paragraph1}>
                            {item.paragraph1}
                        </p>
                    </div>
                </div>
                {/* <div className='detail-block-figures fleX' key={`${item}-wrap6`}>
                    <figure className='detail-figure dark' key={item.group6}>
                        {item.group6.map((img) => <img className='detail-figure-item' alt={item.title} src={img} key={img} />)}
                    </figure>
                    <figure className='detail-figure dark' key={item.group7}>
                        {item.group7.map((img) => <img className='detail-figure-item' alt={item.title} src={img} key={img} />)}
                    </figure>
                </div>     */}
                {/* <figure className='detail-figure-last color' key={item.group8}>
                    {item.group8.map((img) => <img className='detail-figure-img' alt={item.title} src={img} key={img} />)}
                </figure> */}
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