import React from 'react';
import Wrapper from './styles';

type ButtonsAndVolumeBoxType ={
  children: React.ReactNode
}

const ButtonsAndVolumeBox = ({ children }: ButtonsAndVolumeBoxType) => <Wrapper>{children}</Wrapper>;

export default ButtonsAndVolumeBox;
