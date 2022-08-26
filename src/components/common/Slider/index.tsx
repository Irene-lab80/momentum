import React, { useState } from 'react';
import Arrow from '../svg/Arrow';
import {
  ArrowButton, Slider, Slide
} from './styles';

type ImageSliderType = {
  slides: { url: string; title: string; }[];
}

const ImageSlider = ({ slides }: ImageSliderType) => {
  const [currentIndex, setcurrentIndex] = useState(0);

  const goToPrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setcurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setcurrentIndex(newIndex);
  };

  return (
    <Slider>
      <ArrowButton left type="button" onClick={goToPrev}>
        <Arrow />
      </ArrowButton>
      <ArrowButton right type="button" onClick={goToNext}>
        <Arrow />
      </ArrowButton>
      <Slide style={{ backgroundImage: `url(${slides[currentIndex].url})` }} />
    </Slider>
  );
};

export default ImageSlider;
