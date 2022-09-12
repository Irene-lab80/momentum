import React from 'react';

import Time from './styles';

type ClockType = {
  date: string;
}

const Clock = ({ date }: ClockType) => {
  const time = new Date(date).toLocaleTimeString('ru-RU');
  return <Time>{time}</Time>;
};

export default Clock;
