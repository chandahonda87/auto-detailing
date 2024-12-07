import React from 'react';
import SimpleCarousel from '../SimpleCarousel';
import { motion } from 'framer-motion';
import Service from '../Service/Service';
import './home.scss';


const sliderVariants = {
  initial: {
    x: '-100%',
  },
  animate: {
    x: '100%',
    transition: {
      repeat: Infinity,
      repeatType: 'loop',
      duration: 25,
      ease: 'linear',
    },
  },
};

function Home() {
  return (
    <div className="home-container">
    <div className="flex flex-col items-center sm:flex-row sm:items-start sm:space-x-4 ml-4 mt-4">
      {/* Contact Info */}
      <a href="mailto:HernanJ86@yahoo.com?subject=Inquiry&body=Hello%20Hernan,%20I%20have%20a%20question%20about...">
        <h1 className="cus-h1 text-center sm:text-left">Contact: HernanJ86@yahoo.com</h1>
      </a>

      {/* Instagram Link */}
      <i className="fab fa-instagram text-xl flex items-center mt-2 sm:mt-0" aria-hidden="true">
        <a
          href="https://www.instagram.com/bearwolf_auto_detailing/profilecard/?igsh=NTc4MTIwNjQ2YQ%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline ml-2 roboto-bold"
        >
          Instagram: BearWolf Detailing
        </a>
      </i>
    </div>

    {/* Slider Background Animation */}
    <div className="textContain">
      <motion.div
        className="slider-background"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
      <span className='slider-text'>
        <p>MOBILE SERVICE</p>
        <p>HAND WASH</p>
      </span>
      </motion.div>

      {/* Detailing Pricing Section */}
      <div className="mx-auto w-full max-w-7xl">
        <div className="text-center mb-4">
          <h2 className="text-2xl">Auto Detailing</h2>
          <p className='price'>Exterior Service: $100</p>
          <p className='price'>Full Service: $200</p>
        </div>

        {/* Carousel Component */}
        <div className="flex justify-center mb-4 carousel">
          <SimpleCarousel imageSet="set1" />
        </div>
      </div>
    </div>

    {/* Bubble Animation Container */}
    <div className="bubble-container">
        <div className="bubble" style={{ left: '20%', animationDelay: '0s' }}></div>
        <div className="bubble bubble-purp" style={{ left: '40%', animationDelay: '1s' }}></div>
        <div className="bubble" style={{ left: '60%', animationDelay: '2s' }}></div>
        <div className="bubble bubble-green" style={{ left: '80%', animationDelay: '3s' }}></div>
    </div>

    {/* Service Section */}
    <div>
      <Service />
    </div>
  </div>
);
}

export default Home