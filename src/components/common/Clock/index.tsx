import React from 'react';

import Time from './styles';

type ClockType = {
  date: Date;
}

const Clock = ({ date }: ClockType) => {
  const time = date.toLocaleTimeString('ru-RU');
  return <Time>{time}</Time>;
};

export default Clock;
