import React, { useState } from 'react';
import About from './About';
import "../css/PickCar.css";
import AstonMartin from "../images/aston-martin-vanquish.png";
import BMW from "../images/bmw-m4.png";
import Lambo from "../images/lamborghini-aventador.png";
import McClaren from "../images/mcclaren-570s.png";

const PickCar = ({data, carID}) => {
    const [carLoad, setCarLoad] = useState(true);
    const cars = [
        {
            img: McClaren,
            Make: "McClaren",
            Model: "570S",
            Style: "Coupe",
            Transmission: "Manual",
            Fuel: "Gasoline"
        },
        {
            img: Lambo,
            Make: "Lamborghini",
            Model: "Aventador",
            Style: "Coupe",
            Transmission: "Manual",
            Fuel: "Gasoline"
        },
        {
            img: BMW,
            Make: "BMW",
            Model: "M4",
            Style: "Coupe",
            Transmission: "Automatic",
            Fuel: "Gasoline"
        },
        {
            img: AstonMartin,
            Make: "Aston Martin",
            Model: "Vanquish",
            Style: "Coupe",
            Transmission: "Automatic",
            Fuel: "Gasoline"
        }
    ];
  
    return (
    <>
        <section id='pick-car'>
            <div className='pickCar__container'>
                <About />
                <div className='pickCar__header'>
                    <h2>Vehicle Models</h2>
                    <h1>Our rental fleet</h1>
                    <p>Choose from a variety of our luxurious, super cars to rent for your next 
                        adventure or business trip.</p>
                </div>
                <div className='pickCar'>
                    <div className='pickCar__btns'>
                        <p>McClaren 570S</p>
                        <p>Lamborghini Aventador</p>
                        <p>BMW M4</p>
                        <p>Aston Martin Vanquish</p>
                    </div>
                </div>
                <div className='pickCar__img'>
                    <img src={cars[0].img} id="car-img" />
                </div>
            </div>
        </section>
    </>
  )
}

export default PickCar;