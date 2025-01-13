import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experiences';
import Achievements from './pages/Achievements';
import Portfolio from './pages/Portfolio';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

const App = () => {
  return (
    <div>
       <div>

<Navbar />
<Home />
<About />
<Experience />
<Achievements />
<Portfolio />
<Skills />
<Contact />
{/* <Testimonials /> */}
<Footer />

</div>
    </div>
  );
};

export default App;
