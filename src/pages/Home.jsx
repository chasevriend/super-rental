import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Form from "../components/Form";
import PickCar from "../components/PickCar";
import About from "../components/About";
import Banner from "../components/Banner";
import ChooseUs from "../components/ChooseUs";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <> 
            <Nav />

            
            <Hero />

            
            <Form />
            
            <About />
            <Banner />
            
            <ChooseUs />
            
            <Testimonials />
            
            <Footer />
        </>
    )
}

export default Home;