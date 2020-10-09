import React, { useState } from 'react';
import axios from 'axios';
import './style.scss';
import PropTypes from 'prop-types';

function FormBlock({onSuccess}) {

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        mail: '',
        comment: ''
    })

    const [success, setSuccess] = useState(false);

    let onChange = ({ target }) => {
        setFormData(prevState => ({
            ...prevState,
            [target.name]: [target.value]
        }))
    }

    let changeSuccess = () =>{
        setSuccess(true);
        setTimeout(() => {
            setSuccess(false)
        }, 4000)
    }

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
             });
        if(success){
            onSuccess()
        }
    }

    return (
        <div className='form-block'>
            <div className='form-wrap'>
                <h3 className='form-title'>Це анонімний онлайн кожен абсолютно</h3>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label>
                            Ваше ім'я:
                            <input type='text' name='name' className='form-input' placeholder='Name' onChange={onChange} value={formData.name}/>
                        </label>
                    </div>
                    <div className='form-group'>
                        <label>
                            Ваш телефон:
                            <input type='text' name='phone' className='form-input' placeholder='+380 123 45 67' onChange={onChange} value={formData.phone}/>
                        </label>
                    </div>
                    <div className='form-group'>
                        <label>
                            Ваша пошта:
                            <input type='email' name='mail' className='form-input' placeholder='Mail@example.com' onChange={onChange} value={formData.mail}/>
                        </label>
                    </div>
                    <div className='form-group'>
                        <label>
                            Залиште свій коментар:
                            <textarea style={{resize:'none'}} name='comment' onChange={onChange} value={formData.comment}></textarea>
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
