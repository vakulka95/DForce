import React from 'react';
import ContactItem from '../../../components/ContactItem/ContactItem';
import FormBlock from '../../../components/FormBlock/FormBlock';
import './style.scss';
//import {useHistory,useLocation }from 'react-router-dom';
import {contactIt} from '../../../json/index';
import I18n from '../../../i18n/I18n';


const ForCustomer = () => {
    // let history = useHistory()
    // let locate = useLocation()

    // const [position,setPosition] = useState({ y: null })

    // const handleMouseMove = (e)=> {
    //     setPosition({
    //       y: e.clientY
    //     });
    //     if(position.y){  
    //         locate.hash = '#forcustomer'
    //         history.replace(locate.hash)
    //         }
    //     if(locate.pathname!=='/'){
    //         locate.hash = `${locate.pathname}`
    //         history.push(locate.hash)
    //     }
    // }


    return (
        <section className='for-customer' id='forcustomer' >
            <div className='container'>
                <div className='flex'>
                    <div className='for-customer-info'>
                        <h2 className='for-customer-title'>{I18n.t('forCustomerTitle')}</h2>
                        <div className='for-customer-contacts'>
                            {contactIt.map(({
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