import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectTime, selectTimeOfDay, timeChange
} from '../../../store/timeSlice';
import tracks from '../../helpers/tracklist';
import MainPage from '../../Pages/MainPage';

const MainPageContainer = () => {
  const time = useSelector(selectTime);
  const timeOfDay = useSelector(selectTimeOfDay);
  const dispatch = useDispatch();

  useEffect(() => {
    const timerId = setInterval(() => {
      dispatch(timeChange(new Date()));
    }, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, [dispatch]);

  return (
    <MainPage time={time} timeOfDay={timeOfDay} tracks={tracks} />
  );
};
export default MainPageContainer;
