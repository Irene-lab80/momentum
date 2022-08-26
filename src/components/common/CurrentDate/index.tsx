import React from 'react';
import DateTitle from './styles';

type ClockType = {
  date: Date;
}

const CurrentDate = ({ date }: ClockType) => {
  const options: {
    month: 'long' | 'numeric' | '2-digit' | 'short' | 'narrow' | undefined;
    day: 'numeric' | '2-digit' | undefined;
  } = { month: 'long', day: 'numeric' };

  const currentDateLocale = date.toLocaleDateString('ru-RU', options);

  return <DateTitle>{currentDateLocale}</DateTitle>;
};

export default CurrentDate;
