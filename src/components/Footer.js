import React from 'react';
import "../css/Footer.css";

const Footer = () => {
  return (
    <>
        <section id='footer'>
            <div className='footer'>
                <div className='footer__content'>
                    <div className='footerCell'>
                        <h2>Super Rental</h2>
                        <p className='footerCell__p'>Unlock the extraordinary and elevate your 
                        driving experience with our premier supercar rental service that combines 
                        unrivaled luxury, exhilarating performance, and impeccable service.</p>
                    </div>
                    <div className='footerCell'>
                        <h2>Company</h2>
                        <a href='#'>Los Angeles</a>
                        <a href='#'>Careers</a>
                        <a href='#'>Mobile</a>
                        <a href='#'>How we work</a>
                    </div>
                    <div className='footerCell'>
                        <h2>Working Hours</h2>
                        <p>Mon - Fri: 9AM - 9PM</p>
                        <p>Sat - Sun: 10AM - 6PM</p>
                    </div>
                    <div className='footerCell'>
                        <h2>Subscription</h2>
                        <p>Subscribe your email address for latest news & updates.</p>
                        <input type='text' placeholder='Enter Email Address' />
                        <button className='footerCell__btn'>Submit</button>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Footer;