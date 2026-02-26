import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyMe from './components/WhyMe';
import Services from './components/Services';
import Results from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <WhyMe />
        <Services />
        <Results />
        <Testimonials />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
