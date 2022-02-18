import React ,{useState}from 'react';
import Image from 'next/image';
import ButtonIncrement from './incButton';
import ButtonDecrement from './decButton';
import Display from './display';

function LandingPage({items}) {  
  
  /*
  const incrementButton = document.getElementsByClassName('inc');
  const decrementButton = document.getElementsByClassName('dec');

  console.log(incrementButton);
  console.log(decrementButton);*/
    
  return <div className='Container'>

          <div className='container0'>
              <img src='https://fe-assignment.vaimo.net/product-images/quadcopter-drone-with-camera.jpg' width={416} height={416} alt=''/>
          </div>
         

          <div className='container2'>
              <div className='name'>  
              {items &&(<p>{items.product.name}</p>
              )}
               
                  </div>
                    <div className='star'>
                     <a> <img src='/star.png' width={14} height={14} alt=''/> <img src='/star.png' width={14} height={14} alt=''/> <img src='/star.png' width={14} height={14} alt=''/> <img src='/star.png' width={14} height={14} alt=''/> <img src='/star.png' width={14} height={14} alt=''/> </a>
                  </div>
                    <div className='mid-sec'>

                    <p>R78.50 - R895.31 / option 2 Options (Min.Order) </p>
                    <div className='line'>
                    <a>R98.12 - R1,119.14 </a>
                    </div>
                    


                    </div>
                    <br/>
                  <div className='container1'>
                      <a><img src='/logo.png' width='76px'  height='40px'alt=''/> .Free shipping</a>

                  </div>
                <div className='quantity'>
                <div className='qty'>
                        <div className='dec btn'><img src='/minus.png' width={14} height={14} /></div>
                        <input type='text' name='qtyt' id='1' value='0' className='input-filled'></input>
                        <div className='inc btn'><img src='/plus.png' width={14} height={14} /></div>
                  </div>
                  <div className='qty'>
                        <div className='dec btn'><img src='/minus.png' width={14} height={14} /></div>
                        <input type='text' name='qtyt' id='2' value='0' className='input-filled'></input>
                        <div className='inc btn'><img src='/plus.png' width={14} height={14} /></div>
                  </div>
                  <div className='qty'>
                        <div className='dec btn'><img src='/minus.png' width={14} height={14} /></div>
                        <input type='text' name='qtyt' id='3' value='0' className='input-filled'></input>
                        <div className='inc btn'><img src='/plus.png' width={14} height={14} /></div>
                  </div>
                  <div className='footer'>
                        <a><img src='/lock.png'/>Trade Assurance protects your Alibaba.com orders </a>
                        <br/>
                        <br/>
                        <a>Payments : <img src='/visa.svg' width={17} height={12}/> <img src='/mastercard.svg' width={17} height={12}/> <img src='/apple_pay.svg' width={28} height={12}/></a>
                        <br/>
                        <br/>
                        <a>Alibaba.com Logistics   Inspection Solutions </a>
                  </div>
                </div>
                 
            </div>
         
            <div className='container3'>
                <div className='checkout'>
                  <p>Ship to South Africa</p>
                  <p>Ship to South Africa</p>
                  <p>Ship to South Africa</p>
                    <div className="button">
                      <div className='txt1'>
                      <a>Log in to purchase</a>
                    </div> 
                    </div>
                      <br/>
                      <div className="button1">
                          <div className='txt'>
                            <a> <img src='/icons8-envelope.png' alt=''/>  Contact the Supplier</a>
                          </div>                           
                      </div>
                </div>
            </div>

        </div>;
}

export default LandingPage;
