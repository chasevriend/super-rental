import React, { useState } from 'react';
import "../css/FAQ.css";


const FAQ = () => {
    const [activeQ, setActiveQ] = useState("q1");

    const openQ = (id) => {
        setActiveQ(activeQ === id ? "" : id);
    };

    const getClassAnswer = (id) => {
        return activeQ === id ? "active-answer" : "";
    };

    const getClassQuestion = (id) => {
        return activeQ === id ? "acative-question" : "";
    };
  
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
                        <div id='q1'
                            onClick={() => openQ("q1")}
                            className={`faq-box__question ${getClassQuestion("q1")}`}>
                            <p>1. What is special about comparing rental car deals?</p>
                            <span> <img src='https://img.icons8.com/?size=512&id=164&format=png' alt='' className='down-arrow'/></span>
                        </div>
                        <div id='q1'
                            onClick={() => openQ("q1")}
                            className={`faq-box__question ${getClassAnswer("q1")}`}>
                            Comparing rental car deals is important as it helps find the
                            best deal that fits your budget and requirements, ensuring you
                            get the most value for your money. By comparing various
                            options, you can find deals that offer lower prices,
                            additional services, or better car models. You can find car
                            rental deals by researching online and comparing prices from
                            different rental companies.
                        </div>
                    </div>
                    <div className='faq__contentCell'>
                        <div id='q1'
                            onClick={() => openQ("q1")}
                            className={`faq-box__question ${getClassQuestion("q1")}`}>
                            <p>2. How do I find the car rental deals?</p>
                            <span> <img src='https://img.icons8.com/?size=512&id=164&format=png' alt='' className='down-arrow'/></span>
                        </div>
                        <div id='q1'
                            onClick={() => openQ("q1")}
                            className={`faq-box__question ${getClassAnswer("q1")}`}>
                            Comparing rental car deals is important as it helps find the
                            best deal that fits your budget and requirements, ensuring you
                            get the most value for your money. By comparing various
                            options, you can find deals that offer lower prices,
                            additional services, or better car models. You can find car
                            rental deals by researching online and comparing prices from
                            different rental companies.
                        </div>
                    </div>
                    <div className='faq__contentCell'>
                        <div id='q1'
                            onClick={() => openQ("q1")}
                            className={`faq-box__question ${getClassQuestion("q1")}`}>
                            <p>3. How do I find such low rental prices?</p>
                            <span> <img src='https://img.icons8.com/?size=512&id=164&format=png' alt='' className='down-arrow'/></span>
                        </div>
                        <div id='q1'
                            onClick={() => openQ("q1")}
                            className={`faq-box__question ${getClassAnswer("q1")}`}>
                            Comparing rental car deals is important as it helps find the
                            best deal that fits your budget and requirements, ensuring you
                            get the most value for your money. By comparing various
                            options, you can find deals that offer lower prices,
                            additional services, or better car models. You can find car
                            rental deals by researching online and comparing prices from
                            different rental companies.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default FAQ