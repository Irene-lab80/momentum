import React from 'react'

type ClockType = {
  date: Date;
}

const Clock = ({date}: ClockType) => {
  const time = date.toLocaleTimeString('ru-RU');
  return <time className='time'>{time}</time>
}

export default Clock
