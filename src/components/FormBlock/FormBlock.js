import React from 'react';
import './style.scss';

function FormBlock() {
    return (
        <div className='form-block'>
            <div className='form-wrap'>
                <h3 className='form-title'>Це анонімний онлайн кожен абсолютно</h3>
                <form>
                    <div className='form-group'>
                        <label>
                            Ваше ім'я:
                            <input type='text' name='name' className='form-input'/>
                        </label>
                    </div>
                    <div className='form-group'>
                        <label>
                            Ваше ім'я:
                            <input type='text' name='name' className='form-input'/>
                        </label>
                    </div>
                    <div className='form-group'>
                        <label>
                            Ваше ім'я:
                            <input type='text' name='name' className='form-input'/>
                        </label>
                    </div>
                    <div className='form-group'>
                        <label>
                            Ваше ім'я:
                            <textarea></textarea>
                        </label>
                    </div>
                    <button type='submit'>Заказать консультацию</button>
                </form>
            </div>
        </div>
    )
}

export default FormBlock
