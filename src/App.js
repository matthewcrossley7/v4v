import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import logo from './v4v.jpg';
import pic1 from './pic1.png';
import pic2 from './pic2.png';
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
function Community(){
  return(
    <div>
    <b>
    Agile
  </b>
  <br/>
  <b>
 Team Structure
  </b>
  <br/>
  <b>
    Team Members
  </b>
  <br/>

  </div>
   )
}
function DonationsMenu(){
  return(<div>
   <img src={pic2} alt="Logo"  style={{ width: 'auto', height: '140px' }} />
  </div>)
}
// App component
function WhoWeAre(){
  return (
    <div>
      We are a community of Cheshire and Shropshire based Humanitarians, both British and Ukrainian, who want to see an end to this conflict.
      <br />
      <b>
        Objective
      </b>
      <br />
      Our objective is peace and an end to this conflict. We believe that we can play our small part towards this by directly providing both materialand moral support to the Ukrainian people.
      <br />
      Some may think that having the word “victory” in our name that we are somehow gung-ho warmongers. Nothing could be further from the case. Our objective is peace. But there can be no peace until there is victory.
      <br />
      <b>
        Strategy
      </b>
      <br />
      Our strategy to provide material aid is to deliver 100+ vehicles and aid carried east in those vehicles. We collect donations both in cash via the crowd funding Just Giving platform, and in kind to drop-off locations in UK, picked-up by departing vehicle convoys.[mention dination smenue – section 2

      [Moral aid by ….. publicity in local areas??]
      <br />
      <b>
        Why your Support for V4V matters?
      </b>
      <br />
      direct action, efficient -> no overhead and targeted donations according to Ukraine in-country requests. Importance of Ukraine cause-> ref5d., focused tangible direct grass-roots community action]
      <br />
      <img src={pic1} alt="Logo"  style={{ width: 'auto', height: '140px' }} />
    </div>
  )
}
export default function App() {
  
  return (
<Router>
      <div>
        <Header />
        <Navbar />
        <Routes>
        <Route path="/whoweare" element={<WhoWeAre /> }/>
        <Route path="/donations" element={<DonationsMenu /> }/>
        <Route path="/v4vcommunity" element={<Community /> }/>
        </Routes>
      </div>
    </Router>
  );
}

