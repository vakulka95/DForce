import React from 'react';
import './style.scss';
import I18n from '../../i18n/I18n';

const NotFound = () => {

    return (
        <section className='notFound'>
            <div className='container'>
            <div className='notFound-title'>
                <h2>404</h2>
            </div>
            <h3>{I18n.t('pageNotFound')}</h3>
            </div>
        </section>
    )
}
export default NotFound;