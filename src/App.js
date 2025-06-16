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
      <Branding />
      <Packaging />
      <BookCover />
      <Poster />
      <MerchandiseDesign />
      <WebDesign />
      <Contact />
    </div>
  );
}

export default App;
