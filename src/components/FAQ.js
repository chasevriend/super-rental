import React from 'react';
import "../css/FAQ.css";
import BMW from "../images/bmw-m4.png";

const FAQ = () => {
    
  
    return (
    <>
        <section id='faq'>
            <div className='faq'>
                <div className='faq__header'>
                    <h3>FAQ</h3>
                    <h1>Frequently Asked Questions</h1>
                    <p>Frequently asked questions about the car rental booking process 
                    on our website: answers to common concerns and inquiries.</p>
                </div>
                <div className='faq__content'>
                    <div className='faq__contentCell'>
                        <p>1. What is special about comparing rental car deals?</p>
                        <span> <img src='https://img.icons8.com/?size=512&id=164&format=png' alt='' className='down-arrow'/></span>
                    </div>
                    <div className='faq__contentCell'>
                        <p>2. How do I find the car rental deals?</p>
                        <span> <img src='https://img.icons8.com/?size=512&id=164&format=png' alt='' className='down-arrow'/></span>
                    </div>
                    <div className='faq__contentCell'>
                        <p>3. How do I find such low rental prices?</p>
                        <span> <img src='https://img.icons8.com/?size=512&id=164&format=png' alt='' className='down-arrow'/></span>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default FAQ