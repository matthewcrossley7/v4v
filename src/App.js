import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import logo from './v4v.jpg';
import pic1 from './pic1.png';
import pic2 from './pic2.png';
import pic3 from './pic3.png';
import pic4 from './pic4.jfif';
import news1 from './news1.jpg';
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
function News(){
  return(
    <div id="newstext">
      <h1>Day 3:</h1>
      <div class="container">
      <img src={pic4} alt="Logo"  style={{ width: 'auto', height: '320px' }} id="image"/>

      <b id="text-container">Day driving from near Nurnberg > near Vienna, 352 miles today; 1,145 total </b>
      
      </div>
       

Over a long breakfast catch up with Marcio who I’d last seen 5-years ago, we discussed the still positive German attitude to Ukraine, including relevant to us two German vehicles donors who we will contact to share experience – www below. On the way out of Herzo we called at the Mercedes-Gleitze Strasse apartments where my family and I had spent six happy years up to 2009. We soon left Germany behind. In Austria we followed route of the mighty Danube eastwards. 

<br />
      <br />

Main milestones en-route: 
<br />
<ul><li>Herzogenaurach (near Nurnberg) > Regensburg > Linz, no other large towns to note along the mighty Danube which we crossed three times > Bruck an der Leitha (near Vienna)</li> </ul>

We were by now on the “rapid charge” across Europe. Both vehicles are running smoothly and easily cruising at 85pmh. Great value at £4,000 total for the pair. The only glitch of the day being a fine for not having an Austrian vinette – luckily only one vehicle was pulled up. Next time we will know to comply. 
<br />
      <br />
 

Darkness came early with a heavy rainstorm as we rounded Vienna. We stopped, and via booking.com checked-in at Bruck an der Leitha, just past Vienna airport. The modes Hotel Rumpler suited our purpose of a bed and beer as it caters almost entirely for construction and maintenance workers at the industrial plants in the area.  

<br />
      <br />

I worked at one such a few years back while employed in plastics production for Borealis GmbH. Whatever your point of view, plastics are all around us. As with any industrial process, our duty as engineers is to serve the needs of modern life while minimising environmental impacts. During my time at Borealis, this is exactly what I found that they did. As a community, we all need to do our bit by correctly recycling - I heard the same story a few days later in Liviv municipal waste treatment. If only people would use the bins correctly! 

<br />
      <br />

Links 
<br />
German vehicles donors <a href="https://www.pkw.de/spendenaktion-ukraine   ">https://www.pkw.de/spendenaktion-ukraine   </a> 
<br />
German vehicles donors <a href="https://cartodonate.com/de   ">https://cartodonate.com/de  </a> 
<br />
Bruck an der Leitha <a href="www.hotel-rumpler.au   ">www.hotel-rumpler.au   </a>
<br />
Borealis plastics <a href="https://www.borealisgroup.com/schwechat   ">https://www.borealisgroup.com/schwechat  </a> 
      <h1>Day 2:</h1>
      <div class="container">
      <img src={pic3} alt="Logo"  style={{ width: 'auto', height: '320px' }} id="image"/>

      <b id="text-container">Day and late-night drive from London > near Nurnburg, 603 miles today; 793 total</b>
      
      </div>
We are taking the “southern route”, to enter Ukraine at Uzhhorod, gateway to the Carpathian Mountains (as opposed to the “direct east route” taken in July Dresden > Kadowiza > Lviv). These mountains are currently the go-to holiday destination for Ukrainian families, whose men of fighting age generally cannot leave the country (imagine that in UK!).  

<br />
      <br />
Main milestones en-route: 

London > Dover > Dunkirk > Brussels > Liege > Aachen > Colone > Koblenz > Frankfurt > Wurzburg > Herzogenaurach or “Herzo” (near Nurnberg) 
<br />
      <br />
 

From 3pm landing at Dover, an uneventful drive took us close to Frankfurt before dark. We had committed to be in Hertz that night, but optimistically trusted in Google’s estimated eight hours drive time. Convoy night driving takes concentration, especially in heavy traffic round conurbations. Night driving will be unavoidable in winter - where we will think of some additional measures such as convoy lights. 
<br />
      <br />
 

We gratefully reached our hotel after midnight. Our room had been kindly sponsored by Marcao Bortelo, an old colleague from Siemens who’s power generation division is headquartered in the neighbouring town of Erlangen. Marcio, thanks from V4V and Ukraine! 

<br />
      <br />

The NOVINA Hotel Herzo-Base is adjacent to Addidas Global HQ. The story of how not only Adidas, but also Puma, two Global sportswear brands come to be headquartered in the tiny village of Herzo is a fascinating one. They both stemmed from the Dasler family’s enterprise post-WW1. By 1925 the Dasslers were making leather Fußballschuhe (football boots) with nailed studs and track shoes with hand-forged spikes – www link below gives the full story. In brief, after a family argument, one of the brothers split off to found Puma, the other remained and built Adidas.  

<br />
      <br />

The NOVINA is the hotel of choice for Addidas sponsored Global Galactico’s. We gratefully fell into bed beneath images of impossibly athletic and beautiful sports stars.  

<br />
      <br />

Links 

Herzo Novina <a href="https://www.novina-hotels-en.de/novina-hotel-herzogenaurach/  ">https://www.novina-hotels-en.de/novina-hotel-herzogenaurach/  </a>
<br />
    
Herzo Adidas story <a href="https://en.wikipedia.org/wiki/Adolf_Dassler   ">https://en.wikipedia.org/wiki/Adolf_Dassler  </a>

      <h1>1st Sep 2023 – V4V News</h1>
      <br />
      <div class="container">
      <img src={news1} alt="Logo"  style={{ width: 'auto', height: '320px' }} id="image"/>
      <b id="text-container">Day 0, miles 0, Chester UK –  Chester send-off (Convoy 2)</b>
        </div>

      A group of men holding a flag
      Description automatically generatedLeaving Chester on 1st September, delivering essential 4x4 utility vehicles which will be used to take fresh food packages prepared daily by the Lviv Volunteer Kitchen to feed soldiers on the front line in the North-East of the country.
      <br />
      <br />
      Vehicles For Victory had an official start to this second trip at midday from outside The Storyhouse, in front of Chester Town Hall. On this trip there are two vehicles and drivers heading for Ukraine. Ed Adams from Staffordshire is joining the expedition.
      <br />
      <br />
      Thanks for all the support on the build up, especially to neighbor Nigel, took time out from his busy plumbing schedule to wave us off -  looking dashing in the T-shirt of 17th Century Ukrainian resistance fighter.
      <br />
      <br />
      <b>Day 1, miles 190 today, 190 total, London W2 – Victory Services Club, overnight (Convoy 2)</b>

      <br />
      <br />


      From Chester we drove down to Central London. The Victory Services Club, an exponent of old school service and charm, and who have given jobs to many displaced Ukrainian ladies, had kindly sponsored V4V with two beds – and am amazing breakfast, including deep fried toast - for our overnight stay, and fueling us the next morning.
      <br />
      <br />
    </div>
  )
}
class  DonationsMenu extends Component{
  state = {
    data: [],
};
componentDidMount() {
  // Replace with your own API key or OAuth client ID
  const API_KEY = 'YOUR_API_KEY';
  const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID';
  const RANGE = 'Sheet1!A1:D10';

  const API_URL = `https://sheets.googleapis.com/v4/spreadsheets/15A2Mjn1ExSq7PeJgU3k8o0FVUMm-214yyE7G2NPNs2A/values/Sheet1!A1:D10?key=AIzaSyAiEY6dXPn5CAK0mXbhFF2zAHncQ0Mvrjg`;

  axios.get(API_URL)
      .then(response => {
          const values = response.data.values;
          this.setState({ data: values });
      })
      .catch(error => console.error('Error fetching data:', error));
}
render() {
  const { data } = this.state;
  return(
    <div>
   <img src={pic2} alt="Logo"  style={{ width: 'auto', height: '140px' }} />
   <div>
                <h1>Google Sheets Data</h1>
                <table>
                    <tbody>
                        {data.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {row.map((cellData, cellIndex) => (
                                    <td key={cellIndex}>{cellData}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
  </div>
  
  
  
  )
}
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
        <Route path="/news" element={<News /> }/>
        </Routes>
      </div>
    </Router>
  );
}

//google api key AIzaSyAiEY6dXPn5CAK0mXbhFF2zAHncQ0Mvrjg