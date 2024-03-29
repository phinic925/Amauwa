import React from 'react';
import { GoCheckbox } from "react-icons/go";
import { servicesData } from '../..';
import { gallery } from '../..';

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
    

    <div className=" mt-12 ml-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-11">
    <div className="mb-8">
      <h1 className="text-3xl sm:text-3xl md:text-5xl font-bold mb-4">Other Services</h1>
      <p className="mb-4">
        Amauwa offers the best landscaping services in Nairobi. We aim to leave your compound beautiful and with a long-lasting impact.
      </p>
      <div className=''>
      <ul className="list-disc pl-4 font-roboto">
        <li className="flex items-center mb-2"  >  <GoCheckbox className="text-green-500 h-5 w-5 mr-2" />
      
          Designing baskets
        </li>
        <li className="flex items-center mb-2">
        <GoCheckbox className="text-green-500 h-5 w-5 mr-2" />
          Propagation
        </li>
        <li className="flex items-center mb-2">
        <GoCheckbox className="text-green-500 h-5 w-5 mr-2" />
          Designing baskets
        </li>
        <li className="flex items-center">
        <GoCheckbox className="text-green-500 h-5 w-5 mr-2" />
          Cutting edges
        </li>
      </ul>
    </div>
    
      <button className="py-2 mt-4 px-4 bg-customGreen text-white rounded-full hover:bg-green-700 transition duration-300">Get Quote</button>
    </div>
    <div className="mb-8 mt-16 sm:mt-0"> {/* Add margin to the bottom of this div */}
    <img src={services} alt="services" className="w-100 h-auto" />
  </div>
  </div>

  <div className='flex justify-end  bg-customGreen text-white h-28'>
  <div className='text-right mr-20'>
    <h1 className='m-4 text-3xl'>Our Gallery</h1>
    <hr className="border-b-4 border-navy w-14 ml-4" /> {/* Horizontal line */}
  </div>
</div>


<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
  {gallery.map((service) => (
    <div key={service.id} className="mb-3 mt-2 relative">
      <img src={service.image} alt={service.alt} className="mb-4 w-full h-full object-cover" />
    </div>
  ))}
</div>

  
    </section>
  );
}

export default Services;
