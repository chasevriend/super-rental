import React, { useState } from 'react';
import About from './About';
import "../css/PickCar.css";
import AstonMartin from "../images/aston-martin-vanquish.png";
import BMW from "../images/bmw-m4.png";
import Lambo from "../images/lamborghini-aventador.png";
import McClaren from "../images/mcclaren-570s.png";

const PickCar = ({data, carID}) => {
    
    const [carLoad, setCarLoad] = useState(true);

    return (
    <>
        <section id='pick-car'>
            <div className='pickCar'>
                
            </div>
        </section>
    </>
  )
}

export default PickCar;