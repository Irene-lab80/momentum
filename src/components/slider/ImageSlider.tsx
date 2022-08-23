import React, { useState } from 'react';
import Arrow from './Arrow';

type ImageSliderType = {
  slides: any
}

const ImageSlider = ({ slides }: ImageSliderType) => {
  const [currentIndex, setcurrentIndex] = useState(0);

  const slideStyles = {
    width: '100%',
    height: '100%',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundColor: '#bbbbbb',
    backgroundImage: `url(${slides[currentIndex].url})`,
    backgroundBlendMode: 'multiply',
    transition: 'all .2s ease-in-out'
  };

  const sliderStyles = {
    height: '100%',
    position: 'relative'
  } as React.CSSProperties;

  const leftArrowStyle = {
    position: 'absolute',
    top: '50%',
    tranform: 'translate(0, -50%)',
    left: '32px',
    zIindex: 10,
    cursor: 'pointer',
    opacity: 0.8,
    padding: '10px'
  } as React.CSSProperties;

  const rightArrowStyle = {
    position: 'absolute',
    top: '50%',
    tranform: 'translate(0, -50%)',
    right: '32px',
    zIindex: 10,
    cursor: 'pointer',
    opacity: 0.8,
    padding: '10px',
    transform: 'rotate(180deg)'
  } as React.CSSProperties;

  const goToPrev = () => {
    console.log('prev');
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setcurrentIndex(newIndex);
  };

  const goToNext = () => {
    console.log('next');
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setcurrentIndex(newIndex);
  };

  return (
    <div style={sliderStyles}>
      <button type="button" style={leftArrowStyle} onClick={goToPrev}>
        <Arrow />
      </button>
      <button type="button" style={rightArrowStyle} onClick={goToNext}>
        <Arrow />
      </button>
      <div style={slideStyles} />
    </div>
  );
};

export default ImageSlider;
