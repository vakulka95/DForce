const pathname = window.location.pathname;

window.localStorage.setItem('lg', pathname.indexOf('/en') !== -1 ? 'en' : 'uk'); 

export const LANG = (() => window.localStorage.getItem('lg'))();
export const URL_LANG = LANG === 'uk' ? '' : '/en';