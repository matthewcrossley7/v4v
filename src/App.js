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
import pic5 from './pic5.png';
import pic6 from './pic6.png';
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
      <b>Governments Can Not do Everything: “Grassroots” CommunityActions is Vital </b>
      <br/>
Any impression that Ukraine is getting everything it needs from NATO and the allied government institutions, is mistaken. Although Ukrainian receiveshuge amounts of Government-to-Government aid, for which it is hugely grateful, in fact,grassrootscommunity action is vital. It accounts for a huge portion of aid, encompassing anything that can be bought on eBay, from vehicles to baby-wipes.
<br/>
After ten years a war, and a year-and-a-half of full-scale invasion, Ukrainian grassrootsaid reserves are depleted. International response is required.V4V’s place in the “grassroots” communitysupport is explained below.
<br/>
<u>Ukrainian Aid: Emergency Response </u>
<ul>
  <li>
  Ukrainian charities, such as our partner organizations listed in “who we are”, sprung up in 2014 and have proliferated since the 2022 full-scale-invasion. 
  They are typically small agile community based.  Angels-of-Life for example are registered in Lviv with approximately 15 community members. Their purpose is to raise funds to supportfrontline servicemen in their contact network. They collect for vehicles, drones, and other aid.The two vehiclesthat we delivered near theKharkhivfrontlines, for example, were donated to a unit led by a formercommanding officer of Matvey a member of the group, pictured below.

  </li>
  <li>
  Ukrainian individuals, are the principal donors to the above charities. They ask not what their country can dofor them, but what they can do for their country.  One charity organisation member told us “I was fortunate before the war to be comparatively well-off with rental properties around the city. Now much of that has been donated.”A lady restaurant manager in Lviv asked us “Can you help? I am raising money for a drone for my boyfriend.”A 19year old lad had set up his stall in Lviv raising funds for 93rd Brigade Artillery, complete with shot-up vehicle and discarded anti-tank rocket launcher. These are just a few examples of grassroots community action seen every day.
  
  </li>
  <img src={pic6} alt="pic5"  style={{ width: 'auto', height: '230px' }} />
  <br/>
  <u>International “Grassroots Aid”: Ukrainian aid reserves are depleted</u>
  <li>
  The long-established NGOs, multi-national, multi-crisis actorssuch as the Red Cross are doing great work. 
  </li>
  <li>
 	Especially-established NGOs, sprung up in response to the 2014 invasion of Ukraine and proliferated after the 2022 full-scale invasion. We at V4Vare one such especially establishedNGO.We collaborate with others who are doing the same work supported by communities in different parts of the UK. For example Pick-ups for Peace based in Edinburgh, the founding members of which have long term agricultural interests in Ukraine - see useful links.

  </li>
</ul>


<b>V4V Vehicles </b>
<br/>
The photos below show a workshop in Kharkiv in Eastern Ukraine that converts ten ambulances per month and paints utility vehicles. The 4x4 ambulances are needed to reach forward lines, bring the injured to field hospitals a safer distance behind the lines. The 4x4 ambulances are essential to get treatment within the ‘golden hour’ dramatically increases chances of survival.

<br/>
<img src={pic5} alt="pic5"  style={{ width: 'auto', height: '230px' }} />
<br/>
The vehicles uses by each of our Ukrainian partner organizations described on the “who we are” page, are tabulated below.
<br/>
<u>Table 1 – Vehicle Manufacturers and Models Requested by our Ukrainian Network & Why the Vehicles are Needed</u>
<br/>
<table>
  <tr>
    <th>Model vs. Use</th>
    <th>Ambulance</th>
    <th>Utility</th>
    <th>Mobile Tire Repair & Tool Station</th>
    <th>Command Centers and Workshop</th>
    <th>Remarks</th>
  </tr>
  <tr>
    <th>Nissan Nivara	</th>
    <th>A</th>
    <th>P</th>
    <th>P</th>
    <th>N/A</th>
    <th>Service agreement with Nissan UA</th>
  </tr>
  <tr>
    <th>Nissan X-trail</th>
    <th>N/A</th>
    <th>A</th>
    <th>N/A</th>
    <th>N/A</th>
    <th>1 Xtrail for</th>
  </tr>
  <tr>
    <th>Mitsubishi L200	</th>
    <th>A</th>
    <th>A</th>
    <th>A</th>
    <th>N/A</th>
    <th>Second after Nivara</th>
  </tr>
  <tr>
    <th>4x4 Vans
