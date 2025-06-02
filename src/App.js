import React from 'react';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import Examples from './pages/Examples';
import Upload from './pages/Upload';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <Home />
      <HowItWorks />
      <Examples />
      <Upload />
      <Contact />
    </div>
  );
}

export default App;
