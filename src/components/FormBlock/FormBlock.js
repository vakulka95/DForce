import React, { useState,useEffect } from 'react';
import axios from 'axios';
import './style.scss';
import PropTypes from 'prop-types';
import Button from '../Button';
import isInvalid from '../../utils/isInvalis';
import Modal from '../../components/Modal';
import GeneralModal from '../../components/Modal/GeneralModal';
import Loader from '../Loader';
import Message from '../Modal/templatesModal/Message';
import MessageOk from '../Modal/templatesModal/MessageOk';

function FormBlock() {
    const [modal, setModal] = useState(true);
    const [success, setSuccess] = useState(false);
    const [load,setLoad] = useState(false);
    const [error,setError] = useState(false);
    const[submit,setSubmit] = useState(false);
    const [disable,setDisable] = useState(true);

    let showModal = (sending) => {
        if(sending){
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
                        img = {success?'./images/modalImage.svg':'./images/Error.svg'}
                        alt = {success ?'success':'error'}
                        onClose = {onClose}
                        title={success?'Ваше повідомлення відправлено':'Заявку не надіслано'}>
                            {success && <MessageOk/>}
                            {error && <Message />}   
                        </GeneralModal>
                    </Modal>

                </div>
            )
        }
    };

    const [formData, setFormData] = useState({
        name: '',
        phone: '+380',
        email: '',
        comment: '',
        nameInvalid:null,
        emailInvalid:null,
        phoneInvalid:null,
        commentInvalid:null
    })

    let onChange = ({ target }) => {
        let targetName = target.name,
            targetValue = target.value;
            let name,phone,email,comment;
            if(targetName==="name"){
                name = targetValue
                name = isInvalid("name", name);
                formData.nameInvalid = name;
            }
            if(targetName==="phone"){
                phone = targetValue
                phone = isInvalid("phone", phone);
                formData.phoneInvalid = phone;
            }
            if(targetName==="email"){
                email = targetValue
                email = isInvalid("email",email);
                formData.emailInvalid = email;
            }
            if(targetName==="comment"){
                comment = targetValue
                comment = isInvalid("comment",comment);
                formData.commentInvalid = comment;
            }


        setFormData(prevState => ({
            ...prevState,
            [targetName]:targetValue
        })
        )

    }

    useEffect(()=> {
        setFormData(formData)
    if(formData.name && formData.phone && formData.email && formData.comment && !formData.nameInvalid && !formData.phoneInvalid && !formData.emailInvalid && !formData.commentInvalid){
        setSubmit(true)
         setDisable(false)
    }
    else {
        setSubmit(false)
         setDisable(true)
    }},[formData])
    
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

        const name =  isInvalid("name", newData.name);
        const phone = isInvalid("phone", newData.phone);
        const email = isInvalid("email",newData.email);
        const comment = isInvalid("comment",newData.comment);

        newData.nameInvalid = name;
        newData.phoneInvalid = phone;
        newData.emailInvalid = email;
        newData.commentInvalid = comment;

         if (!name && !phone && !email && !comment ) {
            const dataForSend = {
                name:newData.name,
                phone:newData.phone,
                email:newData.email,
                comment:newData.comment
            };
            setLoad(true)
            return  axios.post("http://www.testvakulenko.fun/send.php", dataForSend)
            .then(res => {

                if (res.status === 200) {
                    resetInput()
                    setLoad(false)
                    showModal(true)
                }
            })
            .catch(() => {

                setLoad(false)
                showModal(false)
                resetInput()

            });
        } else {
            setFormData(newData);
        }

    };

    return (
        <div className={(error && modal) ? 'form error' : 'form'} >
            {(load || error || success) && renderModal()}
            <div className='form-wrap'>
                <h3 className='form-title'>Залиште свої контактні дані, і ми зв'яжемося з Вами!</h3>
                <form>
                    <div className='form-group'>
                        <label>
                           <span>Ваше ім'я:</span>
                            <input type='text' name='name' className={formData.nameInvalid ? 'form-input error' : 'form-input '} placeholder='Name' onChange={onChange} value={formData.name}/>
                            {/* {formData.nameInvalid && <div><p style={{ color: 'red', fontSize: '14px' }}>{formData.nameInvalid}</p></div>} */}
                            <div style={formData.nameInvalid ? {visibility:'visible', height: '35px'} : {visibility:'hidden', height: '35px'}}><p style={{ color:'red', fontSize: '14px' }}>{formData.nameInvalid}</p></div>
                        </label>
                    </div>
                    <div className='form-group'>
                        <label>
                        <span>Ваш телефон:</span>
                            <input type='text' name='phone' className={formData.phoneInvalid ? 'form-input error' : 'form-input '} placeholder='+380' onChange={onChange}  value={formData.phone} />
                            {/* {formData.phoneInvalid && <div><p style={{ color: 'red', fontSize: '14px' }}>{formData.phoneInvalid}</p></div>} */}
                            <div style={formData.phoneInvalid ? {visibility:'visible', height: '35px'} : {visibility:'hidden', height: '35px'}}><p style={{ color:'red', fontSize: '14px' }}>{formData.phoneInvalid}</p></div>
                        </label>
                    </div>
                    <div className='form-group'>
                        <label>
                        <span>Ваша пошта:</span>
                            <input type='email' name='email' className={formData.emailInvalid ? 'form-input error' : 'form-input '} placeholder='Mail@example.com' onChange={onChange}  value={formData.email} />
                            {/* {formData.emailInvalid && <div style={{visibility:'hidden'}}><p style={{ color:'red', fontSize: '14px' }}>{formData.emailInvalid}</p></div>} */}
                            <div style={formData.emailInvalid ? {visibility:'visible', height: '35px'} : {visibility:'hidden', height: '35px'}}><p style={{ color:'red', fontSize: '14px' }}>{formData.emailInvalid}</p></div>
                        </label>
                    </div>
                    <div className='form-group'>
                        <label>
                        <span>Залиште свій коментар:</span>
                            <textarea style={{ resize: 'none' }} className={formData.commentInvalid? 'form-group-textarea-error':'form-group-textarea'} name='comment' onChange={onChange}  value={formData.comment}></textarea>
                            <div style={formData.commentInvalid ? {visibility:'visible', height: '35px'} : {visibility:'hidden', height: '35px'}}><p style={{ color:'red', fontSize: '14px', lineHeight: '20px' }}>{formData.commentInvalid}</p></div>
                        </label>
                    </div>
                    <Button submit={submit} disable={disable} onClick={sendMail} message={'Замовити консультацію'}/>
                </form>
            </div>
        </div>
    )
}

FormBlock.propTypes = {
    onSucces: PropTypes.func
}

export default FormBlock