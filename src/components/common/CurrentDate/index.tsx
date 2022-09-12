import React from 'react';
import DateTitle from './styles';

type ClockType = {
  date: string;
}

const CurrentDate = ({ date }: ClockType) => {
  const currentDateLocale = new Date(date).toLocaleDateString('en-En', { month: 'long', day: 'numeric' });
  const day = new Date(date).toLocaleDateString('en-En', { weekday: 'long' });
  return (
    <DateTitle>
      <span>{`${day}, ${currentDateLocale}.`}</span>
    </DateTitle>
  );
};

export default CurrentDate;
