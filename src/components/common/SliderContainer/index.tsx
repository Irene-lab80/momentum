import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTime, selectTimeOfDay, timeOfDayChange } from '../../../store/timeSlice';
import ImageSlider from '../Slider';
import Container from './styles';

const SliderContainer = () => {
  const dispatch = useDispatch();
  const time = useSelector(selectTime);
  const timeOfDay = useSelector(selectTimeOfDay);

  // time of day
  const getTimeOfDay = (hrs: number): 'night' | 'morning' | 'afternoon' | 'evening' | undefined | 'error' => {
    if (hrs < 6) return 'night';
    if (hrs >= 6 && hrs < 12) return 'morning';
    if (hrs >= 12 && hrs < 17) return 'afternoon';
    if (hrs >= 17 && hrs <= 23) return 'evening';
    return 'error';
  };

  useEffect(() => {
    const timerId = setInterval(() => {
      dispatch(timeOfDayChange(getTimeOfDay(new Date(time).getHours())));
    }, 1000);
    console.log(time);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, [dispatch]);

  return (
    <Container>
      <ImageSlider timeOfDay={timeOfDay} />
    </Container>
  );
};

export default SliderContainer;
