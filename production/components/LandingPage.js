import React ,{useState}from 'react';
import Image from 'next/image';
import ButtonIncrement from './incButton';
import ButtonDecrement from './decButton';
import Display from './display';

function LandingPage({items}) {      
  
  //increment and decrement function
  const [counter, setCounter] = useState(1);
  const incrementCounter = () => setCounter(counter + 1);
  let decrementCounter = () => setCounter(counter - 1);

  if(counter<=1) {
    decrementCounter = () => setCounter(1);
  }
    
  return <div className='Container'>

            <div className='container0'>
                <img src='/Image.jpg' width={416} height={416} alt=''/>
            </div>
         

            <div className='container2'>
                    <div className='name'>  
                   {(

                   <p>{items.product.name}</p>
                   
                   )}
                    </div>
                    <div className='star'>
                      <img src='/star.png' width={14} height={14} alt=''/>
                      <img src='/star.png' width={14} height={14} alt=''/>
                      <img src='/star.png' width={14} height={14} alt=''/>
                      <img src='/star.png' width={14} height={14} alt=''/>
                      <img src='/star.png' width={14} height={14} alt=''/>
                    </div>
                  <div className='container1'>
                      <img src='/logo.png' width='76px'  height='40px'alt=''/>
                      <div>
                       {(
                     
                   <p>{items.product.amount}</p>
                   
                   )}
                      </div>
                      <div>
                        <a>20% off</a>
                      </div>
                  </div>
                <div className='inc'>
                <div> 
                <ButtonDecrement onClickFunc={decrementCounter}/>
                  <Display message={counter}/> 
                  <ButtonIncrement onClickFunc={incrementCounter}/>
                  
              </div>
              <br/>
              <div> 
              <ButtonDecrement onClickFunc={decrementCounter}/>
                  <Display message={counter}/> 
                  <ButtonIncrement onClickFunc={incrementCounter}/>
              </div>
                <br/>
              <div> 
              <ButtonDecrement onClickFunc={decrementCounter}/>
                  <Display message={counter}/> 
                  <ButtonIncrement onClickFunc={incrementCounter}/>
              </div>
                </div> 
                

            </div>
         

         <div className="card">
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
                  <img src='/icons8-envelope.png' alt=''/>
                  <a>Contact the Supplier</a>
                </div>  
                     
            </div>
         </div>

        </div>;
}

export default LandingPage;
