import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import ReactDOM from 'react-dom';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import logo from './v4v.jpg';
import pic1 from './pic1.png';
import pic2 from './pic2.png';
import pic3 from './pic3.png';
import pic4 from './pic4.jfif';
import news1 from './news1.jpg';
import vid1 from './vid1.mp4'
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
        <li><a href="/whatwedo">What we do</a></li>
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
function WhatWeDo(){
  return (
    <div>
      <b>Governments Can Not do Everything: “Grass-Roots” Community Actions is Vital  </b>
      <br/>
    
You may have the impression that Ukraine is getting everything it needs from NATO and the allied government institutions. Such impressions are far from reality. Although Ukrainian receives huge amounts of government-government aid for which it is hugely grateful, in fact: Ukrainian families and works communities from small restaurants to large companies, Ukrainian charities, as well as the vital international non-governmental organizations including V4V, are all rallying to supply huge amounts of aid.   
<br/>
<br/>
<b>Our Donations “Menu” </b>
<br/>


Like a food menu you choose according to taste and budget. Please visit <a href='https://docs.google.com/spreadsheets/d/15A2Mjn1ExSq7PeJgU3k8o0FVUMm-214yyE7G2NPNs2A/edit#gid=145350238'>V4V donations</a>  which is frequently updated with requests from our network within Ukraine. It is what they need now. Our menu is based on the Ukrainian State System for Humanitarian Aid, in two main:  
<ul> <li>Humanitarian Aid, comprising: </li>
<ul>
  <li>
One-ton 4x4 Vehicles for field ambulances, and general utility duties   </li>

<li>Foodstuffs </li>

<li>Sanitary and Hygienic  </li>

<li>Medical Devices and Products </li>

<li>Clothing and Shoes  </li>
</ul>
<li>Technical Aid, comprising: </li>

<ul>
<li>Ten-ton AWD Vehicles for mobile command centers and workshops </li>

<li>Reconnaissance equipment  </li>

<li>Communications equipment </li>

<li>Other  </li>
</ul>
</ul>
<b>You Get to Choose: We Will Implement Your Choice  </b>
<br/>
You can specify that your cash donation should be spent on particular items off the menu, and we will provide you with evidence that your donation has been spent for that purpose, and where possible follow-up information of use to which it has been put in Ukraine. 
<br/>
Or, you can select items off the menu, purchase them yourself according to the specific description and normally a web-link, and deliver them in person to V4V collection points described on the menu. 
<br/>
<br/>
<b>Clarifications or Questions </b>
<br/>
In case of questions, please email our donations co-ordinator Illia@energy-cs.com Illia is originally from the southern Ukraine, and has travelled to the UK under the Humanitarian Protection Scheme. He maintains the menu and can clarify questions both on the demand side in Ukraine with requestors there, and on the supply side on what is available to buy in UK/ EU. 
      </div>
  )
}
// App component
function WhoWeAre(){
  return (
    <div>
    <b> From Cheshire, Shropshire and Beyond - United for Peace </b>
     <br />
 
Hello and welcome. We're a community from Cheshire and Shropshire, consisting of both British and Ukrainian individuals, united with a singular purpose: to bring about an end to the ongoing conflict in Ukraine. Our grass-roots community and donors can each in their own small ways take direct action to end the war. 

<br />
      <br />

      <b>Our Objective: Working Towards Peace - Victory for Peace </b> 
<br />
Let's set the record straight: Though our name includes the word "Victory," we're not advocating war. We're advocating peace. Real peace. There will be no end to the war until there is Victory. Our work will continue until The Victory.:  
<br />
 
<br />
<b>Our Strategy: Direct Aid - Delivered </b>
<br />
We make a genuine impact by offering both material aid and moral support direct to the Ukrainian people: 

<ul>
  <li>Material aid. Our approach is straightforward. We're planning to send 100+ vehicles, which will also carry vital supplies directly to those affected by the conflict. These vehicles will be part of organised convoys, ensuring that your contributions reach where they are needed most. The live <a href='https://docs.google.com/spreadsheets/d/15A2Mjn1ExSq7PeJgU3k8o0FVUMm-214yyE7G2NPNs2A/edit#gid=145350238'>V4V donations</a> is regularly updated with requests from our contract network in Ukraine. It is what they need now.  </li>



  <li>How can you get involved? It's simple. We're accepting financial donations through our crowdfunding platform <a href='https://www.justgiving.com/crowdfunding/Vehicles4Victory?utm_term=34mvMnqP3'> Just Giving</a>. We also welcome donations of goods at specified drop-off locations across the UK. </li>

 

<li>Moral support. Just as each of us is “boosted” by moral support of others around us; the Ukrainian people are boosted by our demonstration of support. Willing them on to survive the challenges of war, and to push onward to Victory.</li>  
</ul>



<b>Our Approach: Efficient Direct Action - Zero Fluff </b>
<br />
When it comes to making a difference, we don't believe in beating around the bush. We're all about direct action—no overhead, no unnecessary expenses.  Every penny you donate goes straight to the heart of the issue, addressing specific needs identified by our Ukrainian partners and partner organizations on the ground.  Examples with recent one-minute videos that explain what the Ukrainian organizations do and the value of your support:  
<ul>
  <li>
International Aid Legion, who’s work includes converting one-ton 4x4 to field ambulances, equipping them with stretcher beds and medical accessories.  They aim to provide 10 ambulances every month, depending on donations. The ambulances dramatically increase survival chances by getting the wounded to treatment within the “golden hour” when the chance of survival is greatest
</li>
<ReactPlayer playing url='https://v4vvideo.s3.amazonaws.com/vid1.mp4'
              playing={false} 
                height='350px'
                width='180px'
                controls='true'
            />
<li>Front Line Kitchens, who’s work is to prepare and deliver fresh food packages, prepared daily by, to feed front-line soldiers. This recent video explains what the Kitchens do and the value of our support – video July 2023 [in cutting preparation]  

</li>
<li>
Angel of Life, who’s work includes collecting vehicles and funding for vehicles, channeling the vehicles where most needed. Colleting diverse other humanitarian aid, foodstuffs, etc. 
</li>
</ul>

 
 

<b>Why It Matters: The Vital Cause of Ukraine </b>
<br/>
It's not just another headline; the situation in Ukraine is crucial, affecting the security of Europe, and the economic impacts include historically high food and fuel prices. For the  rational reasoning into why this cause is so important, have a look at our “deep dive” section and reference materials.   

<br/>
<br/>
<b>Our Focus: Grassroots Impact </b>
<br/>

We're not about grand gestures that look good on paper but achieve little. Our work is about tangible, community-level action that brings immediate relief and long-term support to those who need it most. By aligning our strategy with the actual needs expressed by communities in Ukraine, we ensure that your donations are targeted, impactful, and meaningful. 

 

So, let's pull together. Your involvement can be a game-changer in someone's life, contributing to the larger aim of peace and stability. It's community action at its most potent and direct. Join us. 
      

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
        <Route path="/whatwedo" element={<WhatWeDo /> }/>
        <Route path="/v4vcommunity" element={<Community /> }/>
        <Route path="/news" element={<News /> }/>
        </Routes>
      </div>
    </Router>
  );
}

//google api key AIzaSyAiEY6dXPn5CAK0mXbhFF2zAHncQ0Mvrjg