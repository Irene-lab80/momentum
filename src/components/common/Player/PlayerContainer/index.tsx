import React from 'react';
import Container from './styles';

type PlayerContainerType ={
  children: React.ReactNode
}

const PlayerContainer = ({ children }: PlayerContainerType) => <Container>{children}</Container>;

export default PlayerContainer;
