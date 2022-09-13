import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loader from '../Loader';
import Arrow from '../svg/Arrow';
import {
  ArrowButton, Slider, Slide
} from './styles';

type ImageSliderType = {
  timeOfDay: string | undefined;
}

const ImageSlider = ({ timeOfDay }: ImageSliderType) => {
  const [imgArray, setimgArray] = useState<any>();

  const imgAPI = async () => {
    let arrayOfImages = [];
    try {
      const data = await axios.get(`https://api.unsplash.com/search/photos?page=1&per_page=10&query=${timeOfDay}&orientation=landscape&client_id=3eKMU9-jHoMz-hErq6gHhkhITGFRkq5tE2gYgXSnctA`);
      arrayOfImages = data.data.results;
      console.log(arrayOfImages);
    } catch (error) {
      console.log(error);
    }

    try {
      setimgArray(arrayOfImages);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    imgAPI();
  }, [timeOfDay]);

  // slides number
  const [currentIndex, setcurrentIndex] = useState(0);

  const goToPrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? imgArray.length - 1 : currentIndex - 1;
    setcurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === imgArray.length - 1;
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
      {imgArray
        ? <Slide style={{ backgroundImage: `url(${imgArray[currentIndex].urls.full})` }} />
        : <Loader />}
    </Slider>
  );
};

export default ImageSlider;
