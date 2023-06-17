import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import "../css/Hero.css";
import HeroImg from "../images/hero.png";
import Orange from "../images/orange-mcclaren-570s.png";

const Hero = () => {
    const bookBtn = () => {
        document
        .querySelector("#booking-section")
        .scrollIntoView({ behavior: "smooth" });
    };
  
    return (
    <>
        <section id='home' className='hero'>
            <div className='hero__container'>
                <img className='hero__bgImg' src={HeroImg} alt=''></img>
                <div className='hero__content'>
                    <div className="hero__contentText">
                        <h4>Plan your trip now</h4>
                        <h1>
                            Save <span>super</span> with our car rental
                        </h1>
                        <p>
                            Rent the car of your dreams. Unbeatable prices, unlimited miles,
                            flexible pick-up options and much more.
                        </p>
                        <div className="hero__contentBtns">
                            <Link
                                onClick={bookBtn}
                                className="hero__btnsBook"
                                to="/"
                            >
                                Book Ride &nbsp; <i className="fa-solid fa-circle-check"></i>
                            </Link>
                            <Link className="hero__btnsLearn" to="/">
                                Learn More  &nbsp; <i className="fa-solid fa-angle-right"></i>
                            </Link>
                        </div>
                    </div>
                    <img src={Orange}
                        alt='car'
                        className='hero__contentImg'
                    />
                </div>
            </div>
        </section>
    </>
  )
}

export default Hero;
