import React from 'react';
import "../css/Form.css"
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

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
                            <div className='form__carType'>
                                <label>&nbsp; Select Your Car Model<b>*</b></label>
                                <select>
                                    <DirectionsCarIcon fontSize='large' />
                                    <option>Select Your Car Model</option>
                                    <option>McLaren 570S</option>
                                    <option>Lamborghini Aventador</option>
                                    <option>Porsche 911</option>
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

                            <div className="form__dropOff">
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

                            <div className="form__pickUp">
                                <label htmlFor="droptime">
                                    <i className="fa-regular fa-calendar-days "></i> &nbsp;
                                    Drop-off <b>*</b>
                                </label>
                                <input
                                    id="droptime"
                                    type="date"
                                ></input>
                            </div>
                            <button className='form__btn'>Book</button>
                        </form>
                        
                    </div>
                </div>
            </div>
        </section>
    </>
    
  )
}

export default Form;