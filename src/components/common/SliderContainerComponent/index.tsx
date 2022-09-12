import React from 'react';
import { useSelector } from 'react-redux';
import { selectTimeOfDay } from '../../../store/timeSlice';
import ImageSlider from '../Slider';
import SliderContainer from './styles';

const SliderContainerComponent = () => {
  const timeOfDay = useSelector(selectTimeOfDay);
  return (
    <SliderContainer>
      <ImageSlider timeOfDay={timeOfDay} />
    </SliderContainer>
  );
};

export default SliderContainerComponent;
