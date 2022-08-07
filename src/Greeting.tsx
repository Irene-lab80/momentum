import React, { useEffect, useState } from 'react'

const Greeting = () => {
  //date
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

  const greetingText = `Good ${timeOfDay},`;

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    }
  }, [])

  useEffect(() => {
    const timeOfDayId = setInterval(showGreeting, 1000);
    return function cleanup() {
      clearInterval(timeOfDayId);
    }
  }, [])

  const [name, setName] = useState(() => {
    const saved = localStorage.getItem("name") as string;
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name));
  }, [name]);

  return (
    <div className='greeting-container'>
      <span className='greeting'>{greetingText}</span>
      <input className='name' type="text" placeholder='[Enter name]' value={name} onChange={(e) => setName(e.target.value)}/>
    </div>
  )
}

export default Greeting;
