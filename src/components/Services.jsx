import React from 'react';
import { servicesData } from '../..';

import services from '../assets/service.png';

function Services() {
  return (
    <section className="p-8 sm:p-12 md:p-16 lg:p-20 xl:p-24">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6">What We Offer</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {servicesData.map((service) => (
        <div key={service.id} className="mb-8 relative">
          <img src={service.image} alt={service.alt} className="mb-4 w-full h-40 object-cover" />
          <h2 className="text-xl font-bold text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {service.title}
          </h2>
        </div>
      ))}
    </div>
    

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4">Other Services</h1>
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