Mercedes Vito
 Nissan  
  Pathfinder	</th>
    <th>P</th>
    <th>N/A</th>
    <th>N/A</th>
    <th>N/A</th>
    <th>Height allows medics to access patients head</th>
  </tr>
  <tr>
    <th>Iveco 110M16 Military, or MAN. Ten ton</th>
    <th>N/A</th>
    <th>N/A</th>
    <th>N/A</th>
    <th>P</th>
    <th>DK suppliers best value</th>
  </tr>
  <tr>
    <th>UA Recipients</th>
    <th>Int Aid Legion Dima, Kharkhiv</th>
    <th>Angels of Life Earnst, Lviv	</th>
    <th>Reactive Post Pavel, Kyiv</th>
    <th>Reactive Post Pavel, Kyiv	</th>
    <th></th>
  </tr>
</table>
		 			


	
		
<br/>
<u>Key:</u>
<ul>
<li>
P – Preferred 
    </li>
    <li>
    A – Acceptable 
    </li>
    <li>
    N/A – not acceptable, or not applicable 
    </li>
</ul>

<b>V4V Other Aid </b>
<br/>
We collect for aid to be delivered in our vehicle convoys, or cash transferred to our charitable daughter organization in Ukraine to purchase aid in-country.Our donations “menu” is based on the categories in the Ukrainian State System for Humanitarian Aid. The list is regularly updated with requests from our Ukraine network. It is what they need now!
<u>Table 2 – Other Aid Donations “Menu”</u>
<table>
  <tr>
    <th>Category</th>
    <th colspan="5">Requests from our Ukraine Network</th>
    
  </tr>
  <tr>
    <th colspan="6">
      Humanitarian Aid
    </th>
  </tr>
  <tr>
    <th>
    Foodstuffs
Sanitary and Hygienic 
      </th>
      <th >
      [Illia top 5 by GBP]	
      </th>
      <th width="100px"> 
      </th>
      <th width="100px">
      </th>
      <th width="100px">
      </th>
      <th width="100px">
      </th>
  </tr>
  <tr>
    <th>
    Medical Devices and Products
      </th>
      <th >
      [Illia top 5 by GBP]	
      </th>
      <th width="100px"> 
      </th>
      <th width="100px">
      </th>
      <th width="100px">
      </th>
      <th width="100px">
      </th>
  </tr>
  <tr>
    <th>
    Clothing and Shoes
      </th>
      <th >
      not collecting at present 
      </th>
      <th width="100px"> 
      </th>
      <th width="100px">
      </th>
      <th width="100px">
      </th>
      <th width="100px">
      </th>
  </tr>
  <tr>
  <th colspan="6">
  Technical Aid
    </th>
  </tr>
  <tr>
    <th>
    Reconnaissance equipment
      </th>
      <th >
      [Illia top 5 by GBP]		
      </th>
      <th width="100px"> 
      </th>
      <th width="100px">
      </th>
      <th width="100px">
      </th>
      <th width="100px">
      </th>
  </tr>
  <tr>
    <th>
    Communications equipment
      </th>
      <th >
      Samsung Tab A7		
      </th>
      <th width="100px"> 
      </th>
      <th width="100px">
      </th>
      <th width="100px">
      </th>
      <th width="100px">
      </th>
  </tr>
  <tr>
    <th>
    Other
      </th>
      <th >
      [ferry crossing, fuel – icon like P4P]		
      </th>
      <th width="100px"> 
      </th>
      <th width="100px">
      </th>
      <th width="100px">
      </th>
      <th width="100px">
      </th>
  </tr>
</table>
 	

				

 				

		

 				

		
  <br/>
