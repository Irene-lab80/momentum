import React, { useEffect, useState } from 'react';
import ImageSlider from '../Slider';
import SliderContainer from './styles';

const SliderContainerComponent = () => {
  // DATE
  const [date, setDate] = useState(new Date());
  function refreshClock() {
    setDate(new Date());
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  // time of day
  const getTimeOfDay = (hrs: number): 'night' | 'morning' | 'afternoon' | 'evening' | undefined | 'error' => {
    if (hrs < 6) return 'night';
    if (hrs >= 6 && hrs < 12) return 'morning';
    if (hrs >= 12 && hrs < 17) return 'afternoon';
    if (hrs >= 17 && hrs <= 23) return 'evening';
    return 'error';
  };

  const [timeOfDay, setTimeOfDay] = useState(getTimeOfDay(date.getHours()));

  function refreshTimeOfDay() {
    setTimeOfDay(getTimeOfDay(date.getHours()));
  }

  useEffect(() => {
    const timerId = setInterval(refreshTimeOfDay, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, [date]);

  return (
    <SliderContainer>
      <ImageSlider timeOfDay={timeOfDay} />
    </SliderContainer>
  );
};

export default SliderContainerComponent;
