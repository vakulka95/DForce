const isInvalid = (key, val, /*compareVal*/) => {
    if (!val) {
        if(window.location.pathname === '/en'){
            return 'Required field';
        }else{
            return "Поле не може бути порожнім";
        }
        
    };
    switch (key) {
        case "name":
            if(val.length > 20){
                if(window.location.pathname === '/en'){
                    return 'Maximum length is 20 symbols';
                }else{
                    return 'Ваше ім я не може бути довшим за 20 символів'
                }
            }
            return null;
        case "email":
            if (!val.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
                if(window.location.pathname === '/en'){
                    return 'Invalid email format';
                }else{
                    return 'Неправильний формат електронної пошти';
                }
            }
            return null;
        case "phone":

                const onlyNum = val.replace(/\D/g, '');
    
                if (onlyNum.length !== 12) {
                    if(window.location.pathname === '/en'){
                        return 'Invalid telephone format: +38(0хх) ххх хх хх`';
                    }else{
                        return `"Невірний формат телефону": +38(0хх) ххх хх хх`;
                    }
                }
                return null;
            case"comment":
            if(val.length > 500){
                if(window.location.pathname === '/en'){
                    return 'Maximum length is 500 symbols';
                }else{
                    return 'Kоментарій не може бути довшим за 500 символів'
                }
            }
            return null;
                default:
                    return null;
        }
};

export default isInvalid;
