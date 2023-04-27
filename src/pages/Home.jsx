import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Form from "../components/Form";
import PickCar from "../components/PickCar";
import About from "../components/About";
import Banner from "../components/Banner";

const Home = () => {
    return (
        <>
            <Nav />

            {/* Book a Car Form */}
            <Hero />

            {/* Plan Your Trip Now */}
            <Form />
            {/* Vehice Models */}
            <About />
            <Banner />
            {/* Why Choose us */}

            {/* Testimonials */}

            {/* FAQs */}

            {/* Footer */}
        </>
    )
}

export default Home;