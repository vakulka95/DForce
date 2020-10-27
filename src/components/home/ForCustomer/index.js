import React, { useState } from 'react';
import ContactItem from '../../../components/ContactItem/ContactItem';
import FormBlock from '../../../components/FormBlock/FormBlock';
import './style.scss';
import {useHistory,useLocation }from 'react-router-dom';
import contactItem from '../../../json/contactItem';


const ForCustomer = () => {
    let history = useHistory()
    let locate = useLocation()

    const [position,setPosition] = useState({ y: null })

    const handleMouseMove = (e)=> {
        setPosition({
          y: e.clientY
        });
        if(position.y){  
            locate.hash = '#forcustomer'
            history.replace(locate.hash)
            }
        if(locate.pathname!=='/'){
            locate.hash = `${locate.pathname}`
            history.push(locate.hash)
        }
    }


    return (
        <section className='for-customer' id='forcustomer' onMouseOver={handleMouseMove}>
            <div className='container'>
                <div className='flex'>
                    <div className='for-customer-info'>
                        <h2 className='for-customer-title'>Давайте поговоримо про ваш майбутній продукт</h2>
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
            </div>
        </section>
    )
}

export default ForCustomer;