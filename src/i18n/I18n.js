import I18n from 'i18n-js';

import en from './locales/en';
import uk from './locales/uk';
import { LANG } from '../utils/constants';

const locales = LANG;

if(!locales){
    window.localStorage.setItem('lg', 'uk');
}

switch(locales){
    case 'en':
        I18n.locale = 'en'
        I18n.localeCode = 'en';
        break;
    default:
        I18n.locale = 'uk-UA';
        I18n.localeCode = 'uk';
}

I18n.fallbacks = true;
I18n.translations = {
    en,
    uk,
};


export default I18n