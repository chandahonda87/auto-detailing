import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './carousel.css'

import ExterA from '../Images/ExterA.jpeg';
import ExterB from '../Images/ExterB.jpeg';
import ExterD from '../Images/ExterD.jpg';
import ExterE from '../Images/ExterE.jpg';


import BA from '../Images/BA.jpg'
import BB from '../Images/BB.jpg';


function SimpleCarousel({ imageSet }) {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true, // Enable autoplay
      autoplaySpeed: 4000, // Adjust the speed (in milliseconds) as needed
      arrows: false
  
    };
  
    // Define different sets of images
    const imageSets = {
      set1: [
        { src: ExterA, alt: 'Image 1' },
        { src: ExterB, alt: 'Image 2' },
        { src: ExterD, alt: 'Truck 1' },
        { src: ExterE, alt: 'Truck 2' }
      ],
      set2: [
        { src: BA, alt: 'Image 3' },
        { src: BB, alt: 'Image 4' }
      ]
    };
  
    // Get the selected image set
    const images = imageSets[imageSet] || [];
  
    return (
      <div className="carousel-container flex flex-col space-x-4">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="slick-slide">
              <img src={image.src} alt={image.alt} className="carousel-image" />
            </div>
          ))}
        </Slider>
      </div>
    );
  }

export default SimpleCarousel;