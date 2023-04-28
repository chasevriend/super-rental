import React from 'react';
import './css/App.css';
import Home from './pages/Home';
import AboutPage from './pages/About';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import TestimonialsPage from './pages/Testimonials';
import Contact from './pages/Contact';
import Models from './pages/Models';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/models' element={<Models />} />
          <Route path='/testimonials' element={<TestimonialsPage />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
