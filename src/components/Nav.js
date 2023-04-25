import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Nav.css"
import CarRentalIcon from '@mui/icons-material/CarRental';

const Nav = () => {
    const [nav, setNav] = useState(false);

    const openNav = () => {
        setNav(!nav);
    }
    
    return(
        <>
            <nav>
                {/* mobile nav */}
                <div className={`mobile-nav ${nav ? "open-nav" : ""}`}>
                    <div onClick={openNav} className="mobile-nav__close">
                        <p className="mobile-nav__XBtn">X</p>
                    </div>
                    <ul className="mobile-nav__links">
                        <li>
                            <Link onClick={openNav} to="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link onClick={openNav} to="/about">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link onClick={openNav} to="/models">
                                Models
                            </Link>
                        </li>
                        <li>
                            <Link onClick={openNav} to="/testimonials">
                                Testimonials
                            </Link>
                        </li>
                        <li>
                            <Link onClick={openNav} to="/team">
                                Our Team
                            </Link>
                        </li>
                        <li>
                            <Link onClick={openNav} to="/contact">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Desktop Nav */}
                <div className="nav">
                    <div className="nav__left">
                        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQQqpv2hGVY8srFS_Fw9a56ZgS8SbLbP3SaA&usqp=CAU" className="nav__logo" />
                            
                        </Link>
                    </div>
                    <ul className="nav__links">
                        <li>
                            <Link className="home-link" to="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            {" "}
                            <Link className="about-link" to="/about">
                                About
                            </Link>
                        </li>
                        <li>
                            {" "}
                            <Link className="models-link" to="/models">
                                Vehicle Models
                            </Link>
                        </li>
                        <li>
                            {" "}
                            <Link className="testi-link" to="/testimonials">
                                Testimonials
                            </Link>
                        </li>
                        <li>
                            {" "}
                            <Link className="team-link" to="/team">
                                Our Team
                            </Link>
                        </li>
                        <li>
                            {" "}
                            <Link className="contact-link" to="/contact">
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <div className="nav__btns">
                        <Link className="nav__btnSignIn" to="/">
                            Sign In
                        </Link>
                        <Link className="nav__btnRegister" to="/">
                            Register
                        </Link>
                    </div>

                    {/* mobile nav  */}
                    <div className="mobile-nav__hamburger" onClick={openNav}>
                        <svg viewBox="0 0 100 80" width="40" height="40" className="mobile-nav__hamburgerIcon">
                            <rect width="100" height="20"></rect>
                            <rect y="30" width="100" height="20"></rect>
                            <rect y="60" width="100" height="20"></rect>
                        </svg>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Nav;