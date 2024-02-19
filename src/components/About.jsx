import React from 'react';
import potted from '../assets/potted.png'
import grp1 from '../assets/grp1.png'
import grp2 from '../assets/grp2.png'
import grp3 from '../assets/grp3.png'
import grp4 from '../assets/grp4.png'
import basil from '../assets/Basil.png'
const About = () => {
  return (
    <div className='bg-sky text-white '>
    <div className="flex flex-col sm:flex-row">
  <div className="flex-1 sm:ml-24 mt-20">
    <p className='mb-2 text-3xl'>About Amauwa <br /> Landscaping</p>
    <hr className="border-b-4 border-navy w-20 mb-4" />
  </div>
  <div className="flex flex-col flex-1 sm:mr-20 mt-20">
    <p>Amauwa Landscaping specializes in creating stunning outdoor spaces that blend natural beauty with innovative design. Our team of experts is dedicated to bringing your vision to life with creativity and precision. From residential gardens to commercial landscapes, we deliver exceptional results that exceed expectations. Contact us today to transform your outdoor space with Amauwa Landscaping.</p>
  </div>
</div>

    
    {/* Image Section */}
    <div className="flex justify-end mr-4 ">
      <img src={potted} className="" alt="" />
    </div>
      <div className=''>
        <div className='flex justify-end'>
          <div className='text-right mr-20'>
            <h1 className='mb-2 text-3xl'>Our process</h1>
            <hr className="border-b-4 border-navy w-20 mb-4 justify-end" /> {/* Horizontal line */}
          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-4 sm:py-4 md:py-6 lg:py-8 xl:py-10 justify-center items-start'>
          {/* Card 1 */}
          <div className='flex flex-col items-center justify-start bg-navy text-white shadow-lg p-4 h-full transition-transform transform cursor-pointer max-w-xs relative'>
  <img src={grp1} alt="Card Image" className="absolute  left-0 top-1/2 transform -translate-y-1/2" style={{ width: '50px', height: '50px', left: '-20px' }} />
  <h2 className='text-3xl font-signature mb-2 text-center' style={{ fontWeight: 'bold' }}>01</h2>
  <p className='font-bold'>Send inquiry</p>
  <p className='mt-4'>You send us an inquiry</p>
</div>



          {/* Card 2 */}
          <div className='flex flex-col items-center justify-start bg-navy text-white shadow-lg p-4 h-full transition-transform transform cursor-pointer max-w-xs relative'>
          <img src={grp2} alt="Card Image" className="absolute  left-0 top-1/2 transform -translate-y-1/2" style={{ width: '50px', height: '50px', left: '-20px' }} />
            <h2 className='text-3xl font-bold font-signature mb-2 text-center'>02</h2>
            <p className='font-bold'>Consultation & Quote</p>
            <p className='mt-4'>We visit site, assess the environment & give quote</p>
          </div>

          {/* Card 3 */}
          <div className='flex flex-col items-center justify-start bg-navy text-white shadow-lg p-4 h-full transition-transform transform cursor-pointer max-w-xs relative'>
          <img src={grp3} alt="Card Image" className="absolute  left-0 top-1/2 transform -translate-y-1/2" style={{ width: '50px', height: '50px', left: '-20px' }} />
            <h2 className='text-3xl font-bold font-signature mb-2 text-center'>03</h2>
            <p className='font-bold'>Design & Plan</p>
            <p className='mt-4'>After confirmation, we plan for the new design</p>
          </div>

          {/* Card 4 */}
          <div className='flex flex-col items-center justify-start bg-navy text-white shadow-lg p-4 h-full transition-transform transform cursor-pointer max-w-xs relative'>
          <img src={grp4} alt="Card Image" className="absolute  left-0 top-1/2 transform -translate-y-1/2" style={{ width: '50px', height: '50px', left: '-20px' }} />
            <h2 className='text-3xl font-bold font-signature mb-2 text-center'>04</h2>
            <p className='font-bold'>Start working</p>
            <p className='mt-4'>We officially start the job</p>
          </div>

        </div>
      </div>
      <div className="flex justify-start ">
      <img src={basil} className="" alt="" style={{ width: '200px', height: '150px', left: '-20px' }} />
    </div>
    </div>
  );
};

export default About;
