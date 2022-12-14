import React, { useEffect, useState } from 'react';
import { Container, PartOfDay, UserName } from './styles';

type ClockType = {
  timeOfDay: string | undefined;
}

const Greeting = ({ timeOfDay }: ClockType) => {
  // name
  const [name, setName] = useState(() => {
    const saved = localStorage.getItem('name') as string;
    const initialValue = JSON.parse(saved);
    return initialValue || '';
  });

  useEffect(() => {
    localStorage.setItem('name', JSON.stringify(name));
  }, [name]);

  return (
    <Container>
      {timeOfDay
        ? (
          <>
            <PartOfDay>
              {`Good ${timeOfDay}, `}
            </PartOfDay>
            <UserName type="text" placeholder="[Enter name]" value={name} onChange={(e) => setName(e.target.value)} />
          </>
        )
        : null}
    </Container>
  );
};

export default Greeting;
