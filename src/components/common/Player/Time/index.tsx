import React from 'react';
import TimeValue from './styles';

type TimeValueType = {
  time: string
}

const Time = ({ time }: TimeValueType) => <TimeValue>{time}</TimeValue>;

export default Time;
