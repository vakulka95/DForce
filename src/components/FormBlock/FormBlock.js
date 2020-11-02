import React, { useState } from 'react';
import axios from 'axios';
import './style.scss';
import PropTypes from 'prop-types';
import Button from '../Button';
import isInvalid from '../../utils/isInvalis';
import Modal from '../../components/Modal';
import GeneralModal from '../../components/Modal/GeneralModal';
import Loader from '../Loader';
import Message from '../Modal/templatesModal/Message';

function FormBlock() {
    const [modal, setModal] = useState(true);
    const [success, setSuccess] = useState(false);
    const [load,setLoad] = useState(false);
    const [error,setError] = useState(false)

    let showModal = (sending) => {
        console.log(sending)
        if(sending===true){
            setSuccess(true)
        }
        else setError(true)
   
    }

    const onClose = () => {
        setModal(false)
    }

    const renderModal = () => {
        if (load) {
            return (
                <div className='result'>
                    <Modal isModal={modal}>
                        <GeneralModal
                        onClose = {onClose}>
                            <Loader />
                        </GeneralModal>
                    </Modal>
                </div>
            )
        }
         if(error || success) {
            return (
                <div className='result'>
                    <Modal isModal={modal}>
                        <GeneralModal 
                        img = {success?'./images/modalImage.svg':null}
                        alt = {success ?'success':null}
                        onClose = {onClose}>
                            {error && <Message />}   
                        </GeneralModal>
                    </Modal>

                </div>
            )
        }
    };

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
            setLoad(true)
            return  axios.post("http://www.testvakulenko.fun/send.php", dataForSend)
            .then(res => {
                console.log(res)
                console.log(res.data)

                if (res.status === 200) {
                    resetInput()
                    setLoad(false)
                    showModal(true)
                }
            })
            .catch(() => {
                console.log('message not send');
                setLoad(false)
                showModal(true)
                resetInput()

            });
        } else {
            setFormData(newData);
        }

    };

    return (
        <div className='form'>
            {(load || error || success) && renderModal()}
            <div className='form-wrap'>
                <h3 className='form-title'>Залиште свої контактні дані, і ми зв'яжемося з Вами!</h3>
                <form>
                    <div className='form-group'>
                        <label>
                           <span>Ваше ім'я:</span>
                            <input type='text' name='name' className={formData.nameInvalid ? 'form-input error' : 'form-input '} placeholder='Name' onChange={onChange} value={formData.name} />
                            {/* {formData.nameInvalid && <div><p style={{ color: 'red', fontSize: '14px' }}>{formData.nameInvalid}</p></div>} */}
                            <div style={formData.nameInvalid ? {visibility:'visible', height: '35px'} : {visibility:'hidden', height: '35px'}}><p style={{ color:'red', fontSize: '14px' }}>{formData.nameInvalid}</p></div>
                        </label>
                    </div>
                    <div className='form-group'>
                        <label>
                        <span>Ваш телефон:</span>
                            <input type='text' name='phone' className={formData.phoneInvalid ? 'form-input error' : 'form-input '} placeholder='+380 123 45 67' onChange={onChange} value={formData.phone} />
                            {/* {formData.phoneInvalid && <div><p style={{ color: 'red', fontSize: '14px' }}>{formData.phoneInvalid}</p></div>} */}
                            <div style={formData.phoneInvalid ? {visibility:'visible', height: '35px'} : {visibility:'hidden', height: '35px'}}><p style={{ color:'red', fontSize: '14px' }}>{formData.phoneInvalid}</p></div>
                        </label>
                    </div>
                    <div className='form-group'>
                        <label>
                        <span>Ваша пошта:</span>
                            <input type='email' name='email' className={formData.emailInvalid ? 'form-input error' : 'form-input '} placeholder='Mail@example.com' onChange={onChange} value={formData.email} />
                            {/* {formData.emailInvalid && <div style={{visibility:'hidden'}}><p style={{ color:'red', fontSize: '14px' }}>{formData.emailInvalid}</p></div>} */}
                            <div style={formData.emailInvalid ? {visibility:'visible', height: '35px'} : {visibility:'hidden', height: '35px'}}><p style={{ color:'red', fontSize: '14px' }}>{formData.emailInvalid}</p></div>
                        </label>
                    </div>
                    <div className='form-group'>
                        <label>
                        <span>Залиште свій коментар:</span>
                            <textarea style={{ resize: 'none' }} name='comment' onChange={onChange} value={formData.comment}></textarea>
                        </label>
                    </div>
                    <Button submit={true} onClick={sendMail} message={'Замовити консультацію'}/>
                </form>
            </div>
        </div>
    )
}

FormBlock.propTypes = {
    onSucces: PropTypes.func
}

export default FormBlock
