import React from 'react'
import Careers from './Careers'
import { BrowserRouter , Routes,  Route, Link } from 'react-router-dom';


export default function box1() {

    function abc(){
        document.getElementById("home").classList.toggle("over")
     }


     window.onscroll = function() {myFunction()};

     function myFunction() {
       if (document.documentElement.scrollTop > 700) {
         document.getElementById("bottom").className = "test";
         document.getElementById("ul1").classList.add('ul2');
         document.getElementsByClassName("img1")[0].classList.add("img1show");
         document.getElementsByClassName("img2")[0].classList.add("img2show");
         document.getElementsByClassName("img3")[0].classList.add("img3show");
         document.getElementsByClassName("img4")[0].classList.add("img4show");
       } else {
         document.getElementById("bottom").className = "";
         document.getElementById("ul1").classList.remove('ul2');
         document.getElementsByClassName("img1")[0].classList.remove("img1show");
         document.getElementsByClassName("img2")[0].classList.remove("img2show");
         document.getElementsByClassName("img3")[0].classList.remove("img3show");
         document.getElementsByClassName("img4")[0].classList.remove("img4show");
       }
       if (document.documentElement.scrollTop > 3030 && document.documentElement.scrollTop < 4930 ) {
        document.getElementsByClassName("box6child3")[0].classList.add('relative');
        document.getElementsByClassName("yellow")[0].classList.add('relative2');
      }else{
        document.getElementsByClassName("box6child3")[0].classList.remove('relative');
        document.getElementsByClassName("yellow")[0].classList.remove('relative2');
      }

      if(document.documentElement.scrollTop >4931){
        document.getElementsByClassName('box6child1')[0].classList.add('box6child1-show')
        document.getElementsByClassName('yellow')[0].classList.add('yellow-show')
      }else{
        document.getElementsByClassName('box6child1')[0].classList.remove('box6child1-show')
        document.getElementsByClassName('yellow')[0].classList.remove('yellow-show')
      }
      if(document.documentElement.scrollTop > 4000){
        document.getElementsByClassName('rtosuit')[0].classList.add('rtosuit-none')
        document.getElementsByClassName('rtoimg')[0].classList.add('rtosuit-none')
        document.getElementsByClassName('rtoimg2')[0].classList.add('rtosuit-none')
        document.getElementsByClassName('rtoimg3')[0].classList.add('rtosuit-none')
        document.getElementsByClassName('rtoimg4')[0].classList.add('rtosuit-none')
        document.getElementsByClassName('rtoimg5')[0].classList.add('rtosuit-none')
        document.getElementsByClassName('kwik')[0].classList.add('kwik-show')
        document.getElementsByClassName('kwikimg1')[0].classList.add('kwikimg1-show')
        document.getElementsByClassName('kwikimg2')[0].classList.add('kwikimg1-show')
        document.getElementsByClassName('kwikimg3')[0].classList.add('kwikimg1-show')
        document.getElementsByClassName('kwikimg4')[0].classList.add('kwikimg1-show')

      }else{
        document.getElementsByClassName('rtosuit')[0].classList.remove('rtosuit-none')
        document.getElementsByClassName('rtoimg')[0].classList.remove('rtosuit-none')
        document.getElementsByClassName('rtoimg2')[0].classList.remove('rtosuit-none')
        document.getElementsByClassName('rtoimg3')[0].classList.remove('rtosuit-none')
        document.getElementsByClassName('rtoimg4')[0].classList.remove('rtosuit-none')
        document.getElementsByClassName('rtoimg5')[0].classList.remove('rtosuit-none')
        document.getElementsByClassName('kwik')[0].classList.remove('kwik-show')
        document.getElementsByClassName('kwikimg1')[0].classList.remove('kwikimg1-show')
        document.getElementsByClassName('kwikimg2')[0].classList.remove('kwikimg1-show')
        document.getElementsByClassName('kwikimg3')[0].classList.remove('kwikimg1-show')
        document.getElementsByClassName('kwikimg4')[0].classList.remove('kwikimg1-show')
      }
     }
  
      
    




    
  return (
   <>
    <header>
    <div className='design'>
        <div id='design1'></div>
        <div id='design2'></div>
        <div id='design3'></div>
        <div id='design4'></div>
        <div id='design5'></div>
        <div id='design6'></div>
        <div id='design7'></div>
        <div id='design8'></div>
        <div id='design9'></div>
        <div id='design10'></div>
        <div id='design11'></div>
        <div id='design12'></div>
        <div id='design13'></div>
        <div id='design14'></div>
        <div id='design15'></div>
        
    </div>
        <nav id='bottom'>
          <div className='navbar1'>
            <img src='images/logo.svg'></img>
          </div>

          <BrowserRouter>
          <ul id="ul1"className='ul1'>
            <li >
            <Link className='careers' to="/Careers">Careers</Link></li>
            <li>
            <Link className='careers' to="/Careers">Success Stories</Link></li>
            <li>
            <Link className='careers' to="/Careers">API Docs</Link></li>
            <li>
            <Link className='careers' to="/Careers">Company</Link></li>
            <li>Contact Us</li>
          </ul>
          <Routes>
          
          <Route path="Careers" element={<Careers/>} />
          
          
        </Routes>
          </BrowserRouter>
          <div className="rispon">
            <i  className="fa-solid fa-bars" onClick={abc}></i>
            <ul id="home" className="home">
                <li><a href="">Careers</a></li>
                <li><a href="">Success Stories</a></li>
                <li><a href="">API Docs</a></li>
                <li><a href=""> Company</a></li>
                <li><a href=""> Contact Us</a></li>
                
            </ul>
        </div>

        </nav>
        <div className='box1'>
        <div className="box1child">
            <p>Gikwik is</p> <span id="forbes">Forbes</span> <span id="asia">Asia's Top 100 Companies to Watch -2023</span>
            <a href="">Read More</a>
            </div>
        </div>
        <div className='head'>
        <p>THINK CONVERSION. THINK GOKWIK.</p>
            <h1>Improve<span> Conversion</span> rates <br></br>and reduce<span> RTO</span></h1>
            <p>Increase profitability for your ecommerce or D2C business with higher<br></br> conversions, reduced acquisition costs and increased delivery rates</p>
            <a href="">Start Now<i class="fa-solid fa-chevron-right"></i></a>
        </div>

    </header>
   </>
  )
}

    
       
     
    