import React, { useEffect, useState } from 'react'

const Greeting = () => {
  const [date, setDate] = useState(new Date());

  const showGreeting = () => {
    setTimeOfDay(timeOfDay);
  }

  function refreshClock() {
    setDate(new Date());
  }

  const hours = date.getHours();

  // time of day
  const getTimeOfDay = (hrs: number) => {
    if (hrs < 12)  return 'morning';
    else if (hrs >= 12 && hrs <= 17)  return 'afternoon';
    else if (hrs >= 17 && hrs <= 24)  return 'evening';
  }

  const [timeOfDay, setTimeOfDay] = useState(getTimeOfDay(hours));

  const greetingText = `Good ${timeOfDay}!`;

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    const timeOfDayId = setInterval(showGreeting, 1000);

    return function cleanup() {
      clearInterval(timerId);
      clearInterval(timeOfDayId);
    }
  }, [])

  return <h2 className='greeting'>{greetingText}</h2>
}

export default Greeting;
