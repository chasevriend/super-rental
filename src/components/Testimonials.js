import React from 'react';
import "../css/Testimonials.css";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { ForkLeft } from '@mui/icons-material';

const Testimonials = () => {
  return (
    <>
        <section id='testimonials'>
            <div className='testimonials'>
                <div className='testimonials__header'>
                    <h3>Reviewed by People</h3>
                    <h1>Customer's Testimonials</h1>
                    <p>Discover the positive impact we've made on the our clients by 
                    reading through their testimonials. Our clients have experienced 
                    our service and results, and they're eager to share their positive 
                    experiences with you.</p>
                </div>
                <div className='testimonials__content'>
                    <div className='testimonials__contentCell'>
                        <h2>"Absolutely, the most beautiful cars. My instagram is popping after 
                        renting cars with this site.</h2>
                        <div className='testimonials__cellName'>
                            <img src='https://i.pinimg.com/474x/f9/3e/72/f93e722b00c920571789b717d57a99f2.jpg' alt='' className='' />
                            <span>
                                <h4>Drake</h4>
                                <p>Los Angeles, CA</p>
                            </span>
                            <FormatQuoteIcon style={{color: '#ff4d30', marginLeft: 'auto', fontSize: '50px'}}/>
                        </div>
                    </div>
                    <div className='testimonials__contentCell'>
                        <h2>"I rented a M4 from this site and had an amazing experience! 
                        The booking was simple and affordable!"</h2>
                        <div className='testimonials__cellName'>
                            <img src='https://pbs.twimg.com/profile_images/989701284327444482/SRtL5DTO_400x400.jpg' alt='' className='' />
                            <span>
                                <h4>Bobby Lee</h4>
                                <p>Orange County, CA</p>
                            </span>
                            <FormatQuoteIcon style={{color: '#ff4d30', marginLeft: 'auto', fontSize: '50px'}}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Testimonials