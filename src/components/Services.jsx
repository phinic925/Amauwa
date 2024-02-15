import React from 'react'
import frontyard from '../assets/frontyard.png'
import kitchen from '../assets/kitchen.png'
import maintenance from '../assets/maintenance.png'
import interior from '../assets/interior.png'


function Services() {
  return (
    <section>
    <h1>What We Offer</h1>
    <div>
    <div>
    <img src={frontyard}/>
    <h2>FrontYard Landscaping</h2>
    </div>
    <div>
    <img src={kitchen}/>
    <h2>Kitchen Garden</h2>
    </div>
    <div>
    <img src={maintenance}/>
    <h2>Garden Mintenance</h2>
    </div>
    <div>
    <img src={interior}/>
    <h2>Interior  Plants </h2>
    </div>
    </div>


    <div>
    <h1>Other Services</h1>
    <p>lAmauwa offers the best landscaping services in Nairobi. We aim to leave your compound beautiful and with a long-lasting impact.</p>
    
    <div>
    <ul>
    <li>Designing baskets</li>
    <li>Propagation</li>
    <li>Designing baskets</li>
    <li>Cutting edges</li>
    </ul>
    </div>

    <button>Get Quote</button>
    </div>

    
    </section>
  )
}

export default Services