import React from 'react'
import frontyard from '../assets/frontyard.png'
import kitchen from '../assets/kitchen.png'
import garden from '../assets/garden.png'
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
    <img src={garden}/>
    <h2>Garden Mintenance</h2>
    </div>
    <div>
    <img src={interior}/>
    <h2>Interior Design</h2>
    </div>
    </div>
    
    </section>
  )
}

export default Services