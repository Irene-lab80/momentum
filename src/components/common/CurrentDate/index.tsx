import React from 'react';
import DateTitle from './styles';

type ClockType = {
  date: Date;
}

const CurrentDate = ({ date }: ClockType) => {
  const currentDateLocale = date.toLocaleDateString('en-En', { month: 'long', day: 'numeric' });
  const day = date.toLocaleDateString('en-En', { weekday: 'long' });
  return (
    <DateTitle>
      <span>{`${day}, ${currentDateLocale}.`}</span>
    </DateTitle>
  );
};

export default CurrentDate;
