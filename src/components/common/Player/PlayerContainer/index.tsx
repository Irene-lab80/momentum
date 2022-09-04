import React from 'react';

type PlayerContainerType ={
  children: React.ReactNode
}

const PlayerContainer = ({ children }: PlayerContainerType) => <div>{children}</div>;

export default PlayerContainer;
