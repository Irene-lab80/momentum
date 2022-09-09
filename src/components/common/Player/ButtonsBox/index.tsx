import React from 'react';
import Wrapper from './styles';

type ButtonsBoxType ={
  children: React.ReactNode
}

const ButtonsBox = ({ children }: ButtonsBoxType) => <Wrapper>{children}</Wrapper>;

export default ButtonsBox;
