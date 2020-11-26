import React from 'react';
// import itseem from '../../json/itseem.json';
import './style.scss'
import technologies from '../../json/technologies.json';
import Button from '../../components/Button';
import ScrollToTop from '../../utils/ScrollToTop';
import Technologies from '../../components/Technologies/Technologies';
import I18n from '../../i18n/I18n';
import { itseem } from '../../json/index';

function ItSeems() {
    const color = {
        background: 'linear-gradient(264.93deg, #DB6948 -48.98%, #D4487D 100%)'
    }
    const renderLoop = () => {
        const loop = (itseem) => {
            return (<div className='container' key='container'>
                <h2 className='detail2-title' key='title1'>{itseem.title1}</h2>
                <div className='intro-wrap' key={'paragraph1-wrap'} >
                    <p className='detail2-text' key='paragraph1'>
                        {itseem.paragraph1}
                    </p>
                    <Button to={itseem.to} directly message={I18n.t('buttonToSite')} >
                        <img src={'./images/fontImages/tosite.svg'} alt={'ref'}
                            key={'./images/fontImages/tosite.svg'} className='tosite' />
                    </Button>
                </div>

                <figure className='detail2-figure' style={color} key={itseem.group1}>
                    <img className='detail2-figure-img' alt={itseem.alt1} src={itseem.group1} />
                </figure>
                <div className='detail2-wrap' key={`${itseem.title2}-wrap`}>
                    <h3 className='detail2-sub-title' key={itseem.title2} >{itseem.title2}</h3>
                    <p className='detail2-text' key={itseem.paragraph2} >
                        {itseem.paragraph2}
                    </p>
                </div>
                <figure className='detail2-figure-group' style={color} key={`${itseem.group2}-wrap`}>
                    <img className='mob-group-map' alt={itseem.alt2} src={itseem.group2} key={itseem.group2} />
                </figure>
                <div className='detail2-wrap right' key={`${itseem.title3}-wrap`}>
                    <h3 className='detail2-sub-title right-title' key={itseem.title3}>{itseem.title3}</h3>
                    <p className='detail2-text right-text' key={itseem.paragraph3}>
                        {itseem.paragraph3}
                    </p>
                </div>
                <div className='detail2-block-all-figures' key={`${itseem.group3}-wrap`}>
                    <figure className='detail2-big-image dark' key={itseem.group3}>
                        <img className='detail2-figure-img' alt={itseem.alt3} src={itseem.group3} />
                    </figure>
                    <div className='detail2-block-figures fleX' key={`${itseem.group4}-wrap`}>
                        <figure className='detail2-Figure dark' key={itseem.group4}>
                            <img className='detail2-figure-itseem' alt={itseem.alt4} src={itseem.group4} />
                        </figure>
                        <figure className='detail2-Figure dark' key={itseem.group5}>
                            <img className='detail2-figure-itseem' alt={itseem.alt5} src={itseem.group5} />
                        </figure>
                    </div>
                </div>
                <div key='group4-wrap' className='detail2-wrap'>
                    <h3 className='detail2-sub-title' key={itseem.title4}>{itseem.title4}</h3>
                    <p className='detail2-text' key={itseem.paragraph4}>
                        {itseem.paragraph4}
                    </p>
                </div>
                <div className='detail2-block-all-figures' key={`${itseem.group6}-wrap`}>
                    <figure className='detail2-figure' style={color} key={itseem.group6}>
                        <img className='detail2-figure-img' alt={itseem.alt6} src={itseem.group6} />
                    </figure>
                </div>
                <div className='right' key={`${itseem.title}-wrap`}>
                    <h3 className='detail2-sub-title right-title' key={itseem.title5}>{itseem.title5}</h3>
                    <p className='detail2-text right-text' key='paragraph4'>
                        {itseem.paragraph5}
                    </p>
                </div>
                <div className='detail2-block-all-figures last' key='group-last-wrap'>

                    <figure className='detail2-figure-group dark' key={itseem.group7}>
                        <img className='detail2-figure-itseem mob-group-map' alt={itseem.alt7} src={itseem.group7} />
                    </figure>
                    <figure className='detail2-figure' style={color} key={itseem.group8}>
                        <img className='detail2-figure-img' alt={itseem.alt8} src={itseem.group8} />
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
                    </div>
                    <Technologies />
                </div>
            </div>);

        };
        return itseem.map(loop);

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