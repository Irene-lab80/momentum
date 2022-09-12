import React from 'react';
import { useSelector } from 'react-redux';
import { selectTimeOfDay } from '../../../store/timeSlice';
import ImageSlider from '../Slider';
import Container from './styles';

const SliderContainer = () => {
  const timeOfDay = useSelector(selectTimeOfDay);
  return (
    <Container>
      <ImageSlider timeOfDay={timeOfDay} />
    </Container>
  );
};

export default SliderContainer;
