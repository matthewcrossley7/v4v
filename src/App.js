import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import logo from './v4v.jpg';

// import HomePage from './HomePage'; // Update the import
// import AboutPage from './AboutPage'; // Update the import
// import ServicesPage from './ServicesPage'; // Update the import
// import ContactPage from './ContactPage'; // Update the import
import './App.css';
// Header component

// Navbar component
function Navbar() {
  return (
    <nav>
      <ul>
        <li><a href="/whoweare">Who we are</a></li>
        <li><a href="/v4vcommunity">V4V Community</a></li>
        <li><a href="/donations">Donations Menu</a></li>
        <li><a href="/whysupport">Why support V4V</a></li>
        <li><a href="/news">News</a></li>
        <li><a href="/info">Info</a></li>

      </ul>
    </nav>
  );
}

function Header() {
  return <header>V4V <img src={logo} alt="Logo"  style={{ width: 'auto', height: '40px' }} /></header>;
}
// App component
function WhoWeAre(){
  return <div>WHO WE ARE</div>;
}
export default function App() {
  
  return (
<Router>
      <div>
        <Header />
        <Navbar />
        <Routes>
        <Route path="/whoweare" element={<WhoWeAre /> }/>
        
        </Routes>
      </div>
    </Router>
  );
}

