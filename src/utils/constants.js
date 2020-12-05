const pathname = window.location.pathname;


if(pathname.indexOf('/en') !== -1){
    window.localStorage.setItem('lg', 'en')
}else if(pathname.indexOf('/ru') !== -1){
    window.localStorage.setItem('lg', 'ru')
}else{
    window.localStorage.setItem('lg', 'uk')

}


// window.localStorage.setItem('lg', pathname.indexOf('/en') !== -1 ? 'en' : 'uk'); 

export const LANG = (() => window.localStorage.getItem('lg'))();
// export const URL_LANG = LANG === 'uk' ? '' : '/en';

let URL_LANG;

if(LANG === 'en'){
   URL_LANG = '/en'
}else if(LANG === 'ru'){
    URL_LANG = '/ru'
}else{
    URL_LANG = ''
}

export { URL_LANG }


