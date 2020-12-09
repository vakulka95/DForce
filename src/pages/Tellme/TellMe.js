import React from 'react';
// import tellme from '../../json/tellme.json';
import './style.scss'
import Button from '../../components/Button';
// import ScrollToTop from '../../utils/ScrollToTop';
import Technologies from '../../components/Technologies/Technologies';
import I18n from '../../i18n/I18n';
import { telme } from '../../json/index';

function TellMe() {
    
const color = {
    backgroundColor:'#329AE5'
}

    const renderLoop = () => {
        const loop = (telme) => {
            return (<div className='container' key={telme.title1}>
                <h2 className='detail-title' key='title1'>{telme.title1}</h2>
                <div className='intro-wrap'>
                    <p className='detail-text' key='paragraph1'>
                        {telme.paragraph1}
                    </p>
                    <Button to={telme.to} directly message={I18n.t('buttonToSite')} >
                        <img src={'./images/fontImages/tosite.svg'} alt={'ref'}
                            key={'./images/fontImages/tosite.svg'} className='tosite'/>
                    </Button>
                </div>

                <figure className='detail-figure' style={color} key={telme.group1}>
                    <img className='detail-figure-img' alt={telme.title1} src={telme.group1} key={telme.group1} />
                </figure>
                <div className='detail-wrap' key={`${telme.title2}-wrap`}>
                    <h3 className='detail-sub-title ' key={telme.title2}>{telme.title2}</h3>
                    <p className='detail-text ' key={telme.paragraph2}>
                        {telme.paragraph2}
                    </p>
                </div>
                <figure className='detail-figure-group' style={color} key={telme.group2}>
                     <img className='mob-group-map' alt={`${telme.title2} є визначальним. TellMe-DForce`} src={telme.group2} key={telme.group2} />
                </figure>
                <div className='detail-wrap right' key='paragraph3-wrap'>
                    <h3 className='detail-sub-title right-title' key={telme.title3}>{telme.title3}</h3>
                   <p className='detail-text right-text' key={telme.paragraph3}>
                        {telme.paragraph3}
                    </p>
                </div>
                <div className='detail-block-all-figures' key='group3'>
                    <figure className='detail-figure dark' key={telme.group3}>
                     <img className='detail-figure-img' alt={`${telme.title3} TellMe-DForce`} src={telme.group3} key={telme.group3} />
                    </figure>
                    <div className='detail-block-figures fleX' key='group6'>
                        <figure className='detail-Figure dark' key={telme.group4}>
                         <img className='detail-figure-tellme' alt={`${telme.title3} mobile version TellMe-DForce`} src={telme.group4} key={telme.group4} />
                        </figure>
                        <figure className='detail-Figure dark' key={telme.group5}>
                            <img className='detail-figure-tellme' alt={`${telme.title3} mobile version TellMe-DForce`} src={telme.group5} key={telme.group5} />
                        </figure>
                    </div>   
                </div>
                <div key='group4-wrap' className='detail-wrap'>
                    <h3 className='detail-sub-title' key='title4'>{telme.title4}</h3>
                    <p className='detail-text' key='paragraph4'>
                        {telme.paragraph4}
                    </p>
                </div>
                <div className='detail-block-all-figures' key='group1-wrap'>
                        <figure className='detail-figure' style={color} key={telme.group6}>
                            <img className='detail-figure-img' alt={`${telme.title4} TellMe-DForce`} src={telme.group6} key={telme.group6} />
                        </figure>
                    <figure className='detail-figure dark' key={telme.group7}>
                        <img className='detail-figure-img' alt={`${telme.title4} TellMe-DForce`} src={telme.group7} key={telme.group7} />
                    </figure>
                    <figure className='detail-figure-group' style={color} key={telme.group8}>
                        <img className='mob-group-map' alt={`${telme.title4} mobile version TellMe-DForce`} src={telme.group8} key={telme.group8} />
                    </figure> 
                </div>
                <div className='right' key='right-paragraph'>
                    <h3 className='detail-sub-title right-title' key='title5'>{telme.title5}</h3>
                    <p className='detail-text right-text' key='paragraph4'>
                        {telme.paragraph5}
                    </p>
                </div>
                <div className='detail-block-all-figures last' key='last-group'>
                    <div className='detail-block-figures fleX' key='darkGroup'>
                        <figure className='detail-Figure dark' key={telme.group10}>
                            <img className='detail-figure-tellme' alt={`${telme.title5} mobile version TellMe-DForce`} src={telme.group10} key={telme.group10} />
                        </figure>
                        <figure className='detail-Figure dark' key={telme.group11}>
                            <img className='detail-figure-tellme' alt={`${telme.title5} mobile version TellMe-DForce`} src={telme.group11} key={telme.group11} />
                        </figure>
                    </div>  
                     <figure className='detail-figure' style={color} key={telme.group9}>
                         <img className='detail-figure-img' alt={`${telme.title5} TellMe-DForce`} src={telme.group9} key={telme.group9} />
                    </figure> 
                </div>
                <div className='detail-about'>
                        <div className='icons '>
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
                        <Technologies />
                </div>
            </div>);

        };
        return telme.map(loop);

    };
    return (
        // <ScrollToTop>
        <section className='detail'>
            { renderLoop()}
        </section>
        // </ScrollToTop>
    );
}

export default TellMe;

