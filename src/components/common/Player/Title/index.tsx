import React from 'react';
import TitleText from './styles';

type TitleType = {
  title: string
}

const Title = ({ title }: TitleType) => <TitleText>{title}</TitleText>;

export default Title;
