import React, { useState } from 'react';
import axios from 'axios';
import './style.scss';
import PropTypes from 'prop-types';

function FormBlock({ onSuccess }) {

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        mail: '',
        comment: '',
    })

    const [errorName, setErrorName] = useState(false);
    const [errorPhone, setErrorPhone] = useState(false);
    const [errorMail, setErrorMail] = useState(false);


    const [success, setSuccess] = useState(false);


    let onChange = ({ target }) => {
        setFormData(prevState => ({
            ...prevState,
            [target.name]: target.value
        }))
    }

    let changeSuccess = () => {
        setSuccess(true);
        setTimeout(() => {
            setSuccess(false)
        }, 4000)
    }

    // let validate = () => {
        
    //     if (formData.name == null || formData.name == '') {
    //         setErrorName(true)
    //     }
    //     if (formData.phone == null || formData.phone == '') {
    //         setErrorPhone(true)
    //     }
    //     if (formData.mail == null || formData.mail == '') {
    //         setErrorMail(true)
    //     }

    //     if(errorName == true || errorPhone == true || errorMail == true){
    //         return null 
    //     }else{

    //     }}

    let handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://www.testvakulenko.fun/send.php", formData)
            .then(res => {
                console.log(res)
                console.log(res.data)
                if(res.status === 200){
                    changeSuccess()
                }
            })
            .catch(() => {
                console.log('message not send');
            })
    }

    return (
        <div className='form-block'>
            <div className='form-wrap'>
                <h3 className='form-title'>Це анонімний онлайн кожен абсолютно</h3>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label>
                            Ваше ім'я:
                            <input type='text' name='name' className={errorName ? 'form-input error' : 'form-input '} placeholder='Name' onChange={onChange} value={formData.name} />
                            {errorName && <div style={{ color: 'red', fontSize: '14px' }}><p>Заповніть поле</p></div>}
                        </label>
                    </div>
                    <div className='form-group'>
                        <label>
                            Ваш телефон:
                            <input type='text' name='phone' className={errorPhone ? 'form-input error' : 'form-input '} placeholder='+380 123 45 67' onChange={onChange} value={formData.phone} />
                            {errorPhone && <div style={{ color: 'red', fontSize: '14px' }}><p>Заповніть поле</p></div>}
                        </label>
                    </div>
                    <div className='form-group'>
                        <label>
                            Ваша пошта:
                            <input type='email' name='mail' className={errorMail ? 'form-input error' : 'form-input '} placeholder='Mail@example.com' onChange={onChange} value={formData.mail} />
                            {errorMail && <div style={{ color: 'red', fontSize: '14px' }}><p>Заповніть поле</p></div>}
                        </label>
                    </div>
                    <div className='form-group'>
                        <label>
                            Залиште свій коментар:
                            <textarea style={{ resize: 'none' }} name='comment' onChange={onChange} value={formData.comment}></textarea>
                        </label>
                    </div>
                    {/* {success &&
                        alert('message was sent')
                    } */}
                    <button type='submit'>Заказать консультацию</button>
                </form>
            </div>
        </div>
    )
}

FormBlock.propTypes = {
    onSucces: PropTypes.func
}

export default FormBlock
