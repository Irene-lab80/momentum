import React, { useEffect, useState } from 'react';
import { Container, PartOfDay, UserName } from './styles';

type ClockType = {
  date: Date;
}

const Greeting = ({ date }: ClockType) => {
  const hours = date.getHours();

  // time of day
  // eslint-disable-next-line consistent-return
  const getTimeOfDay = (hrs: number) => {
    if (hrs < 12) return 'morning';
    if (hrs >= 12 && hrs <= 17) return 'afternoon';
    if (hrs >= 17 && hrs <= 24) return 'evening';
  };
  const [timeOfDay, setTimeOfDay] = useState(getTimeOfDay(hours));

  // greeting
  const showGreeting = () => {
    setTimeOfDay(timeOfDay);
  };
  const greetingText = `Good ${timeOfDay},`;

  useEffect(() => {
    const timeOfDayId = setInterval(showGreeting, 1000);
    return function cleanup() {
      clearInterval(timeOfDayId);
    };
  }, []);

  // name
  const [name, setName] = useState(() => {
    const saved = localStorage.getItem('name') as string;
    const initialValue = JSON.parse(saved);
    return initialValue || '';
  }); useEffect(() => {
    localStorage.setItem('name', JSON.stringify(name));
  }, [name]);

  return (
    <Container>
      <PartOfDay>{greetingText}</PartOfDay>
      <UserName className="name" type="text" placeholder="[Enter name]" value={name} onChange={(e) => setName(e.target.value)} />
    </Container>
  );
};

export default Greeting;
