const isInvalid = (key, val, /*compareVal*/) => {
    if (!val) {
        return "Поле не може бути порожнім"
    };
    switch (key) {
        case "name":
            if(val.length > 20){
                return 'Ваше ім я не може бути довшим за 20 символів'
            }
            return null;
        case "email":
            if (!val.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
                return 'Неправильний формат електронної пошти';
            }
            return null;
        case "phone":
                const onlyNum = val.replace(/\D/g, '');
    
                if (onlyNum.length !== 12) {
                    return `"Невірний формат телефону": +38(0хх) ххх хх хх`;
                }
                return null;
            case"comment":
            if(val.length > 20){
                return 'Kоментарій не може бути довшим за 20 символів'
            }
            return null;
                default:
                    return null;
        }
};

export default isInvalid;
