const pathname = window.location.pathname;

if(pathname.indexOf('/en') !== -1 ){
    window.localStorage.setItem('lg', 'en')
}else if(pathname.indexOf('/ru') !== -1 ){
    window.localStorage.setItem('lg', 'ru')
}else{
    window.localStorage.setItem('lg', 'uk')
}

// window.localStorage.setItem('lg', pathname.indexOf('/en') !== -1 ? 'en' : 'uk'); 

export const LANG = (() => window.localStorage.getItem('lg'))();
export let URL_LANG;

if(LANG === 'en'){
    URL_LANG = '/en';
    console.log()
}else if(LANG === 'ru'){
    URL_LANG = '/ru';
}else{
    URL_LANG = '';
}

console.log(URL_LANG)

// if(LANG === 'en'){
//     export let URL_LANG = '/en';
// }else if(LANG === 'ru'){
//     export let URL_LANG = '/ru';
// }else if(LANG === 'uk'){
//     export let  URL_LANG = '';
// }