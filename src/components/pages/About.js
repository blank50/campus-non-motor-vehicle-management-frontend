import React, { Component} from 'react';
import './about.css'
// import image from '../img/wenzhou.jpg'
// import image from './wenzhou.jpg'
import Select from 'react-select'
import img1 from './wenzhou.jpg'
import img2 from './6403.jpg'
import img3 from './640-2.jpg'
import img4 from './bosh.jpg'
import img5 from './handling.jpg'
import img6 from './comfort.jpg'
import img7 from './design.jpg'
import img8 from './headlight.jpg'
import img9 from './safety.jpg'
import img10 from './spec.jpg'

const About = () => {
  return (
    <div className="htcc">
      
      <h1 className="" align="center">Wenzhou University</h1>
      <img src={img1} className="img1c" alt="" />
      <h1>How to Legally Drive an E-Bike in China</h1>
      <img src={img2} className="img2c" alt="" />
      <br></br>
      Getting around in China is surprisingly easy -
       all major cities have extensive bus and subway networks that allow you to get to your destination in a very affordable way. Still, nothing beats the convenience and freedom of having your own vehicle. Buying a car in China can get pricey, and you will also need to obtain a local Driving License before you can hit the road
      
<h1>What You Should Know About China's New E-bike Regulations</h1>
<p>The Ministry of Industry and Information Technology released extensive new regulations regarding the use of e-bikes across the country, effective since April 2019. Based on international standards enforced in the EU and Japan, the new regulations bring major updates to the technical requirements of e-bikes. Specifically, vehicles should now respond to the following criteria:</p>
<p>Speed cannot exceed 25km/hr</p>
<p>Maximum 48v or 400W engine</p>
<p>Weight should be lower than 55kg</p>

<h1>Where to Buy an E-bike</h1>
<p>You can buy an e-bike online through Taobao, although we would recommend to purchase it offline at local retailer shop.
The latest Sundiro Honda S07 model comes with a whole range of features.
 Users don't even need a driver's license, something which can be difficult for foreigners in China to get.
</p>
<img src={img3} className="img3c" alt="" />
<p>
<span>The stable and efficient BOSCH motor comes with a 3-year warranty. Meanwhile, the motorcycle-grade hydraulic shock absorber and soft leather seat will ensure you ride comfortably.</span></p>
<img src={img4} className="img4c" alt="" /><br></br>

<img src={img5} className="img5c" alt="" /><br></br>
<img src={img6} className="img6c" alt="" /><br></br>
<p>
Riding should also be trendy! That's why the S07 comes in six fashionable colors so you can ride around in style
</p>
<img src={img7} className="img7c" alt="" /><br></br>
<p>Safety is, of course, a number one priority.
 With this in mind, the S07 bicycle is equipped with a silent dual pump opposite cylinder disc brake, high-quality headlight LED as well as wet-ground adhesion tires.
 </p>
<img src={img8} className="img8c" alt="" /><br></br>
<img src={img9} className="img9c" alt="" /><br></br>
<img src={img10} className="img10c" alt="" /><br></br>








<h1>How to Register Your New E-bike</h1>
<p>To alleviate traffic congestion in China's busiest cities, authorities have started to clamp down on unlicensed e-bike drivers. Regulations vary from city to city:</p>
<p><strong>Beijing</strong>: Owners must register their e-bike within 15 days from purchase and get the proper license plate</p>
<p><strong>Shanghai</strong>:Owners must register their e-bike within 15 days from purchase and get the proper license plate</p>
<p><strong>Shenzhen</strong>:e-bikes must be registered with a proper license plate. In addition, helmets are required – failure to wear one will result in a 200 RMB (USD 30) fine</p>
<p><strong>Guangzhou</strong>:e-bikes are not allowed</p>
<p>If you are not sure about the current regulations in your city, try to check with the nearest traffic Management Bureau (交管局). </p>
<p>In theory, any bike sold after April 15, 2019 should meet the latest requirements. However if you decide to buy a second-hand bike from an individual seller, it is important to verify that the bike is eligible for licensing. Local traffic management authorities now keep a catalog of all authorized electric vehicles eligible for a license plate.</p>      
      
      


    </div>
  );
};


export default About;
