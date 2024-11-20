import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './service.scss';
import useIsMobile from './useIsMobile';

import bearWolf from '../../Images/BearWolf.png'


const textVariants = {
  initial: {
    x: -900,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 5,
    }
  }
};


const listvariants = {
  initial: {
    y: 300, // Start from below the view (you can adjust the number based on your needs)
    opacity: 0,
  },
  animate: {
    y: 50, // Animate to the normal position
    opacity: 1,
    transition: {
      duration: 2, // Adjust the duration for a slower or faster effect
    }
  }
};

const mobileListVariants = {
  initial: {
    x: -100,
    y: 0,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duartion: 1,
      staggerChildren: 0.1,
    },
  },
};


function Service() {
  const ref = useRef();
  const isInView = useInView(ref, {margin: '100px'});
  const isMobile = useIsMobile();

  return (
    <div className='service'>
      <motion.div className='textContainer' variants={textVariants} initial='initial' animate='animate'>
        <h2 className='autoHr'>Expert Auto Detailing Service</h2>
        <hr/>
      </motion.div>
        <div>
          <div className='title'>
            <img src={bearWolf} alt='Bear & Wolf'/>
            <h1>BearWolf Auto Detailing</h1>
          </div>
        </div>

        <motion.div 
        className='listContainer' 
        variants={isMobile ? mobileListVariants : listvariants} 
        initial='initial'
        ref={ref} 
        animate={isInView ? 'animate' : 'initial'}
        >
          <motion.div className='box' 
          whileHover={!isMobile ? { background: 'lightgray', color: 'black' } : {}}
          onTap={isMobile ? { background: 'lightgray', color: 'black' } : {}}
          >
            <h2>Exterior</h2>
            <p>Price: $100</p>
            <p>Expert polishing, top-notch paint protection <br></br>Thorough hand wash</p>
          </motion.div>
          <motion.div className='box' whileHover={{background: 'lightgray', color: 'black'}}>
            <h2>Interior</h2>
            <p>Price: $100</p>
            <p>Complete vacuuming, seat cleaning <br></br>Polished dashboard<br></br>Spotless interior</p>
          </motion.div>
          <motion.div className='box' whileHover={{background: 'lightgray', color: 'black'}}>
            <h2>Headlights $50</h2>
            <h2>Wheels and Tires</h2>
            <p>Included</p>
            <h2>Full Service</h2>
            <p>$10 Discount</p>
          </motion.div>
        </motion.div>
    </div>
  );
}

export default Service;