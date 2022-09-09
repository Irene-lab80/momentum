import React from 'react';
import Wrapper from './styles';

type TitleAndTimeContainerType ={
  children: React.ReactNode
}

const TitleAndTimeContainer = ({ children }: TitleAndTimeContainerType) => <Wrapper>{children}</Wrapper>;

export default TitleAndTimeContainer;
