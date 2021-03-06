import React from 'react';
import './style.scss';
import SpecItem from '../../SpecItem/SpecItem';
import useHeight from '../../../utils/useHeight';


import I18n from '../../../i18n/I18n';
import { specItem } from '../../../json/index';

function Specialization({specItems,collectHeight}) {

    const [rect, ref] = useHeight()
    const block = {id:'specialization', height:rect}
    
        if(rect){
        collectHeight(block)
    }

    return (
        <section ref={ref} className='specialization main-padding'  id='specialization'>
            <div className='container'>
            <h2 className='title-of-block'>{I18n.t('specTitle')}</h2>
                <div className='spec-section'>
                    {
                    specItem.map(({ 
                        id,
                        image,
                        alt,
                        title,
                        text
                         }) => (
                            <SpecItem key={id}
                                id={id}
                                image={image}
                                alt={alt}
                                title={title}
                                text={text}

                                classItem='spec-item'
                                classImage='spec-image'
                                classTitle='spec-title sub-title'
                                classText='spec-text text'
                            /> 
                        ))
                    }
                </div>
            </div>
        </section>
    )
}


export default Specialization
