import React, { useState } from 'react';
import axios from 'axios';
import './style.scss';
import PropTypes from 'prop-types';
import Button from '../Button';
import isInvalid from '../../utils/isInvalis';

function FormBlock({ onSuccess }) {

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        comment: '',
        nameInvalid:null,
        emailInvalid:null,
        phoneInvalid:null,
        commentInvalid:null
    })

    let onChange = ({ target }) => {
        console.log(target.value)
        setFormData(prevState => ({
            ...prevState,
            [target.name]: target.value
        }))
    }

    const resetInput = () => {
        setFormData({
            name: '',
            phone: '',
            email: '',
            comment: '',
            nameInvalid:null,
            emailInvalid:null,
            phoneInvalid:null,
            commentInvalid:null
        })
    }
        
        let sendMail = () =>{
        const newData = { ...formData };

        const name = isInvalid("name", formData.name);
        const phone = isInvalid("phone", formData.phone);
        const email = isInvalid("email",formData.email);

        newData.nameInvalid = name;
        newData.phoneInvalid = phone;
        newData.emailInvalid = email;

        if (!name && !phone && !email) {
            const dataForSend = {
                name:formData.name,
                phone:formData.phone,
                email:formData.email,
                comment:formData.comment
            };
            return  axios.post("http://www.testvakulenko.fun/send.php", dataForSend)
            .then(res => {
                console.log(res)
                console.log(res.data)

                if (res.status === 200) {
                    resetInput()
                    onSuccess(true)
                }
            })
            .catch(() => {
                console.log('message not send');
                onSuccess(false)
                resetInput()

            });
        } else {
            setFormData(newData);
        }

    };

    return (
        <div className='form'>
            <div className='form-wrap'>
                <h3 className='form-title'>Це анонімний онлайн кожен абсолютно</h3>
                <form>
                    <div className='form-group'>
                        <label>
                            Ваше ім'я:
                            <input type='text' name='name' className={formData.nameInvalid ? 'form-input error' : 'form-input '} placeholder='Name' onChange={onChange} value={formData.name} />
                            {formData.nameInvalid && <div style={{ color: 'red', fontSize: '14px' }}><p>{formData.nameInvalid}</p></div>}
                        </label>
                    </div>
                    <div className='form-group'>
                        <label>
                            Ваш телефон:
                            <input type='text' name='phone' className={formData.phoneInvalid ? 'form-input error' : 'form-input '} placeholder='+380 123 45 67' onChange={onChange} value={formData.phone} />
                            {formData.phoneInvalid && <div style={{ color: 'red', fontSize: '14px' }}><p>{formData.phoneInvalid}</p></div>}
                        </label>
                    </div>
                    <div className='form-group'>
                        <label>
                            Ваша пошта:
                            <input type='email' name='email' className={formData.emailInvalid ? 'form-input error' : 'form-input '} placeholder='Mail@example.com' onChange={onChange} value={formData.email} />
                            {formData.emailInvalid && <div style={{ color: 'red', fontSize: '14px' }}><p>{formData.emailInvalid}</p></div>}
                        </label>
                    </div>
                    <div className='form-group'>
                        <label>
                            Залиште свій коментар:
                            <textarea style={{ resize: 'none' }} name='comment' onChange={onChange} value={formData.comment}></textarea>
                        </label>
                    </div>
                    <Button submit={true} onClick={sendMail}/>
                </form>
            </div>
        </div>
    )
}

FormBlock.propTypes = {
    onSucces: PropTypes.func
}

export default FormBlock
