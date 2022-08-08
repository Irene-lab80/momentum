import React, { useEffect, useState } from 'react'

type ClockType = {
  date: Date;
}

const Greeting = ({date}: ClockType) => {
  //date
  const showGreeting = () => {
    setTimeOfDay(timeOfDay);
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
