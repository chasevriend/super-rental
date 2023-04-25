import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import "../css/Hero.css";

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
                <img className='hero__bgImg' src="https://car-rental-ten.vercel.app/static/media/hero-bg.3b5f7a2502f0f81d1490.png" alt=''></img>
                <div className='hero__content'>
                    <div className="hero__contentText">
                        <h4>Plan your trip now</h4>
                        <h1>
                            Save <span>big</span> with our car rental
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
                                Learn More &nbsp; <i className="fa-solid fa-angle-right"></i>
                            </Link>
                        </div>
                    </div>
                    <img src='https://www.pngmart.com/files/9/Orange-Mclaren-PNG-Free-Download.png'
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