<b>Deciding Priorities</b>
<br/>
Cash and aid donations are always in short supply.Our team assigns priorities, consulting with our Ukraine partner organizationswhile acting impartially,using up-to-date local knowledge to determine priorities between the competing demands for resources. 
<br/>
<b>You Can Choose: We will Implement</b>
<br/>
If you have a particular priority, you have the option if you wish, instead of leaving it to us to decide priorities, to choose yourself how your donation should be spent.  
<br/>
<br/><u>In cash </u>
<br/>
You can contact our donations coordinator and specify what your cash donation should be spent on. We can usually provide you with evidence that your donation has been spent for that purpose – photos of purchased items, and of handover in Ukraine.
<br/>
<br/>
<u>In Kind</u>
<br/>
You can select items off the menu, purchase them yourself and deliver them in person to V4V collection points. You should contact our donations coordinator before purchase to check the specific item description,delivery points, and normally we can provide you with a www link for purchase.
<br/>
<b>Clarifications: V4V Donations Coordinator </b>
<br/>
You are welcome to email our donations co-ordinator Illia@energy-cs.com. Illia is originally from the southern Ukraine, and has travelled to the UK under the Humanitarian Protection Scheme.He maintains the list and can clarify questions both on the demand side in Ukraine, and the supply side here in UK/ EU.

      {/* <b>Governments Can Not do Everything: “Grass-Roots” Community Actions is Vital  </b>
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
In case of questions, please email our donations co-ordinator Illia@energy-cs.com Illia is originally from the southern Ukraine, and has travelled to the UK under the Humanitarian Protection Scheme. He maintains the menu and can clarify questions both on the demand side in Ukraine with requestors there, and on the supply side on what is available to buy in UK/ EU.  */}
      </div>
  )
}
// App component
function WhoWeAre(){
  return (
    <div>



    <div class="container">
      <img src={news1} alt="Logo"  style={{ width: 'auto', height: '320px' }} id="image"/>
      <b id="text-container"> From Cheshire, Shropshire and beyond - United for freedom and ending war</b>
        </div>

Hello and welcome!
<br />
We are a community from Cheshire, Shropshire and beyond, of British and Ukrainian individuals, united with a <u><b>clear purpose: To take direct action </b></u>to secure freedom for Ukraine and end the war. Our community extends to the EU where we are confident to soon have a center in Germany, and as far as Asia where one of our founding members resides in Singapore. 
<br />
We are a UK registered social enterprise [reg. no pending], with a charitable daughter organization in Ukraine[reg no.pending].  Both entities are regulated by applicable laws in respective countries of registration.
<br />
Let's set the record straight: Though our name includes the word "Victory," and though in addition to humanitarian aid we also collect for technical aid which supports the war effort, we're not advocating war. Our purpose isfreedom and ending war.There will be no end to the war until victory.Our work will continue until victory. 
<br />
<br />
<b>Our Strategy: Support Delivered Direct to Ukraine </b>
We make a genuine impact by offering both <u>material </u> aid and <u>moral </u>support direct to the Ukrainian people:
<br />
<ul>
  <li>
	  <u>Material aid.</u> Our approach is straight forward.We are planning to send 100+ vehicles, which will also carry vital aid directly to those affected by the war. These vehicles and contents will be delivered to our Ukraine partner organizationswith official handover document to ensure vehicles are donated to legitimate recipients.  
  </li>
  <li>
  <u>How can you get donate?</u>It's simple. We are accepting cash donations through our crowdfunding platform <a href='https://www.justgiving.com/crowdfunding/Vehicles4Victory?utm_term=34mvMnqP3'> Just Giving</a>. We also welcome donations of goods in kind at specified drop-off locations – see“what we do” instructions.

    </li>
    <li>
    <u>Moral support. </u>Just as each of us is “boosted” by moral support of others; the Ukrainian people are boosted by our demonstration of support.  They will shake your hand and hug you for it.  It is their emotional connection to Western freedom.

    </li>
</ul>

<b>Our Approach:Efficient Direct Action, Zero Fluff</b>
<br />
We are all about direct action.  No administrative overhead.  We have a procurement strategy to obtain donated vehicles of buy them for best value. A control procedure ensures as much as possible that vehicles are efficiently and effectively prepared for delivery.  We are economical in terms ofdelivery expenses.Every penny you donate goes straight to the heart of the issue.
<br />
The Ukrainian partner organizations we support, and the value of their work, are explain below, including 60 to 90 second videos: 
<ul>
<li>
	<u>International Aid Legion, </u>who’s work includes converting 4x4s to field ambulances, equipping them with stretcher beds and medical accessories.  They aim to provide  ten ambulances every month, to bring the injured to field hospitals a safer distance behind the lines. The 4x4 ambulances are essential to get treatment within the ‘golden hour’dramatically increases chances of survival.
  <ReactPlayer playing url='https://v4vvideo.s3.amazonaws.com/vid1.mp4'
              playing={false} 
                height='350px'
                width='180px'
                controls='true'
            />
</li>
<li>
<u>Reactive Post,</u> who’s work includesproviding the Ukrainian artillery with mobile command centers, mobile workshops, parts and other non-lethal equipment.  Their moto is “Donate with high precision – to the Ukrainian Artillery.” 
<br/>

<div class="grid-container">
<ReactPlayer class="float-child" playing url='https://v4vvideo.s3.amazonaws.com/IMG_0608_GrandInstruments_Mobile+Workshop.MP4'
              playing={false} 
                height='350px'
                width='180px'
                controls='true'
            />

              <ReactPlayer class="float-child" playing url='https://v4vvideo.s3.amazonaws.com/IMG_0607_GrandInstrucments_4x4+tool+station.MP4'
              playing={false} 
                height='350px'
                width='180px'
                controls='true'
            />
            

            </div>
  </li>
  <li>
  <u>Angel of Life, </u>who’s work includes collecting vehicles, equipment and humanitarian aid, and channeling where most needed – their organization structure is explained in short in “what we do”
  <ReactPlayer playing url='https://v4vvideo.s3.amazonaws.com/WhatsApp+Video+2023-09-17+at+07.16.39.mp4'
              playing={false} 
                height='350px'
                width='180px'
                controls='true'
            />
  </li>
  <li>
  <u>Front Line Kitchens,</u> who’s work is to prepare and deliver fresh food packages daily to front-line soldiers. Having spent an evening and sat round the dinner table in a forward command center, we can attest to the physical,socialand psychological sustenance of access to healthy ready front-line meals.

  </li>
 </ul>




<br />
<b>Why it Matters: The Waris Criticaland Winnable</b>
<br/>
It's not just another headline; the war in Ukraine is crucial.  It affects the security of Europe, and the principles of freedom and democracy. The economic impacts of a continuing war or “frozen conflict” will include historically high food and fuel prices– see section “Why we do it, deep dive”. 

<u>Victory is possible. </u> Ukraine has proved itself by repelling the main thrust of the full-scale invasion in 2022.  It continues to be resourceful and resilient. The headline grabbing version of counteroffensive wished-for by Ukraine’s backers has not been possible.  Slowly Ukraine is pushing ahead in a war of attrition, minefields cleared with bayonets in the old-fashioned way, etc.  Ukraine’s supporters, like the Ukrainians themselves,most likely will have to buckle-in for the long haul.  There are no quick fixes in war. 
<br/>
<br/>
<b>Community Action:Direct Impacts</b>
<br/>
We are not about grand gestures that look good on paper but achieve little.Our work is about community-level action to raise donations for vehicles and aid, and delivering directly where it makes an impact:

<ul>
<li>
Ambulances and medical supplies that dramatically increasing the chances of survival.

</li>
<li>
Utility vehicles to efficiently move personnel and equipment around the front, making best use of finite personnel and material resources.

</li>
<li>
Mobile 4x4 tool stations and workshops to repair and service mechanized equipment, reducing down-time and making best use of limited equipment.

</li>


<li>
Other Air including food stuffs necessary for every-day functioning
</li>

 </ul>

<b>So, let's pull together</b>
<br/> 
Your involvement will directly, in its own small way, contribute to the cause of freedom for Ukraine and ending the war.It could even be a game-changer in someone's life–for example: by supplying ambulance vehicles and medical aid.It is community action at its most potent and direct. Join us or support us please.






     {/* <br />
 
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
       */}

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