import React from 'react';
import "../css/Form.css"


const Form = () => {
  return (
    <>
        <section id='booking-section'>
            <div className='form__container'>
                <div className='form__content'>
                    <div className='form__contentBox'>
                        <h2>Book a Car</h2>
                        <p className='error-msg'>All fields required!</p>
                        <p className='done-msg'>Check your email to confirm this order.</p>
                        <form className='form'>
                            <div className='form__carType form__left'>
                                <label className='form__label'>
                                    &nbsp; Select Your Car Model
                                    <b>*</b>
                                </label>
                                <select>
                                    <option>Select Your Car Model</option>
                                    <option>McLaren 570S</option>
                                    <option>Lamborghini Aventador</option>
                                    <option>BMW M4</option>
                                    <option>Aston Martin Vanquish</option>
                                </select>
                            </div>
                            <div className="form__pickUp">
                                <label>
                                    <i className="fa-solid fa-location-dot"></i> &nbsp; Pick-up{" "}
                                    <b>*</b>
                                </label>
                                <select>
                                    <option>Select pick up location</option>
                                    <option>Los Angeles, CA</option>
                                    <option>Orange County, CA</option>
                                    <option>Las Vegas, NV</option>
                                </select>
                            </div>

                            <div className="form__dropOff form__left">
                                <label>
                                    <i className="fa-solid fa-location-dot"></i> &nbsp; Drop-off{" "}
                                    <b>*</b>
                                </label>
                                <select>
                                    <option>Select drop off location</option>
                                    <option>Los Angeles, CA</option>
                                    <option>Orange County, CA</option>
                                    <option>Las Vegas, NV</option>
                                </select>
                            </div>

                            <div className="form__pickUp">
                                <label htmlFor="picktime">
                                    <i className="fa-regular fa-calendar-days "></i> &nbsp;
                                    Pick-up <b>*</b>
                                </label>
                                <input
                                    id="picktime"
                                    type="date"
                                ></input>
                            </div>

                            <div className="form__pickUp form__left">
                                <label htmlFor="droptime">
                                    <i className="fa-regular fa-calendar-days "></i> &nbsp;
                                    Drop-off <b>*</b>
                                </label>
                                <input
                                    id="droptime"
                                    type="date"
                                ></input>
                            </div>
                            <button className='form__btn' type='button'>Book</button>
                        </form>
                        
                    </div>
                </div>
            </div>
        </section>
    </>
    
  )
}

export default Form;