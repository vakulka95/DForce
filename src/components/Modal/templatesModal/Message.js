import React from 'react';
import './style.scss';
import I18n from '../../../i18n/I18n';

const Message = () => {
    return (
        <>
            <p className = 'templatesModal__content-text'>{I18n.t('modalMessageError')}</p>
        </>
    );
};

export default Message;
