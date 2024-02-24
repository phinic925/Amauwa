import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineFacebook } from 'react-icons/ai';
import vector from '../assets/Vector.png'
import Barley from '../assets/Barley.png'
import Call from '../assets/Call.png'
import Mail from '../assets/Mail.png'
import Location from '../assets/Location.png'
import Facebook from '../assets/Facebook.png'
import Instagram from '../assets/Instagram.png'
import Twitter from '../assets/Twitter.png'

import maintenance from '../assets/maintenance.png'
const Testimonials = () => {
    return (
        <div className='bg-sky text-white'><div className='flex justify-end'>
        <div className='text-right mr-20'>
        <h1 className='mb-2 text-3xl'>What our clients say</h1>
        <hr className="border-b-4 border-navy w-20 mb-4 justify-end" /> {/* Horizontal line */}
        </div>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {/* Testimonial 1 */}
        <div className="flex flex-col items-center">
          <img src={maintenance} alt="Image 1" className="w-24 h-24 rounded-full" />
          <div className='mt-4 text-center'>
            <h1>Phinic Nyangate</h1>
            <p className="mt-2">I hired Amauwa Landscaping to redesign my backyard, and I couldn't be happier with the results!</p>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="flex flex-col items-center">
          <img src={maintenance} alt="Image 2" className="w-24 h-24 rounded-full" />
          <div className='mt-4 text-center'>
            <h1>Phinic Nyangate</h1>
            <p className="mt-2">I hired Amauwa Landscaping to redesign my backyard, and I couldn't be happier with the results!</p>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="flex flex-col items-center">
          <img src={maintenance} alt="Image 3" className="w-24 h-24 rounded-full" />
          <div className='mt-4 text-center'>
            <h1>Phinic Nyangate</h1>
            <p className="mt-2">I hired Amauwa Landscaping to redesign my backyard, and I couldn't be happier with the results!</p>
          </div>
        </div>

        {/* Testimonial 4 */}
        <div className="flex flex-col items-center">
          <img src={maintenance} alt="Image 4" className="w-24 h-24 rounded-full" />
          <div className='mt-4 text-center'>
            <h1>Phinic Nyangate</h1>
            <p className="mt-2">I hired Amauwa Landscaping to redesign my backyard, and I couldn't be happier with the results!</p>
          </div>
        </div>
      </div>
      <hr className="border-t-2  w-1/2 mb-4 mx-auto mt-10" />

      {/* <div className="flex justify-start ">
      <img src={Barley} className="" alt="" style={{ width: '200px', height: '150px', left: '-20px' }} />
    </div> */}
      {/* Contact Form */}
      <div className="h-screen flex items-center">
  <div className="max-w-xl mx-auto flex flex-col md:flex-row bg-white" style={{ borderRadius: '20px 20px 20px 20px' }} >
    {/* Left half */}
    <div className="w-full md:w-1/2 p-8 bg-customGreen" >
      <h1 className="text-2xl mb-3 text-white font-bold">Contact Us</h1>
      <div className="space-y-4 text-left">
        <div className="flex items-center space-x-2">
          <img src={Call} className="w-10 h-10" />
          <span className='text-xl'>Phone</span>
        </div>
        <div className="flex items-center space-x-2">
        <img src={Mail} className="w-10 h-10" />
          <span className='text-xl'>Email</span>
        </div>
        <div className="flex items-center space-x-2">
        <img src={Location} className="w-10 h-10" />
          <span className='text-xl'>Location</span>
        </div>
        <div className="flex mt-4">
          <div className="flex items-center space-x-2 p-2">
          <img src={Facebook} className="w-10 h-10" />
          </div>
          <div className="flex items-center space-x-2 p-2">
          <img src={Twitter} className="w-10 h-10" />
          </div>
          <div className="flex items-center space-x-2 p-2">
          <img src={Instagram} className="w-10 h-10" />
          </div>
        </div>
      </div>
    </div>

    {/* Right half */}
    <div className="w-full md:w-1/2 p-8 rounded-br-lg md:rounded-bl-lg md:rounded-tr-lg">
      <h1 className="text-2xl mb-3 text-black font-bold">Reach Us</h1>
      <p className="mb-5 text-black">Have a question or a quote? Send us a message below.</p>
      <form className="max-w-md mx-auto">
        <div className="flex flex-col space-y-4">
          <input 
            type="text" 
            placeholder="Full Name"
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-green-500"
          />
          <input 
            type="tel" 
            placeholder="Phone Number"
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-green-500"
          />
          <textarea 
            placeholder="Message"
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-green-500"
          ></textarea>
        </div>
        <button 
          type="submit" 
          className="py-2 px-4 bg-customGreen text-white rounded-full hover:bg-green-700 transition duration-300 mt-4 mx-auto block"
        >
          Get Quote
        </button>
      </form>
    </div>
  </div>
</div>


      </div>
    );
  };
  
  export default Testimonials;