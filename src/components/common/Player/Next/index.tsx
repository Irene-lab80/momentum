import React from 'react';
import NextSVG from '../../svg/NextSVG';
import NextButton from './styles';

type NextType = {
  onClick: any;
}

const Next = ({ onClick }: NextType) => (
  <NextButton onClick={onClick}>
    <NextSVG />
  </NextButton>
);

export default Next;
