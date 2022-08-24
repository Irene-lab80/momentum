import React from 'react';

type ClockType = {
  date: Date;
}

const CurrentDate = ({ date }: ClockType) => {
  const options: {
    month: 'long' | 'numeric' | '2-digit' | 'short' | 'narrow' | undefined;
    day: 'numeric' | '2-digit' | undefined;
  } = { month: 'long', day: 'numeric' };

  const currentDate = date.toLocaleDateString('ru-RU', options);

  return <h2 className="date">{currentDate}</h2>;
};

export default CurrentDate;
