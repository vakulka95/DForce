import React, { useState,useEffect } from 'react';
import ContactItem from '../../../components/ContactItem/ContactItem';
import FormBlock from '../../../components/FormBlock/FormBlock';
import './style.scss';
import {useHistory,useLocation }from 'react-router-dom';
import Modal from '../../../components/Modal';
import GeneralModal from '../../../components/Modal/GeneralModal';
// import Message from '../../../components/Modal/templatesModal/Message';
import contactItem from '../../../json/contactItem';
import Loader from '../../Loader';

const ForCustomer = () => {
    let history = useHistory()
    let locate = useLocation()

    const [position,setPosition] = useState({ y: null })

    const handleMouseMove = (e)=> {
        setPosition({
          y: e.clientY
        });
        if(position.y){  
            locate.hash = '#stupid'
            history.replace(locate.hash)
            }
    }

    useEffect(()=>{
        window.addEventListener('scroll', handleMouseMove)
        return ()=> window.removeEventListener('scroll', handleMouseMove)
    } ) 

    const [modal, setModal] = useState(true);
    const [success, setSuccess] = useState(false);
    const [error,setError] = useState(false);

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
        if (success) {
            return (
                <div className='result'>
                    <Modal isModal={modal}>
                        <GeneralModal
                        img = {'./images/modalImage.svg'}
                        alt = {'success'}
                        title = {'Title if it need'}
                        onButtonPress = {onClose}
                        onClose = {onClose}>
                            <Loader classStyle='anim' />
                        </GeneralModal>
                    </Modal>
                </div>
            )
        }
        if(error) {
            return (
                <div className='result'>
                    <Modal isModal={modal}>
                        <GeneralModal 
                        title = {'Something went wrong'}
                        onButtonPress = {onClose}>   
                        </GeneralModal>
                    </Modal>

                </div>
            )
        }
    };
    return (
        <section className='for-customer' id='forcustomer' onMouseEnter={handleMouseMove}>

            {(success || error) && renderModal()}
            <div className='flex'>
                <div className='for-customer-info'>
                    <h2 className='for-customer-title'>Давайте поговоримо про ваш майбутній продукт</h2>
                    <p className='for-customer-text text'>«Мені здається» – це анонімний онлайн-щоденник, де кожен абсолютно анонімно може поділитися власною історією абсолютно анонімно.</p>
                    <div className='for-customer-contacts'>
                        {contactItem.map(({
                            id,
                            image,
                            alt,
                            info,
                            data
                        }) => <ContactItem key={id}
                            id={id}
                            image={image}
                            alt={alt}
                            info={info}
                            data={data}
                            />
                        )}
                    </div>
                </div>
                <FormBlock onSuccess={showModal} />
            </div>
        </section>
    )
}

export default ForCustomer;