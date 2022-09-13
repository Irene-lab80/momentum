import { createSlice } from '@reduxjs/toolkit';

export const timeSlice = createSlice({
  name: 'time',
  initialState: {
    time: new Date(),
    // timeOfDay: 'morning',
  },
  reducers: {
    timeChange: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.time = action.payload;
    },
    timeOfDayChange: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.timeOfDay = action.payload;
    }
  }
});

export const { timeChange, timeOfDayChange } = timeSlice.actions;

export const selectTime = (state) => state.time.time;
export const selectTimeOfDay = (state) => state.time.timeOfDay;

export default timeSlice.reducer;
