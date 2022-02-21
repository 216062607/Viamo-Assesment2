import React ,{useState}from 'react';
import Image from 'next/image';
import ButtonIncrement from './incButton';
import ButtonDecrement from './decButton';
import Display from './display';

function LandingPage({items}) {  
  
   // State to store count value
   const [count, setCount] = useState(0);
   const incrementCount = () => 
    // Update state with incremented value
    setCount(count + 1);
    //  Update state with incremented value
    let decrementCount = () => setCount(count - 1);

    if(count<=0) {
      decrementCount = () => setCount(1);
    }

  

  
  return <div className='Container'>

          <div className='container0'>
              <img src='https://fe-assignment.vaimo.net/product-images/quadcopter-drone-with-camera.jpg' width={416} height={416} alt=''/>
          </div>
         

          <div className='container2'>
            <div className='ready'>
              <a>Ready to ship</a><p>in stock</p>
            </div>
              <div className='name'>  
            <a>  <p>{items.product.name}  {items.product.tags[0]}</p>
                 
             </a>
               
                  </div>
                    <div className='star'>
                     <a> <img src='/star.png' width={14} height={14} alt=''/> <img src='/star.png' width={14} height={14} alt=''/> <img src='/star.png' width={14} height={14} alt=''/> <img src='/star.png' width={14} height={14} alt=''/> <img src='/star.png' width={14} height={14} alt=''/> </a>
                  </div>
                    <div className='mid-sec'>
                    <div className='price-s'>
                    <p>{items.product.options.battery_accessories.price.currency.symbol} {items.product.options.battery_accessories.price.value}- {items.product.options['4k'].price.currency.symbol} {items.product.options['4k'].price.value}/ option 2 Options (Min.Order) </p>
                    </div>
                     <div className='line'>
                    <a>R98.12 - R1,119.14 </a>
                    </div>
                    


                    </div>
                    <br/>
                  <div className='container1'>
                      <a><img src='/logo.png' width='76px'  height='40px'alt=''/> .Free shipping</a>

                  </div>
                  <div className='cart'>
                    <a>{items.product.discount.amount} Discount ends in {items.product.discount.end_date}</a>
                  </div>

                <div className='quantity'>
                  <div className='options'>
                    <a>options</a>
                  </div>
                  <div className='options2'>
                  <a>2</a>
                  </div>
                  <div className='options3'>
                  <a>1</a>
                  </div>
                <div className='qty'>
                <div className='inc btn' >

<                       button onClick={decrementCount}><img src='/plus.png' width={14} height={14} /></button>
                        </div>
                        <div className='count'>
                          {count}
                        </div>
                        <div className='dec btn'><img src='/minus.png' width={14} height={14} /></div>
                  </div>

                  <div className='qty'>
                <div className='inc btn' >

<                       button onClick={incrementCount}><img src='/plus.png' width={14} height={14} /></button>
                        </div>
                        <div className='count'>
                          {count}
                        </div>
                        <div className='dec btn'><img src='/minus.png' width={14} height={14} /></div>
                  </div>
                  
                  







                  <div className='qty'>
               
                        <div className='dec btn'><img src='/minus.png' width={14} height={14} /></div>
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
         
            <div className='container3'>
                <div className='checkout'>
                  <a>{items.product.shipping.method.country} {items.product.shipping.method.cost.currency.symbol} {items.product.shipping.method.cost.value}</a>
                  <br/>
                  <a>{items.product.shipping.lead_time.info}</a>
                  
                
                
              
             
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
