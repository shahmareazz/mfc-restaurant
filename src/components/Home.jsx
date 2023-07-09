import React, { useState } from 'react';
import './Home.css'

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClickPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleClickNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel">
      <button className="carousel-button" onClick={handleClickPrev}>
        Prev
      </button>
      <img className='image' src={images[currentIndex]} alt={`Image ${currentIndex}`} />
      <button className="carousel-button" onClick={handleClickNext}>
        Next
      </button>
    </div>
  );
};

const Home = () => {
  // Array of image URLs for the carousel
  const carouselImages = [
    'https://pbs.twimg.com/media/EjPDeg9XsAAgi73.jpg:large',
    'https://assets.traveltriangle.com/blog/wp-content/uploads/2017/10/kerala-food.jpg',
    'https://www.keralatourism.org/images/enchanting_kerala/large/kerala_sadya20200507070557_1002_1.jpg',
  ];

  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      <Carousel images={carouselImages} />
    </div>
  );
};

export default Home;
