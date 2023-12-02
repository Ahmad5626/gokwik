import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Box1 from './component/box1'
import Box2 from './component/box2'
import Box3 from './component/box3'
import Box4 from './component/box4'
import Box5 from './component/box5'
import Box6 from './component/box6'
import Box7 from './component/box7'
import Box8 from './component/box8'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
<Box1/>
<Box2/>
<Box3/>
<Box4/>
<Box5 h2="Take your business on rocketship?"  p="Drive your business through the highway of success with high conversions, reduced CAC and complete RTO protection" a="Start Now"/>
<Box6/>
<Box7/>
<Box5 h2="Upscale your business Higher and Kwiker"  p="Make a mark in the D2C e-commerce space with enhanced checkout experience, reduced RTO and increased profitability." a="Begin Now"/>
<Box8/>
</>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
