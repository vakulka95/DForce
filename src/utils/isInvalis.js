const isInvalid = (key, val, /*compareVal*/) => {
    if (!val) {
        return "Поле не може бути порожнім"
    };
    switch (key) {

        case "email":
            if (!val.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
                return 'Неправильний формат електронної пошти';
            }
            return null;
        case "phone":

            const onlyNum = val.replace(/\D/g, '');

            if (onlyNum.length !== 10) {
                return `"Неправильний формат телефону": (ххх) ххх хх хх`;
            }
            return null;
        default:
            return null;
    }
};

export default isInvalid;
