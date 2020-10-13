import React, { useState } from 'react';
import ContactItem from '../../../components/ContactItem/ContactItem';
import FormBlock from '../../../components/FormBlock/FormBlock';
import './style.scss';

import Modal from '../../../components/Modal';
import GeneralModal from '../../../components/Modal/GeneralModal';
//import Message from '../../../components/Modal/templatesModal/Message';
import contactItem from '../../../json/contactItem';
import Loader from '../../Loader';

const ForCustomer = () => {

    const [modal, setModal] = useState(true);
    const [success, setSuccess] = useState(false);

    const showModal = () => {
        setSuccess(true)
    }

    const onClose = () => {
        setModal(false)
    }

    const renderModal = () => {
        if (success) {
            console.log('function is working')
            return (
                <div className='result'>
                    <Modal isModal={modal}>
                        <GeneralModal
                        img = {'./images/modalImage.svg'}
                        alt = {'success'}
                        title = {'Title if it need'}
                        onButtonPress = {onClose}
                        onClose = {onClose}>
                            <Loader />
                        </GeneralModal>
                    </Modal>
                </div>
            )
        }
    };
    return (
        <section className='for-customer' id='forcustomer'>

            {success && renderModal()}
            <div className='container flex'>
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