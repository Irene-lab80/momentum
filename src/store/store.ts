import { configureStore } from '@reduxjs/toolkit';
import timeReducer from '../store/timeSlice';

export default configureStore({
  reducer: {
    time: timeReducer,
  }
});
