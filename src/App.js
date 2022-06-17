import React, { useState } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import requests from './components/requests';
import Results from './components/Results';
import Footer from './components/Footer';
import './style.css';

export default function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);

  return (
    <div className="App">
      <Header />
      <Nav setSelectedOption={setSelectedOption} />
      <Results selectedOption={selectedOption} />
      <Footer />
    </div>
  );
}
