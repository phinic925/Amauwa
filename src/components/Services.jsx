import React from 'react';
import { servicesData } from '../..';

import services from '../assets/service.png';

function Services() {
  return (
    <section className="p-8 sm:p-12">
    <div className='text-left '>
            <h1 className='mb-2 text-customGreen font-bold text-3xl'>What We Offer</h1>
            <hr className="border-b-4 border-customGreen w-28 mb-4" /> {/* Horizontal line */}
          </div>
  

      <div className="grid grid-cols-1 pt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {servicesData.map((service) => (
        <div key={service.id} className="mb-8 relative">
        <img src={service.image} alt={service.alt} className="mb-4 w-100 h-full object-cover" />


          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h2 className="text-xl font-bold text-white">{service.title}</h2>
        </div>
        </div>
      ))}
    </div>
    

    <div className="mt-12 ml-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-11">
    <div className="mb-8">
      <h1 className="text-3xl sm:text-3xl md:text-5xl font-bold mb-4">Other Services</h1>
      <p className="mb-4">
        Amauwa offers the best landscaping services in Nairobi. We aim to leave your compound beautiful and with a long-lasting impact.
      </p>
      <div>
        <ul className="list-disc pl-4">
          <li>Designing baskets</li>
          <li>Propagation</li>
          <li>Designing baskets</li>
          <li>Cutting edges</li>
        </ul>
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-full mt-4">Get Quote</button>
    </div>
    <div className="mb-8">
      <img src={services} alt="services" className="w-full h-auto" />
    </div>
  </div>
  
    </section>
  );
}

export default Services;
