import React from 'react'
import "../css/Vehicles.css";
import Aston from "../images/aston-martin-vanquish.png";
import Bmw from "../images/bmw-m4.png"
import Lambo from "../images/lamborghini-aventador.png";
import Mcclaren from "../images/mcclaren-570s.png";

const Vehicles = () => {
  return (
    <>
        <div className='vehicles'>
            <h1>Our Vehicle Models</h1>
            <div className='vehicles__row'>
                <div className='vehicles__box'>
                    <img src={Mcclaren} alt="" className='vehiclesBox__img' />
                    <div className='vehiclesBox__content'>
                        <span className='left'>
                            <h2>McClaren 570S</h2>
                        </span>
                        <span className='right'>
                            <h2>$109</h2>
                            <p>per day</p>
                        </span>
                    </div>
                    <hr></hr>
                    <button className='vehiclesBox__btn'>Book Ride</button>
                </div>
                <div className='vehicles__box'>
                    <img src={Lambo} alt="" className='vehiclesBox__img' />
                    <div className='vehiclesBox__content'>
                        <span className='left'>
                            <h2>Lamborghini Aventador</h2>
                        </span>
                        <span className='right'>
                            <h2>$119</h2>
                            <p>per day</p>
                        </span>
                    </div>
                    <hr></hr>
                    <button className='vehiclesBox__btn'>Book Ride</button>
                </div>
            </div>
            <div className='vehicles__row'>
                <div className='vehicles__box'>
                    <img src={Bmw} alt="" className='vehiclesBox__img' />
                    <div className='vehiclesBox__content'>
                        <span className='left'>
                            <h2>BMW M4</h2>
                        </span>
                        <span className='right'>
                            <h2>$89</h2>
                            <p>per day</p>
                        </span>
                    </div>
                    <hr></hr>
                    <button className='vehiclesBox__btn'>Book Ride</button>
                </div>
                <div className='vehicles__box'>
                    <img src={Aston} alt="" className='vehiclesBox__img' />
                    <div className='vehiclesBox__content'>
                        <span className='left'>
                            <h2>Aston Martin Vanquish</h2>
                        </span>
                        <span className='right'>
                            <h2>$109</h2>
                            <p>per day</p>
                        </span>
                    </div>
                    <hr></hr>
                    <button className='vehiclesBox__btn'>Book Ride</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Vehicles;