import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Branding from './components/Branding';
import Packaging from './components/Packaging';
import BookCover from './components/BookCover';
import Poster from './components/Poster';
import MerchandiseDesign from './components/MerchandiseDesign';
import WebDesign from './components/WebDesign';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="m-3">
        <Branding />
      </div>
      <div className="m-3">
        <Packaging />
      </div>
      <div className="m-3">
        <BookCover />
      </div>
      <div className="m-3">
        <Poster />
      </div>
      <div className="m-3">
        <MerchandiseDesign />
      </div>
      <div className="m-3">
        <WebDesign />
      </div>
        <Contact />
    </div>
  );
}

export default App;
