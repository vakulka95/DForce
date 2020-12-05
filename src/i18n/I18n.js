import I18n from 'i18n-js';

import en from './locales/en';
import uk from './locales/uk';
import ru from './locales/ru';

import { LANG } from '../utils/constants';

const locales = LANG;

if(!locales){
    window.localStorage.setItem('lg', 'uk', 'ru');
}

switch(locales){
    case 'en':
        I18n.locale = 'en'
        I18n.localeCode = 'en';
        break;
    case 'ru':
        I18n.locale = 'ru'
        I18n.localeCode = 'ru';
        break;       
    default:
        I18n.locale = 'uk-UA';
        I18n.localeCode = 'uk';
}

I18n.fallbacks = true;
I18n.translations = {
    en,
    uk,
    ru,
};


export default I18n