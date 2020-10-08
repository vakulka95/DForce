import React from 'react';
import ContactItem from '../../components/ContactItem/ContactItem';
import FormBlock from '../../components/FormBlock/FormBlock';
import './style.scss';

const ForCustomer = ({contactItem}) => {
    return (
        <section className='for-customer'>
            <div className='for-customer-wrap'>
                <div className='for-customer-info'>
                    <h2 className='for-customer-title'>Давайте поговоримо про ваш майбутній продукт</h2>
                    <p className='for-customer-text'>«Мені здається» – це анонімний онлайн-щоденник, де кожен абсолютно анонімно може поділитися власною історією абсолютно анонімно.</p>
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
                <FormBlock />
            </div>
        </section>
    )
}

export default ForCustomer;