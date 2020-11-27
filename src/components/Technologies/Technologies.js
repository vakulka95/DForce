import React from 'react';
import './style.scss';
import I18n from '../../i18n/I18n';


function Technologies() {
    return (
        <div className='detail-tech-wrap' key='bottom-div-wrap'>
            <h3 className='detail-tech-sub-title' key='bottom-title'>{I18n.t('technologiesTitle')}</h3>
            <p className='detail-tech-text ' key='bottom-text'>{I18n.t('technologiesDescription')}</p>
        </div>
    )
}

export default Technologies
