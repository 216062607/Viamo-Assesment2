import React from 'react';
import Image from 'next/image';

function LandingPage({items}) {        
    
  return <div className='Container'>
          <div className='container0'>
         <img src='/Image.jpg' width={416} height={416} alt=''/>
         </div>
         

           <div className='container2'>
             <div className='name'>
             
               <p>Hello world this is me , we are strugling to survive , ow shit whats wrong . its true </p>
             </div>
             <div className='container1'>
             <img src='/logo.png' width={50}  height={50} alt=''/>
             </div>

             <div>
               <h3>Free shipping</h3>
             </div>
             <div>
               <h3>20% off</h3>
             </div>

           </div>
         

         <div className="container3">
            <div className="button">
              <p>Log in to purchase</p>
              </div>
              <br/>
              <div className="button1">
                
                <img src='/icons8-envelope.png' alt=''/>
              <p>Contact the Supplier</p>
                
            </div>
         </div>

        </div>;
}

export default LandingPage;
